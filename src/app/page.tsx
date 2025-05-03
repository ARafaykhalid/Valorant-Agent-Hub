"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const App = () => {

  // useGSAP(() => {
  //   const smoother = ScrollSmoother.create({
  //     smooth: 2,
  //     smoothTouch: 0.5,
  //     effects: true,
  //   });

  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);

  return (
    <>
      <Hero />
      <About />
      <div className="w-screen h-screen"/>
    </>
  );
};

export default App;
