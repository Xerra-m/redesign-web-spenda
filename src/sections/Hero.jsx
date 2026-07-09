import heroBg from "../assets/hero.webp";

function Hero() {
  return (
    <section className="relative h-[60dvh] min-h-[300px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 object-cover object-center w-full h-full"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs md:backdrop-blur-sm"></div>
      {/* teks */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-slate-200 text-2xl md:text-4xl font-bold">
          SMP N 2 Kota Tegal
        </h1>
        <p className="text-slate-300 text-md md:text-2xl">
          "Sekolah Sang Juara"
        </p>
      </div>
    </section>
  );
}

export default Hero;
