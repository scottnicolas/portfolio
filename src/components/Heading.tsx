const Heading = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <img
          src="src/assets/hacker-hero.svg"
          alt="Hero Background"
          decoding="async"
          data-nimg="fill"
          className="z-0 h-full w-full left-0 top-0 right-0 bottom-0 object-cover text-transparent"
        />
        <header className="fixed top-0 left-0 right-0 z-50">
          <nav className="transition-all duration-300 bg-white/80 backdrop-blur-md">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-row justify-between leading-[normal] items-center py-4">
                <h1 className="text-xl font-black text-black">
                  <a href="/">[scott nicolas]</a>
                </h1>
                <div className="flex items-center space-x-6 lg:space-x-16">
                  <ul className="hidden md:flex items-center text-sm font-medium space-x-6 lg:space-x-16 justify-start">
                    <li className="uppercase whitespace-nowrap">
                      <a className="px-3 py-2 text-black" href="#about">
                        About
                      </a>
                    </li>
                    <li className="uppercase whitespace-nowrap">
                      <a className="px-3 py-2 text-black" href="#projects">
                        Projects
                      </a>
                    </li>
                  </ul>
                  <button
                    className="md:hidden ml-4 text-black"
                    aria-label="Toggle menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1={4} x2={20} y1={12} y2={12}></line>
                      <line x1={4} x2={20} y1={6} y2={6}></line>
                      <line x1={4} x2={20} y1={18} y2={18}></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className=" max-w-screen-2xl absolute top-48 md:top-auto md:bottom-0 left-0 right-0 mx-auto pb-12"></div>
      </div>
    </>
  );
};

export default Heading;
