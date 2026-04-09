import { Guitar, Mic2, Theater } from "lucide-react";

const classes = [
  {
    title: "Canto e voz",
    description:
      "Respiracao, afinacao, repertorio e interpretacao — da primeira nota a performance com seguranca.",
    icon: Mic2,
  },
  {
    title: "Instrumentos musicais",
    description:
      "Violao, piano e outros instrumentos: postura, digitacao, leitura ritmica e musicas que voce quer tocar.",
    icon: Guitar,
  },
  {
    title: "Palco e performance",
    description:
      "Prepare-se para shows, audicoes ou gravacoes — integre voz e instrumento com presenca e confianca.",
    icon: Theater,
  },
];

export function Services() {
  return (
    <section
      id="aulas"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 translate-x-1/3 rounded-full bg-[#e8b565]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-[#6b4423]/28 blur-3xl"
        aria-hidden
      />

      <header className="mb-10 max-w-xl sm:mb-12 lg:mb-14">
        <p className="section-subtitle">Aulas</p>
        <h2 className="section-title mt-3 text-balance">
          <span className="text-[#e8b565]">Canto</span> e{" "}
          <span className="text-[#e8b565]">instrumentos</span> no seu ritmo
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-stone-400/90 sm:text-base">
          Trilhas para voz e para instrumentos — iniciante ao avancado, com
          acompanhamento proximo em cada etapa.
        </p>
      </header>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
        {classes.map(({ title, description, icon: Icon }, index) => {
          const isWide = index === 0;
          const isBar = index === 2;
          return (
            <article
              key={title}
              className={`glass soft-hover group relative overflow-hidden rounded-2xl p-6 shadow-xl shadow-black/20 sm:p-7 lg:min-h-0 ${
                isWide
                  ? "lg:col-span-7 lg:flex lg:min-h-[260px] lg:flex-col lg:justify-between lg:p-8"
                  : isBar
                    ? "lg:col-span-12 lg:flex lg:flex-row lg:items-center lg:gap-8 lg:p-8"
                    : "lg:col-span-5 lg:flex lg:min-h-[260px] lg:flex-col lg:justify-between lg:p-8"
              }`}
            >
              <span
                className="pointer-events-none absolute -right-1 top-3 select-none text-[4.5rem] font-bold leading-none text-white/[0.05] transition duration-500 group-hover:text-white/[0.08]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b565]/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className={`relative flex min-w-0 flex-col ${isBar ? "lg:flex-1 lg:flex-row lg:items-center lg:gap-8" : ""}`}
              >
                <div
                  className={`mb-4 inline-flex w-fit rounded-xl bg-[#e8b565]/10 p-3.5 ring-1 ring-[#e8b565]/22 transition duration-300 group-hover:bg-[#e8b565]/16 group-hover:ring-[#e8b565]/38 lg:mb-0 ${isBar ? "lg:shrink-0" : ""}`}
                >
                  <Icon className="size-5 text-[#e8b565] transition duration-300 group-hover:scale-110 sm:size-6" />
                </div>
                <div className={isBar ? "min-w-0 flex-1" : ""}>
                  <h3
                    className={`font-semibold tracking-tight text-white ${isWide ? "text-xl sm:text-2xl" : "text-lg"}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-stone-200/95 sm:mt-3 ${isWide ? "max-w-xl text-sm sm:text-base" : "text-sm"}`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
