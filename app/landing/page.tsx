import { Container } from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";

export default async function Landing() {
  return (
    <main vaul-drawer-wrapper="" className="w-full relative">
      <Container className="pt-48 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Optimize your linkedIn profile to
        </h1>
        <div>
          <FlipWords
            words={[
              "engage your audience",
              "find your dream job",
              "sell your product",
            ]}
          ></FlipWords>
        </div>
      </Container>
    </main>
  );
}
