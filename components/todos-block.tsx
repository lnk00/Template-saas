"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Todo } from "./todo";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function TodosBlock() {
  const [todos, setTodos] = useState([
    {
      title: "Monday",
      visible: true,
      isFocused: false,
    },
    {
      title: "Thuesday",
      visible: true,
      isFocused: false,
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
  ]);

  useEffect(() => {
    let day = dayjs().day();
    if (day == 0) day = 6;
    else if (day == 6) day = 0;
    else day = day - 1;

    setTodos(
      todos.map((t, idx) => {
        if (idx == day) {
          t.isFocused = true;
        }
        return t;
      }),
    );

    fetch("/tasks").then((data) => console.log(data));
  }, []);

  const onNextClick = () => {
    const firstVisible = todos.findIndex((t) => t.visible);
    const firstNonVisible = todos.findIndex(
      (t, idx) => !t.visible && idx > firstVisible,
    );
    setTodos(
      todos.map((t, idx) => {
        if (idx == firstVisible) t.visible = false;
        if (idx == firstNonVisible) t.visible = true;
        return t;
      }),
    );
  };

  const onPrevClick = () => {
    const lastVisible = todos.findLastIndex((t) => t.visible);
    const lastNonVisible = todos.findLastIndex(
      (t, idx) => !t.visible && idx < lastVisible,
    );
    setTodos(
      todos.map((t, idx) => {
        if (idx == lastVisible) t.visible = false;
        if (idx == lastNonVisible) t.visible = true;
        return t;
      }),
    );
  };

  return (
    <div>
      <div className="flex items-end">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-12">
          Todos
        </h1>
        <div className="flex ml-auto gap-2">
          <Button
            variant={"outline"}
            disabled={todos.findIndex((t) => t.visible) == 0}
            size={"sm"}
            onClick={onPrevClick}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"outline"}
            disabled={todos.findLastIndex((t) => t.visible) == todos.length - 1}
            size={"sm"}
            onClick={onNextClick}
          >
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
