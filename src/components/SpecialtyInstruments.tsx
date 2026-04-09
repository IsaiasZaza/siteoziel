import type { LucideIcon } from "lucide-react";
import {
  AudioWaveform,
  Drum,
  Drumstick,
  Guitar,
  KeyboardMusic,
} from "lucide-react";

type InstrumentItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: "Carro-chefe" | "Destaque";
};

const instruments: InstrumentItem[] = [
  {
    title: "Bateria",
    badge: "Carro-chefe",
    description:
      "Pilar da casa: independencia, groove, leitura e preparacao para ao vivo e estudio — dos fundamentos ao repertorio que voce quiser.",
    icon: Drum,
  },
  {
    title: "Sanfona",
    badge: "Destaque",
    description:
      "Baixos, melodias, forro e musica regional — postura, fole e musicalidade com atencao dedicada ao instrumento.",
    icon: AudioWaveform,
  },
  {
    title: "Teclado",
    description:
      "Harmonia, maos coordenadas, timbres e base para cantar ou compor, do popular ao que voce precisa.",
    icon: KeyboardMusic,
  },
  {
    title: "Cavaquinho",
    description:
      "Samba, choro e base ritmica com afinacao, swing e repertorio que pede o instrumento.",
    icon: Guitar,
  },
  {
    title: "Ukulele",
    description:
      "Cordas leves, acordes e repertorio do pop ao regional, no seu ritmo de aprendizado.",
    icon: Guitar,
  },
  {
    title: "Viola caipira",
    description:
      "Tecnica de mao, repertorio e tradicao da viola caipira, respeitando seu momento.",
    icon: Guitar,
  },
  {
    title: "Percussao geral",
    description:
      "Cajon, pandeiro, shaker, congas e conjunto ritmico — coordenacao, sons limpos e insercao no grupo.",
    icon: Drumstick,
  },
];

function InstrumentCard({
  item,
  index,
}: {
  item: InstrumentItem;
  index: number;
}) {
  const Icon = item.icon;
  const num = String(index + 1).padStart(2, "0");
  const isCarroChefe = item.badge === "Carro-chefe";
  const isDestaque = item.badge === "Destaque";

  const surfaceClass = isDestaque
    ? "border-[#e8b565]/45 bg-gradient-to-br from-[#e8b565]/[0.14] via-[#1a1613] to-[#110e0b]"
    : isCarroChefe
      ? "border-[#caa46a]/40 bg-gradient-to-br from-[#5a3a1b]/50 via-[#1c1612] to-[#0f0d0b]"
      : "border-white/[0.11] bg-gradient-to-br from-[#1c1713]/95 to-[#12100d]";

  return (
    <article
      className={`glass soft-hover group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl p-5 sm:p-6 ${surfaceClass}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#e8b565]/25 to-transparent opacity-80"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="relative flex items-center gap-3">
          <div
            className="absolute -left-3 -top-3 size-12 rounded-full bg-[#e8b565]/20 blur-xl transition-opacity duration-300 group-hover:opacity-90"
            aria-hidden
          />
          <div className="relative flex size-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#e8b565]/25 via-[#e8b565]/10 to-transparent ring-1 ring-[#e8b565]/40">
            <Icon
              className="size-7 text-[#efcc86] drop-shadow-[0_0_10px_rgba(232,181,101,0.28)]"
              strokeWidth={1.45}
              aria-hidden
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {item.title}
            </h3>
            {item.badge ? (
              <span
                className={`mt-1 inline-flex rounded-full border px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] ${item.badge === "Destaque"
                    ? "border-[#e8b565]/60 bg-[#e8b565]/18 text-[#f5d9a8]"
                    : "border-[#d7b070]/50 bg-[#3b2815]/80 text-[#e4c690]"
                  }`}
              >
                {item.badge}
              </span>
            ) : null}
          </div>
        </div>

        <span
          className="rounded-md border border-[#e8b565]/25 bg-[#140f0c]/70 px-2 py-1 font-mono text-[0.68rem] font-semibold tabular-nums tracking-wide text-[#e8b565]/70"
          aria-hidden
        >
          {num}
        </span>
      </div>

      <p className="mt-5 border-l-2 border-[#e8b565]/30 pl-4 text-[0.93rem] leading-relaxed text-stone-300 sm:text-[0.98rem]">
        {item.description}
      </p>
    </article>
  );
}

export function SpecialtyInstruments() {
  return (
    <section
      id="instrumentos"
      className="section-shell relative w-full min-w-0 py-14 sm:py-20"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-56 w-56 rounded-full bg-[#e8b565]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-24 right-0 -z-10 h-52 w-52 rounded-full bg-[#6b4423]/30 blur-3xl"
        aria-hidden
      />

      <header className="relative mx-auto mb-11 max-w-2xl text-center sm:mb-14">
        <p className="section-subtitle">Especialidades</p>
        <h2 className="section-title mt-3 text-balance">
          Instrumentos musicais
        </h2>
        <div
          className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#e8b565]/70 to-transparent"
          aria-hidden
        />
        <p className="mt-5 text-sm leading-relaxed text-stone-400 sm:text-base">
          Cada linha abaixo é um convite para explorar ritmo, melodia e harmonia — da{" "}
          <strong className="font-medium text-stone-200">bateria</strong> à{" "}
          <strong className="font-medium text-[#e8b565]">sanfona</strong>, sempre em
          evidência no que a Ozeart&apos;s mais ama ensinar. Com foco em técnica,
          repertório e performance, transformamos aprendizado em experiência musical.
        </p>
      </header>

      <div className="mx-auto mb-6 flex w-full max-w-5xl flex-wrap justify-center gap-2.5 sm:mb-8 sm:gap-3">
        <span className="rounded-full border border-[#e8b565]/35 bg-[#1a1410]/75 px-3 py-1 text-xs font-medium text-stone-200">
          7 instrumentos
        </span>
        <span className="rounded-full border border-[#e8b565]/30 bg-[#1a1410]/70 px-3 py-1 text-xs font-medium text-stone-200">
          para iniciantes e avancados
        </span>
        <span className="rounded-full border border-[#e8b565]/35 bg-[#1a1410]/75 px-3 py-1 text-xs font-medium text-[#e8b565]">
          Aulas com acompanhamento proximo
        </span>
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl min-w-0 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        {instruments.map((item, index) => (
          <div
            key={item.title}
            className={index === instruments.length - 1 ? "lg:col-span-2" : ""}
          >
            <InstrumentCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
