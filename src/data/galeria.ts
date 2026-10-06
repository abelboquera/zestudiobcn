export type Foto = {
  /** Ruta dentro de public/images/estudio */
  src: string;
  /** Descripcion para buscadores y lectores de pantalla */
  alt: string;
};

export type CategoriaGaleria = {
  /** Identificador para el enlace: /galeria#guitarras */
  id: string;
  title: string;
  titleEn: string;
  titleCa: string;
  /** Foto que se usa de portada en la seccion ZEstudio */
  portada: string;
  fotos: Foto[];
};

/**
 * Galeria del estudio. En la pagina principal se ven las tres portadas y
 * cada una lleva a /galeria, donde estan todas las fotos agrupadas.
 *
 * Para anadir fotos: deja el archivo en public/images/estudio y anade una
 * linea en la categoria que corresponda.
 */
export const galeria: CategoriaGaleria[] = [
  {
    id: "guitarras",
    title: "Guitarras",
    titleEn: "Guitars",
    titleCa: "Guitarres",
    portada: "/images/estudio/cuerpos-guitarras.jpg",
    fotos: [
      { src: "/images/estudio/cuerpos-guitarras.jpg", alt: "Cuerpos de las guitarras electricas en primer plano" },
      { src: "/images/estudio/palas-guitarras.jpg", alt: "Palas de las guitarras Fender: Stratocaster, Mustang y Telecaster" },
      { src: "/images/estudio/rack-guitarras.jpg", alt: "Rack con la coleccion de guitarras electricas del estudio" },
      { src: "/images/estudio/guitarras-pared.jpg", alt: "Guitarras colgadas en la pared, con una Stratocaster verde en primer plano" },
    ],
  },
  {
    id: "amplificadores",
    title: "Amplificadores",
    titleEn: "Amplifiers",
    titleCa: "Amplificadors",
    portada: "/images/estudio/amplificadores.jpg",
    fotos: [
      { src: "/images/estudio/amplificadores.jpg", alt: "Amplificadores Fender Twin Reverb, Vox AC30 y Marshall con el magnetofono de bobina abierta" },
      { src: "/images/estudio/sinmarc-pasillo.jpg", alt: "Amplificador Sinmarc con el pasillo y el control room al fondo" },
      { src: "/images/estudio/sinmarc-pasillo-2.jpg", alt: "Otra vista del amplificador Sinmarc" },
    ],
  },
  {
    id: "otros-instrumentos",
    title: "Otros instrumentos",
    titleEn: "Other instruments",
    titleCa: "Altres instruments",
    portada: "/images/estudio/rhodes-mark-i.jpg",
    fotos: [
      { src: "/images/estudio/rhodes-mark-i.jpg", alt: "Piano electrico Fender Rhodes Mark I" },
      { src: "/images/estudio/rhodes-mark-i-2.jpg", alt: "Teclas del Fender Rhodes Mark I en primer plano" },
    ],
  },
];
