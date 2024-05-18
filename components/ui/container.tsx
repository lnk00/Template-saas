import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container(props: Props) {
  return (
    <div className={cn("max-w-[1280px] m-auto relative", props.className)}>
      {props.children}
    </div>
  );
}
