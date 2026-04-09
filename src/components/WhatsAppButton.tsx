import { MessageCircleMore } from "lucide-react";

type WhatsAppButtonProps = {
  label: string;
  className?: string;
};

// Substitua pelo numero real (DDI + DDD + numero, sem simbolos)
const whatsappHref = "https://wa.me/556181036726";

export function WhatsAppButton({ label, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#e8b565] px-6 py-3 text-sm font-semibold text-[#1a1510] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#f5d08a] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8b565] ${className}`}
      aria-label={label}
    >
      <MessageCircleMore className="size-4" />
      {label}
    </a>
  );
}
