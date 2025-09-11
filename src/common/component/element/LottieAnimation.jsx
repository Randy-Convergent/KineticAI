"use client";
import React from "react";
import Lottie from "lottie-react";
import clsx from "clsx";

/**
 * A reusable component to render Lottie animations.
 * @param {string} src - The public path to the .lottie or .json file (e.g., "/animations/my-file.lottie").
 * @param {string} [className] - Optional classes for styling the container.
 * @param {boolean} [loop=true] - Whether the animation should loop.
 * @param {boolean} [autoplay=true] - Whether the animation should play automatically.
 */
export default function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
}) {
  if (!src) {
    return null;
  }

  return (
    <Lottie
      path={src}
      loop={loop}
      autoplay={autoplay}
      className={clsx("w-full h-full", className)}
    />
  );
}
