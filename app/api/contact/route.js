import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, country, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.rpc("insert_contact", {
      p_name: name,
      p_email: email,
      p_phone: phone,
      p_country: country,
      p_message: message,
    });

    if (error) throw error;

    return NextResponse.json(
      { message: "Contact inquiry submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit contact inquiry." },
      { status: 500 }
    );
  }
}
