"use client";

import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <AnimatedTitle
        title={"404 Not Found!"}
        containerClass="mt-5 !text-black text-center"
      />
      <Link href="/" className="mt-4 text-blue-500 underline">
        Return Home
      </Link>
    </div>
  );
}
