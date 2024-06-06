import { BentoFeatures } from "@/components/bento-features";
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
          Optimize your linkedIn profile to
        </h1>
        <div className="max-h-[60px]">
          <FlipWords
            words={[
              "engage your audience",
              "find your dream job",
              "sell your product",
            ]}
          ></FlipWords>
        </div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight max-w-3xl text-center my-12 text-slate-600">
          Unlock the full potential of LinkedIn. Whether you&apos;re aiming to
          captivate an audience, secure your dream job, or turbocharge your
          product sales, our solution, reshapes your LinkedIn profile into the
          powerhouse it deserves to be.
        </h3>
        <div className="mb-16">
          <Link href="/auth/login">
            <Button
              size={"lg"}
              className="bg-purple-500 hover:bg-purple-500/90"
            >
              start optimizing
              <WandSparkles className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <BentoFeatures />
      </Container>
    </main>
  );
}
