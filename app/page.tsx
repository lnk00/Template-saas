import { HeaderBlock } from "@/components/header-block";
import { TodosBlock } from "@/components/todos-block";
import { Container } from "@/components/ui/container";
import { DotBackground } from "@/components/ui/dot-background";
import { ViewSwitcher } from "@/components/view-switch";
import { protectRoute } from "@/lib/supabase/middleware";

export default async function Home() {
  await protectRoute();

  return (
    <main vaul-drawer-wrapper="" className="h-[150rem] w-full relative">
      <DotBackground />
      <Container className="pt-24">
        <HeaderBlock />
        <ViewSwitcher className="mt-4" />
        <TodosBlock />
      </Container>
    </main>
  );
}
