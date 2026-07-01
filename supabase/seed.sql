-- ========================================================
-- Auswide cleaning - Database Seed Script
-- Run this in your Supabase SQL Editor
-- ========================================================

-- ⚠️  ADMIN USER SETUP (DO THIS VIA DASHBOARD, NOT SQL)
-- ---------------------------------------------------------------
-- Newer Supabase versions do not allow direct inserts into auth tables.
-- Please create the admin user manually via the Supabase Dashboard:
--
--   1. Open your Supabase project
--   2. Go to: Authentication → Users (left sidebar)
--   3. Click "Add User" → "Create New User"
--   4. Enter these credentials:
--        Email:    admin@sparkleclean.com.au
--        Password: Password123!
--   5. Click "Create User"
--
-- Your admin account will be ready immediately.
-- ---------------------------------------------------------------


-- ---------------------------------------------------------------
-- DUMMY ENQUIRIES DATA
-- Run this entire block to populate realistic sample data.
-- ---------------------------------------------------------------

INSERT INTO contact_enquiries (name, company_name, email, phone, address, message, status, created_at)
VALUES
  (
    'John Doe',
    NULL,
    'john.doe@gmail.com',
    '0412 345 678',
    '456 Swanston Street, Melbourne VIC 3000',
    'Hi, I would like to get a quote for a deep clean of my 3-bedroom, 2-bathroom apartment next Tuesday morning. Thanks!',
    'pending',
    now()
  ),
  (
    'Sarah Jenkins',
    'Apex Law Group',
    'sjenkins@apexlaw.com.au',
    '03 9876 5432',
    'Level 12, 500 Collins Street, Melbourne VIC 3000',
    'Hello, we need a daily cleaning service for our office space. Approximately 20 workstations, 2 meeting rooms, and a kitchen. Please provide standard rates and availability.',
    'accepted',
    now() - interval '1 hour'
  ),
  (
    'David Miller',
    NULL,
    'david.miller@outlook.com',
    '0498 765 432',
    '12 High Street, Prahran VIC 3181',
    'Looking for a carpet steam cleaning quote for 3 bedrooms and a hallway. We are moving out and need it done to get our bond back.',
    'pending',
    now() - interval '4 hours'
  ),
  (
    'Emma Watson',
    'The Green Cafe',
    'manager@greencafe.com.au',
    '0422 111 222',
    '88 Brunswick Street, Fitzroy VIC 3065',
    'Need deep kitchen grease clean and front of house cleaning twice a week on Mondays and Thursdays. Do you guys do restaurant/commercial kitchen cleans?',
    'accepted',
    now() - interval '1 day'
  ),
  (
    'Michael Chang',
    NULL,
    'mchang@yahoo.com',
    '0400 999 888',
    '3/55 Glenferrie Road, Hawthorn VIC 3122',
    'Hello, looking for a regular fortnightly home cleaning service on Fridays. Dusting, vacuuming, mopping, bathroom and kitchen wipes. Let me know your slots.',
    'completed',
    now() - interval '3 days'
  ),
  (
    'Rebecca Taylor',
    'Taylor & Sons Real Estate',
    'rtaylor@taylorsons.com.au',
    '03 8888 7777',
    '152 Chapel Street, South Yarra VIC 3141',
    'We have 3 rental properties finishing leases this week. Need full end of lease cleans with bond back guarantees. Can you call me to organize schedules?',
    'accepted',
    now() - interval '5 days'
  ),
  (
    'Robert Wilson',
    NULL,
    'rwilson@gmail.com',
    '0411 222 333',
    '78 Bay Street, Port Melbourne VIC 3207',
    'Hey, do you do window cleaning? I have a double-storey house and need all exterior and interior windows cleaned. Please call me to discuss.',
    'cancelled',
    now() - interval '10 days'
  ),
  (
    'Samantha Ross',
    'Ross Dental Clinic',
    'reception@rossdental.com.au',
    '03 9555 4444',
    '101 Toorak Road, South Yarra VIC 3141',
    'Looking for medical clinic cleaning services. We require daily sanitisation of waiting area, 3 treatment rooms, and staff kitchen. Must follow hygienic protocols.',
    'completed',
    now() - interval '18 days'
  ),
  (
    'Alex Turner',
    NULL,
    'aturner@gmail.com',
    '0433 444 555',
    '23 Lygon Street, Carlton VIC 3053',
    'Need end of lease clean for a small 1-bedroom studio. Simple clean needed as it is already quite tidy.',
    'completed',
    now() - interval '25 days'
  );
