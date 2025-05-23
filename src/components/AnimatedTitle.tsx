import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({
  title,
  containerClass,
}: {
  title: string;
  containerClass: string;
}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title
        .split("<br />")
        .filter(line => line.trim() !== "") // removes empty lines
        .map((line, index) => (
          <div
            key={index}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line
              .split("<br />")
              .filter(word => word.trim() !== "" && word !== "<>" && word !== "</>") // filters out empty/fragment-like strings
              .map((word, i) => (
                <span
                  key={i}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default AnimatedTitle;
