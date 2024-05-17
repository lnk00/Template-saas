import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

type Props = {
  className?: string;
};

export function ViewSwitch(props: Props) {
  return (
    <div className={cn("flex items-center gap-4", props.className)}>
      <div className="text-lg font-semibold text-teal-400">Weekly</div>
      <Switch />
      <div className="text-lg font-semibold text-zinc-300">Monthly</div>
    </div>
  );
}
