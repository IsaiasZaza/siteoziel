import { ExternalLink, MapPin, Navigation } from "lucide-react";

// Link compartilhável (abre no app / navegador)
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/oxgEagrrMfgUJgDZ6";

// src do iframe: Google Maps → Compartilhar → Incorporar um mapa
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.551540421984!2d-48.0812409!3d-15.8801505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd2b4c45db957%3A0xbbe771c21204b1b4!2sOzeart%27s%20Aula%20De%20Canto%20E%20Instrumentos!5e0!3m2!1spt-BR!2sbr!4v1775761426480!5m2!1spt-BR!2sbr";

export function Location() {
  const hasLink = GOOGLE_MAPS_LINK.length > 0;
  const hasEmbed = GOOGLE_MAPS_EMBED_SRC.length > 0;

  return (
    <section
      id="localizacao"
      className="section-shell relative w-full min-w-0 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-64 w-64 translate-x-1/4 rounded-full bg-[#e8b565]/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <p className="section-subtitle">Localizacao</p>
        <h2 className="section-title mt-3">Venha nos visitar</h2>
        <p className="mt-4 text-sm leading-relaxed text-stone-300/90 sm:text-base">
          Ozeart&apos;s —{" "}
          <strong className="font-semibold text-[#e8b565]">canto</strong> e{" "}
          <strong className="font-semibold text-[#e8b565]">instrumentos</strong>
          . Veja o endereco no mapa ou abra a rota no Google Maps.
        </p>
      </div>

      <div className="glass relative overflow-hidden rounded-3xl shadow-2xl shadow-black/25">
        <div
          className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-[#e8b565]/45 to-transparent"
          aria-hidden
        />

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:items-stretch">
          <div className="relative flex min-w-0 flex-col justify-center gap-8 p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage: `
                  linear-gradient(rgba(232, 181, 101, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(232, 181, 101, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative">
              <div className="inline-flex rounded-xl bg-[#e8b565]/10 p-3 ring-1 ring-[#e8b565]/22">
                <MapPin className="size-6 text-[#e8b565]" aria-hidden />
              </div>
              <p className="mt-5 text-lg font-semibold tracking-tight text-white">
                Ozeart&apos;s
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-400">
                Toque no botao abaixo para traçar rota ate o espaco ou explore o
                mapa ao lado.
              </p>
            </div>

            {hasLink ? (
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#e8b565] px-6 py-3.5 text-sm font-semibold text-[#1a1510] shadow-lg shadow-[#e8b565]/20 transition hover:-translate-y-0.5 hover:bg-[#f5d08a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8b565] sm:w-auto"
              >
                <Navigation className="size-4 shrink-0" aria-hidden />
                Abrir no Google Maps
                <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            ) : (
              <p className="relative text-sm text-amber-200/90">
                Defina{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-stone-200">
                  GOOGLE_MAPS_LINK
                </code>{" "}
                no arquivo Location.tsx
              </p>
            )}
          </div>

          <div className="relative min-h-0 min-w-0 border-t border-white/10 lg:border-l lg:border-t-0">
            {hasEmbed ? (
              <div
                className="relative aspect-5/4 w-full min-w-0 overflow-hidden sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-[min(24rem,55vh)]"
              >
                <iframe
                  title={`Mapa da Ozeart's Aula De Canto E Instrumentos no Google Maps`}
                  src={GOOGLE_MAPS_EMBED_SRC}
                  className="pointer-events-auto absolute inset-0 box-border block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 bg-[#1a1512]/55 p-8 text-center lg:min-h-[320px]">
                <Navigation
                  className="size-10 text-[#e8b565]/40"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="max-w-xs text-sm text-stone-400/90">
                  Para o mapa interativo, abra o Google Maps,{" "}
                  <strong className="font-medium text-stone-200">
                    Incorporar mapa
                  </strong>{" "}
                  e cole o <code className="rounded bg-white/10 px-1 text-xs">src</code>{" "}
                  em{" "}
                  <code className="rounded bg-white/10 px-1 text-xs">
                    GOOGLE_MAPS_EMBED_SRC
                  </code>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
