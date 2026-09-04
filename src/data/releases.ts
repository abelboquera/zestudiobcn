export type Release = {
  /**
   * "playlist" para una lista de Spotify (se ven todos los temas dentro),
   * "track" para una cancion suelta, "album" para un disco o EP.
   */
  type: "playlist" | "track" | "album";
  /**
   * El ID de Spotify. Se saca del enlace para compartir, quitando el "?si=..."
   * https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=xxxx
   *                                 ^^^^^^^^^^^^^^^^^^^^^^ esto es el ID
   */
  id: string;
  /** Titulo del tema, del disco o de la lista */
  title: string;
  /** Nombre del artista o banda. Opcional (en una playlist no hace falta). */
  artist?: string;
  /** Que hiciste en el proyecto: "Produccion", "Mezcla", "Grabacion y mezcla"... */
  role?: string;
};

/**
 * Releases producidos en Z Estudio BCN.
 *
 * Si aqui solo hay una entrada, se muestra sin flechas ni rotacion.
 * Si hay varias, la seccion las va rotando automaticamente.
 *
 * Si la lista esta vacia, la seccion no aparece en la web.
 */
export const releases: Release[] = [
  {
    type: "playlist",
    id: "7onaaMSWiZN2xDP5GlqO4P",
    title: "Grabaciones Z Estudio",
  },
];
