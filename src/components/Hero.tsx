const Hero = () => {
  return (
    <>
      <div className="min-h-72 w-full grid place-content-center justify-items-center overflow-x-hidden">
        <div className="flex justify-center gap-8 max-w-7xl mx-auto">
          <div className="flex-auto">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10" />
          </div>
          <div className="flex-auto">
            <h1 className="text-5xl top-0 font-bold">Scott Nicolas</h1>
            <h1 className="items-center justify-center text-5xl pb-1 font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-transparent bg-clip-text inline-block">
              Front-End Engineer
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
