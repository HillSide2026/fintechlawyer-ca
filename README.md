# fintechlawyer.ca

Practical Canadian fintech legal and regulatory information for founders, operators, and compliance teams.

## Stack

- [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com) (auth + portal data)
- Deployed on [Vercel](https://vercel.com)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About |
| `/blog` | Insights |
| `/contact` | Contact |
| `/login` | Client login |
| `/portal` | Authenticated client portal |

## Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and fill in your Supabase credentials.
