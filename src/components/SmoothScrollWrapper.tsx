// SmoothScrollWrapper.tsx
"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      smoothTouch: 0.1,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="smooth-wrapper"
      className="fixed inset-0 h-full w-full overflow-hidden">
      <div
        ref={contentRef}
        id="smooth-content"
        className="will-change-transform min-h-screen">
        {children}
      </div>
    </div>
  );
}
