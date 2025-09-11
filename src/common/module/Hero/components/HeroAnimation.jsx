"use client"; // Lottie animations are interactive and must be client components

import React from "react";
import Lottie from "lottie-react";

export default function HeroAnimation() {
  const animationPath = "/ai-animation.json";

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie
        path={animationPath}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
}
