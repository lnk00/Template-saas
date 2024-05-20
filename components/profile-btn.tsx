"use client";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { UserRound } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export function ProfileBtn(props: Props) {
  const onClick = () => {
    console.log("PROFILE CLICKED");
  };

  return (
    <div className={cn(props.className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onClick} variant={"outline"} size={"sm"}>
            <UserRound className="text-slate-800" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Profile</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
