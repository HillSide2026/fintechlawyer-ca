const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const notifyTo = Deno.env.get('PORTAL_NOTIFY_TO');
  const notifyFrom = Deno.env.get('PORTAL_NOTIFY_FROM') || 'portal@fintechlawyer.ca';

  if (!resendApiKey || !notifyTo) {
    return new Response(JSON.stringify({ skipped: true, reason: 'Email environment variables are missing.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => ({}));
  const requestData = body.request || {};

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: notifyFrom,
      to: notifyTo,
      subject: 'New Fintech Lawyer portal request',
      text: [
        'A new portal request was submitted.',
        '',
        `Type: ${requestData.request_type || 'Not provided'}`,
        `Company: ${requestData.company || 'Not provided'}`,
        `Timeline: ${requestData.timeline || 'Not provided'}`,
        `Framework: ${requestData.framework || 'Not provided'}`,
        '',
        requestData.summary || 'No summary provided.',
      ].join('\n'),
    }),
  });

  const result = await emailResponse.json().catch(() => ({}));

  return new Response(JSON.stringify(result), {
    status: emailResponse.ok ? 200 : emailResponse.status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
