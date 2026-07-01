# SparkleClean Pro - Cleaning Company Website

A production-ready full stack cleaning company website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Shadcn/UI**, **Framer Motion**, and **Supabase**.

## Tech Stack
- **Framework**: Next.js 15 (App Router, Server Actions)
- **Database / Auth**: Supabase
- **Styling**: Tailwind CSS + Shadcn/UI
- **Validation**: Zod + React Hook Form
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Vercel

---

## ⚡ Quick Start

### 1. Clone the project
Navigate into the project folder:
```bash
cd sparkle-clean-pro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Supabase Database
Create a Supabase project at [supabase.com](https://supabase.com). In your SQL Editor, run the schema file located in [schema.sql](file:///d:/myProjects/cleanerProject/sparkle-clean-pro/supabase/schema.sql):

```sql
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

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow public submissions
CREATE POLICY "Allow anon insert" ON contact_enquiries
  FOR INSERT TO anon WITH CHECK (true);

-- Allow admins to read and delete
CREATE POLICY "Allow auth read" ON contact_enquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow auth delete" ON contact_enquiries
  FOR DELETE TO authenticated USING (true);
```

### 4. Create an Admin User in Supabase
Go to **Authentication > Users** in the Supabase Dashboard, click **Add User**, select **Create User**, and enter the email and password you want to use to log into the Admin Dashboard.

### 5. Setup Environment Variables
Create a file named `.env.local` in the root of the project and populate it with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 6. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website, and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the secure admin panel.

---

## 🚀 Deployment Instructions for Vercel

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Link your project, keep defaults, and add the required environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your production Vercel URL, e.g. `https://mycompany.vercel.app`)

### Option 2: Import via Vercel Dashboard
1. Push your project to a remote Git repository (GitHub / GitLab / Bitbucket).
2. Log in to Vercel and click **Add New > Project**.
3. Select your repository.
4. Expand **Environment Variables** and enter the 4 keys from your `.env.local`.
5. Click **Deploy**.

---

## 📁 Key Directories & Architecture
- `app/` — App Router pages (Home, About, Services, Gallery, FAQ, Contact, Dashboard)
- `components/` — Reusable layouts (Navbar, Footer) and page sections (Hero, WhyChooseUs, ServicesGrid, etc.)
- `actions/` — Server Actions for contact submissions, deletes, statistics
- `lib/` — Constants, database clients, validations schemas
- `types/` — TypeScript interfaces
