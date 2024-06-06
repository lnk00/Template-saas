import visualsIllu from "../public/visualsfeature.webp";
import storyIllu from "../public/storytellingfeature.webp";
import statsIllu from "../public/statsfeature.webp";
import optiIllu from "../public/optifeature.webp";

import Image from "next/image";

export const VisualsFeatureHeader = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
      <div className="absolute w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl">
        <Image
          src={visualsIllu}
          alt="illustration"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const StoryTellingFeatureHeader = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
      <div className="absolute w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl">
        <Image
          src={storyIllu}
          alt="illustration"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const StatsFeatureHeader = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
      <div className="absolute w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl">
        <Image
          src={statsIllu}
          alt="illustration"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const OptiFeatureHeader = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
      <div className="absolute w-full h-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 overflow-hidden rounded-xl">
        <Image
          src={optiIllu}
          alt="illustration"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};
