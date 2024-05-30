import { Container } from "@/components/ui/container";
import { DotBackground } from "@/components/ui/dot-background";
import { protectRoute } from "@/lib/supabase/middleware";

export default async function Home() {
  await protectRoute();

  return (
    <main vaul-drawer-wrapper="" className="h-[150rem] w-full relative">
      <DotBackground />
      <Container className="pt-24">
        <h1>Vecko</h1>
      </Container>
    </main>
  );
}
