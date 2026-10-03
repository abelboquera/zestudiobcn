export type Episodio = {
  /** ID de Spotify del episodio (de open.spotify.com/episode/ID) */
  spotifyId: string;
  title: string;
  /** Nombre del podcast */
  show: string;
  /** Portada descargada en public/images/podcast */
  cover: string;
  /** Fragmento que ofrece Spotify */
  preview: string;
};

/**
 * Episodios del apartado "Podcast".
 * El orden de esta lista es el que se ve en la web; los cuatro primeros
 * salen de entrada y el resto aparece al pulsar "Mostrar mas".
 */
export const episodios: Episodio[] = [
  {
    spotifyId: "0FbgC3d5dlGsVNbJlH5ulx",
    title: "Episodio 1. Cosmos. El viaje de Sara García Alonso",
    show: "El Laboratorio",
    cover: "/images/podcast/el-laboratorio-episodio-1-cosmos-el-viaje-de-sara-garcia-alonso.jpg",
    preview: "https://p.scdn.co/mp3-preview/35b95f5e5902e2cab28a35bbbe7bb9c62a475b06.mp3",
  },
  {
    spotifyId: "7FxyA1uuBnipyBBnKl4fUz",
    title: "Episodio 2. Hipoxia. Una vida en las alturas con Ginés Viscor.",
    show: "El Laboratorio",
    cover: "/images/podcast/el-laboratorio-episodio-2-hipoxia-una-vida-en-las-alturas-con-gin.jpg",
    preview: "https://p.scdn.co/mp3-preview/53b98b54f13445e1574292fa58b9cacc79488675.mp3",
  },
  {
    spotifyId: "4ad8QYv1o3s6ozQjG9571V",
    title: "Episodio 10 - Kilian Jornet y el Everest",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-10-kilian-jornet-y-el-everest.jpg",
    preview: "https://p.scdn.co/mp3-preview/e5e827da284b103c27fbaec4f152424c192c36c5.mp3",
  },
  {
    spotifyId: "25asT16KgSUgnSq0lwuOLl",
    title: "Episodio 2 - ¿Por qué somos vagos?",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-2-por-que-somos-vagos.jpg",
    preview: "https://p.scdn.co/mp3-preview/16184112485105aeadc1f42a998f7d11b2514b18.mp3",
  },
  {
    spotifyId: "3dyO6w8FOMQdYDNfxhNIqo",
    title: "Episodio 9 - La revolución del oxígeno y la mitocondria",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-9-la-revolucion-del-oxigeno-y-la-mitocond.jpg",
    preview: "https://p.scdn.co/mp3-preview/31f28017b293c324fec0551c328e260fb7b643a1.mp3",
  },
  {
    spotifyId: "0D3nZTenOev0fmkw0a5Nvc",
    title: "Episodio 8 - Los detectives del cáncer",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-8-los-detectives-del-cancer.jpg",
    preview: "https://p.scdn.co/mp3-preview/ffcf8ede0819fc4dd762b002c0daba183d4c6c47.mp3",
  },
  {
    spotifyId: "0pBP0R5wJHlZU8BDgqXHYa",
    title: "Episodio 7 - La velocidad",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-7-la-velocidad.jpg",
    preview: "https://p.scdn.co/mp3-preview/235fd6eab6ca631fda7f849bf36199c8ad355a95.mp3",
  },
  {
    spotifyId: "34PBRuUM2kYLFOvGN9xuXz",
    title: "Episodio 6 - El cerebro egoísta",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-6-el-cerebro-egoista.jpg",
    preview: "https://p.scdn.co/mp3-preview/0089c79d7fcb6b792154cc43889340bece7e2aea.mp3",
  },
  {
    spotifyId: "1hxavbKyXJ93zXlgKzIXWn",
    title: "Episodio 5 - La historia de Otto Warburg",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-5-la-historia-de-otto-warburg.jpg",
    preview: "https://p.scdn.co/mp3-preview/75d7b00cfd85210c9b5540909a34e7b1ccf3384f.mp3",
  },
  {
    spotifyId: "0Mho6beMn8LsitHUCtmVZI",
    title: "Episodio 4 - El Embarazo",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-4-el-embarazo.jpg",
    preview: "https://p.scdn.co/mp3-preview/94aa0e8b183a9db6d3958a7325f3830e31fb59bd.mp3",
  },
  {
    spotifyId: "76Jvyido7NaiVSaelHwV2P",
    title: "Episodio 3 - No respires",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-3-no-respires.jpg",
    preview: "https://p.scdn.co/mp3-preview/75ab5fe783a6eb9547b7392b2a19b9051ed183be.mp3",
  },
  {
    spotifyId: "732loznem76CZdzOMYFAco",
    title: "Episodio 1 - La Antártida",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-episodio-1-la-antartida.jpg",
    preview: "https://p.scdn.co/mp3-preview/97a9cf50dda58ba3472104d5105fff0cc13b397f.mp3",
  },
  {
    spotifyId: "1xy3EyoufRibOvX5svgaBQ",
    title: "El prólogo | 2ª Temporada de 90 Gramos",
    show: "90 Gramos",
    cover: "/images/podcast/90-gramos-el-prologo-2a-temporada-de-90-gramos.jpg",
    preview: "https://p.scdn.co/mp3-preview/d5432b86b414447f9bbff0acd4259469957d03f5.mp3",
  },
];
