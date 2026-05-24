export const dictionaries = {
  es: {
    nav: {
      estudio: "Estudio",
      produccion: "Producción",
      combos: "Combos",
      clases: "Clases",
      trabajos: "Trabajos",
      artistas: "Artistas",
      nosotros: "Nosotros",
      contacto: "Contacto"
    },
    hero: {
      slides: [
        {
          id: "inicio",
          image: "/images/hero-wide.png",
          titlePrefix: "Z ESTUDIO ",
          titleHighlight: "BCN",
          subtitle: "Estudio de grabación, producción musical y escuela de combos en Barcelona.",
          desc: "Grabación, mezcla, mastering, producción, clases de guitarra y combos para músicos que quieren desarrollar su sonido tocando de verdad.",
          cta1: { text: "Quiero grabar", href: "#contacto" },
          cta2: { text: "Apuntarme a un combo", href: "#escuela-combos" }
        },
        {
          id: "estudio",
          image: "/images/live-room.png",
          titlePrefix: "EL ",
          titleHighlight: "ESTUDIO",
          subtitle: "Un espacio diseñado para la creatividad.",
          desc: "Acústica cuidada, ambiente relajado y el mejor equipo analógico y digital a tu disposición para capturar la mejor interpretación.",
          cta1: { text: "Ver equipamiento", href: "#estudio" },
          cta2: { text: "Reservar sesión", href: "#contacto" }
        },
        {
          id: "combos",
          image: "/images/drums.png",
          titlePrefix: "ESCUELA DE ",
          titleHighlight: "COMBOS",
          subtitle: "La música cobra sentido cuando la compartes.",
          desc: "Únete a una banda de tu nivel, prepara un repertorio guiat por profesionales y súbete al escenario.",
          cta1: { text: "Ver niveles", href: "#escuela-combos" },
          cta2: { text: "Apuntarme", href: "#contacto" }
        },
        {
          id: "clases",
          image: "/images/guitars.png",
          titlePrefix: "CLASES ",
          titleHighlight: "INDIVIDUALES",
          subtitle: "Aprende a tu ritmo con David García.",
          desc: "Formación personalizada en guitarra eléctrica y acústica, armonía moderna, arreglos y producción musical.",
          cta1: { text: "Ver clases", href: "#clases" },
          cta2: { text: "Contactar", href: "#contacto" }
        }
      ]
    },
    estudio: {
      title: "El Estudio",
      subtitle: "Un espacio diseñado para la creatividad. Acústica cuidada, ambiente relajado y el mejor equipo analógico y digital.",
      controlRoom: "Control Room",
      controlRoomDesc: "El corazón del estudio",
      liveRoom: "Live Room",
      liveRoomDesc: "Acústica viva y controlada",
      mic: "Microfonía",
      micDesc: "Colección de micrófonos de condensador, cinta y dinámicos para cualquier fuente.",
      outboard: "Outboard",
      outboardDesc: "Previos, compresores y EQs analógicos para darle color y calidez a tu sonido.",
      monitoreo: "Monitoreo",
      monitoreoDesc: "Escucha precisa y detallada para tomar las mejores decisiones en la mezcla.",
      backline: "Backline",
      backlineDesc: "Guitarras, bajos, amplificadores y sintetizadores a tu disposición."
    },
    produccion: {
      title: "Producción Musical",
      subtitle: "Desde la primera nota hasta el master final. Te ayudamos a encontrar tu sonido y a llevar tus canciones al siguiente nivel.",
      prodTitle: "Producción",
      prodDesc: "Trabajamos juntos en la estructura, arreglos e instrumentación de tus canciones. Te asesoramos en la dirección artística.",
      prodList: ["Pre-producción y maquetas", "Arreglos musicales", "Grabación de instrumentos", "Programación de baterías y beats"],
      mixTitle: "Mezcla",
      mixDesc: "Equilibramos todos los elementos de tu canción para que suene potente, clara y con profundidad usando equipo híbrido.",
      mixList: ["Edición y afinación", "EQ y compresión analógica/digital", "Efectos espaciales", "Automatización detallada"],
      masterTitle: "Mastering",
      masterDesc: "El último paso antes de publicar. Optimizamos el volumen y el tono general para que tu música suene perfecta.",
      masterList: ["EQ correctiva y tonal", "Compresión multibanda", "Limitación y maximización", "Formatos para streaming"]
    },
    combos: {
      tag: "Matrícula abierta",
      title: "Escuela de Combos",
      subtitle: "La música cobra sentido cuando la compartes. Únete a una banda de tu nivel, prepara un repertorio y súbete al escenario.",
      step1Title: "1. Formamos tu banda",
      step1Desc: "Te asignamos a un grupo con músicos de tu mismo nivel e inquietudes musicales.",
      step2Title: "2. Ensayo guiado",
      step2Desc: "Ensayos semanales de 1.5h dirigidos por David García. Trabajamos repertorio y dinámica.",
      step3Title: "3. Concierto en directo",
      step3Desc: "El objetivo final: tocar en directo. Organizamos conciertos periódicos en salas de Barcelona."
    },
    clases: {
      title: "Clases Individuales",
      subtitle: "Aprende a tu ritmo con clases personalizadas de guitarra, armonía y producción musical.",
      guitarTitle: "Guitarra",
      guitarSub: "Eléctrica y Acústica",
      guitarDesc: "Clases adaptadas a tus gustos musicales y objetivos. Desde los primeros acordes hasta técnicas avanzadas de improvisación.",
      guitarList: ["Técnica y repertorio", "Improvisación y escalas"],
      harmonyTitle: "Armonía",
      harmonySub: "Moderna y Arreglos",
      harmonyDesc: "Entiende cómo funciona la música que escuchas. Aprende a componer, rearmonizar y crear arreglos para tus propias canciones.",
      harmonyList: ["Formación de acordes", "Composición de melodías"],
      prodTitle: "Producción",
      prodSub: "Grabación y Mezcla",
      prodDesc: "Aprende a usar tu ordenador como un estudio de grabación. Clases prácticas donde trabajaremos sobre tus propios proyectos.",
      prodList: ["Manejo de DAWs", "Criterios de mezcla"]
    },
    trabajos: {
      title: "Nuestros Trabajos",
      subtitle: "Una selección de los últimos proyectos que han pasado por el estudio.",
      playlistTitle: "Playlist del Estudio",
      playlistDesc: "Escucha nuestra playlist en Spotify con todos los lanzamientos producidos en Z Estudio BCN.",
      playlistPlaceholder: "[ Aquí iría el embed de Spotify ]"
    },
    artistas: {
      title: "Artistas",
      subtitle: "Músicos y bandas que han grabado, producido o colaborado en Z Estudio BCN.",
      roles: {
        coprod: "Co-producción",
        rec: "Grabación",
        mix: "Mezcla",
        master: "Mastering",
        prod: "Producción"
      }
    },
    nosotros: {
      title: "Sobre Nosotros",
      subtitle: "El equipo creativo y técnico detrás de Z Estudio BCN.",
      davidTitle: "David García",
      davidSub: "Director, Productor y Profesor",
      davidDesc1: "Con más de 15 años de experiencia, David es el motor de Z Estudio BCN. Su visión integral le permite abordar proyectos como músico, técnico y productor.",
      davidDesc2: "Su filosofía se basa en capturar la esencia de cada artista, utilizando la tecnología como herramienta al servicio de la canción.",
      davidRoles: ["Guitarrista", "Productor", "Profesor"],
      joanTitle: "Joan Isern",
      joanSub: "Co-productor y Colaborador (MÄLMO 040)",
      joanDesc1: "Joan aporta su visión fresca y experiencia directa en la escena pop e indie actual gracias a su trabajo en MÄLMO 040.",
      joanDesc2: "Se involucra en los proyectos aportando ideas de arreglos, estructuras y sonidos que conectan con el público de hoy. La sinergia entre la experiencia técnica de David y la intuición creativa de Joan crea el entorno perfecto.",
      joanRoles: ["Compositor", "Co-productor"]
    },
    contacto: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Escríbenos y le daremos forma.",
      location: "Ubicación",
      locationDesc: "Barcelona, España",
      locationSub: "Visitas solo con cita previa",
      formTitle: "Envíanos un mensaje",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "¿En qué estás interesado?",
      subjects: ["Grabación en estudio", "Producción / Mezcla / Mastering", "Escuela de Combos", "Clases particulares", "Otro"],
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto...",
      sendBtn: "Enviar mensaje"
    },
    footer: {
      desc: "Estudio de grabación, producción musical y escuela de combos en Barcelona dirigido por David García.",
      services: "Servicios",
      studio: "Estudio",
      contact: "Contacto",
      legal: "Aviso Legal",
      privacy: "Privacidad",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      estudio: "Studio",
      produccion: "Production",
      combos: "Combos",
      clases: "Classes",
      trabajos: "Work",
      artistas: "Artists",
      nosotros: "About Us",
      contacto: "Contact"
    },
    hero: {
      slides: [
        {
          id: "inicio",
          image: "/images/hero-wide.png",
          titlePrefix: "Z ESTUDIO ",
          titleHighlight: "BCN",
          subtitle: "Recording studio, music production and combos school in Barcelona.",
          desc: "Recording, mixing, mastering, production, guitar classes and combos for musicians who want to develop their sound by playing for real.",
          cta1: { text: "I want to record", href: "#contacto" },
          cta2: { text: "Join a combo", href: "#escuela-combos" }
        },
        {
          id: "estudio",
          image: "/images/live-room.png",
          titlePrefix: "THE ",
          titleHighlight: "STUDIO",
          subtitle: "A space designed for creativity.",
          desc: "Careful acoustics, relaxed atmosphere and the best analog and digital equipment at your disposal to capture the best performance.",
          cta1: { text: "View equipment", href: "#estudio" },
          cta2: { text: "Book session", href: "#contacto" }
        },
        {
          id: "combos",
          image: "/images/drums.png",
          titlePrefix: "COMBOS ",
          titleHighlight: "SCHOOL",
          subtitle: "Music makes sense when you share it.",
          desc: "Join a band of your level, prepare a repertoire guided by professionals and get on stage.",
          cta1: { text: "View levels", href: "#escuela-combos" },
          cta2: { text: "Sign up", href: "#contacto" }
        },
        {
          id: "clases",
          image: "/images/guitars.png",
          titlePrefix: "PRIVATE ",
          titleHighlight: "CLASSES",
          subtitle: "Learn at your own pace with David García.",
          desc: "Personalized training in electric and acoustic guitar, modern harmony, arrangements and music production.",
          cta1: { text: "View classes", href: "#clases" },
          cta2: { text: "Contact", href: "#contacto" }
        }
      ]
    },
    estudio: {
      title: "The Studio",
      subtitle: "A space designed for creativity. Careful acoustics, relaxed atmosphere and the best analog and digital equipment.",
      controlRoom: "Control Room",
      controlRoomDesc: "The heart of the studio",
      liveRoom: "Live Room",
      liveRoomDesc: "Live and controlled acoustics",
      mic: "Microphones",
      micDesc: "Collection of condenser, ribbon and dynamic microphones for any source.",
      outboard: "Outboard",
      outboardDesc: "Analog preamps, compressors and EQs to give color and warmth to your sound.",
      monitoreo: "Monitoring",
      monitoreoDesc: "Precise and detailed listening to make the best decisions in the mix.",
      backline: "Backline",
      backlineDesc: "Guitars, basses, amplifiers and synthesizers at your disposal."
    },
    produccion: {
      title: "Music Production",
      subtitle: "From the first note to the final master. We help you find your sound and take your songs to the next level.",
      prodTitle: "Production",
      prodDesc: "We work together on the structure, arrangements and instrumentation of your songs. We advise you on the artistic direction.",
      prodList: ["Pre-production and demos", "Musical arrangements", "Instrument recording", "Drum and beat programming"],
      mixTitle: "Mixing",
      mixDesc: "We balance all the elements of your song so it sounds powerful, clear and deep using hybrid equipment.",
      mixList: ["Editing and tuning", "Analog/digital EQ and compression", "Spatial effects", "Detailed automation"],
      masterTitle: "Mastering",
      masterDesc: "The final step before publishing. We optimize the volume and overall tone so your music sounds perfect.",
      masterList: ["Corrective and tonal EQ", "Multiband compression", "Limiting and maximization", "Formats for streaming"]
    },
    combos: {
      tag: "Open enrollment",
      title: "Combos School",
      subtitle: "Music makes sense when you share it. Join a band of your level, prepare a repertoire and get on stage.",
      step1Title: "1. We form your band",
      step1Desc: "We assign you to a group with musicians of your same level and musical interests.",
      step2Title: "2. Guided rehearsal",
      step2Desc: "Weekly 1.5h rehearsals directed by David García. We work on repertoire and dynamics.",
      step3Title: "3. Live concert",
      step3Desc: "The final goal: playing live. We organize periodic concerts in venues around Barcelona."
    },
    clases: {
      title: "Private Classes",
      subtitle: "Learn at your own pace with personalized classes in guitar, harmony and music production.",
      guitarTitle: "Guitar",
      guitarSub: "Electric and Acoustic",
      guitarDesc: "Classes adapted to your musical tastes and goals. From the first chords to advanced improvisation techniques.",
      guitarList: ["Technique and repertoire", "Improvisation and scales"],
      harmonyTitle: "Harmony",
      harmonySub: "Modern and Arrangements",
      harmonyDesc: "Understand how the music you listen to works. Learn to compose, reharmonize and create arrangements for your own songs.",
      harmonyList: ["Chord formation", "Melody composition"],
      prodTitle: "Production",
      prodSub: "Recording and Mixing",
      prodDesc: "Learn to use your computer as a recording studio. Practical classes where we will work on your own projects.",
      prodList: ["DAW management", "Mixing criteria"]
    },
    trabajos: {
      title: "Our Work",
      subtitle: "A selection of the latest projects that have passed through the studio.",
      playlistTitle: "Studio Playlist",
      playlistDesc: "Listen to our Spotify playlist with all the releases produced at Z Estudio BCN.",
      playlistPlaceholder: "[ Spotify embed would go here ]"
    },
    artistas: {
      title: "Artists",
      subtitle: "Musicians and bands who have recorded, produced or collaborated at Z Estudio BCN.",
      roles: {
        coprod: "Co-production",
        rec: "Recording",
        mix: "Mixing",
        master: "Mastering",
        prod: "Production"
      }
    },
    nosotros: {
      title: "About Us",
      subtitle: "The creative and technical team behind Z Estudio BCN.",
      davidTitle: "David García",
      davidSub: "Director, Producer and Teacher",
      davidDesc1: "With over 15 years of experience, David is the driving force of Z Estudio BCN. His comprehensive vision allows him to approach projects as a musician, technician and producer.",
      davidDesc2: "His philosophy is based on capturing the essence of each artist, using technology as a tool at the service of the song.",
      davidRoles: ["Guitarist", "Producer", "Teacher"],
      joanTitle: "Joan Isern",
      joanSub: "Co-producer and Collaborator (MÄLMO 040)",
      joanDesc1: "Joan brings his fresh vision and direct experience in the current pop and indie scene thanks to his work in MÄLMO 040.",
      joanDesc2: "He gets involved in projects providing ideas for arrangements, structures and sounds that connect with today's audience. The synergy between David's technical experience and Joan's creative intuition creates the perfect environment.",
      joanRoles: ["Composer", "Co-producer"]
    },
    contacto: {
      title: "Contact",
      subtitle: "Do you have a project in mind? Write to us and we'll shape it.",
      location: "Location",
      locationDesc: "Barcelona, Spain",
      locationSub: "Visits by appointment only",
      formTitle: "Send us a message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      subjectLabel: "What are you interested in?",
      subjects: ["Studio recording", "Production / Mixing / Mastering", "Combos School", "Private classes", "Other"],
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      sendBtn: "Send message"
    },
    footer: {
      desc: "Recording studio, music production and combos school in Barcelona directed by David García.",
      services: "Services",
      studio: "Studio",
      contact: "Contact",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      rights: "All rights reserved."
    }
  },
  ca: {
    nav: {
      estudio: "Estudi",
      produccion: "Producció",
      combos: "Combos",
      clases: "Classes",
      trabajos: "Treballs",
      artistas: "Artistes",
      nosotros: "Nosaltres",
      contacto: "Contacte"
    },
    hero: {
      slides: [
        {
          id: "inicio",
          image: "/images/hero-wide.png",
          titlePrefix: "Z ESTUDIO ",
          titleHighlight: "BCN",
          subtitle: "Estudi de gravació, producció musical i escola de combos a Barcelona.",
          desc: "Gravació, mescla, mastering, producció, classes de guitarra i combos per a músics que volen desenvolupar el seu so tocant de veritat.",
          cta1: { text: "Vull gravar", href: "#contacto" },
          cta2: { text: "Apuntar-me a un combo", href: "#escuela-combos" }
        },
        {
          id: "estudio",
          image: "/images/live-room.png",
          titlePrefix: "L'",
          titleHighlight: "ESTUDI",
          subtitle: "Un espai dissenyat per a la creativitat.",
          desc: "Acústica cuidada, ambient relaxat i el millor equip analògic i digital a la teva disposició per capturar la millor interpretació.",
          cta1: { text: "Veure equipament", href: "#estudio" },
          cta2: { text: "Reservar sessió", href: "#contacto" }
        },
        {
          id: "combos",
          image: "/images/drums.png",
          titlePrefix: "ESCOLA DE ",
          titleHighlight: "COMBOS",
          subtitle: "La música cobra sentit quan la comparteixes.",
          desc: "Uneix-te a una banda del teu nivell, prepara un repertori guiat per professionals i puja a l'escenari.",
          cta1: { text: "Veure nivells", href: "#escuela-combos" },
          cta2: { text: "Apuntar-me", href: "#contacto" }
        },
        {
          id: "clases",
          image: "/images/guitars.png",
          titlePrefix: "CLASSES ",
          titleHighlight: "INDIVIDUALS",
          subtitle: "Aprèn al teu ritme amb David García.",
          desc: "Formació personalitzada en guitarra elèctrica i acústica, harmonia moderna, arranjaments i producció musical.",
          cta1: { text: "Veure classes", href: "#clases" },
          cta2: { text: "Contactar", href: "#contacto" }
        }
      ]
    },
    estudio: {
      title: "L'Estudi",
      subtitle: "Un espai dissenyat per a la creativitat. Acústica cuidada, ambient relaxat i el millor equip analògic i digital.",
      controlRoom: "Control Room",
      controlRoomDesc: "El cor de l'estudi",
      liveRoom: "Live Room",
      liveRoomDesc: "Acústica viva i controlada",
      mic: "Microfonia",
      micDesc: "Col·lecció de micròfons de condensador, cinta i dinàmics per a qualsevol font.",
      outboard: "Outboard",
      outboardDesc: "Previs, compressors i EQs analògics per donar color i calidesa al teu so.",
      monitoreo: "Monitoratge",
      monitoreoDesc: "Escolta precisa i detallada per prendre les millors decisions a la mescla.",
      backline: "Backline",
      backlineDesc: "Guitarres, baixos, amplificadors i sintetitzadors a la teva disposició."
    },
    produccion: {
      title: "Producció Musical",
      subtitle: "Des de la primera nota fins al màster final. T'ajudem a trobar el teu so i a portar les teves cançons al següent nivell.",
      prodTitle: "Producció",
      prodDesc: "Treballem junts en l'estructura, arranjaments i instrumentació de les teves cançons. T'assessorem en la direcció artística.",
      prodList: ["Pre-producció i maquetes", "Arranjaments musicals", "Gravació d'instruments", "Programació de bateries i beats"],
      mixTitle: "Mescla",
      mixDesc: "Equilibrem tots els elements de la teva cançó perquè soni potent, clara i amb profunditat utilitzant equip híbrid.",
      mixList: ["Edició i afinació", "EQ i compressió analògica/digital", "Efectes espacials", "Automatització detallada"],
      masterTitle: "Mastering",
      masterDesc: "L'últim pas abans de publicar. Optimitzem el volum i el to general perquè la teva música soni perfecta.",
      masterList: ["EQ correctiva i tonal", "Compressió multibanda", "Limitació i maximització", "Formats per a streaming"]
    },
    combos: {
      tag: "Matrícula oberta",
      title: "Escola de Combos",
      subtitle: "La música cobra sentit quan la comparteixes. Uneix-te a una banda del teu nivell, prepara un repertori i puja a l'escenari.",
      step1Title: "1. Formem la teva banda",
      step1Desc: "T'assignem a un grup amb músics del teu mateix nivell i inquietuds musicals.",
      step2Title: "2. Assaig guiat",
      step2Desc: "Assajos setmanals d'1.5h dirigits per David García. Treballem repertori i dinàmica.",
      step3Title: "3. Concert en directe",
      step3Desc: "L'objectiu final: tocar en directe. Organitzem concerts periòdics en sales de Barcelona."
    },
    clases: {
      title: "Classes Individuals",
      subtitle: "Aprèn al teu ritme amb classes personalitzades de guitarra, harmonia i producció musical.",
      guitarTitle: "Guitarra",
      guitarSub: "Elèctrica i Acústica",
      guitarDesc: "Classes adaptades als teus gustos musicals i objectius. Des dels primers acords fins a tècniques avançades d'improvisació.",
      guitarList: ["Tècnica i repertori", "Improvisació i escales"],
      harmonyTitle: "Harmonia",
      harmonySub: "Moderna i Arranjaments",
      harmonyDesc: "Entén com funciona la música que escoltes. Aprèn a compondre, reharmonitzar i crear arranjaments per a les teves pròpies cançons.",
      harmonyList: ["Formació d'acords", "Composició de melodies"],
      prodTitle: "Producció",
      prodSub: "Gravació i Mescla",
      prodDesc: "Aprèn a utilitzar el teu ordinador com un estudi de gravació. Classes pràctiques on treballarem sobre els teus propis projectes.",
      prodList: ["Maneig de DAWs", "Criteris de mescla"]
    },
    trabajos: {
      title: "Els Nostres Treballs",
      subtitle: "Una selecció dels últims projectes que han passat per l'estudi.",
      playlistTitle: "Playlist de l'Estudi",
      playlistDesc: "Escolta la nostra playlist a Spotify amb tots els llançaments produïts a Z Estudio BCN.",
      playlistPlaceholder: "[ Aquí aniria l'embed de Spotify ]"
    },
    artistas: {
      title: "Artistes",
      subtitle: "Músics i bandes que han gravat, produït o col·laborat a Z Estudio BCN.",
      roles: {
        coprod: "Co-producció",
        rec: "Gravació",
        mix: "Mescla",
        master: "Mastering",
        prod: "Producción"
      }
    },
    nosotros: {
      title: "Sobre Nosaltres",
      subtitle: "L'equip creatiu i tècnic darrere de Z Estudio BCN.",
      davidTitle: "David García",
      davidSub: "Director, Productor i Professor",
      davidDesc1: "Amb més de 15 anys d'experiència, el David és el motor de Z Estudio BCN. La seva visió integral li permet abordar projectes com a músic, tècnic i productor.",
      davidDesc2: "La seva filosofia es basa a capturar l'essència de cada artista, utilitzant la tecnologia com a eina al servei de la cançó.",
      davidRoles: ["Guitarrista", "Productor", "Professor"],
      joanTitle: "Joan Isern",
      joanSub: "Co-productor i Col·laborador (MÄLMO 040)",
      joanDesc1: "El Joan aporta la seva visió fresca i experiència directa en l'escena pop i indie actual gràcies al seu treball a MÄLMO 040.",
      joanDesc2: "S'involucra en els projectes aportant idees d'arranjaments, estructures i sons que connecten amb el públic d'avui. La sinergia entre l'experiència tècnica del David i la intuïció creativa del Joan crea l'entorn perfecte.",
      joanRoles: ["Compositor", "Co-productor"]
    },
    contacto: {
      title: "Contacte",
      subtitle: "Tens un projecte al cap? Escriu-nos i li donarem forma.",
      location: "Ubicació",
      locationDesc: "Barcelona, Espanya",
      locationSub: "Visites només amb cita prèvia",
      formTitle: "Envia'ns un missatge",
      nameLabel: "Nom",
      namePlaceholder: "El teu nom",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "En què estàs interessat?",
      subjects: ["Gravació a l'estudi", "Producció / Mescla / Mastering", "Escola de Combos", "Classes particulars", "Altre"],
      messageLabel: "Missatge",
      messagePlaceholder: "Explica'ns sobre el teu projecte...",
      sendBtn: "Enviar missatge"
    },
    footer: {
      desc: "Estudi de gravació, producció musical i escola de combos a Barcelona dirigit per David García.",
      services: "Serveis",
      studio: "Estudi",
      contact: "Contacte",
      legal: "Avís Legal",
      privacy: "Privacitat",
      rights: "Tots els drets reservats."
    }
  }
};

export type Locale = keyof typeof dictionaries;
