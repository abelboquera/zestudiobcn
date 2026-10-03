export type Foto = {
  /** Ruta dentro de public/images/estudio */
  src: string;
  /** Descripcion para buscadores y lectores de pantalla */
  alt: string;
};

/**
 * Fotos del apartado "Galeria" (seccion ZEstudio).
 * Para anadir una foto nueva, deja el archivo en public/images/estudio
 * y anade aqui una linea.
 */
export const galeria: Foto[] = [
  { src: "/images/estudio/amplificadores.jpg", alt: "Amplificadores Fender Twin Reverb, Vox AC30 y Marshall con el magnetofono de bobina abierta" },
  { src: "/images/estudio/rack-guitarras.jpg", alt: "Rack con la coleccion de guitarras electricas del estudio" },
  { src: "/images/estudio/palas-guitarras.jpg", alt: "Palas de las guitarras Fender: Stratocaster, Mustang y Telecaster" },
  { src: "/images/estudio/cuerpos-guitarras.jpg", alt: "Cuerpos de las guitarras electricas en primer plano" },
  { src: "/images/estudio/guitarras-pared.jpg", alt: "Guitarras colgadas en la pared, con una Stratocaster verde en primer plano" },
  { src: "/images/estudio/rhodes-mark-i.jpg", alt: "Piano electrico Fender Rhodes Mark I" },
  { src: "/images/estudio/sinmarc-pasillo.jpg", alt: "Amplificador Sinmarc con el pasillo y el control room al fondo" },
];
