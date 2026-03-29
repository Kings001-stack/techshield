'use server'

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

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

export async function markAsRead(id) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { error } = await supabase
      .from("contacts")
      .update({ is_read: true })
      .eq("id", id);

    if (error) throw error;
    revalidatePath("/admin/contacts");
    return { success: true };
  } catch (err) {
    console.error("Action failure (markAsRead):", err);
    return { error: err.message };
  }
}

export async function deleteContact(id) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) throw error;
    revalidatePath("/admin/contacts");
    return { success: true };
  } catch (err) {
    console.error("Action failure (deleteContact):", err);
    return { error: err.message };
  }
}
