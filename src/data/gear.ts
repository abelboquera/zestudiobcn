export type GearItem = {
  /** Marca y modelo: "Fender Telecaster" */
  name: string;
  /** Dato secundario en gris: año, numero de cuerdas... Opcional. */
  detail?: string;
  /** Etiqueta naranja a la derecha: calibre de cuerdas, cantidad ("×2")... Opcional. */
  tag?: string;
};

export type GearCategory = {
  title: string;
  /** Icono que se muestra junto al titulo */
  icon: "guitar" | "keys" | "amp" | "mic" | "monitor" | "preamp";
  items: GearItem[];
};

/**
 * Equipamiento de Z Estudio BCN (apartado "Estudio" de la web).
 *
 * Cada categoria es una tarjeta. Para anadir un equipo, anade una linea en su categoria.
 */
export const gear: GearCategory[] = [
  {
    title: "Guitarras eléctricas",
    icon: "guitar",
    items: [
      { name: "Gibson ES-345", detail: "1971", tag: "11-48" },
      { name: "Gibson Les Paul Custom", detail: "BB", tag: "10-46" },
      { name: "Gibson Les Paul Double Cut", detail: "P90", tag: "10-46" },
      { name: "Gibson SG '61", detail: "1990", tag: "10-46" },
      { name: "Fender Telecaster", detail: "1968", tag: "10-46" },
      { name: "Fender Telecaster", detail: "1975", tag: "10-46" },
      { name: "G&L ASAT Special", tag: "10-46" },
      { name: "Fender Mustang", detail: "1970 · Matching Headstock", tag: "9-46" },
      { name: "Fender Stratocaster", detail: "1976", tag: "10-46" },
      { name: "Fender Stratocaster American Standard", detail: "1999", tag: "10-46" },
      { name: "Fender Stratocaster Custom Shop", tag: "9-42" },
      { name: "Blade Levinson RH4 Custom", tag: "9-42" },
      { name: "Squier Stratocaster JV Series", detail: "1983", tag: "11-48" },
      { name: "Squier '51 Pawn Shop", tag: "10-46" },
      { name: "Ibanez JEM7V WH", detail: "1999", tag: "9-42" },
      { name: "Gretsch 5655", tag: "11-48" },
      { name: "Danelectro '59", tag: "10-46" },
      { name: "Eko Camaro Caiman", detail: "1970", tag: "10-46 flat" },
      { name: "Eko Barracuda", detail: "1965", tag: "11-54 flat" },
      { name: "Teisco EG 404", detail: "70's" },
      { name: "PRS 277 Barítono" },
      { name: "Harley Benton Deluxe", detail: "12 cuerdas" },
      { name: "Guitarra MIDI" },
    ],
  },
  {
    title: "Guitarras acústicas",
    icon: "guitar",
    items: [
      { name: "Martin D-28", detail: "2009" },
      { name: "Alhambra W3" },
      { name: "Suzuki WT200", detail: "12 cuerdas · 70's" },
    ],
  },
  {
    title: "Guitarras de nylon",
    icon: "guitar",
    items: [
      { name: "Ramírez Flamenca", detail: "1983" },
      { name: "Gibson Chet Atkins", detail: "90's" },
    ],
  },
  {
    title: "Otros instrumentos acústicos",
    icon: "guitar",
    items: [
      { name: "Ukelele Ortega" },
      { name: "Mandolina Epiphone" },
      { name: "Laúd Alhambra" },
      { name: "Bandurria Alhambra" },
      { name: "Guitarlele Yamaha" },
    ],
  },
  {
    title: "Bajos",
    icon: "guitar",
    items: [
      { name: "Fender Precision", detail: "4 cuerdas" },
      { name: "Marcus Miller JB", detail: "5 cuerdas" },
      { name: "Ibanez Gary Willis", detail: "5 cuerdas · fretless" },
    ],
  },
  {
    title: "Otros instrumentos",
    icon: "keys",
    items: [
      { name: "Fender Rhodes MkII", detail: "1979" },
      { name: "Yamaha CK61" },
      { name: "Studiologic 73", detail: "Contrapesado" },
      { name: "Batería Yamaha Recording Custom", detail: "90's" },
      { name: "Caja Ludwig Supraphonic", detail: "1968" },
      { name: "Caja Noble & Cooley", detail: "14\" × 7\"" },
      { name: "Set de platos Bosphorus" },
      { name: "Violín", detail: "Finales del s. XIX" },
    ],
  },
  {
    title: "Amplificadores",
    icon: "amp",
    items: [
      { name: "Kemper Profiling Amp" },
      { name: "Marshall Super Lead", detail: "1974" },
      { name: "Fender Twin Reverb", detail: "1968" },
      { name: "Vox AC30" },
      { name: "Mesa Boogie Mark IV", detail: "90's" },
      { name: "Sinmarc MR 2120 C", detail: "60's" },
      { name: "Peterson PG100" },
      { name: "Jezz Custom", detail: "5 W" },
      { name: "Pantalla Marshall 4×12\"", detail: "1975" },
    ],
  },
  {
    title: "Microfonía",
    icon: "mic",
    items: [
      { name: "Neumann U87" },
      { name: "Electro-Voice PL20" },
      { name: "AKG 460 · CK63 ULS", tag: "×2" },
      { name: "AKG D112" },
      { name: "Rode K2" },
      { name: "Rode NT55", tag: "Pareja" },
      { name: "Sennheiser MD 421" },
      { name: "Shure SM57", tag: "×4" },
      { name: "Shure SM58", tag: "×2" },
      { name: "Behringer BA19A" },
      { name: "T.Bone RB500", tag: "×2" },
    ],
  },
  {
    title: "Escuchas",
    icon: "monitor",
    items: [
      { name: "Yamaha NS10", tag: "×2" },
      { name: "Dynaudio BM15A", tag: "×2" },
      { name: "Auriculares Beyerdynamic" },
      { name: "Auriculares AKG" },
    ],
  },
  {
    title: "Preamps",
    icon: "preamp",
    items: [
      { name: "Millennia STT-1", tag: "×2" },
      { name: "Sebatron VMP-4000e" },
      { name: "Apogee Ensemble" },
      { name: "SPL Mixdream" },
    ],
  },
];
