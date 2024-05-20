"use client";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { UserRound } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Container } from "./ui/container";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

export function ProfileBtn(props: Props) {
  const router = useRouter();

  const onClick = async () => {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <div className={cn(props.className)}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"outline"} size={"sm"}>
                <UserRound className="text-slate-800" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <Container className="mb-6">
          <DrawerHeader className="px-0">
            <DrawerTitle>Profile</DrawerTitle>
            <DrawerDescription>
              Informations and actions related to your account
            </DrawerDescription>
          </DrawerHeader>
          <Button onClick={onClick}>Logout</Button>
        </Container>
      </DrawerContent>
    </Drawer>
  );
}
