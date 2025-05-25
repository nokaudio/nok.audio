

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
              <div className="mt-6 flex space-x-6 sm:max-w-xl sm:mx-auto lg:mx-0">
                <a href="https://x.com/nokaudio" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    X
                  </span>
                </a>
                <a href="https://jgsw.booth.pm/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                      <line x1="8" y1="16" x2="16" y2="16"></line>
                      <line x1="8" y1="8" x2="10" y2="8"></line>
                    </svg>
                    BOOTH
                  </span>
                </a>
              </div>
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
