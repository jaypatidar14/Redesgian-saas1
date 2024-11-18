import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
interface Step {
  title: string;
  description: string;
  icon: string;
}

const StepsAnimation: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      title: "Video interview the experts",
      description: "Live video chat & Hire Top 1% Global coder in a click.",
      icon: "💻",
    },
    {
      title: "Hire Expert coder",
      description: "Assign Project & Tasks for your project",
      icon: "👨‍💻",
    },
    {
      title: "Get quality work done",
      description: "Scrum & Project Delivery Managed by Us.",
      icon: "✅",
    },
    {
      title: "Pay when you're satisfied",
      description: "Pay Only when task is done as Scrum Managed by Us.",
      icon: "💳",
    },
  ];

  // Auto cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex items-center justify-center my-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold mb-14">
          How it <span className="text-violet-500">Works</span>
        </h2>

        <div className="flex gap-10">
          {/* Steps Section */}
          <div className="w-1/2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 mb-4 p-2 rounded-lg transition-all duration-300 ${
                  activeStep === index ? "" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    activeStep === index
                      ? "bg-violet-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold text-2xl mb-1 ${
                      activeStep === index
                        ? "text-violet-500"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* GIF Section */}
          <div className="w-1/2 relative">
            {activeStep === 0 && (
              <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                  src="/a.gif"
                  alt="Step 1 Animation"
                  className="w-full h-full object-cover rounded-lg"
                  width={500} height={500}
                />
              </div>
            )}
            {activeStep === 1 && (
              <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                  src="/2.gif"
                  alt="Step 2 Animation"
                  className="w-full h-full object-cover rounded-lg"
                  width={500} height={500}
                />
              </div>
            )}
            {activeStep === 2 && (
              <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                  src="/3.gif"
                  alt="Step 3 Animation"
                  className="w-full h-full object-cover rounded-lg"
                  width={500} height={500}
                />
              </div>
            )}
            {activeStep === 3 && (
              <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                  src="d.gif"
                  alt="Step 4 Animation"
                  className="w-full h-full object-cover rounded-lg"
                  width={500} height={500}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsAnimation;
