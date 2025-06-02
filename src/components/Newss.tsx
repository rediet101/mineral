import React from 'react'

export default function News() {
  return (
    <main className="min-h-screen py-8 md:py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 md:mb-16">
          News
        </h1>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16 mb-8 md:mb-16">
          {/* News Card 1 */}
          <div className="flex flex-col space-y-3 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#004F57] leading-tight">
              COULD ETHIOPIA'S MINING SECTOR TRANSFORM THE ECONOMY WITHIN FIVE YEARS?
            </h2>
            <p className="text-sm md:text-base text-[#004F57]">
              home to Africa's second-fastest growing economy — is experiencing significant foreign interest in its mining sector, even though the bloody Tigray conflict has only recently come to an end.
            </p>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/news1.svg"
                alt="Mining operations"
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-6">
              <span className="text-base md:text-xl font-bold">READ MORE</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#157E71] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white md:w-6 md:h-6">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="flex flex-col space-y-3 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#004F57] leading-tight">
              COULD ETHIOPIA'S MINING SECTOR TRANSFORM THE ECONOMY WITHIN FIVE YEARS?
            </h2>
            <p className="text-sm md:text-base text-[#004F57]">
              home to Africa's second-fastest growing economy — is experiencing significant foreign interest in its mining sector, even though the bloody Tigray conflict has only recently come to an end.
            </p>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/news1.svg"
                alt="Mining operations"
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-6">
              <span className="text-base md:text-xl font-bold">READ MORE</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#157E71] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white md:w-6 md:h-6">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="flex flex-col space-y-3 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#004F57] leading-tight">
              COULD ETHIOPIA'S MINING SECTOR TRANSFORM THE ECONOMY WITHIN FIVE YEARS?
            </h2>
            <p className="text-sm md:text-base text-[#004F57]">
              home to Africa's second-fastest growing economy — is experiencing significant foreign interest in its mining sector, even though the bloody Tigray conflict has only recently come to an end.
            </p>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/news1.svg"
                alt="Mining operations"
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-6">
              <span className="text-base md:text-xl font-bold">READ MORE</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#157E71] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white md:w-6 md:h-6">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* News Card 4 */}
          <div className="flex flex-col space-y-3 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#004F57] leading-tight">
              COULD ETHIOPIA'S MINING SECTOR TRANSFORM THE ECONOMY WITHIN FIVE YEARS?
            </h2>
            <p className="text-sm md:text-base text-[#004F57]">
              home to Africa's second-fastest growing economy — is experiencing significant foreign interest in its mining sector, even though the bloody Tigray conflict has only recently come to an end.
            </p>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/news1.svg"
                alt="Mining operations"
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-6">
              <span className="text-base md:text-xl font-bold">READ MORE</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#157E71] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white md:w-6 md:h-6">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg font-semibold">
            View All
          </button>
        </div>
      </div>
    </main>
  );
}