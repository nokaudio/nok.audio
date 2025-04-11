import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">we bring new</span>
                <span className="block text-accent">SAWWAVE</span>
                <span className="block">to the world</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Crafting Eurorack modules, igniting stages, and producing electrifying beats.
              </p>
              <p className="mt-2 text-base text-gray-400 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Nok derives from the Japanese word for saw, 'NOKOGIRI'.
              </p>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full transform scale-[1.4]"
          src="/logo2.png"
          alt="Nok Audio Hero"
        />
      </div>
    </div>
  );
}