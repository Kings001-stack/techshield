const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'test@gmail.com',
    password: 'password123',
  });

  if (error) {
    console.error('Error creating user:', error.message);
  } else {
    console.log('User created successfully:', data.user.email);
    console.log('NOTE: You may need to confirm the email in the Supabase Dashboard if email confirmation is enabled.');
  }
}

createUser();
