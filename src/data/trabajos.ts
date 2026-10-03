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
 *
 * Los temas sin contador (plays: 0) van al final, en el orden en que
 * aparecen aqui: de publicacion mas reciente a mas antigua.
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
  // 2026-06-16
  {
    spotifyId: "5NN7fUmFi5GnkTD9ELOfnN",
    title: "Dins la batalla",
    artists: ["Biel Martí", "María Cielos"],
    cover: "/images/trabajos/biel-marti-dins-la-batalla.jpg",
    preview: "https://p.scdn.co/mp3-preview/837e5c1dda61f8d383325efd9becb244e2cd4e8d",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "0yOOfdp30xQ5mcDWZwE9MG",
    title: "ahora que nos perdimos",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-ahora-que-nos-perdimos.jpg",
    preview: "https://p.scdn.co/mp3-preview/09955f4ffc607da67358c1e81b0e022e1cf2fc24",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "4nkXPDsdu8cmxfjRgmHCI5",
    title: "una vez más",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-una-vez-mas.jpg",
    preview: "https://p.scdn.co/mp3-preview/dc1b2b7f265e0558b12b53b0c184bbb8923c196d",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "1r8Thp7SaJkHANHip6ULDd",
    title: "nuestro hogar",
    artists: ["Hey Kid", "Paula Mattheus"],
    cover: "/images/trabajos/hey-kid-nuestro-hogar.jpg",
    preview: "https://p.scdn.co/mp3-preview/1dbae88b992b67cfc5040cb1789b811e4a88ac8d",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "2SI5fn2MhnV2udpXPOiux3",
    title: "el mundo contigo",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-el-mundo-contigo.jpg",
    preview: "https://p.scdn.co/mp3-preview/c6f81147f9836dafd24b6dd6b11edbe8b4527cdf",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "2bCkOfAvtwJwSgWgPxKvPm",
    title: "nuestra historia",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-nuestra-historia.jpg",
    preview: "https://p.scdn.co/mp3-preview/8843981d7d93b6dc820d2e0fb8557503de455a17",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "6OWwUq5AX6GanuRs8fwWBI",
    title: "si tú no estás",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-si-tu-no-estas.jpg",
    preview: "https://p.scdn.co/mp3-preview/c8d59dd0c0bb36080a4d9590fe1b3f5dbb6afef8",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "0KsHVKNr0McBukzPDcDhzR",
    title: "de alguna manera",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-de-alguna-manera.jpg",
    preview: "https://p.scdn.co/mp3-preview/7d166650dda9bd86b3ecccc292485ee476e33167",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "6VRERMyrRgHwjUvIXZVlZZ",
    title: "alguien debería hablar con Dios",
    artists: ["Hey Kid", "Íñigo Merino"],
    cover: "/images/trabajos/hey-kid-alguien-deberia-hablar-con-dios.jpg",
    preview: "https://p.scdn.co/mp3-preview/3846c04e98b2076518abad9f35f23251346a2e6f",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "35XchAnNXuN16o5wP43AfI",
    title: "por si volvemos a vernos",
    artists: ["Hey Kid", "Moni Motes"],
    cover: "/images/trabajos/hey-kid-por-si-volvemos-a-vernos.jpg",
    preview: "https://p.scdn.co/mp3-preview/df67cf73b1b82468a96ac93aab6012179cb5ca2d",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "0ceO3btLnwdjovDVrZOwyG",
    title: "noche de san juan",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-noche-de-san-juan.jpg",
    preview: "https://p.scdn.co/mp3-preview/fff855274dab2ef6e2a95346b95d6218ef0d36cd",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "3ngEo950TOB1UgEfog7IIC",
    title: "alguien como tú",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-alguien-como-tu.jpg",
    preview: "https://p.scdn.co/mp3-preview/516ee1b33e72ccb65ccfa808d78e36aa4f8cb7f7",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "7D3gy8sM4W9aWlKf6x0ZvO",
    title: "y es bonito",
    artists: ["Hey Kid", "Paul Alone"],
    cover: "/images/trabajos/hey-kid-y-es-bonito.jpg",
    preview: "https://p.scdn.co/mp3-preview/93c68d5f3641087ec064f14f64d383040fc6c801",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "55uco7G8SmPv1mBYP5Ivrf",
    title: "qué hay de mi",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-que-hay-de-mi.jpg",
    preview: "https://p.scdn.co/mp3-preview/cb7a4cd6a6fec77ecce0f2ea677159404b7b0f81",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "0GflVlnYfHfeGEsfApjCbL",
    title: "donde estés tú",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-donde-estes-tu.jpg",
    preview: "https://p.scdn.co/mp3-preview/60465f6ed9dd722467ba5c7087b5c20dd56d2abc",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "4Cqe0KRurE0REtf1Weapz5",
    title: "saber de ti",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-saber-de-ti.jpg",
    preview: "https://p.scdn.co/mp3-preview/97540a89518d855f2518b36f2406ebe5bee09c7f",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "4zvVXoMufQo8L2pR6Byqjw",
    title: "si vienes a buscarme",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-si-vienes-a-buscarme.jpg",
    preview: "https://p.scdn.co/mp3-preview/0bc1f15fdf84fc86c52ede782eded072bf7d9401",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "2XTaRE2QCYcGBozxstCUjL",
    title: "lo que haga falta",
    artists: ["Hey Kid", "Besmaya", "Inazio"],
    cover: "/images/trabajos/hey-kid-lo-que-haga-falta.jpg",
    preview: "https://p.scdn.co/mp3-preview/526b9145609b98d2add5c87df8076e6d2f7ff7ba",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "2Qp333fRbdnQcN4YaLrrKi",
    title: "más que ayer",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-mas-que-ayer.jpg",
    preview: "https://p.scdn.co/mp3-preview/7b0b7078b56b9acc3e550f8b6d9fb01c62590373",
    plays: 0,
  },
  // 2026-02-27
  {
    spotifyId: "04tyCrnH8ZcMGVHCowefEI",
    title: "volver a empezar",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-volver-a-empezar.jpg",
    preview: "https://p.scdn.co/mp3-preview/d2ae7ea2393f1462f6faa6ed6ca6fa6d22f61064",
    plays: 0,
  },
  // 2026-01-16
  {
    spotifyId: "5LYCA74jjeJzvBMOi9Ah9Y",
    title: "Zure Zain",
    artists: ["Maren"],
    cover: "/images/trabajos/maren-zure-zain.jpg",
    preview: "https://p.scdn.co/mp3-preview/bb76fafe48844eeab1b4276e749c9510ee28ef27",
    plays: 0,
  },
  // 2025-10-21
  {
    spotifyId: "2PspT2EwXrxYGcnWvX18jC",
    title: "Ja no em vols",
    artists: ["Terrae"],
    cover: "/images/trabajos/terrae-ja-no-em-vols.jpg",
    preview: "https://p.scdn.co/mp3-preview/41eb11280369d9760a9495dad1e765a459bb7406",
    plays: 0,
  },
  // 2025-10-21
  {
    spotifyId: "1YkDrBtGmyOW0TjF56zDJd",
    title: "Cançó de les plegadores",
    artists: ["Terrae"],
    cover: "/images/trabajos/terrae-canco-de-les-plegadores.jpg",
    preview: "https://p.scdn.co/mp3-preview/2746444f7d74d24bf06649c4204af691e8502fb9",
    plays: 0,
  },
  // 2025-10-21
  {
    spotifyId: "5g9akxr30wLrBEaz58HATD",
    title: "Virgínia Amposta",
    artists: ["Terrae"],
    cover: "/images/trabajos/terrae-virginia-amposta.jpg",
    preview: "https://p.scdn.co/mp3-preview/df15f183fd5ccd82cf4a83b68a34af343ae190a1",
    plays: 0,
  },
  // 2025-09-26
  {
    spotifyId: "4rDgBYFQyJkXm1Lu5LRmUf",
    title: "El quadern",
    artists: ["Biel Martí"],
    cover: "/images/trabajos/biel-marti-el-quadern.jpg",
    preview: "https://p.scdn.co/mp3-preview/832e87930560f076dcf79f575050e35555df103d",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "6uoZFef5I7kDZ3yfNRpESu",
    title: "alguien como tú",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-alguien-como-tu.jpg",
    preview: "https://p.scdn.co/mp3-preview/736b0b8858f3039ef8de3e1ea6b9d489ae87ba80",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "5OZ8ZH0uIO1aqDeOBYb7tZ",
    title: "qué hay de mi",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-que-hay-de-mi.jpg",
    preview: "https://p.scdn.co/mp3-preview/74abe8487cb0bbc118d353ce9c05e13919f8a42a",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "5zDJs7QzBYYviuyrryKYnf",
    title: "donde estés tú",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-donde-estes-tu.jpg",
    preview: "https://p.scdn.co/mp3-preview/ce1e497b764ffd7d4dd68bc63c3a0339844809ea",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "5QSLOVn7evWfLc11BrLTCu",
    title: "saber de ti",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-saber-de-ti.jpg",
    preview: "https://p.scdn.co/mp3-preview/8465e29f0c154cec965d5238689656be9a5b4736",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "6BxT4aou8vy9iKpq5N6NXA",
    title: "si vienes a buscarme",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-si-vienes-a-buscarme.jpg",
    preview: "https://p.scdn.co/mp3-preview/d0786ae051a8d6051ace8c1424e7f48816dc8969",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "47lnQLtVcuwsX3bdRqcvo3",
    title: "más que ayer",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-mas-que-ayer.jpg",
    preview: "https://p.scdn.co/mp3-preview/58d3dbdfed334b2c5f9df58ec58f5583ed9ae02a",
    plays: 0,
  },
  // 2024-11-29
  {
    spotifyId: "4F5ADneDztd4uiiKTZF0oL",
    title: "volver a empezar",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-volver-a-empezar.jpg",
    preview: "https://p.scdn.co/mp3-preview/a1cfe447279b9d42df4b69f902b6c79ec17061fe",
    plays: 0,
  },
  // 2024-10-25
  {
    spotifyId: "2nXLYjDXP0p5dyliLFGMbp",
    title: "Verde y Amarillo",
    artists: ["Jeremías San Martín"],
    cover: "/images/trabajos/jeremias-san-martin-verde-y-amarillo.jpg",
    preview: "https://p.scdn.co/mp3-preview/8a9c759619e0ed5d1bdeb23a6fcb27a64e4a3721",
    plays: 0,
  },
  // 2024-06-14
  {
    spotifyId: "7mMv6W2Jny0fLAXuduxYPf",
    title: "y es bonito",
    artists: ["Hey Kid", "Paul Alone"],
    cover: "/images/trabajos/hey-kid-y-es-bonito.jpg",
    preview: "https://p.scdn.co/mp3-preview/236177b1bbc19dd2ab6104f64ec5d1593b246366",
    plays: 0,
  },
  // 2024-06-06
  {
    spotifyId: "7woYSTdm96I66VZhSplPLr",
    title: "Teu",
    artists: ["Biel Martí"],
    cover: "/images/trabajos/biel-marti-teu.jpg",
    preview: "https://p.scdn.co/mp3-preview/0a76c6818e1e750d240edee4edefd97acb683b5e",
    plays: 0,
  },
  // 2024-05-31
  {
    spotifyId: "2hZ5uKUl5nbn4DlYoUMShE",
    title: "Sin ti",
    artists: ["Ariso"],
    cover: "/images/trabajos/ariso-sin-ti.jpg",
    preview: "https://p.scdn.co/mp3-preview/4c6c55d538bbe532d69a2bc638d289f5e193be80",
    plays: 0,
  },
  // 2024-04-19
  {
    spotifyId: "2s076zU8by2OjxXKr3MokH",
    title: "Tú y Yo",
    artists: ["Ariso"],
    cover: "/images/trabajos/ariso-tu-y-yo.jpg",
    preview: "https://p.scdn.co/mp3-preview/168be608e9639468fde40400210bb644db6e6b3b",
    plays: 0,
  },
  // 2024-04-05
  {
    spotifyId: "6tGc5ksGGbMXsxjJLzYYfv",
    title: "donde estés tú",
    artists: ["Hey Kid"],
    cover: "/images/trabajos/hey-kid-donde-estes-tu.jpg",
    preview: "https://p.scdn.co/mp3-preview/7aa2ea94290fa8dd60e33c7db6cc172552de9b6c",
    plays: 0,
  },
  // 2023-10-20
  {
    spotifyId: "06HnU7mD7qBnkDMZoQuGVY",
    title: "Aviones de papel",
    artists: ["Ariso"],
    cover: "/images/trabajos/ariso-aviones-de-papel.jpg",
    preview: "https://p.scdn.co/mp3-preview/ad83123332924a7c5203b04b7fce4b2855ae996f",
    plays: 0,
  },
  // 2023-06-30
  {
    spotifyId: "7A06ah5X99giuAenkTYEmB",
    title: "Lo Que Hay Dentro de Mí",
    artists: ["Malmö 040"],
    cover: "/images/trabajos/malmo-040-lo-que-hay-dentro-de-mi.jpg",
    preview: "https://p.scdn.co/mp3-preview/da1872b75acf6fdb21ed3f018df327c8028c5cd6",
    plays: 0,
  },
  // 2023-04-21
  {
    spotifyId: "0FHOixexpCWOhOfpSMFnei",
    title: "Lo Que La Luna Gritaba",
    artists: ["Susi Abanades", "Pol Bordas"],
    cover: "/images/trabajos/susi-abanades-lo-que-la-luna-gritaba.jpg",
    preview: "https://p.scdn.co/mp3-preview/243d5e9938765c0e5c2c846959ad3f3ff2f8d948",
    plays: 0,
  },
  // 2023-03-31
  {
    spotifyId: "1xulb90MOqqR6g9UmzjlDY",
    title: "Lo Que La Luna Gritaba",
    artists: ["Susi Abanades", "Pol Bordas"],
    cover: "/images/trabajos/susi-abanades-lo-que-la-luna-gritaba.jpg",
    preview: "https://p.scdn.co/mp3-preview/633a32120012214dbfa314e040fca1f22b91866c",
    plays: 0,
  },
  // 2023-03-10
  {
    spotifyId: "4YVSF9Il9YQanoJE9styhZ",
    title: "Te Volvería A Elegir",
    artists: ["Susi Abanades"],
    cover: "/images/trabajos/susi-abanades-te-volveria-a-elegir.jpg",
    preview: "https://p.scdn.co/mp3-preview/b9bd48ebe79c52b041b65eea9b98d514686484b5",
    plays: 0,
  },
  // 2023-03-10
  {
    spotifyId: "72XnVJ3njBZ4bxG74b28xb",
    title: "Te Volvería A Elegir",
    artists: ["Susi Abanades"],
    cover: "/images/trabajos/susi-abanades-te-volveria-a-elegir.jpg",
    preview: "https://p.scdn.co/mp3-preview/b9bd48ebe79c52b041b65eea9b98d514686484b5",
    plays: 0,
  },
  // 2022-08-19
  {
    spotifyId: "5crlbqHn0ya0FzFun3nl5C",
    title: "Entre la Espada y la Pared",
    artists: ["Lluis Rotger"],
    cover: "/images/trabajos/lluis-rotger-entre-la-espada-y-la-pared.jpg",
    preview: "https://p.scdn.co/mp3-preview/9e815024bb5986caf32a8bbf748efb93bae2a1a6",
    plays: 0,
  },
  // 2022-07-22
  {
    spotifyId: "0RU3VGrszpwSBK9HXqQYfV",
    title: "Canción de Amor Sin Tapujos",
    artists: ["Lluis Rotger"],
    cover: "/images/trabajos/lluis-rotger-cancion-de-amor-sin-tapujos.jpg",
    preview: "https://p.scdn.co/mp3-preview/654d790fc1a112567639275b1bc0caad3a1ca954",
    plays: 0,
  },
  // 2022-03-18
  {
    spotifyId: "5aaNNWOqmufFfZV8MQjj3P",
    title: "Moon River",
    artists: ["Jesús Prieto \"Pitti\""],
    cover: "/images/trabajos/jesus-prieto-pitti-moon-river.jpg",
    preview: "https://p.scdn.co/mp3-preview/936cdd102adf9628b3a3a4d9b66ff42180a2c84b",
    plays: 0,
  },
  // 2022-01-14
  {
    spotifyId: "01QuFsCW15drduLlBcyKkq",
    title: "Cuando No Nos Echen De Menos",
    artists: ["Susi Abanades", "Joan Isern"],
    cover: "/images/trabajos/susi-abanades-cuando-no-nos-echen-de-menos.jpg",
    preview: "https://p.scdn.co/mp3-preview/58dfea4a8588919d736c58cff96f9a8d62680dd6",
    plays: 0,
  },
  // 2019-03-08
  {
    spotifyId: "1y3pdM4zm5j9DWxlAlaIrL",
    title: "Metamórfica",
    artists: ["Lauren Nine", "Jasperino"],
    cover: "/images/trabajos/lauren-nine-metamorfica.jpg",
    preview: "https://p.scdn.co/mp3-preview/ace44f8219640b0758aea4c9fac76f4d5118ad43",
    plays: 0,
  },
  // 2018-05-25
  {
    spotifyId: "2uHsPtrr3eoTEB766djtIk",
    title: "Intro",
    artists: ["Lauren Nine"],
    cover: "/images/trabajos/lauren-nine-intro.jpg",
    preview: "https://p.scdn.co/mp3-preview/b320958ed58dd024e8e12382c7f6fa9c521a16ab",
    plays: 0,
  },
  // 2018-05-25
  {
    spotifyId: "2KX5R5qBRWeUYnAgNgXjMs",
    title: "Andromeda",
    artists: ["Lauren Nine"],
    cover: "/images/trabajos/lauren-nine-andromeda.jpg",
    preview: "https://p.scdn.co/mp3-preview/eaf78ff006b0171b011b9444aca239df791a3ac9",
    plays: 0,
  },
];
