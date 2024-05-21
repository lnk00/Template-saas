"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function LoginWithGithub() {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    console.log("Error login with Github provider: ", error);
    return;
  }

  if (data.url) {
    console.log(data);
    redirect(data.url);
  }
}

export async function LoginWithOTP(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const email = formData.get("email") as string;

  const { data, error } = await supabase.auth.signInWithOtp({ email });

  if (error) {
    console.log("Error login with OTP: ", error);
    return;
  }

  if (data) {
    const queryParamString = new URLSearchParams(`email=${email}`).toString();
    return redirect(`/otp?${queryParamString}`);
  }
}
