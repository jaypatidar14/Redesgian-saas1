import React from "react";

export function DotBackgroundDemo() {
  return (
    <div
      className="h-[50rem] w-full dark:bg-black bg-black relative flex items-center justify-center"
      style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '10px 10px', // Adjust the size of the dots
      }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
       
      </p>
    </div>
  );
}
