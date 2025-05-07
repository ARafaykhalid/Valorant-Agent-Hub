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
import { LuMousePointerClick } from "react-icons/lu";
import { HiCursorArrowRipple } from "react-icons/hi2";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const App = () => {
  const totalAgents: number = Agents.length;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [mouseMove, setMouseMove] = useState(0);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [FirstClick, setFirstClick] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [transformStyle, settransformStyle] = useState<string>("");
  const lastMoveTime = useRef<number>(Date.now());
  const nextImageRef = useRef<HTMLDivElement>(null);
  const TiltImageRef = useRef<HTMLDivElement>(null);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!TiltImageRef.current) return;

    const { left, top, width, height } =
      TiltImageRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    // Calculate tilt in a range like ±20deg (you can increase it but not over ±90)
    const rawTiltX = (relativeY - 0.5) * -40; // vertical
    const rawTiltY = (relativeX - 0.5) * 40; // horizontal

    const tiltX = clamp(rawTiltX, -30, 30);
    const tiltY = clamp(rawTiltY, -30, 30);

    lastMoveTime.current = Date.now();
    setMouseMove((prev) => Math.min(150, prev + 5));

    if (mouseMove >= 100) {
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
      settransformStyle(newTransform);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastMove = lastMoveTime.current;

      if (timeSinceLastMove > 300 && mouseMove > 0) {
        setMouseMove((prev) => Math.max(0, prev - 2));
      }
    }, 100);
    return () => clearInterval(interval);
  }, [mouseMove]);

  const handleMouseLeave = () => {
    settransformStyle(
      `perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
  };

  const handleImageLoad = (): void => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleMiniImageClick = () => {
    if (!FirstClick) {
      setFirstClick(true);
    }
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
      clipPath: "polygon(5% 21%, 78% 0, 93% 85%, 7% 93%)",
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

  const getImageSrc = (index: number) => {
    if (index === -1) {
      return `/img/hero-4.jpg`;
    } else {
      return `/img/hero-${index + 1}.jpg`;
    }
  };

  return (
    <>
      <SmoothScrollWrapper>
        <div className="relative h-dvh w-screen overflow-x-hidden" id="About">
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
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleMouseLeave}>
            <div>
              <div
                ref={TiltImageRef}
                className={`mask-clip-path ease-linear duration-500 opacity-0 font-zentry absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg`}
                style={{
                  scale: mouseMove / 100,
                  opacity: mouseMove / 100,
                  transform: transformStyle,
                }}>
                <div
                  onClick={handleMiniImageClick}
                  className={`origin-center transition-all ease-in duration-500`}>
                  <div ref={nextImageRef} className="relative">
                    <div className="flex w-full h-full absolute justify-center place-self-center-safe not-md:visible collapse self-center">
                      <LuMousePointerClick className="z-10 place-self-center-safe h-15 w-15 text-white fill-white animate-pulse rounded-xl bg-roit duration-300" />
                    </div>
                    <Image
                      src={getImageSrc((currentIndex + 1) % totalAgents)}
                      width={2000}
                      height={2000}
                      priority 
                      alt="current"
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
                  priority 
                  alt="next"
                  id="next-Image"
                  className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                />
              </div>

              <Image
                src={getImageSrc(currentIndex - 1)}
                width={2000}
                height={2000}
                priority 
                alt="Background"
                className="absolute left-0 delay-1000 top-0 size-full object-cover object-center"
                onLoad={handleImageLoad}
              />

              <Image
                src={`/img/hero-1.jpg`}
                width={2000}
                height={2000}
                priority 
                alt="Background"
                className={`absolute z-25 left-0 top-0 size-full object-cover object-center ${FirstClick? "opacity-0":"opacity-100"}`}
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

                <p className="mb-5 max-w-128 font-robert-regular text-shadow-2xs text-shadow-black text-blue-100">
                  {Agents[currentIndex].AgentDescription}
                </p>

                <Button
                  id="watch-trailer"
                  title="Watch Trailer"
                  leftIcon={<TiLocationArrow />}
                  isTrailer
                  theLink={Agents[currentIndex].Trailer}
                  containerClass={`${Agents[currentIndex].ColorBG} flex-center gap-1`}
                />
              </div>
            </div>
          </div>

          <div className="absolute flex items-center z-25 bg-black border-3 border-roit collapse not-md:visible rounded-2xl p-2 bottom-5 left-5">
            <HiCursorArrowRipple
              className="h-10 w-10 fill-white stroke-roit"
              size={15}
            />
            <h1 className="mx-1 text-white text-sm text-center uppercase font-general">
              Spam To Reveal
              <br /> The Agent Change <br />
              Button
            </h1>
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
      </SmoothScrollWrapper>
    </>
  );
};

export default App;
