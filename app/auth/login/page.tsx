import React from "react";
import LoginForm from "@/components/login-form";
import { Container } from "@/components/ui/container";

export default function Login() {
  return (
    <main className="h-screen w-full relative">
      <Container className="h-full flex items-center justify-center">
        <LoginForm />
      </Container>
    </main>
  );
}
