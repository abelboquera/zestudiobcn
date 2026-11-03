/**
 * Equipo del estudio para la pantalla "Gear" (/[lang]/gear), el selector
 * tipo videojuego que sustituye a la galeria.
 *
 * Las cuatro categorias son las mismas que las de la galeria. Cada equipo usa
 * su recorte de public/images/equipo, generado a partir de la foto de la
 * galeria con el recortador de sujetos de macOS (ver README del proyecto).
 */

/** Fila de la ficha: etiqueta gris a la izquierda, valor blanco a la derecha */
export type GearSpec = [label: string, value: string];

export type SelectorItem = {
  /** Marca y modelo */
  name: string;
  /** Ruta del recorte (PNG con transparencia) dentro de public/ */
  img: string;
  specs: GearSpec[];
};

export type SelectorCategory = {
  id: string;
  /** Nombre de la categoria; en/ca son sus traducciones */
  label: string;
  labelEn: string;
  labelCa: string;
  /** Palabra del contador de la ficha: "ELECTRICA 01 / 27" */
  unit: string;
  unitEn: string;
  unitCa: string;
  icon: "guitar" | "acoustic" | "amp" | "keys";
  items: SelectorItem[];
};

const G = "/images/equipo/";

export const gearSelector: SelectorCategory[] = [
  {
    id: "electricas",
    label: "Eléctricas",
    labelEn: "Electric",
    labelCa: "Elèctriques",
    unit: "ELÉCTRICA",
    unitEn: "ELECTRIC",
    unitCa: "ELÈCTRICA",
    icon: "guitar",
    items: [
      {
        name: "Gibson ES-345",
        img: G + "foto-8132.png",
        specs: [["Tipo", "Semi-hollow"], ["Año", "1971"], ["Pastillas", "Humbucker × 2"], ["Puente", "Bigsby"], ["Cuerdas", "11-48"]],
      },
      {
        name: "Gibson Les Paul Custom",
        img: G + "foto-8130.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Black Beauty"], ["Herrajes", "Dorados"], ["Pastillas", "Humbucker × 2"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Gibson Les Paul Double Cut",
        img: G + "foto-8126.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "TV Yellow"], ["Diapasón", "Palisandro"], ["Pastillas", "P90 × 2"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Gibson SG '61",
        img: G + "foto-8127.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1990"], ["Acabado", "Cherry"], ["Pastillas", "Humbucker × 2"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Fender Telecaster",
        img: G + "foto-8125.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1968"], ["Acabado", "Blonde"], ["Diapasón", "Palisandro"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Fender Telecaster",
        img: G + "foto-8124.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1975"], ["Cuerpo", "Fresno natural"], ["Diapasón", "Arce"], ["Cuerdas", "10-46"]],
      },
      {
        name: "G&L ASAT Special",
        img: G + "foto-8117.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Azul metalizado"], ["Diapasón", "Palisandro"], ["Pastillas", "MFD × 2"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Fender Mustang",
        img: G + "foto-8122.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1970"], ["Acabado", "Rojo"], ["Pala", "Matching headstock"], ["Cuerdas", "9-46"]],
      },
      {
        name: "Fender Stratocaster",
        img: G + "foto-8120.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1976"], ["Acabado", "Natural"], ["Pastillas", "Single coil × 3"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Fender Stratocaster American Standard",
        img: G + "foto-8121.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1999"], ["Acabado", "Sunburst"], ["Diapasón", "Arce"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Fender Stratocaster Custom Shop",
        img: G + "foto-8109.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Surf Green · relic"], ["Pastillas", "HSS"], ["Puente", "Trémolo"], ["Cuerdas", "9-42"]],
      },
      {
        name: "Blade Levinson RH4 Custom",
        img: G + "foto-8115.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Wine Red"], ["Diapasón", "Arce flameado"], ["Pastillas", "HSS"], ["Cuerdas", "9-42"]],
      },
      {
        name: "Harley Benton",
        img: G + "foto-8107.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Cuerpo", "Tapa de arce flameado"], ["Diapasón", "Arce"], ["Pastillas", "HSS Custom Wound"], ["Puente", "Trémolo"]],
      },
      {
        name: "Squier Stratocaster JV Series",
        img: G + "foto-8119.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1983"], ["Origen", "Japón"], ["Pastillas", "Single coil × 3"], ["Cuerdas", "11-48"]],
      },
      {
        name: "Squier '51 Pawn Shop",
        img: G + "foto-8106.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Negro"], ["Diapasón", "Arce"], ["Pastillas", "Single coil + humbucker"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Ibanez JEM7V WH",
        img: G + "foto-8116.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1999"], ["Puente", "Floyd Rose"], ["Pastillas", "HSH"], ["Detalle", "Monkey grip · Tree of Life"], ["Cuerdas", "9-42"]],
      },
      {
        name: "Gretsch 5655",
        img: G + "foto-8131.png",
        specs: [["Tipo", "Hollow body"], ["Acabado", "Aspen Green"], ["Pastillas", "Humbucker × 2"], ["Puente", "Bigsby"], ["Cuerdas", "11-48"]],
      },
      {
        name: "Danelectro '59",
        img: G + "foto-8113.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Acabado", "Naranja metalizado"], ["Pastillas", "Lipstick × 2"], ["Cuerdas", "10-46"]],
      },
      {
        name: "Eko Camaro Caiman",
        img: G + "foto-8112.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "1970"], ["Origen", "Italia"], ["Acabado", "Negro purpurina"], ["Cuerdas", "10-46 flat"]],
      },
      {
        name: "Eko Barracuda",
        img: G + "foto-8110.png",
        specs: [["Tipo", "Semi-hollow"], ["Año", "1965"], ["Origen", "Italia"], ["Puente", "Trémolo"], ["Cuerdas", "11-54 flat"]],
      },
      {
        name: "Teisco EG 404",
        img: G + "foto-8105.png",
        specs: [["Tipo", "Guitarra eléctrica"], ["Año", "Años 70"], ["Origen", "Japón"], ["Pastillas", "Single coil × 4"], ["Puente", "Trémolo"]],
      },
      {
        name: "PRS 277 Barítono",
        img: G + "foto-8118.png",
        specs: [["Tipo", "Barítono semi-hollow"], ["Pastillas", "Soapbar × 2"], ["Inlays", "Pájaros"], ["Cuerpo", "Tapa de arce flameado"]],
      },
      {
        name: "Harley Benton Deluxe",
        img: G + "foto-8111.png",
        specs: [["Tipo", "Semi-hollow"], ["Cuerdas", "12 cuerdas"], ["Acabado", "Cherry burst"], ["Pastillas", "Humbucker × 2"]],
      },
      {
        name: "Guitarra MIDI",
        img: G + "foto-8114.png",
        specs: [["Tipo", "Controlador MIDI"], ["Marca", "Aeroband"], ["Salida", "MIDI / USB"], ["Uso", "Composición"]],
      },
      {
        name: "Fender Precision",
        img: G + "foto-8103.png",
        specs: [["Tipo", "Bajo eléctrico"], ["Cuerdas", "4 cuerdas"], ["Acabado", "Purpurina rosa"], ["Diapasón", "Arce"], ["Pastilla", "Split coil"]],
      },
      {
        name: "Marcus Miller JB",
        img: G + "foto-8104.png",
        specs: [["Tipo", "Bajo eléctrico"], ["Cuerdas", "5 cuerdas"], ["Acabado", "Blanco"], ["Diapasón", "Arce"], ["Pastillas", "Jazz × 2"]],
      },
      {
        name: "Ibanez Gary Willis",
        img: G + "foto-8102.png",
        specs: [["Tipo", "Bajo eléctrico"], ["Cuerdas", "5 cuerdas"], ["Mástil", "Fretless"], ["Acabado", "Negro mate"]],
      },
    ],
  },
  {
    id: "acusticas",
    label: "Acústicas",
    labelEn: "Acoustic",
    labelCa: "Acústiques",
    unit: "ACÚSTICA",
    unitEn: "ACOUSTIC",
    unitCa: "ACÚSTICA",
    icon: "acoustic",
    items: [
      {
        name: "Martin D-28",
        img: G + "foto-8100.png",
        specs: [["Tipo", "Dreadnought"], ["Año", "2009"], ["Tapa", "Abeto"], ["Aros y fondo", "Palisandro"], ["Cuerdas", "Metal"]],
      },
      {
        name: "Alhambra W3",
        img: G + "foto-8097.png",
        specs: [["Tipo", "Dreadnought"], ["Tapa", "Cedro"], ["Origen", "España"], ["Cuerdas", "Metal"]],
      },
      {
        name: "Suzuki WT200",
        img: G + "foto-8098.png",
        specs: [["Tipo", "Dreadnought"], ["Año", "Años 70"], ["Cuerdas", "12 cuerdas"], ["Origen", "Japón"]],
      },
      {
        name: "Ramírez Flamenca",
        img: G + "foto-8101.png",
        specs: [["Tipo", "Guitarra flamenca"], ["Año", "1983"], ["Cuerdas", "Nylon"], ["Origen", "Madrid"]],
      },
      {
        name: "Gibson Chet Atkins",
        img: G + "foto-8177.png",
        specs: [["Tipo", "Nylon electrificada"], ["Año", "Años 90"], ["Cuerpo", "Sólido con cutaway"], ["Cuerdas", "Nylon"]],
      },
      {
        name: "Ukelele Alvarez",
        img: G + "foto-8137.png",
        specs: [["Tipo", "Ukelele"], ["Tapa", "Cedro"], ["Cuerdas", "4 · nylon"]],
      },
      {
        name: "Guitarlele Yamaha",
        img: G + "foto-8133.png",
        specs: [["Tipo", "Guitarlele"], ["Afinación", "La (5ª alta)"], ["Cuerdas", "6 · nylon"]],
      },
      {
        name: "Mandolina Epiphone",
        img: G + "foto-8135.png",
        specs: [["Tipo", "Mandolina estilo A"], ["Acabado", "Sunburst"], ["Cuerdas", "8 · 4 órdenes"]],
      },
      {
        name: "Laúd Alhambra",
        img: G + "foto-8138.png",
        specs: [["Tipo", "Laúd español"], ["Cuerdas", "12 · 6 órdenes"], ["Origen", "España"]],
      },
      {
        name: "Bandurria Alhambra",
        img: G + "foto-8139.png",
        specs: [["Tipo", "Bandurria"], ["Cuerdas", "12 · 6 órdenes"], ["Origen", "España"]],
      },
      {
        name: "Violín",
        img: G + "foto-8136.png",
        specs: [["Tipo", "Violín"], ["Época", "Finales del s. XIX"], ["Cuerdas", "4"]],
      },
    ],
  },
  {
    id: "amplificadores",
    label: "Amplificadores",
    labelEn: "Amplifiers",
    labelCa: "Amplificadors",
    unit: "AMPLIFICADOR",
    unitEn: "AMPLIFIER",
    unitCa: "AMPLIFICADOR",
    icon: "amp",
    items: [
      {
        name: "Marshall Super Lead",
        img: G + "foto-8141.png",
        specs: [["Tipo", "Cabezal a válvulas"], ["Año", "1974"], ["Potencia", "100 W"], ["Pantalla", "Marshall 4 × 12\" (1975)"], ["Origen", "UK"]],
      },
      {
        name: "Fender Twin Reverb",
        img: G + "foto-8143.png",
        specs: [["Tipo", "Combo a válvulas"], ["Año", "1968"], ["Altavoces", "2 × 12\""], ["Canales", "Normal / Vibrato"], ["Reverb", "De muelles"]],
      },
      {
        name: "Vox AC30",
        img: G + "foto-8142.png",
        specs: [["Tipo", "Combo a válvulas"], ["Potencia", "30 W"], ["Altavoces", "2 × 12\""], ["Canales", "Normal / Top Boost"], ["Origen", "UK"]],
      },
      {
        name: "Mesa Boogie Mark IV",
        img: G + "foto-8144.png",
        specs: [["Tipo", "Combo a válvulas"], ["Año", "Años 90"], ["Canales", "Rhythm 1 / 2 · Lead"], ["EQ", "Gráfico 5 bandas"], ["Origen", "USA"]],
      },
      {
        name: "Sinmarc MR 2120 C",
        img: G + "foto-8145.png",
        specs: [["Tipo", "Combo vintage"], ["Año", "Años 60"], ["Canales", "Guitarra / Vibrato"], ["Origen", "España"]],
      },
      {
        name: "Peterson PG100",
        img: G + "foto-8180.png",
        specs: [["Tipo", "Combo"], ["Altavoz", "Electro-Voice"], ["Extras", "Pedal FS-1"], ["Acabado", "Madera"]],
      },
      {
        name: "Kemper Profiling Amp",
        img: G + "foto-8178.png",
        specs: [["Tipo", "Amplificador digital"], ["Uso", "Perfiles de ampli"], ["Extras", "Strymon Compadre"]],
      },
      {
        name: "Pantalla Markbass",
        img: G + "foto-8179.png",
        specs: [["Tipo", "Pantalla de bajo"], ["Marca", "Markbass"], ["Uso", "Bajo eléctrico"]],
      },
      {
        name: "Radio Grammont",
        img: G + "foto-grammont.png",
        specs: [["Tipo", "Radio de válvulas"], ["Época", "Vintage"], ["Uso", "Reamping / color"]],
      },
    ],
  },
  {
    id: "otros",
    label: "Otros instrumentos",
    labelEn: "Other instruments",
    labelCa: "Altres instruments",
    unit: "INSTRUMENTO",
    unitEn: "INSTRUMENT",
    unitCa: "INSTRUMENT",
    icon: "keys",
    items: [
      {
        name: "Fender Rhodes Mark I",
        img: G + "rhodes-mark-i.png",
        specs: [["Tipo", "Piano eléctrico"], ["Año", "1979"], ["Teclas", "73"], ["Salida", "Línea / amplificador"]],
      },
      {
        name: "Batería Yamaha Recording Custom",
        img: G + "foto-bateria.png",
        specs: [["Tipo", "Batería acústica"], ["Año", "Años 90"], ["Cajas", "Ludwig Supraphonic · Noble & Cooley"], ["Platos", "Bosphorus"]],
      },
    ],
  },
];
