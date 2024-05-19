import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

type Props = {
  className?: string;
};

export function ViewSwitcher(props: Props) {
  return (
    <div className={cn("flex items-center gap-4", props.className)}>
      <div className="text-lg font-semibold text-teal-400">Weekly</div>
      <Switch />
      <div className="text-lg font-semibold text-slate-300">Monthly</div>
    </div>
  );
}
