"use client"
import Link from "next/link";

const Button = ({
  title,
  theLink,
  id,
  isTrailer,
  leftIcon,
  containerClass,
}: {
  title: string;
  theLink: string;
  isTrailer?: boolean;
  containerClass: string;
  id: string;
  leftIcon?: React.ReactNode;
}) => {
  return (
    <Link
      href={isTrailer ? `https://www.youtube.com/watch?v=${theLink}` : theLink}
      id={id}
      target="__blank"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </Link>
  );
};

export default Button;
