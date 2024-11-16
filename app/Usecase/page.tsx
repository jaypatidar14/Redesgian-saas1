"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Usecase: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const typewriterRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    // GSAP animation for heading text sliding in from the side
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    // GSAP typewriter effect for the paragraph
    if (typewriterRef.current) {
      gsap.to(typewriterRef.current, {
        text: "  Solutions",
        duration: 1,
        repeat: -1,
        repeatDelay: 1,
        ease: "power2.inOut",
      });
    }

    // Mouse movement effect to move the image up and down
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { clientY } = e;
        const movement = (clientY / window.innerHeight) * 50 - 25; // Adjust movement scale as needed
        gsap.to(imageRef.current, {
          y: movement,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="pt-28 px-6 flex justify-between">
        {/* Left Content */}
        <section className="pt-18 w-2/3 text-gray-500">
          <h1
            ref={textRef}
            className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient mt-8"
          >
            Empowering Staffing Firms with AI-Driven Hiring
          </h1>
          <p ref={typewriterRef} className="text-6xl"></p>
        </section>

        {/* Right Side with 3D Model */}
        <aside className="w-1/3">
          <iframe
            ref={imageRef}
            src="https://my.spline.design/chips-fb93774a3a76b494d77d0d8d7077ae28/"
            frameBorder="0"
            width="100%"
            height="500px"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </aside>
      </div>
    </div>
  );
};

export default Usecase;
