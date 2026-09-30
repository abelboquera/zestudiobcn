export type Video = {
  /** ID de YouTube (lo que va despues de "watch?v=") */
  youtubeId: string;
  /** Marca o produccion: "League of Legends", "Aperol"... */
  brand: string;
  /** Titulo real del video en YouTube: no se muestra, sirve de texto alternativo */
  title: string;
};

/**
 * Trabajos para TV y publicidad (seccion "Nuestros Trabajos").
 * Para anadir uno nuevo, copia el ID del enlace de YouTube.
 */
export const videos: Video[] = [
  {
    youtubeId: "PZWDiXDwSek",
    brand: "League of Legends",
    title: "We have something in common · EU LCS Finals Hamburg",
  },
  {
    youtubeId: "0q8EYsyjP2Y",
    brand: "Aperol",
    title: "Himno de la Amistad",
  },
  {
    youtubeId: "DjgmJfqKPRQ",
    brand: "League of Legends",
    title: "EU LCS Spring Finals Hamburg · Aftermovie",
  },
];
