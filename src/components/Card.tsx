import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Image from "next/image";

const Card = ({
  AgentName,
  AgentType,
  AgentCard,
}: {
  AgentName: string;
  AgentType: string;
  AgentCard: string;
}) => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="card" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general z-25 text-sm uppercase md:text-[10px]">
          {AgentType}
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            title={AgentName}
          />

          <div className="card-img-container mt-20">
            <div className="card-img-mask">
              <div className="card-img-content">
                <div ref={frameRef}>
                  <Image
                    src={AgentCard}
                    alt="entrance"
                    height={2000}
                    width={2000}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
