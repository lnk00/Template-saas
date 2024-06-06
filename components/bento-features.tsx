import React from "react";
import {
  IconFileBroken,
  IconLayoutCollage,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import test from "../public/test.png";

export function BentoFeatures() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const SkeletonVisuals = () => (
  <div className="relative w-full h-full">
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
    <Image
      className="absolute w-2/3 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
      src={test}
      alt="test"
    />
  </div>
);
const SkeletonStoryTelling = () => (
  <div className="relative w-full h-full">
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
  </div>
);
const Skeleton = () => (
  <div className="relative w-full h-full">
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
  </div>
);
const items = [
  {
    title: "Visuals matters",
    description:
      "Making a powerful first impression on LinkedIn is crucial, we craft great visuals for your needs.",
    header: <SkeletonVisuals />,
    className: "md:col-span-2",
    icon: <IconLayoutCollage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Story telling",
    description: "What you say is crucial, but how you say it matters more.",
    header: <SkeletonStoryTelling />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
