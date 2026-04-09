"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Aulas", href: "#aulas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Local", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

function isHashHref(href: string): href is `#${string}` {
  return href.startsWith("#") && href.length > 1;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!isHashHref(href)) return;
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    },
    [closeMenu],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#151210]/75 backdrop-blur-sm transition-[opacity,visibility] duration-300 ease-out md:hidden ${menuOpen
          ? "visible opacity-100"
          : "pointer-events-none invisible opacity-0"
          }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-[#120e0c]/88 backdrop-blur-2xl transition-[box-shadow,border-color,background-color] duration-300 ease-out ${scrolled
          ? "border-white/14 shadow-[0_12px_42px_rgba(0,0,0,0.42)] bg-[#120e0c]/94"
          : "border-white/10 shadow-none"
          }`}
      >
        <div className="relative">
          <div className="section-shell flex min-w-0 items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="shrink-0 text-lg font-semibold tracking-tight text-white transition-[color,transform] duration-200 hover:text-[#e8b565] active:scale-[0.98] sm:text-xl md:text-2xl"
            >
              Ozeart's
            </a>

            <nav
              className="hidden flex-1 items-center justify-center px-2 md:flex lg:px-4"
              aria-label="Principal"
            >
              <ul className="flex flex-wrap items-center justify-center gap-1 lg:gap-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative inline-flex rounded-full px-3 py-2 text-sm font-medium text-white/90 transition-colors duration-200 ease-out after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-[#e8b565] after:opacity-0 after:transition-[width,opacity] after:duration-300 hover:bg-white/10 hover:text-white hover:after:w-[70%] hover:after:opacity-100 lg:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden md:block">
                <WhatsAppButton
                  label="Agende sua aula"
                  className="px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
                />
              </div>
              <button
                type="button"
                className="relative inline-flex size-11 items-center justify-center rounded-xl text-white ring-1 ring-white/15 transition-[color,background-color,ring-color] duration-200 ease-out hover:bg-white/10 hover:ring-white/25 md:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <Menu
                  className={`size-6 transition-all duration-300 ease-out ${menuOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 opacity-100"
                    }`}
                  aria-hidden
                />
                <X
                  className={`absolute size-6 transition-all duration-300 ease-out ${menuOpen ? "scale-100 opacity-100" : "scale-0 -rotate-90 opacity-0"
                    }`}
                  aria-hidden
                />
              </button>
            </div>
          </div>

          <nav
            id="mobile-navigation"
            aria-label="Principal"
            inert={!menuOpen ? true : undefined}
            className={`absolute left-0 right-0 top-full overflow-hidden border-b border-white/10 bg-[#120e0c]/95 backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ease-out md:hidden ${menuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-3 opacity-0"
              }`}
          >
            <ul className="section-shell flex flex-col gap-0.5 py-4 pb-5">
              <li className="px-3 pb-3">
                <WhatsAppButton
                  label="Agende sua aula no WhatsApp"
                  className="w-full max-w-full justify-center px-4 py-3 text-sm"
                />
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-white/95 transition-[background-color,color,transform] duration-200 ease-out hover:bg-white/10 hover:text-white active:scale-[0.99]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
