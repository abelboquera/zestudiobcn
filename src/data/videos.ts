export type Video = {
  /** ID de YouTube (lo que va despues de "watch?v=") */
  youtubeId: string;
  /** Marca o produccion: "League of Legends", "Aperol"... */
  brand: string;
  /** Titulo real del video en YouTube: no se muestra, sirve de texto alternativo */
  title: string;
  /** En que bloque se muestra */
  tipo: "live" | "publicidad";
};

/**
 * Videos de la seccion "Nuestros Trabajos": tipo "live" o "publicidad".
 * Para anadir uno nuevo, copia el ID del enlace de YouTube.
 */
export const videos: Video[] = [
  {
    youtubeId: "-qa6mlJ8Yzg",
    brand: "Vèrtex (TV3)",
    title: "Vèrtex TV3",
    tipo: "publicidad",
  },
  {
    youtubeId: "0q8EYsyjP2Y",
    brand: "Aperol",
    title: "Himno de la Amistad",
    tipo: "publicidad",
  },
  {
    youtubeId: "PZWDiXDwSek",
    brand: "League of Legends",
    title: "We have something in common · EU LCS Finals Hamburg",
    tipo: "publicidad",
  },
  {
    youtubeId: "DjgmJfqKPRQ",
    brand: "League of Legends",
    title: "EU LCS Spring Finals Hamburg · Aftermovie",
    tipo: "publicidad",
  },
  {
    youtubeId: "bnIL-j_lW5I",
    brand: "Malmö 040",
    title: "Los de Siempre (En directo · Live Session)",
    tipo: "live",
  },
  {
    youtubeId: "sOSRONM8zik",
    brand: "Malmö 040, Maren",
    title: "Voy a Estar (En directo · Live Session)",
    tipo: "live",
  },
  {
    youtubeId: "74BUbGuBhoA",
    brand: "Hey Kid",
    title: "noche de san juan (en directo)",
    tipo: "live",
  },
  {
    youtubeId: "2NZ-mldmRZQ",
    brand: "Love of Lesbian",
    title: "Cuando no me ves (BalconyTV)",
    tipo: "live",
  },
  {
    youtubeId: "KND-2c4tdSk",
    brand: "Carla Morrison",
    title: "Eres tú (BalconyTV)",
    tipo: "live",
  },
  {
    youtubeId: "s-K6VLwyPTU",
    brand: "Tommy Emmanuel",
    title: "El vaquero (BalconyTV)",
    tipo: "live",
  },
];
