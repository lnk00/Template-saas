import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export function SettingBtn(props: Props) {
  return (
    <div className={cn(props.className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            <Settings className="text-slate-800" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
