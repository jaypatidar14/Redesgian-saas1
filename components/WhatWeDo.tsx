import React from "react";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";

function WhatWeDo() {
  const { theme } = useTheme();
  return (
    <div className="px-2 md:px-24 py-10 md:py-20 mb-16">
      <div className="text-center md:py-12 py-8 my-4">
        <div>
          <div className="text-2xl font-sans font-bold text-violet-700 dark:text-violet-500 py-4 ">
            What We Do
          </div>
          <h4 className="text-gray-500 font-sans dark:text-gray-400 max-w-3xl mx-auto py-1 md:py-3 md:text-2xl text-lg">
            Recruit smarter with our cutting-edge AI recruiting software, best
            suited for startups, consultancies, and staffing firms.
          </h4>
        </div>
      </div>
      <div className={"flex md:flex-row  flex-col gap-4"}>
        <MagicCard
          className=" cursor-pointer  items-center justify-center shadow-2xl  overflow-hidden  border-violet-600"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <img
            src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flight_free_ats.cf8647f0.png&w=640&q=75"
            alt=""
            className="rounded-lg p-2 hover:p-0"
          />
          <div className="px-3 py-3">
            <div className="font-bold">Free ATS</div>
            <div className="text-xs pt-2 text-gray-600 dark:text-gray-400">
              Manage your entire recruitment pipeline at no cost, perfect for
              businesses of all sizes.
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className=" cursor-pointer  items-center justify-center shadow-2xl  overflow-hidden p-2 border-pink-500"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <img
            src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetect_user_transP.03a97263.png&w=640&q=75"
            alt=""
            className="rounded-lg p-2 hover:p-0"
          />
          <div className="px-3 py-3">
            <div className="font-bold">Advanced Proctoring</div>
            <div className="text-xs pt-2 text-gray-600 dark:text-gray-400">
              Import applicants directly from LinkedIn to accelerate your
              recruitment process.
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className=" cursor-pointer  items-center justify-center shadow-2xl  overflow-hidden p-2 border-sky-500"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <img
            src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flight_assessment.d7064efb.png&w=640&q=75"
            alt=""
            className="rounded-lg p-2 hover:p-0"
          />
          <div className="px-3 py-3">
            <div className="font-bold">AI Integrated Assesments</div>
            <div className="text-xs pt-2 text-gray-600 dark:text-gray-400">
              Leverage AI to conduct smarter evaluations, reducing time and
              effort in candidate selection.
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className=" cursor-pointer  items-center justify-center shadow-2xl  overflow-hidden p-2 border-yellow-500"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <img
            src="https://everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flight_free_ats.cf8647f0.png&w=640&q=75"
            alt=""
            className="rounded-lg p-2 hover:p-0"
          />
          <div className="px-3 py-3">
            <div className="font-bold">LinkedIn Integration</div>
            <div className="text-xs pt-2 text-gray-600 dark:text-gray-400">
              Import applicants directly from LinkedIn to accelerate your
              recruitment process.
            </div>
          </div>
        </MagicCard>
      </div>
    </div>
  );
}

export default WhatWeDo;
