function Navbar() {
  return (
    <nav className="bg-black p-4 rounded-full mx-4 mt-4">
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer lg:justify-self-start">
          GM
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 items-center text-xl">
          <a href="/" className="text-white px-4 py-2 hover:text-orange-600">About</a>
          <a href="/" className="text-white px-4 py-2 hover:text-orange-600">Projects</a>
        </div>

        <a
          href="/"
          className="text-white text-xl px-5 py-2 mt-4 lg:mt-0 lg:justify-self-end rounded-full border border-white/40 hover:text-orange-600 hover:border-orange-600"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;