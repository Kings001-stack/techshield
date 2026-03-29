-- Fix overly permissive RLS policies and optimize auth function calls

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Allow public insert for bookings" ON public.bookings;
DROP POLICY IF EXISTS "Allow public insert for contacts" ON public.contacts;
DROP POLICY IF EXISTS "Only admin can view contacts" ON public.contacts;
DROP POLICY IF EXISTS "Only admin can view bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admin can update bookings" ON public.bookings;
-- Create secure and optimized RLS policies for contacts
-- Only authenticated users can insert contacts
CREATE POLICY "Allow authenticated insert for contacts" ON public.contacts
  FOR INSERT TO authenticated
  WITH CHECK (true);
-- Only admin users can view contacts (optimized with SELECT subquery)
CREATE POLICY "Only admin can view contacts" ON public.contacts
  FOR SELECT TO authenticated
  USING ((SELECT auth.jwt() ->> 'role') = 'admin');
-- Create secure and optimized RLS policies for bookings
-- Only authenticated users can insert bookings
CREATE POLICY "Allow authenticated insert for bookings" ON public.bookings
  FOR INSERT TO authenticated
  WITH CHECK (true);
-- Only admin users can view bookings (optimized with SELECT subquery)
CREATE POLICY "Only admin can view bookings" ON public.bookings
  FOR SELECT TO authenticated
  USING ((SELECT auth.jwt() ->> 'role') = 'admin');
-- Only admin users can update bookings (optimized with SELECT subquery)
CREATE POLICY "Only admin can update bookings" ON public.bookings
  FOR UPDATE TO authenticated
  USING ((SELECT auth.jwt() ->> 'role') = 'admin')
  WITH CHECK ((SELECT auth.jwt() ->> 'role') = 'admin');
