import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email") || "admin@techshieldlegal.com";
  const password = "password123";

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
     return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ 
    message: `Admin user [${email}] created successfully via Supabase Auth API.`, 
    user: data.user.email,
    note: "Login with password: password123"
  });
}
