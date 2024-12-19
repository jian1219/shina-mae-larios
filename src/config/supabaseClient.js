import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
const supabaseUrl = 'https://lyvrondzvonxzlwntqop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dnJvbmR6dm9ueHpsd250cW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MDczNDEsImV4cCI6MjA1MDE4MzM0MX0.TWZ4uBJkGXYZUnYwqS5OsW07S5HPtMZxK_fUCq4PB3w';

export const supabase = createClient(supabaseUrl, supabaseKey);
