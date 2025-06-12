"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function HeroSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero.svg"
          alt="Minerals background"
          fill
          priority
          className="object-cover object-right-bottom"
        />
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-25 md:pt-35 px-4 md:px-10">
        {/* Heading - centered on mobile, left-aligned on desktop */}
        <h1 className="text-3xl md:text-7xl font-bold text-center md:text-left whitespace-nowrap md:ml-10">
          Ethiopian Mineral Corporation
        </h1>

        {/* Content container */}
        <div className="flex flex-col items-center md:items-start md:flex-col">
          {/* Ethiopia image */}
          <img
            src="ethiopia.svg"
            alt="Ethiopia map"
            className="w-auto max-w-[80%] md:max-w-full block mt-5 md:ml-5"
          />

          {/* Paragraph */}
          <p className="mt-5 md:-mt-20 md:ml-10 max-w-md md:max-w-2xl text-sm md:text-lg text-center md:text-left px-2 md:px-0">
            Ethiopian Minerals Corporation is a state-owned enterprise established
            in 1942 tasked with the exploration, development, processing and
            marketing of mineral resources in Ethiopia.
          </p>
        </div>

        {/* Cards Section - adjusted for mobile */}
        <div className="flex flex-wrap mt-10 md:mt-15 mb-5 justify-center md:justify-start md:ml-0">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/30 w-56 md:w-64 mx-2 md:mx-0">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
              100+ Minerals
            </h3>
            <p className="text-xs md:text-sm text-white">
              We want our visitors to be inspired to get their Minds Open.
            </p>
          </div>

          {/* Card 2: Stacked Stones */}
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/30 w-24 md:w-32 flex flex-col justify-center items-center relative mt-4 md:mt-0">
            {[
              { src: "/green.svg", alt: "Emerald", z: "z-10" },
              { src: "/red.svg", alt: "Ruby", z: "z-20" },
              { src: "/golden.svg", alt: "Gold", z: "z-10" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative -mt-3 md:-mt-5 ${item.z} hover:z-30`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={45}
                  height={45}
                  className="w-10 h-10 md:w-[60px] md:h-[60px] transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button + Arrow Group - RIGHT SIDE ON BOTH MOBILE AND DESKTOP */}
      <div className="absolute bottom-7 right-5 md:right-10 z-20 flex flex-col items-end gap-4 md:gap-6">
        {/* Arrow Button */}
        <button
          onClick={scrollToBottom}
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 md:w-[92px] md:h-[92px]"
          >
            <rect
              x="1"
              y="1"
              width="90"
              height="90"
              rx="45"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M48.0833 29.3333C48.0833 28.1827 47.1506 27.25 46 27.25C44.8494 27.25 43.9167 28.1827 43.9167 29.3333V58.6787L33.9315 48.6935C33.1179 47.8799 31.7988 47.8799 30.9852 48.6935C30.1716 49.5071 30.1716 50.8262 30.9852 51.6398L43.0537 63.7083C44.6809 65.3355 47.3191 65.3355 48.9463 63.7083L61.0148 51.6398C61.8284 50.8262 61.8284 49.5071 61.0148 48.6935C60.2012 47.8799 58.8821 47.8799 58.0685 48.6935L48.0833 58.6787V29.3333Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Explore Button */}
        <Button
          onClick={() =>
            document
              .getElementById("minerals-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-6 md:px-8 md:py-8 text-sm md:text-base text-black font-semibold bg-white rounded-2xl hover:bg-white/90 transition border border-black shadow-lg"
        >
          Explore Ethiopia Minerals
        </Button>
      </div>
    </div>
  );
}