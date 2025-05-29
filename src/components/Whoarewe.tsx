// app/about/page.jsx
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left column - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-8xl font-bold text-black mb-12">
              Who we are
            </h1>

            <div className="space-y-8 text-xl font-semibold">
              <p>
                Ethiopian Minerals Corporation is a state-owned enterprise established in 1942 tasked with the exploration, development, processing and marketing of mineral resources in Ethiopia.
              </p>

              <p>
                Having been established in different iterations our corporation was established as the pioneer mechanised mining operator in Africa. We're engaged in the exploration, mining, acquisition and processing of various mineral commodities like gemstones, gold, petroleum, natural gas and various industrial metals and minerals.
              </p>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/mineral.jpg"
                alt="Historical photo of mining operations"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </div>

        {/* Logo centered at bottom */}
        <div className="flex justify-center mt-20">
          <img
            src="/logo2.svg"
            alt="Ethiopian Mineral Corporation"
            className="h-40"
          />
        </div>
      </div>
    </main>
  );
}