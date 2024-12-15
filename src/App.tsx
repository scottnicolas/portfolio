const App = () => (
  <>
    <div className="min-h-screen relative">
      <img
        src="src/assets/hacker-hero.svg"
        alt="Hero Background"
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="absolute z-0 h-full w-full left-0 top-0 right-0 bottom-0 object-cover text-transparent"
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
                      About Me
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
      <div className=" max-w-screen-2xl absolute top-48 md:top-auto md:bottom-0 left-0 right-0 mx-auto pb-12">
        <div className="max-w-screen-2xl mx-auto sm:px-16">
          <div className="absolute right-0 bottom-10 border-8 border-white">
            <img src="src/assets/scott-portrait.jpg" alt="Portrait" />
          </div>
          <div className="md:block hidden">
            <h1 className="text-9xl font-bold">SCOTT NICOLAS</h1>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#DFFA7A]">
      <div className="overflow-hidden relative flex">
        <div className="whitespace-nowrap animate-marquee py-2">
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center mr-36">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
        </div>

        <div className="absolute top-0 whitespace-nowrap animate-marquee2 py-2">
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
          <span className="inline-flex items-center mr-36">
            <span className="text-xl font-bold tracking-tight">
              SCOTT NICOLAS
            </span>
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-2"
            />
          </span>
        </div>
      </div>
    </div>

    <section id="about" className="bg-black text-white py-16 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl lg:text-3xl flex items-center">About Me</h2>
      </div>
    </section>

    <section id="skills" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col mt-5 mb-6">
          <h2 className="text-2xl lg:text-3xl flex items-center">My Skills</h2>
        </div>
      </div>
    </section>

    <section
      style={{ backgroundImage: "url(src/assets/speakers-gradient.png)" }}
      className="relative bg-cover bg-center min-h-screen laptop:h-[125vh]"
    >
      <section
        style={{ backgroundImage: "url(src/assets/speakers-gradient.png)" }}
        id="projects"
        className="bg-black text-black pt-16 px-4 md:px-8 lg:px-0 bg-cover bg-center"
      >
        <div className="max-w-screen-xl mx-auto pb-8">
          <h2 className="text-2xl lg:text-3xl flex items-center">
            My Projects
          </h2>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full p-0 laptop:grid-cols-2">
          <div className="bg-gray-300 h-full flex items-center justify-center">
            <img
              loading="lazy"
              width={1176}
              height={814}
              decoding="async"
              className="object-cover w-full h-full text-transparent"
              src="src/assets/design.png"
              alt=""
            />
          </div>
          <div className="p-12 text-black flex flex-col justify-center items-start">
            <span className=" jsx-89dd54c682c9ae2 px-1 pt-2 mr-2 py-0 border border-solid border-black rounded-full inline-flex items-center">
              <img
                src="src/assets/star-black.svg"
                alt="star"
                width={25}
                height={25}
                decoding="async"
                className="ml-2 relative -top-[3px]"
              />
              <span className="text-xl md:text-3xl text-black">
                &nbsp;&nbsp;Spotify Clone&nbsp;
              </span>
            </span>
            <p className="text-black text-base md:text-xl text-left pt-4 pr-4 pb-4 pl-0">
              Spotify clone project utlizing next.js, react, supabase...
            </p>
          </div>
          <div className="p-12 text-black flex flex-col justify-center items-end">
            <span className="px-1 pt-2 mr-2 py-0 border border-solid border-black rounded-full inline-flex items-center max-w-sm">
              <img
                src="src/assets/star-black.svg"
                alt="star"
                width={25}
                height={25}
                decoding="async"
                className="ml-2 relative -top-[3px]"
              />
              <span className="text-xl md:text-3xl text-black">
                &nbsp;&nbsp;Budget Splitter&nbsp;
              </span>
            </span>
            <p className="text-black text-base md:text-xl text-right pt-4 pr-4 pb-4 pl-0">
              Budget splitting project utlizing next.js, react, supabase...
            </p>
          </div>
        </div>
      </section>
    </section>
  </>
);

export default App;
