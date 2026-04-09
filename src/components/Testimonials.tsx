"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: "1",
    name: "Carla M.",
    role: "Aluna",
    quote:
      "Didatica clara e ambiente acolhedor. Em poucas semanas ja senti mais controle e menos tensao ao cantar.",
    photo: "/avatars/ana.svg",
  },
  {
    id: "2",
    name: "Rafael T.",
    role: "Violao e voz",
    quote:
      "Comecei violao e canto no mesmo espaco; as orientacoes sao objetivas e da para aplicar no dia a dia. Recomendo.",
    photo: "/avatars/lucas.svg",
  },
  {
    id: "3",
    name: "Juliana P.",
    role: "Iniciante",
    quote:
      "Eu tinha vergonha de cantar em voz alta; hoje consigo ensaiar com mais seguranca e prazer.",
    photo: "/avatars/mariana.svg",
  },
  {
    id: "4",
    name: "Marcos O.",
    role: "Cantor amador",
    quote:
      "Foco em tecnica sem perder a parte artistica. Troque estes depoimentos pelos feedbacks reais do cliente.",
    photo: "/avatars/ana.svg",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-[#e8b565] text-[#e8b565] sm:size-4"
        />
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="glass soft-hover group relative h-full overflow-hidden rounded-2xl p-6 shadow-xl shadow-black/25 transition-[box-shadow,transform] duration-300 sm:p-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b565]/70 to-transparent opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#e8b565]/[0.12] blur-3xl transition-opacity duration-500 group-hover:bg-[#e8b565]/[0.18]"
        aria-hidden
      />

      <Quote
        className="pointer-events-none absolute right-4 top-4 size-14 text-[#e8b565]/15 transition-transform duration-500 group-hover:scale-105 group-hover:text-[#e8b565]/25 sm:right-5 sm:top-5 sm:size-16"
        strokeWidth={1}
        aria-hidden
      />

      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e8b565]/50 to-transparent opacity-60 blur-md"
              aria-hidden
            />
            <Image
              src={item.photo}
              alt={`Foto de ${item.name}`}
              width={56}
              height={56}
              className="relative rounded-full object-cover ring-2 ring-[#e8b565]/35 ring-offset-2 ring-offset-[#120e0c]/85"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold tracking-tight text-white">{item.name}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#e8b565]/90">
              {item.role}
            </p>
            <div className="mt-2.5">
              <StarRow />
            </div>
          </div>
        </div>

        <blockquote className="relative m-0 border-l-2 border-[#e8b565]/50 pl-4">
          <p className="text-[0.9375rem] font-light italic leading-relaxed text-stone-100/95 sm:text-base">
            {item.quote}
          </p>
        </blockquote>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  return (
    <section
      id="depoimentos"
      className="section-shell w-full min-w-0 py-16 sm:py-20"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:items-start lg:gap-12 xl:gap-14">
        <header className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-none lg:pt-2 lg:text-left">
          <p className="section-subtitle">Depoimentos</p>
          <h2 className="section-title mt-3 text-balance">
            Quem estudou{" "}
            <span className="text-[#e8b565]">canto</span> e{" "}
            <span className="text-[#e8b565]">instrumentos</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
            Exemplos de depoimentos — troque por avaliacoes reais de alunos de
            voz e de instrumentos.
          </p>
        </header>

        <div
          className="relative min-w-0 max-w-full"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de alunos"
        >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5 sm:gap-6 [-webkit-tap-highlight-color:transparent]">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 basis-[min(100%,22rem)] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

          <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10 lg:items-end">
            <div
              className="flex max-w-full flex-wrap justify-center gap-2 px-2 lg:justify-end"
              role="group"
              aria-label="Ir para um depoimento"
            >
              {Array.from({ length: snapCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Depoimento ${index + 1} de ${snapCount}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8b565] ${index === selectedIndex
                      ? "w-8 bg-[#e8b565]"
                      : "w-2 bg-white/25 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
