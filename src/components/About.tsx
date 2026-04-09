import { Guitar, Mic2, Users } from "lucide-react";

const highlights = [
  { icon: Mic2, title: "Canto com tecnica e interpretacao" },
  { icon: Guitar, title: "Instrumentos: violao, piano e mais" },
  { icon: Users, title: "Aulas individuais e acompanhamento proximo" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="section-shell relative w-full min-w-0 py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-12 -z-10 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="section-subtitle">Sobre</p>
        <h2 className="section-title accent-line accent-line-center mt-3">
          Ozeart's
        </h2>
        <div className="mt-8 space-y-4 text-pretty">
          <p className="text-base leading-relaxed text-stone-200 sm:text-lg">
            O Ozeart&apos;s une{" "}
            <strong className="font-semibold text-[#e8b565]">
              aulas de canto
            </strong>{" "}
            e{" "}
            <strong className="font-semibold text-[#e8b565]">
              aulas de instrumentos
            </strong>{" "}
            no mesmo lugar: cada encontro parte do seu nivel — voz, violao,
            piano ou outro foco — com plano claro para evolucao e apresentacoes.
          </p>
          <p className="text-sm leading-relaxed text-stone-500 sm:text-base">
            Exercicios direcionados, escuta ativa e feedback constante, seja na
            tecnica vocal ou na execucao instrumental.
          </p>
        </div>
      </div>

      <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5">
        {highlights.map(({ icon: Icon, title }) => (
          <li key={title}>
            <article
              className="glass soft-hover flex h-full flex-col items-center rounded-2xl px-5 py-7 text-center sm:px-6 sm:py-8"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e8b565]/12 ring-1 ring-[#e8b565]/28">
                <Icon className="size-6 text-[#e8b565]" />
              </div>
              <p className="mt-4 text-sm font-semibold leading-snug text-stone-100">
                {title}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
