"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Todo } from "./todo";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { tasks } from "@/store/tasks";
import { useHydrateAtoms } from "jotai/utils";
import { Tables } from "@/lib/supabase/database.types";
import weekOfYear from "dayjs/plugin/weekOfYear";

function buildTodoWeekDays() {
  dayjs.extend(weekOfYear);

  const today = dayjs();

  const days = [
    {
      title: today.startOf("week").format("dddd"),
      date: today.startOf("week"),
      visible: false,
      isFocused: today.day() === today.startOf("week").day(),
    },
    {
      title: today.startOf("week").add(1, "day").format("dddd"),
      date: today.startOf("week").add(1, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(1, "day").day(),
    },
    {
      title: today.startOf("week").add(2, "day").format("dddd"),
      date: today.startOf("week").add(2, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(2, "day").day(),
    },
    {
      title: today.startOf("week").add(3, "day").format("dddd"),
      date: today.startOf("week").add(3, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(3, "day").day(),
    },
    {
      title: today.startOf("week").add(4, "day").format("dddd"),
      date: today.startOf("week").add(4, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(4, "day").day(),
    },
    {
      title: today.startOf("week").add(5, "day").format("dddd"),
      date: today.startOf("week").add(5, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(5, "day").day(),
    },
    {
      title: today.startOf("week").add(6, "day").format("dddd"),
      date: today.startOf("week").add(6, "day"),
      visible: false,
      isFocused: today.day() === today.startOf("week").add(6, "day").day(),
    },
  ];

  let visibleCount = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (
      days[i].date.isAfter(today) &&
      days[i].date.diff(today, "day") < 4 &&
      visibleCount < 5
    ) {
      days[i].visible = true;
      visibleCount += 1;
    } else if (visibleCount < 5 && days[i].date.isBefore(today)) {
      days[i].visible = true;
      visibleCount += 1;
    } else if (today.day() === days[i].date.day()) {
      days[i].visible = true;
      visibleCount += 1;
    } else {
      days[i].visible = false;
    }
  }

  return days;
}

type Props = {
  tasks: Tables<"tasks">[];
};

export function TodosBlock(props: Props) {
  useHydrateAtoms([[tasks, props.tasks]]);
  const [taskList] = useAtom(tasks);
  const [weekDays, setWeekDays] = useState(buildTodoWeekDays());

  const setFocusedDay = () => {
    let day = dayjs().day();

    setWeekDays(
      weekDays.map((t, idx) => {
        if (idx == day) {
          t.isFocused = true;
        }
        return t;
      }),
    );
  };

  const onNextClick = () => {
    const firstVisible = weekDays.findIndex((t) => t.visible);
    const firstNonVisible = weekDays.findIndex(
      (t, idx) => !t.visible && idx > firstVisible,
    );
    setWeekDays(
      weekDays.map((t, idx) => {
        if (idx == firstVisible) t.visible = false;
        if (idx == firstNonVisible) t.visible = true;
        return t;
      }),
    );
  };

  const onPrevClick = () => {
    const lastVisible = weekDays.findLastIndex((t) => t.visible);
    const lastNonVisible = weekDays.findLastIndex(
      (t, idx) => !t.visible && idx < lastVisible,
    );
    setWeekDays(
      weekDays.map((t, idx) => {
        if (idx == lastVisible) t.visible = false;
        if (idx == lastNonVisible) t.visible = true;
        return t;
      }),
    );
  };

  useEffect(() => {
    setFocusedDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex items-end">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-12">
          Todos
        </h1>
        <div className="flex ml-auto gap-2">
          <Button
            variant={"outline"}
            disabled={weekDays.findIndex((t) => t.visible) == 0}
            size={"sm"}
            onClick={onPrevClick}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"outline"}
            disabled={
              weekDays.findLastIndex((t) => t.visible) == weekDays.length - 1
            }
            size={"sm"}
            onClick={onNextClick}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {weekDays.map(
          (day, idx) =>
            day.visible && (
              <Todo
                key={idx}
                title={day.title}
                isFocused={day.isFocused}
                tasks={taskList.filter(
                  (t) => t.due_date === day.date.format("YYYY-MM-DD"),
                )}
              />
            ),
        )}
      </div>
    </div>
  );
}
