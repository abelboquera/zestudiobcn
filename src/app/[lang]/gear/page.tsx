import type { Metadata } from "next";
import { Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import GearSelector from "@/components/GearSelector";
import { gearSelector } from "@/data/gearSelector";

/** Tipografias solo de esta pantalla: el resto de la web va con Inter */
const hud = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-hud",
});

const hudMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hud-mono",
});

export const metadata: Metadata = {
  title: "Gear | Z Estudio BCN",
  description:
    "Todo el equipo de Z Estudio BCN: guitarras eléctricas y acústicas, bajos, amplificadores e instrumentos, uno a uno.",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "ca" }];
}

export default async function GearPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang === "en" || lang === "ca" ? lang : "es";

  return (
    <div className={`gear-page ${hud.variable} ${hudMono.variable}`}>
      <GearSelector categorias={gearSelector} lang={validLang} />
    </div>
  );
}
