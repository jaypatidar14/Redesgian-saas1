"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Bentogrid } from "../../components/ui/bentogrid"
// import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Footer from "@/components/Footer";
import { Lens } from "@/components/ui/Lens";
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
    // if (typewriterRef.current) {
    //   gsap.to(typewriterRef.current, {
    //     text: "  Solutions",
    //     duration: 1,
    //     repeat: -1,
    //     repeatDelay: 1,
    //     ease: "power2.inOut",
    //   });
    // }

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

      <AuroraBackground className="bg-black">
        <Navbar />

        {/* Main content */}
        <div className="pt-28 px-6 flex justify-between">
          {/* Left Content */}
      
          <section className="pt-18 w-2/3 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
            <h1
              ref={textRef}
              className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 mt-8"
            >
              Empowering Staffing Firms with AI-Driven Hiring
            </h1>
            <p ref={typewriterRef} className="text-6xl"></p>
            <p className="text-2xl">
              Staffing firms play a critical role in connecting top talent with tech companies, especially for high-demand tech roles. The headhunting and vetting process is often time-consuming, with recruiters sifting through countless resumes and conducting extensive interviews. Everything Talenttransforms this process by leveraging Machine Learning (ML), Artificial Intelligence (AI), Custom Language Models (LLMs), and enhanced security measures to streamline candidate evaluation, helping firms identify and vet talent faster and more efficiently.
            </p>

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
              
      
        {/* <Button className="w-full md:w-auto">Get Started</Button> */}
      </AuroraBackground>
      <Bentogrid />
      <HeroParallax products={[
        { title: "4.8 /5 - from 1.2k reviews", link: "/product1", thumbnail: "/alpha10.webp" },
        { title: "Customer Review", link: "/product2", thumbnail: "/alpha5.webp " },
        { title: "Median API Requests Monthly", link: "/product3", thumbnail: "/alpha6.webp" },
        { title: "10k AI API Requests Monthly", link: "/product1", thumbnail: "/alpha7.webp" },
        { title: "Product 2", link: "/product2", thumbnail: "/alpha8.webp" },
        { title: "Product 3", link: "/product3", thumbnail: "/alpha9.webp" },
        { title: "Product 5", link: "/product4", thumbnail: "/alpha4.png" },
        { title: "Product 6", link: "/product5", thumbnail: "/alpha3.png" },
        { title: "Product 7", link: "/product7", thumbnail: "/alpha2.png" },
        { title: "Product 8", link: "/product8", thumbnail: "/alpha.png" }
      ]} 
      
      />
      <Footer />
      </div>
  );
};

export default Usecase;
