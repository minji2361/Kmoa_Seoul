-- K-MOA: 자체 신청 폼 전환 대비 스키마 (프로그램 신청 / 플랫폼 입점 신청)
--
-- ※ 현재는 외부 폼(구글폼·네이버폼)을 사용하므로 아직 적용하지 않는다.
-- ※ DB 변경은 사용자 승인 후, K-MOA 전용 Supabase 프로젝트에만 적용한다.
-- ※ 이 파일에는 스키마와 RLS 정책만 둔다. 실제 데이터·계정·키는 넣지 않는다.

create extension if not exists pgcrypto;

-- 공통: updated_at 자동 갱신
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ------------------------------------------------------------
-- 1. 프로그램 신청
-- ------------------------------------------------------------
create table public.program_applications (
  id            uuid primary key default gen_random_uuid(),
  program_id    text not null check (char_length(program_id) between 1 and 100),
  name          text not null check (char_length(btrim(name)) between 1 and 60),
  gender        text not null check (gender in ('여성', '남성', '기타', '응답하지 않음')),
  age           smallint not null check (age between 10 and 100),
  contact       text not null check (char_length(btrim(contact)) between 1 and 100),
  country       text not null check (char_length(btrim(country)) between 1 and 80),
  residence     text not null check (char_length(btrim(residence)) between 1 and 120),
  sources       text[] not null default '{}'
                check (sources <@ array['블로그', '인스타그램', '검색', '태그', '네이버', '기타']::text[]),
  message       text check (message is null or char_length(message) <= 1000),
  consent_privacy boolean not null check (consent_privacy),
  consent_rules   boolean not null check (consent_rules),
  status        text not null default 'received'
                check (status in ('received', 'confirmed', 'waitlisted', 'cancelled')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index program_applications_program_id_idx on public.program_applications (program_id);
create index program_applications_created_at_idx on public.program_applications (created_at desc);

create trigger program_applications_set_updated_at
  before update on public.program_applications
  for each row execute function public.set_updated_at();

alter table public.program_applications enable row level security;

-- 방문자(anon)는 접수(INSERT)만 가능하며, 처리 상태는 항상 'received' 로만 등록할 수 있다.
-- 조회/수정/삭제 정책은 두지 않는다 → 운영진은 서버(service_role) 또는 Dashboard 에서만 열람한다.
create policy "anyone can submit an application"
  on public.program_applications
  for insert
  to anon, authenticated
  with check (status = 'received');

-- ------------------------------------------------------------
-- 2. 플랫폼 입점(제휴) 신청
-- ------------------------------------------------------------
create table public.partner_proposals (
  id            uuid primary key default gen_random_uuid(),
  company       text not null check (char_length(btrim(company)) between 1 and 100),
  name          text not null check (char_length(btrim(name)) between 1 and 60),
  email         text not null check (char_length(email) between 3 and 120 and email like '%_@_%._%'),
  category      text not null check (category in ('공간', '문화 콘텐츠', '클래스', '기타')),
  message       text not null check (char_length(btrim(message)) between 1 and 3000),
  consent_privacy boolean not null check (consent_privacy),
  status        text not null default 'received'
                check (status in ('received', 'reviewing', 'accepted', 'declined')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index partner_proposals_created_at_idx on public.partner_proposals (created_at desc);

create trigger partner_proposals_set_updated_at
  before update on public.partner_proposals
  for each row execute function public.set_updated_at();

alter table public.partner_proposals enable row level security;

create policy "anyone can submit a partner proposal"
  on public.partner_proposals
  for insert
  to anon, authenticated
  with check (status = 'received');

-- ------------------------------------------------------------
-- 참고
-- - 스팸 방지(rate limit, CAPTCHA)는 Route Handler 에서 service_role 로 INSERT 하는 방식으로
--   전환할 때 함께 적용한다. (anon 직접 INSERT 를 막으려면 위 두 정책을 제거한다.)
-- - program_id 는 프로그램이 정적 데이터인 동안 text 로 둔다. programs 테이블 도입 시 FK 로 전환한다.
-- ------------------------------------------------------------
