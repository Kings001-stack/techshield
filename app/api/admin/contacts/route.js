import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const createSupabaseServerClient = async () => {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
};

export async function GET(req) {
  try {
    const supabase = await createSupabaseServerClient();

    // Authentication check
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("[AdminContactsAPI] Auth failure:", authError);
      return NextResponse.json(
        { error: "Unauthorized access — Admin only." },
        { status: 401 }
      );
    }

    // Fetch contacts
    const { searchParams } = new URL(req.url);
    const unreadOnly = searchParams.get("unread") === "true";

    let query = supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (unreadOnly) {
      query = query.eq("is_read", false);
    }

    const { data, error } = await query;

    if (error) {
      console.error("[AdminContactsAPI] Data fetch error:", error);
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
