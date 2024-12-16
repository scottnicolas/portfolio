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
              <h1 className="text-xl font-dm-sans-serif font-black text-black">
                <a href="/">[scott nicolas]</a>
              </h1>
              <div className="flex items-center space-x-6 lg:space-x-16">
                <ul className="hidden md:flex items-center text-sm font-medium space-x-6 lg:space-x-16 justify-start">
                  <li className="uppercase whitespace-nowrap">
                    <a
                      className="font-dm-sans-serif px-3 py-2 text-black"
                      href="#about"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="uppercase whitespace-nowrap">
                    <a
                      className="font-dm-sans-serif px-3 py-2 text-black"
                      href="#projects"
                    >
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
          <div className="md:block hidden">
            <h1 className="font-dm-sans-serif text-9xl font-bold">
              SCOTT NICOLAS
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#DFFA7A]">
      <div className="overflow-hidden relative flex">
        <div className="whitespace-nowrap animate-marquee py-2">
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center mr-36">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
        </div>
      </div>
    </div>

    <section id="about" className="bg-black text-white py-16 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-dm-serif text-2xl lg:text-3xl flex items-center">
          About Me
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <p className="flex items-center font-dm-sans-serif text-base md:text-xl text-left pt-4 pr-4 pb-4 pl-0">
          Hey, I'm Scott Nicolas and I am a web developer who likes to I am
          currently a student at the University of Hawaii at Hilo. I look
          forward to learning about new technologies and innovative designs.
        </p>
      </div>
    </section>

    <section id="skills" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col mt-5 mb-6">
          <h2 className="font-dm-serif text-2xl lg:text-3xl flex items-center">
            My Skills
          </h2>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <h2 className="font-dm-serif text-xl">Languages</h2>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  HTML
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  CSS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  TypeScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Python
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  C++
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  SQL
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-dm-serif text-xl">Frameworks & Libraries</h2>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  React
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Next.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Tailwind CSS
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-dm-serif text-xl">Developer Tools</h2>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Git
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  GitHub
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Figma
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-white mt-8">
          <div className="grid auto-cols-auto justify-center items-center divide-x divide-y divide-white border-t border-white">
            <div className="bg-white">
              <div className="relative">
                <img
                  src="src/assets/html.png"
                  alt="HTML Logo"
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain"
                />
              </div>
              <div className="relative">
                <img
                  src="src/assets/html.png"
                  alt="HTML Logo"
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain"
                />
              </div>
              <div className="relative">
                <img
                  src="src/assets/html.png"
                  alt="HTML Logo"
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain"
                />
              </div>
              <div className="relative">
                <img
                  src="src/assets/html.png"
                  alt="HTML Logo"
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain"
                />
              </div>
            </div>
          </div>
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
          <h2 className="font-dm-serif text-2xl lg:text-3xl flex items-center">
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
              src="src/assets/spotify-screenshot.png"
              alt=""
            />
          </div>
          <div className="p-12 text-black flex flex-col justify-center items-start">
            <span className="px-2 py-1 border border-solid border-black rounded-full flex items-center space-x-2">
              <img
                src="src/assets/star-black.svg"
                alt="star"
                width={25}
                height={25}
                decoding="async"
                className="block"
              />
              <span className="text-xl md:text-3xl text-black font-dm-serif ml-2">
                Spotify Clone
              </span>
            </span>
            <p className="text-black font-dm-sans-serif text-base md:text-xl text-left pt-4 pr-4 pb-4 pl-0">
              A full-stack replica of the Spotify website, featuring user
              authentication, playlist management, and seamless database
              integration. Built using Next.js, React, TypeScript, TailwindCSS,
              and Supabase to deliver a modern, responsive, and dynamic user
              experience.
            </p>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Next.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  React
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  TypeScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Supabase
                </div>
              </li>
            </ul>
          </div>
          <div className="p-12 text-black flex flex-col justify-center items-end">
            <span className="px-2 py-1 border border-solid border-black rounded-full flex items-center space-x-2 max-w-sm">
              <img
                src="src/assets/star-black.svg"
                alt="star"
                width={25}
                height={25}
                decoding="async"
                className="block"
              />
              <span className="text-xl md:text-3xl text-black font-dm-serif ml-2">
                Budget Splitter
              </span>
            </span>
            <p className="text-black font-dm-sans-serif text-base md:text-xl text-right pt-4 pr-4 pb-4 pl-0">
              Developed a custom tool for the Liberal Arts Department at Hawaiʻi
              Community College to streamline budget allocation. Replaced manual
              processes with a modern, user-friendly solution, enhancing
              efficiency and accuracy in resource distribution.
            </p>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  React
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  TypeScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-700/50 px-3 py-1 text-s font-medium leading-5 text-teal-300">
                  Tailwind CSS
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-300 h-full flex items-center justify-center">
            <img
              loading="lazy"
              width={1176}
              height={814}
              decoding="async"
              className="object-cover w-full h-full text-transparent"
              src="src/assets/Screenshot 2024-12-15 at 1.31.51 PM.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>

    <div className="bg-[#DFFA7A]">
      <div className="overflow-hidden relative flex">
        <div className="whitespace-nowrap animate-marquee py-2">
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
          <span className="inline-flex items-center mr-36">
            <img
              src="src/assets/star-black.svg"
              alt="Star Icon"
              loading="lazy"
              width={15}
              height={15}
              decoding="async"
              className="mx-20"
            />
          </span>
        </div>
      </div>
    </div>

    <section id="footer">
      <div className="p-3 flex">
        <ul className="flex items-center">
          <li className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-slate-200"
              href="https://www.linkedin.com/in/scottnicolas/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-slate-200"
              href="https://github.com/scottnicolas"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="absolute right-5">
          <p>© 2024 Scott Nicolas</p>
        </div>
      </div>
    </section>
  </>
);

export default App;
