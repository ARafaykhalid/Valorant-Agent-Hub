import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = ({
  AboutImg,
  AgentKickLine,
  AgentName,
}: {
  AboutImg: string;
  AgentName: string;
  AgentKickLine: string;
}) => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 2,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="agentabout" className="max-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          {AgentName}
        </h2>

        <AnimatedTitle
          title={AgentKickLine}
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            width={1920}
            height={1080}
            src={AboutImg}
            alt="Background"
            className="absolute mask-b-from-50% mask-b-to-100% Image left-0 top-0 size-full duration-700 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
