import React from "react";
import Marquee from "./ui/marquee";
import { BorderBeam } from "./ui/border-beam";
import { Infinite } from "./ui/Infinite";

import SaasflyBanner from "./SaaflyBanner";
import { GoogleGeminiEffect } from "../components/ui/GoogleGeminiEffect";
import { LampDemo } from "./ui/Lamp";
import { WobbleCard } from '../components/ui/WobbleCard';
import { Timeline } from '../components/ui/timelinedata';


function Story(): React.JSX.Element {
  return (
    <div className="bg-black">
      {/* Story section */}
      <GoogleGeminiEffect pathLengths={[]} />

      <section className="text-center bg-black py-12 md:py-15 my-4">
        {/* Story title */}
        <LampDemo />
        <Infinite items={[{
          id: 1,
          quote: "This is an example quote.",
          name: "John Doe",
          title: "CEO",
          imageUrl: "https://i.pinimg.com/236x/8e/e5/ed/8ee5edf8c3745ae78d92b3e1c57ca289.jpg"
        }, { id: 2, quote: "this is quote of  jay ", name: "Jay patidar", title: "CFO", imageUrl: "https://i.pinimg.com/236x/8e/e5/ed/8ee5edf8c3745ae78d92b3e1c57ca289.jpg" }]} />
      </section>
      <section>
      <div className="space-y-6">
  {/* Row with two cards side by side */}
  <div className="flex flex-wrap gap-4">
    <div className="flex-1 min-w-[300px]">
      <WobbleCard containerClassName="h-64" className="p-6 bg-pink-950">
        <div className="text-white font-bold">
          <h2>Deployed New Components</h2>
          <br />
          <p className=" font-normal">5 new components deployed on Aceternity:</p>
         
          {/* First set of images stacked vertically */}
          <div className="flex flex-col gap-4 mt-4">
            <img
              src="/f1.jpg"
              alt="Sample image"
              className="w-full sm:w-64 h-auto sm:h-48 rounded-lg shadow right-0"
            />
            
          </div>
        </div>
      </WobbleCard>
    </div>
    <div className="flex-1 min-w-[300px]">
    <WobbleCard containerClassName="h-64" className="p-6 bg-red-500">
        <div className="text-white font-bold">
          <h2>Deployed New Components</h2>
          <br />
          <p className=" font-normal">5 new components deployed on Aceternity:</p>
         
          {/* First set of images stacked vertically */}
          <div className="flex flex-col gap-4 mt-4">
            <img
              src="/f1.jpg"
              alt="Sample image"
              className="w-full sm:w-64 h-auto sm:h-48 rounded-lg shadow right-0"
            />
            
          </div>
        </div>
      </WobbleCard>
    </div>
  </div>

  {/* Full-width card */}
  <div className="w-full">
  <WobbleCard containerClassName="h-64" className="p-6 bg-purpul">
        <div className="text-white font-bold">
          <h2>Deployed New Components</h2>
          <br />
          <p className=" font-normal">5 new components deployed on Aceternity:</p>
         
          {/* First set of images stacked vertically */}
          <div className="flex flex-col gap-4 mt-4">
            <img
              src="/f1.jpg"
              alt="Sample image"
              className="w-full sm:w-64 h-auto sm:h-48 rounded-lg shadow right-0"
            />
            
          </div>
        </div>
      </WobbleCard>
  </div>
</div>

        <Timeline />
        {/* <Timeline data={timelineData} /> */}


      </section>
      <SaasflyBanner />

      <section className="p-6">
        {/* Optional components such as Marquee and BorderBeam */}
        <Marquee className="text-white py-4" text="See what our customers are saying!" />
        <BorderBeam className="my-8" />
      </section>


    </div>

  );
}

export default Story;
