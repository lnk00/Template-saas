import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Todo } from "./todo";

export function TodosBlock() {
  const todos = [
    {
      title: "Monday",
      visible: true,
      isFocused: false,
    },
    {
      title: "Thuesday",
      visible: true,
      isFocused: true,
    },
    {
      title: "Wednesday",
      visible: true,
      isFocused: false,
    },
    {
      title: "Thursday",
      visible: true,
      isFocused: false,
    },
    {
      title: "Friday",
      visible: true,
      isFocused: false,
    },
    {
      title: "Saturday",
      visible: false,
      isFocused: false,
    },
    {
      title: "Sunday",
      visible: false,
      isFocused: false,
    },
  ];

  return (
    <div>
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
        {todos.map(
          (todo, idx) =>
            todo.visible && (
              <Todo key={idx} title={todo.title} isFocused={todo.isFocused} />
            ),
        )}
      </div>
    </div>
  );
}
