import { Camera, Music, PlayCircle } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Aulas", href: "#aulas" },
  { label: "Instrumentos", href: "#instrumentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Local", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

const socialLinks = [
  { icon: Camera, href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi8wIvgv-GTAxUyDrkGHcddCC4QFnoECCAQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fozearts%2F&usg=AOvVaw2VNXsAEzl8YLMF4AWejil4&opi=89978449", label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 w-full min-w-0 border-t border-white/10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div className="section-shell py-10 sm:py-12">
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-md space-y-3">
            <a
              href="#inicio"
              className="inline-block text-xl font-semibold tracking-tight text-white transition hover:text-[#e8b565]"
            >
              Ozeart's
            </a>
            <p className="text-sm leading-relaxed text-stone-300">
              <strong className="font-semibold text-[#e8b565]">Canto</strong> e{" "}
              <strong className="font-semibold text-[#e8b565]">instrumentos</strong>{" "}
              com acompanhamento proximo: tecnica vocal, violao, piano,
              repertorio e confianca no palco — metodo adaptado ao seu nivel.
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 lg:items-end"
            aria-label="Mapa do site"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#e8b565]/80">
              Navegacao
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-stone-200/90 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#e8b565]/80">
              Redes
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass soft-hover flex size-10 items-center justify-center rounded-xl text-stone-200 ring-1 ring-white/[0.06] transition-colors hover:text-white"
                  aria-label={label}
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone-400/90">
            © {year} Ozeart's. Todos os direitos reservados.
          </p>
          <p className="text-xs text-stone-500/90">
            Ozeart's 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
