export type Trabajo = {
  /** ID de Spotify del tema (del enlace open.spotify.com/track/ID) */
  spotifyId: string;
  title: string;
  artists: string[];
  /** Portada descargada en public/images/trabajos */
  cover: string;
  /** Fragmento de 30 s que ofrece Spotify */
  preview: string;
};

/**
 * Trabajos reales del estudio (seccion "Nuestros Trabajos").
 *
 * Ordenados de mas a menos reproducciones en Spotify, segun los contadores
 * del 17/09/2026 (anotados encima de cada tema). "Ja Emprenya!" salio el
 * 14/09/2026 y Spotify aun no mostraba su contador, por eso va la ultima.
 */
export const trabajos: Trabajo[] = [
  // 66.368.162
  {
    spotifyId: "4p1C7lssRJgOkdpPWlb6s1",
    title: "Los Lugares Donde Irás",
    artists: ["Hey Kid", "Malmö 040"],
    cover: "/images/trabajos/hey-kid-los-lugares-donde-iras.jpg",
    preview: "https://p.scdn.co/mp3-preview/f5e6420cd57de253dd3141214ec76253e71c237a",
  },
  // 31.967.280
  {
    spotifyId: "0OXUqgdMVTNGgV0LJ8irvP",
    title: "noche de san juan",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-noche-de-san-juan.jpg",
    preview: "https://p.scdn.co/mp3-preview/3b6174c22a4ef28b0acd06f72d795b751c36bee7",
  },
  // 25.261.262
  {
    spotifyId: "3Ts4fStHVtUojl6pEW4TJR",
    title: "La Última Canción",
    artists: ["Malmö 040", "Ciao Marina"],
    cover: "/images/trabajos/malmo-040-la-ultima-cancion.jpg",
    preview: "https://p.scdn.co/mp3-preview/405d3ccb9637ec48ea6327abac7935526acd347b",
  },
  // 9.475.317
  {
    spotifyId: "3enqNHy38RSMG8samJ6evm",
    title: "y es bonito",
    artists: ["Hey Kid", "Paul Alone"],
    cover: "/images/trabajos/hey-kid-y-es-bonito.jpg",
    preview: "https://p.scdn.co/mp3-preview/93c68d5f3641087ec064f14f64d383040fc6c801",
  },
  // 7.902.618
  {
    spotifyId: "1TibgzzrdUY80Zz1Us3nQF",
    title: "lo que haga falta",
    artists: ["Hey Kid", "Besmaya", "Inazio"],
    cover: "/images/trabajos/hey-kid-lo-que-haga-falta.jpg",
    preview: "https://p.scdn.co/mp3-preview/526b9145609b98d2add5c87df8076e6d2f7ff7ba",
  },
  // 4.870.780
  {
    spotifyId: "3ELI7WxrRSvTuzWnVuUT4H",
    title: "ven a mi casa esta navidad",
    artists: ["Ivan Cornejo"],
    cover: "/images/trabajos/ivan-cornejo-ven-a-mi-casa-esta-navidad.jpg",
    preview: "https://p.scdn.co/mp3-preview/75afd1207ec66354fab08e669ffbecec2b3fc717",
  },
  // 1.490.650
  {
    spotifyId: "2lI8dLRqKTG3NHyxokhmXO",
    title: "MI LUGAR",
    artists: ["Noan"],
    cover: "/images/trabajos/noan-mi-lugar.jpg",
    preview: "https://p.scdn.co/mp3-preview/19449fb35ec0f1feea0b192ec62c3d4f4a502a5c",
  },
  // 633.591
  {
    spotifyId: "35asUXcK4uvCEcJCRIlHXz",
    title: "Por Qué No Ser Amigos",
    artists: ["Paula Koops", "Noan"],
    cover: "/images/trabajos/paula-koops-por-que-no-ser-amigos.jpg",
    preview: "https://p.scdn.co/mp3-preview/1ac3839c85cda11e6ac6b7d74f4d38bbb1cb99dc",
  },
  // 124.195
  {
    spotifyId: "03O8I7mjzJlIYELgoG5Ojw",
    title: "Sekretuek",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-sekretuek.jpg",
    preview: "https://p.scdn.co/mp3-preview/21e76cce5f72f253dda2b1b14d03bfc4833b4554",
  },
  // 72.593
  {
    spotifyId: "61MZER6cdAJvmKGwTQRLRo",
    title: "Instantes",
    artists: ["Lauren Nine"],
    cover: "/images/trabajos/lauren-nine-instantes.jpg",
    preview: "https://p.scdn.co/mp3-preview/3a22e2cb1933c58f9685ab9b030ac7c3cd2c5cf0",
  },
  // 36.033
  {
    spotifyId: "2MT0ZTD3KdsnOMdxrXhdnG",
    title: "Si no vuelvo a verte",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-si-no-vuelvo-a-verte.jpg",
    preview: "https://p.scdn.co/mp3-preview/aa77870e5718540cbac5dd5c52c19bebbf12917f",
  },
  // 14.226
  {
    spotifyId: "59Em0GbTuFkY72Qwrl3Pcf",
    title: "Me Vas a Echar de Menos",
    artists: ["Jeremías San Martín"],
    cover: "/images/trabajos/jeremias-san-martin-me-vas-a-echar-de-menos.jpg",
    preview: "https://p.scdn.co/mp3-preview/e29f509db1d313a3ea25ea658eeed2c1a24721f1",
  },
  // 7.531
  {
    spotifyId: "4vQpb15a3I1IXfMEpt2FB0",
    title: "Delta",
    artists: ["Terrae", "Judit Neddermann"],
    cover: "/images/trabajos/terrae-delta.jpg",
    preview: "https://p.scdn.co/mp3-preview/fbd66b56456824252ac4ad8704e5e3946b91e234",
  },
  // 7.513
  {
    spotifyId: "1qZyl7yVBfuU40atszXf4l",
    title: "To Be True",
    artists: ["Elio Haven"],
    cover: "/images/trabajos/elio-haven-to-be-true.jpg",
    preview: "https://p.scdn.co/mp3-preview/f709cc458acf9e6ea4cea4575306e6550a3b10ad",
  },
  // 7.284
  {
    spotifyId: "1Dnmk7G0hCBnr48qnatrFg",
    title: "si llueve que llueva",
    artists: ["Claudia Infante"],
    cover: "/images/trabajos/claudia-infante-si-llueve-que-llueva.jpg",
    preview: "https://p.scdn.co/mp3-preview/c2b3ff885c44da7d2f0f6e0a0b5b9844a3fc6c8d",
  },
  // 7.039
  {
    spotifyId: "6siI0u3cCLQPScp3geMrmK",
    title: "Els colors de la màgia",
    artists: ["Biel Martí"],
    cover: "/images/trabajos/biel-marti-els-colors-de-la-magia.jpg",
    preview: "https://p.scdn.co/mp3-preview/82b45f942d8157e6c461ff0b63b85e4ed2e49e53",
  },
  // 1.548
  {
    spotifyId: "1yF6957Bus7nqA8GctV500",
    title: "Lo Que No Sé Decir Con Palabras",
    artists: ["Jesús Prieto \"Pitti\""],
    cover: "/images/trabajos/jesus-prieto-pitti-lo-que-no-se-decir-con-palabras.jpg",
    preview: "https://p.scdn.co/mp3-preview/93681a7f0f40b355ee43f1e720adb3c0b57cc533",
  },
  // sin contador
  {
    spotifyId: "5rIPGNOUHCkNoSdlvphReB",
    title: "Ja Emprenya!",
    artists: ["PLA MOGUDA"],
    cover: "/images/trabajos/pla-moguda-ja-emprenya.jpg",
    preview: "https://p.scdn.co/mp3-preview/6dec22621facffc74e0442c343fa6034c1a82c52",
  },
];
