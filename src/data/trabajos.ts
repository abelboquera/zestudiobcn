export type Trabajo = {
  /** ID de Spotify del tema (del enlace open.spotify.com/track/ID) */
  spotifyId: string;
  title: string;
  artists: string[];
  /** Portada descargada en public/images/trabajos */
  cover: string;
  /** Fragmento de 30 s que ofrece Spotify */
  preview: string;
  /** Reproducciones en Spotify. Sirve para ordenar la lista. */
  plays: number;
  /** true = siempre arriba, en el orden en que aparecen aqui */
  destacado?: boolean;
};

/**
 * Trabajos del estudio (seccion "Nuestros Trabajos").
 *
 * Los marcados con destacado: true van arriba y fijos, en el orden en que
 * aparecen aqui. El resto se ordenan
 * solos de mas a menos reproducciones, asi que para anadir un tema basta con
 * pegarlo aqui con su numero de reproducciones, sin preocuparse del orden.
 *
 * Reproducciones anotadas el 17/09/2026 ("Bocetos" y "Ja Emprenya!" eran
 * demasiado recientes y Spotify aun no mostraba su contador).
 *
 * La web muestra los 18 primeros y el resto se ven al pulsar "Ver mas
 * trabajos", asi la cuadricula queda completa (filas de 3).
 */
const catalogo: Trabajo[] = [
  {
    spotifyId: "2G0bNyYe4kiEQ9AyCuw3NQ",
    title: "Bocetos",
    artists: ["DePol"],
    cover: "/images/trabajos/depol-bocetos.jpg",
    preview: "https://p.scdn.co/mp3-preview/69869b1fc4a0831b03ae52c226bcbd53ad590c5f",
    plays: 0,
    destacado: true,
  },
  {
    spotifyId: "3ELI7WxrRSvTuzWnVuUT4H",
    title: "ven a mi casa esta navidad",
    artists: ["Ivan Cornejo"],
    cover: "/images/trabajos/ivan-cornejo-ven-a-mi-casa-esta-navidad.jpg",
    preview: "https://p.scdn.co/mp3-preview/75afd1207ec66354fab08e669ffbecec2b3fc717",
    plays: 4870780,
    destacado: true,
  },
  {
    spotifyId: "4p1C7lssRJgOkdpPWlb6s1",
    title: "Los Lugares Donde Irás",
    artists: ["Hey Kid", "Malmö 040"],
    cover: "/images/trabajos/hey-kid-los-lugares-donde-iras.jpg",
    preview: "https://p.scdn.co/mp3-preview/f5e6420cd57de253dd3141214ec76253e71c237a",
    plays: 66368162,
    destacado: true,
  },
  {
    spotifyId: "0OXUqgdMVTNGgV0LJ8irvP",
    title: "noche de san juan",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-noche-de-san-juan.jpg",
    preview: "https://p.scdn.co/mp3-preview/3b6174c22a4ef28b0acd06f72d795b751c36bee7",
    plays: 31967280,
    destacado: true,
  },
  {
    spotifyId: "5i7P2fWF2sTLuNCUsbwlNg",
    title: "Berandu",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-berandu.jpg",
    preview: "https://p.scdn.co/mp3-preview/cbd3187ce8ff8ca82d07497bc170bd370f5382f7",
    plays: 0,
    destacado: true,
  },
  {
    spotifyId: "35asUXcK4uvCEcJCRIlHXz",
    title: "Por Qué No Ser Amigos",
    artists: ["Paula Koops", "Noan"],
    cover: "/images/trabajos/paula-koops-por-que-no-ser-amigos.jpg",
    preview: "https://p.scdn.co/mp3-preview/1ac3839c85cda11e6ac6b7d74f4d38bbb1cb99dc",
    plays: 633591,
    destacado: true,
  },
  {
    spotifyId: "2lI8dLRqKTG3NHyxokhmXO",
    title: "MI LUGAR",
    artists: ["Noan"],
    cover: "/images/trabajos/noan-mi-lugar.jpg",
    preview: "https://p.scdn.co/mp3-preview/19449fb35ec0f1feea0b192ec62c3d4f4a502a5c",
    plays: 1490650,
    destacado: true,
  },
  {
    spotifyId: "5rIPGNOUHCkNoSdlvphReB",
    title: "Ja Emprenya!",
    artists: ["PLA MOGUDA"],
    cover: "/images/trabajos/pla-moguda-ja-emprenya.jpg",
    preview: "https://p.scdn.co/mp3-preview/6dec22621facffc74e0442c343fa6034c1a82c52",
    plays: 0,
    destacado: true,
  },
  {
    spotifyId: "3Ts4fStHVtUojl6pEW4TJR",
    title: "La Última Canción",
    artists: ["Malmö 040", "Ciao Marina"],
    cover: "/images/trabajos/malmo-040-la-ultima-cancion.jpg",
    preview: "https://p.scdn.co/mp3-preview/405d3ccb9637ec48ea6327abac7935526acd347b",
    plays: 25261262,
  },
  {
    spotifyId: "3enqNHy38RSMG8samJ6evm",
    title: "y es bonito",
    artists: ["Hey Kid", "Paul Alone"],
    cover: "/images/trabajos/hey-kid-y-es-bonito.jpg",
    preview: "https://p.scdn.co/mp3-preview/93c68d5f3641087ec064f14f64d383040fc6c801",
    plays: 9475317,
  },
  {
    spotifyId: "1TibgzzrdUY80Zz1Us3nQF",
    title: "lo que haga falta",
    artists: ["Hey Kid", "Besmaya", "Inazio"],
    cover: "/images/trabajos/hey-kid-lo-que-haga-falta.jpg",
    preview: "https://p.scdn.co/mp3-preview/526b9145609b98d2add5c87df8076e6d2f7ff7ba",
    plays: 7902618,
  },
  {
    spotifyId: "03O8I7mjzJlIYELgoG5Ojw",
    title: "Sekretuek",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-sekretuek.jpg",
    preview: "https://p.scdn.co/mp3-preview/21e76cce5f72f253dda2b1b14d03bfc4833b4554",
    plays: 124195,
  },
  {
    spotifyId: "61MZER6cdAJvmKGwTQRLRo",
    title: "Instantes",
    artists: ["Lauren Nine"],
    cover: "/images/trabajos/lauren-nine-instantes.jpg",
    preview: "https://p.scdn.co/mp3-preview/3a22e2cb1933c58f9685ab9b030ac7c3cd2c5cf0",
    plays: 72593,
  },
  {
    spotifyId: "2MT0ZTD3KdsnOMdxrXhdnG",
    title: "Si no vuelvo a verte",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-si-no-vuelvo-a-verte.jpg",
    preview: "https://p.scdn.co/mp3-preview/aa77870e5718540cbac5dd5c52c19bebbf12917f",
    plays: 36033,
  },
  {
    spotifyId: "59Em0GbTuFkY72Qwrl3Pcf",
    title: "Me Vas a Echar de Menos",
    artists: ["Jeremías San Martín"],
    cover: "/images/trabajos/jeremias-san-martin-me-vas-a-echar-de-menos.jpg",
    preview: "https://p.scdn.co/mp3-preview/e29f509db1d313a3ea25ea658eeed2c1a24721f1",
    plays: 14226,
  },
  {
    spotifyId: "4vQpb15a3I1IXfMEpt2FB0",
    title: "Delta",
    artists: ["Terrae", "Judit Neddermann"],
    cover: "/images/trabajos/terrae-delta.jpg",
    preview: "https://p.scdn.co/mp3-preview/fbd66b56456824252ac4ad8704e5e3946b91e234",
    plays: 7531,
  },
  {
    spotifyId: "1qZyl7yVBfuU40atszXf4l",
    title: "To Be True",
    artists: ["Elio Haven"],
    cover: "/images/trabajos/elio-haven-to-be-true.jpg",
    preview: "https://p.scdn.co/mp3-preview/f709cc458acf9e6ea4cea4575306e6550a3b10ad",
    plays: 7513,
  },
  {
    spotifyId: "1Dnmk7G0hCBnr48qnatrFg",
    title: "si llueve que llueva",
    artists: ["Claudia Infante"],
    cover: "/images/trabajos/claudia-infante-si-llueve-que-llueva.jpg",
    preview: "https://p.scdn.co/mp3-preview/c2b3ff885c44da7d2f0f6e0a0b5b9844a3fc6c8d",
    plays: 7284,
  },
  {
    spotifyId: "6siI0u3cCLQPScp3geMrmK",
    title: "Els colors de la màgia",
    artists: ["Biel Martí"],
    cover: "/images/trabajos/biel-marti-els-colors-de-la-magia.jpg",
    preview: "https://p.scdn.co/mp3-preview/82b45f942d8157e6c461ff0b63b85e4ed2e49e53",
    plays: 7039,
  },
  {
    spotifyId: "1yF6957Bus7nqA8GctV500",
    title: "Lo Que No Sé Decir Con Palabras",
    artists: ["Jesús Prieto \"Pitti\""],
    cover: "/images/trabajos/jesus-prieto-pitti-lo-que-no-se-decir-con-palabras.jpg",
    preview: "https://p.scdn.co/mp3-preview/93681a7f0f40b355ee43f1e720adb3c0b57cc533",
    plays: 1548,
  },
];

/** Primero los destacados, en su orden; luego el resto por reproducciones. */
export const trabajos: Trabajo[] = [
  ...catalogo.filter((t) => t.destacado),
  ...catalogo.filter((t) => !t.destacado).sort((a, b) => b.plays - a.plays),
];
