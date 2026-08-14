export interface AboutChapter {
  title: string
  text: string
  image?: string
}

const laiaAbout: Record<string, AboutChapter[]> = {
  en: [
    {
      title: 'Fine Arts & illustration',
      text: "My path hasn't followed a straight line — it's the result of crossing creativity, resilience, and technology. I come from Fine Arts and illustration; I started out developing projects for the Diputación, teaching painting classes in private studios, and taking on independent commissions."
    },
    {
      title: 'Ten years in hospitality',
      text: 'To that creative foundation I added ten years in hospitality. There I learned what teamwork under pressure really means, instant problem-solving, direct client relationships, and the wonderful art of separating the urgent from the important.'
    },
    {
      title: 'Re-skilling into development',
      text: 'After a re-skilling process into software development, intensively studying programming fundamentals and the React and Node ecosystems at IT Academy, I worked in the public sector in education and in the private sector in fintech.'
    },
    {
      title: 'Tech Lead at Vuélvete Local',
      text: "Today I hold the role of Tech Lead at Vuélvete Local, a position I didn't even know existed before joining — and where, despite being a junior profile, I had to roll up my sleeves, take on responsibility, and get the product out the door at the pace a startup demands. From there I lead the architecture and deployment of solutions to boost local commerce."
    },
    {
      title: 'Talent Arena & purpose',
      text: 'Our premise is clear: we need to save our neighborhoods and make technology an ally, not an enemy, so our cities grow in service of people, not against them. This shift in direction led me to speak at Talent Arena, on the panel "Mujeres, Competencias Digitales i Futuro Laboral: el rol de Barcelona Activa en el empoderamiento tecnológico" (Women, Digital Skills and the Future of Work: Barcelona Activa\'s role in technological empowerment), where I shared my perspective on women in the STEAM ecosystem and the real value of reinventing yourself in this industry.'
    },
    {
      title: 'Architecture & modernization',
      text: "On the technical side, my approach unites programming fundamentals with practical, end-to-end execution. I build modern, scalable architectures, fluently structuring modular ecosystems in mono-repos and coordinating communication between APIs, web, and mobile applications. I've led critical modernization processes, from refactoring and migrating production backends to restructuring entire databases, always prioritizing performance and minimal operational disruption."
    },
    {
      title: 'Product & UX/UI',
      text: "I own the software lifecycle, data modeling, and strict version control in Git. It's at the product layer where my artistic background closes the circle: I design and implement UX/UI experiences where technical precision, usability, and visual coherence converge."
    },
    {
      title: 'AI-driven development',
      text: 'I build products that are robust, secure, and maintainable — but above all, beautiful. Day to day, I use AI-driven development to gain speed without sacrificing quality; it accelerates development, but design judgment, architecture, and tests always come first.'
    },
    {
      title: 'Professional philosophy',
      text: 'The user is at the center of my professional philosophy — personally, I see technology as the bridge we build to walk toward the future. Today I keep applying the same curiosity from day one, combining technical rigor with visual sensitivity in every challenge I take on.'
    },
    {
      title: "Let's talk",
      text: 'If you share this vision of technology with purpose, or simply want to talk about architecture, product, or career reinvention, you can reach out here.'
    }
  ],
  es: [
    {
      title: 'Bellas Artes e ilustración',
      text: 'Mi trayectoria no sigue una línea recta, es el resultado de cruzar la creatividad, la resiliencia y la tecnología. Vengo de las Bellas Artes y la ilustración; empecé desarrollando proyectos para la Diputación, dando clases de pintura en estudios privados y sacando adelante encargos independientes.'
    },
    {
      title: 'Diez años de hostelería',
      text: 'A esa base creativa le sumé diez años en la hostelería. Ahí aprendí lo que realmente significa el trabajo en equipo bajo presión, la resolución instantánea de problemas, el trato directo con el cliente y el maravilloso arte de saber separar lo urgente de lo importante.'
    },
    {
      title: 'Reconversión a desarrollo',
      text: 'Tras un proceso de re-skilling hacia el desarrollo de software, estudiando de manera intensiva fundamentos de programación y ecosistemas React y Node en la IT Academy, pasé por el sector público en educación y por el privado en fintech.'
    },
    {
      title: 'Tech Lead en Vuélvete Local',
      text: 'Hoy asumo el rol de Tech Lead en Vuélvete Local, un puesto que ni siquiera conocía antes de entrar y en el que, aun siendo perfil junior, me tocó remangarme, asumir la responsabilidad y sacar el producto adelante al ritmo que exige una startup. Desde ahí lidero la arquitectura y el despliegue de soluciones para impulsar el comercio de proximidad.'
    },
    {
      title: 'Talent Arena y propósito',
      text: 'Nuestra premisa es clara: necesitamos salvar los barrios y hacer de la tecnología una aliada, y no una enemiga, para que nuestras ciudades crezcan al servicio de las personas, y no en contra. Este cambio de rumbo me llevó a participar como ponente en el Talent Arena, dentro de la mesa "Mujeres, Competencias Digitales i Futuro Laboral: el rol de Barcelona Activa en el empoderamiento tecnológico", donde compartí mi visión sobre la mujer en el ecosistema STEAM y el valor real de reinventarse en esta industria.'
    },
    {
      title: 'Arquitectura y modernización',
      text: 'En el plano técnico, mi enfoque une los fundamentos de la programación con una ejecución práctica de principio a fin. Construyo arquitecturas modernas y escalables, estructurando con fluidez ecosistemas modulares en mono-repos y coordinando la comunicación entre APIs, webs y aplicaciones móviles. Me ha tocado liderar procesos críticos de modernización, desde refactorizar y migrar backends en producción hasta reestructurar bases de datos enteras, siempre priorizando el rendimiento y la mínima disrupción operativa.'
    },
    {
      title: 'Producto y UX/UI',
      text: 'Controlo el ciclo de vida del software, el modelado de datos y el control de versiones estricto en Git. Es en la capa de producto donde mi bagaje artístico cierra el círculo: diseño e implemento experiencias UX/UI donde la precisión técnica, la usabilidad y la coherencia visual convergen.'
    },
    {
      title: 'AI-driven development',
      text: 'Construyo productos que son robustos, seguros y mantenibles, pero sobre todo, bonitos. En mi día a día uso el AI-driven development para ganar velocidad sin sacrificar calidad, con ello acelero el desarrollo, pero el criterio de diseño, la arquitectura y los tests siempre van por delante.'
    },
    {
      title: 'Filosofía profesional',
      text: 'El usuario es el centro de mi filosofía profesional, personalmente veo la tecnología como el puente que construimos para caminar hacia el futuro. Hoy sigo aplicando la misma curiosidad del primer día, combinando rigor técnico con sensibilidad visual en cada desafío que asumo.'
    },
    {
      title: 'Hablemos',
      text: 'Si compartes esta visión sobre la tecnología con propósito o simplemente quieres hablar de arquitectura, producto o reconversión profesional, puedes contactarme aquí.'
    }
  ],
  ca: [
    {
      title: 'Belles Arts i il·lustració',
      text: "La meva trajectòria no segueix una línia recta, és el resultat de creuar la creativitat, la resiliència i la tecnologia. Vinc de les Belles Arts i la il·lustració; vaig començar desenvolupant projectes per a la Diputació, fent classes de pintura en estudis privats i tirant endavant encàrrecs independents."
    },
    {
      title: "Deu anys d'hostaleria",
      text: "A aquesta base creativa hi vaig sumar deu anys en l'hostaleria. Allà vaig aprendre què significa realment el treball en equip sota pressió, la resolució instantània de problemes, el tracte directe amb el client i el meravellós art de saber separar l'urgent de l'important."
    },
    {
      title: 'Reconversió a desenvolupament',
      text: "Després d'un procés de reconversió cap al desenvolupament de programari, estudiant de manera intensiva fonaments de programació i ecosistemes React i Node a l'IT Academy, vaig passar pel sector públic en educació i pel privat en fintech."
    },
    {
      title: 'Tech Lead a Vuélvete Local',
      text: "Avui assumeixo el rol de Tech Lead a Vuélvete Local, un lloc que ni tan sols coneixia abans d'entrar-hi i en el qual, tot i ser un perfil júnior, em vaig haver de remangar, assumir la responsabilitat i treure el producte endavant al ritme que exigeix una startup. Des d'allà lidero l'arquitectura i el desplegament de solucions per impulsar el comerç de proximitat."
    },
    {
      title: 'Talent Arena i propòsit',
      text: 'La nostra premissa és clara: necessitem salvar els barris i fer de la tecnologia una aliada, i no una enemiga, perquè les nostres ciutats creixin al servei de les persones, i no en contra. Aquest canvi de rumb em va portar a participar com a ponent al Talent Arena, dins la taula "Mujeres, Competencias Digitales i Futuro Laboral: el rol de Barcelona Activa en el empoderamiento tecnológico" (Dones, Competències Digitals i Futur Laboral: el rol de Barcelona Activa en l\'empoderament tecnològic), on vaig compartir la meva visió sobre la dona en l\'ecosistema STEAM i el valor real de reinventar-se en aquesta indústria.'
    },
    {
      title: 'Arquitectura i modernització',
      text: "En el pla tècnic, el meu enfocament uneix els fonaments de la programació amb una execució pràctica d'inici a fi. Construeixo arquitectures modernes i escalables, estructurant amb fluïdesa ecosistemes modulars en mono-repos i coordinant la comunicació entre APIs, webs i aplicacions mòbils. M'ha tocat liderar processos crítics de modernització, des de refactoritzar i migrar backends en producció fins a reestructurar bases de dades senceres, sempre prioritzant el rendiment i la mínima disrupció operativa."
    },
    {
      title: 'Producte i UX/UI',
      text: "Controlo el cicle de vida del programari, el modelatge de dades i el control de versions estricte a Git. És a la capa de producte on el meu bagatge artístic tanca el cercle: dissenyo i implemento experiències UX/UI on la precisió tècnica, la usabilitat i la coherència visual convergeixen."
    },
    {
      title: 'AI-driven development',
      text: "Construeixo productes que són robustos, segurs i mantenibles, però sobretot, bonics. En el meu dia a dia faig servir l'AI-driven development per guanyar velocitat sense sacrificar qualitat; això accelera el desenvolupament, però el criteri de disseny, l'arquitectura i els tests sempre van per davant."
    },
    {
      title: 'Filosofia professional',
      text: "L'usuari és el centre de la meva filosofia professional; personalment veig la tecnologia com el pont que construïm per caminar cap al futur. Avui continuo aplicant la mateixa curiositat del primer dia, combinant rigor tècnic amb sensibilitat visual en cada repte que assumeixo."
    },
    {
      title: 'Parlem',
      text: "Si comparteixes aquesta visió sobre la tecnologia amb propòsit o simplement vols parlar d'arquitectura, producte o reconversió professional, pots contactar-me aquí."
    }
  ]
}

export const aboutByProfile: Record<string, Record<string, AboutChapter[]>> = {
  laia: laiaAbout,
  gabo: { en: [], es: [], ca: [] }
}
