"use client";
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const Header = () => {
  const navItems = [
    { name: `About`, id: "#About" },
    { name: `Abilities`, id: "#Abilities" },
    { name: `Card`, id: "#Card" },
    { name: `Who Made This?`, id: "#WhoMadeThis" },
  ];

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (typeof window !== "undefined" && !smootherRef.current) {
      const wrapper = document.querySelector("#smooth-wrapper");
      const content = document.querySelector("#smooth-content");

      if (wrapper && content) {
        smootherRef.current = ScrollSmoother.create({
          wrapper,
          content,
          smooth: 2,
          effects: true,
        });
      }
    }
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    if (smootherRef.current) {
      requestAnimationFrame(() => {
        smootherRef.current!.scrollTo(el, true, "top");
      });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed top-4 border-2 border-roit/0 z-50 h-16 transition-all duration-700 inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <Image
            width={300}
            height={300}
            src="/img/logo.png"
            alt="logo"
            className="w-10"
          />
          <ul className="hidden md:flex gap-6 text-sm font-medium text-white">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer nav-hover-btn transition">
                {item.name}
              </li>
            ))}
          </ul>

          <div className="flex h-full items-center">
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 justify-between px-[1px] flex border border-roit cursor-pointer bg-black h-4 rounded-2xl w-4 items-center space-x-0.5">
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
