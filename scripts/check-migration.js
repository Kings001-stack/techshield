const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function migrate() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  // Note: We normally need service_role for DDL, but if we don't have it,
  // we can only hope the column exists or the user adds it.
  // We will check if we can insert with 'country' field.
  
  console.log('Migration check for "country" column in "contacts" table...');
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Try to insert a dummy record with 'country' to see if it fails
  const { error } = await supabase
    .from('contacts')
    .insert([{ name: 'Check', email: 'check@test.com', message: 'check', country: 'Test' }]);

  if (error && error.code === '42703') { // undefined_column
    console.error('COLUMN MISSING: The "country" column does not exist in the "contacts" table.');
    console.log('Please run the following SQL in your Supabase SQL Editor:');
    console.log('ALTER TABLE contacts ADD COLUMN country TEXT;');
  } else if (error) {
    console.error('Unexpected error:', error);
  } else {
    console.log('SUCCESS: The "country" column is present and working.');
    // Clean up
    await supabase.from('contacts').delete().match({ name: 'Check', email: 'check@test.com' });
  }
}

migrate();
