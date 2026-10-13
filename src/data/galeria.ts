export type Foto = {
  /** Ruta dentro de public/images/galeria */
  src: string;
  /** Descripcion para buscadores y lectores de pantalla */
  alt: string;
};

export type CategoriaGaleria = {
  /** Identificador de la pagina: /galeria/guitarras-electricas */
  id: string;
  title: string;
  titleEn: string;
  titleCa: string;
  /** Foto que se usa de portada en la seccion ZEstudio */
  portada: string;
  fotos: Foto[];
};

/**
 * Galeria del estudio. En la pagina principal se ven las cuatro portadas
 * y cada una abre su propia pagina con solo sus fotos.
 *
 * Para anadir fotos: deja el archivo en public/images/galeria y anade una
 * linea en la categoria que corresponda.
 */
export const galeria: CategoriaGaleria[] = [
  {
    id: "guitarras-electricas",
    title: "Electric",
    titleEn: "Electric",
    titleCa: "Electric",
    portada: "/images/galeria/foto-8126.jpg",
    fotos: [
      { src: "/images/galeria/foto-8126.jpg", alt: "Guitarra electrica del estudio (1)" },
      { src: "/images/galeria/foto-8121.jpg", alt: "Guitarra electrica del estudio (2)" },
      { src: "/images/galeria/foto-8120.jpg", alt: "Guitarra electrica del estudio (3)" },
      { src: "/images/galeria/foto-8119.jpg", alt: "Guitarra electrica del estudio (4)" },
      { src: "/images/galeria/foto-8124.jpg", alt: "Guitarra electrica del estudio (5)" },
      { src: "/images/galeria/foto-8125.jpg", alt: "Guitarra electrica del estudio (6)" },
      { src: "/images/galeria/foto-8105.jpg", alt: "Guitarra electrica del estudio (7)" },
      { src: "/images/galeria/foto-8106.jpg", alt: "Guitarra electrica del estudio (8)" },
      { src: "/images/galeria/foto-8107.jpg", alt: "Guitarra electrica del estudio (9)" },
      { src: "/images/galeria/foto-8109.jpg", alt: "Guitarra electrica del estudio (10)" },
      { src: "/images/galeria/foto-8110.jpg", alt: "Guitarra electrica del estudio (11)" },
      { src: "/images/galeria/foto-8111.jpg", alt: "Guitarra electrica del estudio (12)" },
      { src: "/images/galeria/foto-8112.jpg", alt: "Guitarra electrica del estudio (13)" },
      { src: "/images/galeria/foto-8113.jpg", alt: "Guitarra electrica del estudio (14)" },
      { src: "/images/galeria/foto-8114.jpg", alt: "Guitarra electrica del estudio (15)" },
      { src: "/images/galeria/foto-8115.jpg", alt: "Guitarra electrica del estudio (16)" },
      { src: "/images/galeria/foto-8116.jpg", alt: "Guitarra electrica del estudio (17)" },
      { src: "/images/galeria/foto-8117.jpg", alt: "Guitarra electrica del estudio (18)" },
      { src: "/images/galeria/foto-8118.jpg", alt: "Guitarra electrica del estudio (19)" },
      { src: "/images/galeria/foto-8122.jpg", alt: "Guitarra electrica del estudio (20)" },
      { src: "/images/galeria/foto-8127.jpg", alt: "Guitarra electrica del estudio (21)" },
      { src: "/images/galeria/foto-8130.jpg", alt: "Guitarra electrica del estudio (22)" },
      { src: "/images/galeria/foto-8131.jpg", alt: "Guitarra electrica del estudio (23)" },
      { src: "/images/galeria/foto-8132.jpg", alt: "Guitarra electrica del estudio (24)" },
      { src: "/images/galeria/foto-8103.jpg", alt: "Bajo electrico del estudio" },
      { src: "/images/galeria/foto-8104.jpg", alt: "Bajo electrico del estudio" },
      { src: "/images/galeria/foto-8102.jpg", alt: "Bajo electrico del estudio" },
    ],
  },
  {
    id: "instrumentos-acusticos",
    title: "Acoustic",
    titleEn: "Acoustic",
    titleCa: "Acoustic",
    portada: "/images/galeria/foto-8100.jpg",
    fotos: [
      { src: "/images/galeria/foto-8100.jpg", alt: "Instrumento acustico del estudio (1)" },
      { src: "/images/galeria/foto-8097.jpg", alt: "Instrumento acustico del estudio (2)" },
      { src: "/images/galeria/foto-8098.jpg", alt: "Instrumento acustico del estudio (3)" },
      { src: "/images/galeria/foto-8177.jpg", alt: "Instrumento acustico del estudio (4)" },
      { src: "/images/galeria/foto-8101.jpg", alt: "Instrumento acustico del estudio (5)" },
      { src: "/images/galeria/foto-8137.jpg", alt: "Instrumento acustico del estudio (6)" },
      { src: "/images/galeria/foto-8133.jpg", alt: "Instrumento acustico del estudio (7)" },
      { src: "/images/galeria/foto-8135.jpg", alt: "Instrumento acustico del estudio (8)" },
      { src: "/images/galeria/foto-8138.jpg", alt: "Instrumento acustico del estudio (9)" },
      { src: "/images/galeria/foto-8139.jpg", alt: "Instrumento acustico del estudio (10)" },
      { src: "/images/galeria/foto-8136.jpg", alt: "Instrumento acustico del estudio (11)" },
    ],
  },
  {
    id: "amplificadores",
    title: "Amplificadores",
    titleEn: "Amplifiers",
    titleCa: "Amplificadors",
    portada: "/images/estudio/amplificadores.jpg",
    fotos: [
      { src: "/images/galeria/foto-8141.jpg", alt: "Amplificador del estudio (1)" },
      { src: "/images/galeria/foto-8143.jpg", alt: "Amplificador del estudio (2)" },
      { src: "/images/galeria/foto-8142.jpg", alt: "Amplificador del estudio (3)" },
      { src: "/images/galeria/foto-8144.jpg", alt: "Amplificador del estudio (4)" },
      { src: "/images/galeria/foto-8145.jpg", alt: "Amplificador del estudio (5)" },
      { src: "/images/galeria/foto-8178.jpg", alt: "Kemper Profiling Amplifier y pedal Strymon Compadre" },
      { src: "/images/galeria/foto-grammont.jpg", alt: "Radio Grammont vintage del estudio" },
    ],
  },
  {
    id: "otros-instrumentos",
    title: "Otros instrumentos",
    titleEn: "Other instruments",
    titleCa: "Altres instruments",
    portada: "/images/estudio/rhodes-mark-i.jpg",
    fotos: [
      { src: "/images/galeria/foto-bateria.jpg", alt: "Bateria Yamaha Recording Custom con los microfonos colocados" },
      { src: "/images/estudio/rhodes-mark-i.jpg", alt: "Piano electrico Fender Rhodes Mark I" },
    ],
  },
];
