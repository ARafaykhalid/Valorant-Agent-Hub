import Link from "next/link";
import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({
  children,
  className = "",
  ColorBD,
}: {
  children: React.ReactNode;
  className: string;
  ColorBD: string;
}) => {
  const [transformStyle, settransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d( 0.95, 0.95, 0.95)`;
    settransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    settransformStyle("");
  };

  return (
    <div
      className={` ${className} shadow-lg/50 !border-2 ${ColorBD}`}
      ref={itemRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ transform: transformStyle }}>
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  description,
  title,
}: {
  src: string;
  description: string;
  title: React.ReactNode;
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="absolute h-full w-full mask-radial-at-top-left mask-radial-to-65% bg-black" />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs ">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Abilities = ({
  Ab1,
  Ab1Vid,
  Ab1Desc,
  Ab2,
  Ab2Vid,
  Ab2Desc,
  Ab3,
  Ab3Vid,
  Ab3Desc,
  Ab4,
  Ab4Vid,
  Ab4Desc,
  Trailer,
  ColorBD,
  ColorBG,
}: {
  Ab1: React.ReactNode;
  Ab1Vid: string;
  Ab1Desc: string;
  Ab2: React.ReactNode;
  Ab2Vid: string;
  Ab2Desc: string;
  Ab3: React.ReactNode;
  Ab3Vid: string;
  Ab3Desc: string;
  Ab4: React.ReactNode;
  Ab4Vid: string;
  Ab4Desc: string;
  Trailer: string;
  ColorBD: string;
  ColorBG: string;
}) => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 pt-5 md:px-10">
      <BentoTilt
        ColorBD={ColorBD}
        className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <Link
          target="__blank"
          href={`https://www.youtube.com/watch?v=${Trailer}`}>
          <div className="relative size-full">
            <iframe
              src={`https://www.youtube.com/embed/${Trailer}?autoplay=1&mute=1&loop=1&controls=0&playlist=${Trailer}`}
              className="absolute left-0 top-0 size-full object-cover scale-120 object-center"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <div className="absolute h-full w-full mask-radial-at-top-left mask-radial-to-65% bg-black" />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
              <div>
                <h1 className="bento-title special-font">
                  TR<b>A</b>ILER
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt
          ColorBD={ColorBD}
          className="bento-tilt_1 row-span-1 md:!col-span-1 md:row-span-2">
          <BentoCard src={Ab1Vid} title={Ab1} description={Ab1Desc} />
        </BentoTilt>

        <BentoTilt
          ColorBD={ColorBD}
          className="bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0">
          <BentoCard src={Ab2Vid} title={Ab2} description={Ab2Desc} />
        </BentoTilt>

        <BentoTilt
          ColorBD={ColorBD}
          className="bento-tilt_1 me-14 md:!col-span-1 md:me-0">
          <BentoCard src={Ab3Vid} title={Ab3} description={Ab3Desc} />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2" ColorBD={ColorBD}>
          <BentoCard src={Ab4Vid} title={Ab4} description={Ab4Desc} />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2" ColorBD={ColorBD}>
          <Link
            href={`https://playvalorant.com/`}
            target="__blank"
            className={`flex size-full flex-col justify-between ${ColorBG} p-5`}>
            <h1 className="bento-title special-font max-w-64">
              Pl<b>a</b>y V<b>a</b>lorant <b>N</b>ow!
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </Link>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Abilities;
