const Footer = () => {
  return (
    <>
      <img
        src="src/assets/white-blue-skinnier.svg"
        alt=""
        className="bg-cover w-full aspect-[960/150] bg-no-repeat bg-center"
      />
      <footer className="text-stone-100 background-color: bg-cyan-600 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between p-4 bottom-0">
        <div>&copy; 2024 Scott Nicolas</div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
