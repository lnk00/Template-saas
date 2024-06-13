import { Container } from "@/components/ui/container";
import { protectRoute } from "@/lib/supabase/middleware";

export default async function Home() {
  await protectRoute();

  return (
    <main vaul-drawer-wrapper="" className="w-full relative">
      <Container className="pt-24">
        <h1>Template</h1>
      </Container>
    </main>
  );
}
