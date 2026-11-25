/*
# Create registrations table (single-tenant, no auth)

1. New Tables
- `registrations`
- `id` (uuid, primary key)
- `full_name` (text, not null) — Họ tên phụ huynh hoặc học viên
- `phone` (text, not null) — Số điện thoại / Zalo liên lạc
- `program` (text, not null) — Chương trình quan tâm (Tiếng Anh / Toán / Khoa học)
- `level` (text, not null) — Trình độ hiện tại của học viên
- `status` (text, default 'pending') — Trạng thái xử lý đăng ký
- `created_at` (timestamptz, default now()) — Thời điểm đăng ký

2. Security
- Enable RLS on `registrations`.
- Grant INSERT to `anon` + `authenticated` so the public form can submit.
- Grant SELECT to `authenticated` (staff review) — anon cannot read submissions.
- No UPDATE/DELETE grants for anon: submissions are immutable once sent.
- INSERT policy allows anyone (public form) with a WITH CHECK (true) — the data is intentionally submitted by the public.
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  program text NOT NULL,
  level text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON registrations TO anon, authenticated;
GRANT SELECT ON registrations TO authenticated;

DROP POLICY IF EXISTS "anon_insert_registrations" ON registrations;
CREATE POLICY "anon_insert_registrations"
ON registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);
