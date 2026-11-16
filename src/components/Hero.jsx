function Hero() {
  return (
    <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">

      <div>
        <h1 className="text-6xl font-bold leading-[0.9] tracking-tight text-neutral-900 md:text-[length:min(13vw,10rem)] ">
          Software
          <br />
          Engineer
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Est. 2026
        </p>
      </div>


      <div className="flex flex-col gap-10 md:items-end md:gap-16">
        <img
          src="portrait.jpg"
          alt="Portrait"
          className="h-72 w-72 rounded-2xl object-cover md:h-[26rem] md:w-[26rem]"
        />
        <p className="max-w-xs text-base text-neutral-900 md:text-right md:text-lg">
          Hi, my name is Giggs Muturi, and I am an aspiring software engineer.
          My goal is to solve real-world problems through technology.
        </p>
      </div>
    </section>
  );
}

export default Hero;