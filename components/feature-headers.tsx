"use client";

import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useRef } from "react";

export const VisualsFeatureHeader = () => {
  const spline = useRef();
  function onLoad(splineApp: Application) {
    splineApp.setZoom(2);
    spline.current = splineApp;
  }

  function onEnterAnimation() {
    spline.current.emitEvent("mouseHover", "triggerEnter");
  }

  function onLeaveAnimation() {
    spline.current.emitEvent("mouseHover", "triggerLeave");
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={onEnterAnimation}
      onMouseLeave={onLeaveAnimation}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-slate-100 dark:bg-black"></div>
      <div className="absolute w-full bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
        <Spline
          scene="https://prod.spline.design/XFYB1Chq-8WdcYUE/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
};
