import Image from "next/image";
import { Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-w-0 overflow-hidden pt-20 sm:pt-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,#a67c52_0%,#5c3d24_38%,#151210_72%)]" />
      <div
        className="glow-drift absolute -left-20 top-32 -z-10 h-64 w-64 rounded-full bg-[#e8b565]/14 blur-3xl"
        aria-hidden
      />
      <div
        className="glow-drift-reverse absolute -right-16 bottom-24 -z-10 h-72 w-72 rounded-full bg-[#6b4423]/35 blur-3xl"
        style={{ animationDelay: "2.5s" }}
        aria-hidden
      />

      <div className="section-shell relative pb-20 sm:pb-28">
        <div className="relative min-w-0">
          <div className="group relative hidden aspect-video w-full min-h-[220px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141210] shadow-2xl shadow-black/50 sm:block md:min-h-[260px] lg:min-h-[280px]">
            <Image
              src="/ozArtes.jpeg"
              alt="Ozeart's — aulas de canto e instrumentos"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-contain object-center transition-transform duration-[1.05s] ease-out group-hover:scale-[1.02]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151210]/80 via-transparent to-[#151210]/25"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl px-3 sm:-mt-20 sm:max-w-2xl sm:px-2 lg:-mt-24 lg:max-w-3xl">
            <div className="glass soft-hover rounded-2xl px-5 py-7 text-center shadow-2xl sm:rounded-3xl sm:px-10 sm:py-10">
              <span className="mx-auto mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-stone-200">
                <Sparkles className="size-4 shrink-0 text-[#e8b565]" />
                <span>
                  Ozeart&apos;s ·{" "}
                  <strong className="font-semibold text-[#e8b565]">Canto</strong>
                  {" · "}
                  <strong className="font-semibold text-[#e8b565]">
                    Instrumentos
                  </strong>
                </span>
              </span>
              <h1 className="text-balance text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight">
                Sua voz e seus{" "}
                <span className="text-[#e8b565]">instrumentos</span> em primeiro
                plano
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-stone-300 sm:text-base">
                Aulas de <strong className="font-semibold text-stone-200">canto</strong> com tecnica e interpretacao, e de{" "}
                <strong className="font-semibold text-[#e8b565]">
                  instrumentos
                </strong>{" "}
                (violao, piano e outros) com postura, leitura e repertorio —
                tudo no mesmo espaco, do estudio ao palco.
              </p>
              <div className="mt-8 flex justify-center">
                <WhatsAppButton
                  label="Fale no WhatsApp"
                  className="w-full max-w-sm px-8 py-3.5 text-sm sm:w-auto sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
