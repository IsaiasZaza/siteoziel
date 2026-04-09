import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ozeart's | Aulas de Canto e Instrumentos",
  description:
    "Ozeart's é um espaço dedicado ao ensino de canto e instrumentos musicais, com foco em técnica, interpretação e performance. Aulas personalizadas para todos os níveis, do iniciante ao avançado.",
  keywords: [
    "aulas de canto",
    "aulas de música",
    "instrumentos musicais",
    "técnica vocal",
    "performance musical",
    "professor de canto",
    "aulas de violão",
    "aulas de piano",
    "Ozeart's",
  ],
  openGraph: {
    title: "Ozeart's | Aulas de Canto e Instrumentos",
    description:
      "Desenvolva sua voz e sua musicalidade com aulas de canto e instrumentos. Ensino personalizado com foco em técnica, interpretação e presença de palco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full w-full min-w-0 flex-col overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
