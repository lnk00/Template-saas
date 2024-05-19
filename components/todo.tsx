import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  AuroraCard,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { TodoItem } from "./todo-item";

type Props = {
  title: string;
  isFocused?: boolean;
  className?: string;
};

export function Todo(props: Props) {
  if (props.isFocused) {
    return (
      <div className={cn("shrink-0 flex-grow-[2]", props.className)}>
        <AuroraCard>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-48 gap-2">
              <TodoItem />
              <TodoItem />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add item
            </Button>
          </CardFooter>
        </AuroraCard>
      </div>
    );
  } else {
    return (
      <div className={cn("flex-grow-[1]", props.className)}>
        <Card>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row h-48"></div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add item
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
