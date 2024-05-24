"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function VerifyOtp(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const token = formData.get("otp") as string;
  const email = formData.get("email") as string;

  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (data.session) {
    redirect("/");
  }
}
