import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Settings } from "lucide-react";

type Props = {
  className?: string;
};

export function SettingBtn(props: Props) {
  return (
    <div className={cn(props.className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Settings className="w-8 h-8 hover:cursor-pointer hover:text-teal-400 transition-all" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
