-- Fintech Lawyer portal schema for Supabase.
-- Run this in the Supabase SQL editor before enabling the live portal.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'member' check (role in ('member', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portal_assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  selected_options jsonb not null default '[]'::jsonb,
  recommended_topics jsonb not null default '[]'::jsonb,
  progress_step integer not null default 1 check (progress_step between 1 and 3),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.saved_resources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  type text,
  framework text,
  stage text,
  href text,
  created_at timestamptz not null default now(),
  unique (user_id, title)
);

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  request_type text not null,
  timeline text,
  company text,
  framework text,
  summary text,
  documents text,
  status text not null default 'submitted' check (status in ('submitted', 'reviewing', 'responded', 'closed')),
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activity_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  action text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists portal_assessments_set_updated_at on public.portal_assessments;
create trigger portal_assessments_set_updated_at
before update on public.portal_assessments
for each row execute function public.set_updated_at();

drop trigger if exists consultation_requests_set_updated_at on public.consultation_requests;
create trigger consultation_requests_set_updated_at
before update on public.consultation_requests
for each row execute function public.set_updated_at();

create or replace function public.current_user_is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where user_id = auth.uid()
      and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.portal_assessments enable row level security;
alter table public.saved_resources enable row level security;
alter table public.consultation_requests enable row level security;
alter table public.activity_log enable row level security;

drop policy if exists "profiles select own or admin" on public.profiles;
create policy "profiles select own or admin"
on public.profiles for select
using (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "profiles insert own" on public.profiles;
create policy "profiles insert own"
on public.profiles for insert
with check (user_id = auth.uid());

drop policy if exists "profiles update own or admin" on public.profiles;
create policy "profiles update own or admin"
on public.profiles for update
using (user_id = auth.uid() or public.current_user_is_admin())
with check (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "assessments select own or admin" on public.portal_assessments;
create policy "assessments select own or admin"
on public.portal_assessments for select
using (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "assessments insert own" on public.portal_assessments;
create policy "assessments insert own"
on public.portal_assessments for insert
with check (user_id = auth.uid());

drop policy if exists "assessments update own" on public.portal_assessments;
create policy "assessments update own"
on public.portal_assessments for update
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "saved select own or admin" on public.saved_resources;
create policy "saved select own or admin"
on public.saved_resources for select
using (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "saved insert own" on public.saved_resources;
create policy "saved insert own"
on public.saved_resources for insert
with check (user_id = auth.uid());

drop policy if exists "saved delete own" on public.saved_resources;
create policy "saved delete own"
on public.saved_resources for delete
using (user_id = auth.uid());

drop policy if exists "requests select own or admin" on public.consultation_requests;
create policy "requests select own or admin"
on public.consultation_requests for select
using (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "requests insert own" on public.consultation_requests;
create policy "requests insert own"
on public.consultation_requests for insert
with check (user_id = auth.uid());

drop policy if exists "requests update admin" on public.consultation_requests;
create policy "requests update admin"
on public.consultation_requests for update
using (public.current_user_is_admin())
with check (public.current_user_is_admin());

drop policy if exists "activity select own or admin" on public.activity_log;
create policy "activity select own or admin"
on public.activity_log for select
using (user_id = auth.uid() or public.current_user_is_admin());

drop policy if exists "activity insert own" on public.activity_log;
create policy "activity insert own"
on public.activity_log for insert
with check (user_id = auth.uid());

-- After creating your first account, promote it manually:
-- update public.profiles set role = 'admin' where email = 'you@example.com';
