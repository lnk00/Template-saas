import React from "react";
import { DotBackground } from "@/components/ui/dot-background";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { VerifyOtp } from "./actions";
import { LockKeyholeOpen } from "lucide-react";

export default function Otp({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="h-screen w-full relative">
      <DotBackground />
      <Container className="h-full flex items-center justify-center">
        <Card className="p-4 md:p-8">
          <LockKeyholeOpen
            className="h-16 w-16 mb-4 text-slate-800"
            strokeWidth={2}
          />
          <h2 className="font-bold text-xl">One Time Password</h2>
          <p className="text-slate-600 text-sm max-w-sm mt-1 dark:text-slate-300 mb-4">
            You received an email with your temporary code
          </p>

          <form action={VerifyOtp}>
            <input
              type="email"
              id="email"
              name="email"
              hidden
              readOnly
              value={searchParams?.email}
            />
            <InputOTP name="otp" id="otp" maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </Card>
      </Container>
    </main>
  );
}
