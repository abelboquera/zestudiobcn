export type Release = {
  /** "track" para una cancion suelta, "album" para un disco o EP */
  type: "track" | "album";
  /**
   * El ID de Spotify. Se saca del enlace para compartir:
   * https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=xxxx
   *                                 ^^^^^^^^^^^^^^^^^^^^^^ esto es el ID
   */
  id: string;
  /** Titulo del tema o del disco */
  title: string;
  /** Nombre del artista o banda */
  artist: string;
  /** Que hiciste en el proyecto: "Produccion", "Mezcla", "Grabacion y mezcla"... */
  role?: string;
};

/**
 * Releases producidos en Z Estudio BCN.
 * Para anadir uno nuevo, copia el enlace de Spotify del tema, saca el ID
 * y anade una entrada mas a esta lista. El orden aqui es el orden en que
 * se van rotando en la web.
 *
 * Si la lista esta vacia, la seccion no aparece en la web.
 */
export const releases: Release[] = [
  // {
  //   type: "track",
  //   id: "4cOdK2wGLETKBW3PvgPWqT",
  //   title: "Nombre del tema",
  //   artist: "MALMO 040",
  //   role: "Produccion y mezcla",
  // },
];
