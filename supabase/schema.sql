-- ============================================
-- SparkleClean Pro - Supabase Schema
-- ============================================

-- Contact Enquiries Table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to INSERT (contact form submissions)
CREATE POLICY "Allow anon insert" ON contact_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to SELECT (admin dashboard)
CREATE POLICY "Allow auth read" ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to DELETE (admin dashboard)
CREATE POLICY "Allow auth delete" ON contact_enquiries
  FOR DELETE
  TO authenticated
  USING (true);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON contact_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email ON contact_enquiries(email);

-- ============================================
-- Admin User Setup (run after creating your 
-- Supabase auth user via the dashboard)
-- ============================================
-- Note: Create admin user via Supabase Dashboard > Authentication > Users
-- Then use that user's email/password to log into /dashboard/login
