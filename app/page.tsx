import { SettingBtn } from "@/components/setting-btn";
import { Todo } from "@/components/todo";
import { Button } from "@/components/ui/button";
import { DotBackground } from "@/components/ui/dot-background";
import { ViewSwitch } from "@/components/view-switch";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="h-[150rem] w-full relative">
      <DotBackground />
      <div className="max-w-[1280px] m-auto relative pt-24">
        <div className="flex items-end">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-300">
              2024
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Week 20 : May 13 - May 19
            </h1>
          </div>
          <SettingBtn className="ml-auto" />
        </div>
        <ViewSwitch className="mt-4" />

        <div className="flex items-end">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-12">
            Todos
          </h1>
          <div className="flex ml-auto gap-2">
            <Button variant={"outline"} size={"sm"}>
              <ChevronLeft />
            </Button>
            <Button variant={"outline"} size={"sm"}>
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Todo title="Monday" />
          <Todo title="Thuesday" isFocused />
          <Todo title="Wednesday" />
          <Todo title="Thursday" />
          <Todo title="Friday" />
        </div>
      </div>
    </main>
  );
}
