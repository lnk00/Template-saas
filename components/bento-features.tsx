import React from "react";
import {
  IconChartDots,
  IconLayoutCollage,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  OptiFeatureHeader,
  StatsFeatureHeader,
  StoryTellingFeatureHeader,
  VisualsFeatureHeader,
} from "./feature-headers";

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

const items = [
  {
    title: "Visuals Matters",
    description:
      "Making a powerful first impression on LinkedIn is crucial, we craft great visuals in adequation with your needs.",
    header: <VisualsFeatureHeader />,
    className: "md:col-span-2",
    icon: <IconLayoutCollage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Story Telling",
    description: "What you say is crucial, but how you say it matters more.",
    header: <StoryTellingFeatureHeader />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Statistics",
    description: "Statistics reveal truth; their understanding is key.",
    header: <StatsFeatureHeader />,
    className: "md:col-span-1",
    icon: <IconChartDots className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power Of Search Optimisation",
    description:
      "We refine your LinkedIn profile verbiage, elevating your visibility in search results to ensure maximum outreach.",
    header: <OptiFeatureHeader />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
