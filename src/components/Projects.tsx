const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="min-h-52 bg-cyan-600 overflow-x-hidden">
          <img
            src="src/assets/white-blue-skinnier.svg"
            alt=""
            className="w-full bg-cover bg-center aspect-[960/150] overflow-x-hidden"
          />

          <div className="max-w-7xl flex flex-col justify-start gap-5 mx-auto">
            <h1 className="text-4xl font-bold text-stone-100">My Projects</h1>
          </div>
          <div className="gap-8 flex justify-center p-10 max-w-7xl mx-auto">
            <div className="bg-gray-500 rounded-xl w-96 h-72 flex-1 border-hidden hover:border hover:border-white hover:duration-200 transition"></div>
            <div className="w-72 flex-auto">
              <h1 className="text-5xl font-semibold text-stone-100">
                Spotify Clone
              </h1>
              <p className="text-stone-100 text-lg py-3">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Libero
                tempus quisque viverra laoreet condimentum a habitasse leo.
                Sodales ornare netus hac faucibus aliquam.
              </p>
              <a
                href="#"
                role="button"
                className="bg-stone-100 font-semibold p-2 rounded-full border hover:bg-cyan-600 hover:border-stone-100 hover:text-stone-100"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="gap-8 flex justify-around p-10 max-w-7xl mx-auto">
            <div className="w-72 flex-auto">
              <h1 className="text-5xl font-semibold text-stone-100">
                Budget Splitter
              </h1>
              <p className="text-stone-100 text-lg py-3">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Libero
                tempus quisque viverra laoreet condimentum a habitasse leo.
                Sodales ornare netus hac faucibus aliquam.
              </p>
              <a
                href="#"
                role="button"
                className="bg-stone-100 font-semibold p-2 my-4 rounded-full border hover:bg-cyan-600 hover:border-stone-100 hover:text-stone-100"
              >
                Live Demo
              </a>
            </div>
            <div className="bg-gray-500 rounded-xl w-96 h-72 flex-auto"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
