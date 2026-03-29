import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, country, service_type, preferred_date, preferred_time } =
      await req.json();

    // Input validation
    if (
      !name ||
      !email ||
      !service_type ||
      !preferred_date ||
      !preferred_time
    ) {
      return NextResponse.json(
        { error: "Name, email, service type, date, and time are required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.rpc("insert_booking", {
      p_name: name,
      p_email: email,
      p_phone: phone,
      p_country: country,
      p_service_type: service_type,
      p_preferred_date: preferred_date,
      p_preferred_time: preferred_time,
    });

    if (error) throw error;

    return NextResponse.json(
      { message: "Consultation booking request submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit booking request." },
      { status: 500 }
    );
  }
}
