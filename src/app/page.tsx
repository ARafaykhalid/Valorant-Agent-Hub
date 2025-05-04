"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

import About from "@/components/About";
import Abilities from "@/components/Abilities";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Button from "@/components/Button";
import { Agents } from "@/Data/agent";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<number>(0);

  const totalAgents: number = Agents.length;
  const nextImageRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = (): void => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleMiniImageClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAgents);
  };

  useEffect(() => {
    if (loadedImages >= totalAgents) {
      setIsLoading(false);
    }
  }, [loadedImages, totalAgents]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-Image", {
          visibility: "visible",
        });

        gsap.to("#next-Image", {
          transformOrigin: "center center",
          width: "100%",
          height: "100%",
          duration: 1,
          scale: 1,
          ease: "power1.inOut",
        });

        gsap.from("#current-Image", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#Image-frame", {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#Image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#Image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  

  const getImageSrc = (index: number) => `/img/hero-${index + 1}.jpg`;

  return (
    <>
      <div className="relative h-dvh w-screen overflow-x-hidden">
        {isLoading && (
          <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="three-body">
              <div className="three-body__dot" />
              <div className="three-body__dot" />
              <div className="three-body__dot" />
            </div>
          </div>
        )}

        <div
          id="Image-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
          <div>
            <div className="mask-clip-path font-zentry absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniImageClick}
                className="origin-center hover:scale-150 hover:opacity-100 opacity-0 transition-all ease-in duration-500">
                <div ref={nextImageRef}>
                  <Image
                    src={getImageSrc((currentIndex + 1) % totalAgents)}
                    width={2000}
                    height={2000}
                    alt="Next"
                    id="current-Image"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoad={handleImageLoad}
                  />
                </div>
              </div>
            </div>

            <div ref={nextImageRef}>
              <Image
                src={getImageSrc(currentIndex)}
                width={2000}
                height={2000}
                alt="Current"
                id="next-Image"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              />
            </div>

            <Image
              src={getImageSrc((currentIndex + 1) % totalAgents)}
              width={2000}
              height={2000}
              alt="Background"
              className="absolute left-0 delay-1000 top-0 size-full object-cover object-center"
              onLoad={handleImageLoad}
            />
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            {Agents[currentIndex].AgentType()}
          </h1>

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                {Agents[currentIndex].AgentName()}
              </h1>

              <p className="mb-5 max-w-128 font-robert-regular text-blue-100">
                {Agents[currentIndex].AgentDescription}
              </p>

              <Button
                id="watch-trailer"
                title="Watch Trailer"
                leftIcon={<TiLocationArrow />}
                Trailer={Agents[currentIndex].Trailer}
                containerClass={`${Agents[currentIndex].ColorBG} flex-center gap-1`}
              />
            </div>
          </div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
          {Agents[currentIndex].AgentType()}
        </h1>
      </div>

      <About
        AboutImg={Agents[currentIndex].AgentAboutImg}
        AgentName={Agents[currentIndex].AgentNameN}
        AgentKickLine={Agents[currentIndex].AgentKickLine}
      />
      <Abilities
        Ab1={Agents[currentIndex].Ab1()}
        Ab1Desc={Agents[currentIndex].Ab1Desc}
        Ab1Vid={Agents[currentIndex].Ab1Vid}
        Ab2={Agents[currentIndex].Ab2()}
        Ab2Desc={Agents[currentIndex].Ab2Desc}
        Ab2Vid={Agents[currentIndex].Ab2Vid}
        Ab3={Agents[currentIndex].Ab3()}
        Ab3Desc={Agents[currentIndex].Ab3Desc}
        Ab3Vid={Agents[currentIndex].Ab3Vid}
        Ab4={Agents[currentIndex].Ab4()}
        Ab4Desc={Agents[currentIndex].Ab4Desc}
        Ab4Vid={Agents[currentIndex].Ab4Vid}
        Trailer={Agents[currentIndex].Trailer}
        ColorBG={Agents[currentIndex].ColorBG}
        ColorBD={Agents[currentIndex].ColorBD}
      />
      <Card
        AgentName={Agents[currentIndex].AgentNameN}
        AgentCard={Agents[currentIndex].AgentCard}
        AgentType={Agents[currentIndex].AgentTypeN}
      />
      <Contact />
    </>
  );
};

export default App;
