import { HeaderBlock } from "@/components/header-block";
import { TodosBlock } from "@/components/todos-block";
import { Container } from "@/components/ui/container";
import { DotBackground } from "@/components/ui/dot-background";
import { ViewSwitcher } from "@/components/view-switch";
import { protectRoute } from "@/lib/supabase/middleware";
import { createServerSupabaseClient } from "@/lib/supabase/server";

async function getData() {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from("tasks").select();

  if (error) {
    console.log("Error fetching tasks: ", error);
    return { tasks: [] };
  }

  return { tasks: data };
}

export default async function Home() {
  await protectRoute();

  const data = await getData();

  return (
    <main vaul-drawer-wrapper="" className="h-[150rem] w-full relative">
      <DotBackground />
      <Container className="pt-24">
        <HeaderBlock />
        <ViewSwitcher className="mt-4" />
        <TodosBlock tasks={data.tasks} />
      </Container>
    </main>
  );
}
