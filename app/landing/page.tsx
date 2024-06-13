import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import { WandSparkles } from "lucide-react";
import Link from "next/link";

export default async function Landing() {
  return (
    <main vaul-drawer-wrapper="" className="w-full relative">
      <Container className="pt-48 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="max-h-[60px]">
          <FlipWords
            words={[
              "consectetur adipiscing elit",
              "Mauris congue rivulus quam",
              "Quisque id scelerisque",
            ]}
          ></FlipWords>
        </div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight max-w-3xl text-center my-12 text-slate-600">
          Aliquam erat volutpat. Nullam at venenatis ex, at viverra erat. Aenean
          cursus turpis dolor, sit amet viverra augue bibendum nec. Mauris
          bibendum magna eget elit gravida, id facilisis nunc suscipit.
          Phasellus a semper dolor.
        </h3>
        <div className="mb-16">
          <Link href="/auth/login">
            <Button
              size={"lg"}
              className="bg-purple-500 hover:bg-purple-500/90"
            >
              Nam semper
              <WandSparkles className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
