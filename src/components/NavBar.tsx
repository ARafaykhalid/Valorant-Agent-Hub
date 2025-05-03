"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import Link from "next/link";

const navItems = ["Nexus", "Vault", "Prologue"];

const NavBar = () => {
  const [isAudioPlaying, setisAudioPlaying] = useState<boolean>(false);
  const [isIndicatorActive, setisIndicatorActive] = useState<boolean>(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const toggleAudioIndicator = () => {
    setisAudioPlaying((prev) => !prev);
    setisIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      //@ts-ignore: ref error
      audioElementRef.current.play();
    } else {
      //@ts-ignore: ref error
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-15 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="abosolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-19" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <Link key={item} className="nav-hover-btn" href={"/"}>
                  {item}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5">
              <audio
                src="/audio/loop.mp3"
                className="hidden"
                loop
                ref={audioElementRef}></audio>
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
