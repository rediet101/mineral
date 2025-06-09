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
          src="/hero.svg"
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
  <h1 className="text-6xl md:text-7xl font-bold text-left whitespace-nowrap ml-10">
    Ethiopian Mineral Corporation
  </h1>


<div className="flex flex-col items-start">
  <img
    src="ethiopia.svg"
    alt="Ethiopia map"
    className="w-auto max-w-full block ml-5 mt-5"
  />

  <p className="-mt-20 ml-10 max-w-2xl text-base md:text-lg text-left">
    Ethiopian Minerals Corporation is a state-owned enterprise established
    in 1942 tasked with the exploration, development, processing and
    marketing of mineral resources in Ethiopia.
  </p>
</div>


        {/* Cards Section */}
        <div className="flex flex-wrap mt-15 mb-5">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/30 w-64 ">
            <h3 className="text-xl font-semibold mb-2 text-white">
              100+ Minerals
            </h3>
            <p className="text-sm text-white">
              We want our visitors to be inspired to get their Minds Open.
            </p>
          </div>

          {/* Card 2: Stacked Stones */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/30 w-32 flex flex-col justify-center items-center relative">
            {[
              { src: "/green.svg", alt: "Emerald", z: "z-10" },
              { src: "/red.svg", alt: "Ruby", z: "z-20" },
              { src: "/golden.svg", alt: "Gold", z: "z-10" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative -mt-5 ${item.z} hover:z-30`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={60}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button + Arrow Group */}
      <div className="absolute bottom-7 right-10 md:right-15 z-20 flex flex-col items-end gap-6">
        {/* Arrow Button */}
        <button
          onClick={scrollToBottom}
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          <svg
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          className="px-8 py-8 md:px-13 text-black font-semibold bg-white rounded-2xl hover:bg-white/90 transition border border-black shadow-lg"
        >
          Explore Ethiopia Minerals
        </Button>
      </div>
    </div>
  );
}
