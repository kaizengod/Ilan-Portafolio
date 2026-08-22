import { CaseStudyData, CreativeItem, LabExperiment, SkillCategory, ToolCategory, ProgramTool } from '../types';

export const PERSONAL_INFO = {
  name: 'ILAN IRAUSQUIN',
  shortName: 'ILAN',
  title: 'ESTRATEGIA DE NEGOCIOS | MARKETING DIGITAL | TECNOLOGÍA',
  tagline: 'ESTRATEGIA DE NEGOCIOS × MARKETING DIGITAL × TECNOLOGÍA × CREATIVIDAD',
  conceptualCore: 'PIENSO. CONSTRUYO. MIDO.',
  supportingCopy: 'Construyo experiencias digitales, estrategias de marketing y soluciones de negocio que conectan la creatividad, la tecnología y los resultados medibles.',
  bio: 'Soy Ilan Irausquin, Licenciado en Desarrollo Empresarial, enfocado en la intersección entre estrategia, marketing digital y tecnología.',
  philosophy: 'Me interesa transformar problemas de negocio en soluciones digitales, combinando investigación, creatividad, tecnología y medición.',
  profile: 'Profesional en Desarrollo Empresarial orientado a estrategia, marketing digital, investigación y construcción de soluciones digitales.',
  approachSubtitle: 'INVESTIGACIÓN → ESTRATEGIA → CONSTRUCCIÓN → MEDICIÓN → ITERACIÓN',
  location: 'Venezuela',
  relocation: 'Disponible para reubicación en Tijuana, México',
  status: 'Disponible para roles de alto impacto y proyectos digitales',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2 / Intermedio-Avanzado' },
  ],
  education: {
    degree: 'Licenciatura en Desarrollo Empresarial',
    university: 'Universidad Nacional Experimental Francisco de Miranda (UNEFM)',
    location: 'Venezuela',
    year: '2025',
    grade: 'Promedio académico: 17 / 20',
  },
  placeholders: {
    email: 'ilanelallan1106@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ilan-irausquin-b083571b6/',
    github: 'https://github.com',
    behance: 'https://www.behance.net/ilanirausquin',
    cvPdf: 'Ilan_Irausquin_CV.pdf',
  }
};

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'bodegon-rodrigues-2004',
    title: 'Bodegón Rodrigues 2004',
    subtitle: 'Investigación de consumidor, expansión de espacio y campaña de contenido.',
    tagline: 'Identificación de una demanda desatendida de consumo in-situ mediante investigación de consumidores, lo que impulsó la construcción física de un patio exterior y posteriormente una campaña audiovisual basada en la cultura interna de la comunidad y el humor.',
    tier: 1,
    categories: ['MARKETING', 'ESTRATEGIA', 'INVESTIGACIÓN'],
    tags: ['Investigación de Consumidor', 'Estrategia', 'Contenido', 'Meta Ads', 'Cultura Local'],
    year: '2024 - 2025',
    role: 'Estratega de Negocios y Productor Creativo',
    featured: true,
    coverImage: './projects/bodegon/delante.JPG',
    summary: 'Identificación de una demanda desatendida de consumo in-situ mediante investigación de consumidores, lo que impulsó la construcción física de un patio exterior y posteriormente una campaña audiovisual basada en la cultura interna de la comunidad y el humor.',
    hasRealMetrics: true,
    metrics: [
      { value: '2.527', label: 'Likes en Instagram', sublabel: 'Interacción documentada' },
      { value: '686', label: 'Compartidos Internos', sublabel: 'Shares por mensajería directa' },
      { value: '138', label: 'Comentarios', sublabel: 'Conversaciones activas' },
      { value: '10', label: 'Compartidos en Historias', sublabel: 'Amplificación en plataforma' },
      { value: '~$0.10', label: 'Costo / Conversación', sublabel: 'Eficiencia en Meta Ads' },
    ],
    challenge: 'Bodegón Rodrigues 2004 contaba con un flujo comercial constante, pero carecía de datos estructurados sobre cómo los clientes percibían la marca y si buscaban experiencias de consumo social en el establecimiento. El negocio requería validación empírica antes de invertir capital en ampliaciones físicas y pauta publicitaria.',
    approach: 'Realicé una investigación de mercado cuantitativa y cualitativa con clientes activos. Los datos demostraron una demanda desatendida de consumo in-situ: un porcentaje sustancial deseaba un ambiente cómodo para consumir en el local en lugar de comprar únicamente para llevar.',
    build: 'Con base en la evidencia de la investigación, la dirección aprobó la inversión para construir un patio social exterior. Posterior a la obra física, produje una campaña audiovisual adaptada a los códigos de la audiencia local, aprovechando el humor y la cultura comunitaria.',
    creative: 'Guionicé, grabé y edité piezas de video dinámicas en formato corto destacando el nuevo ambiente. Se priorizó la autenticidad y el humor local sobre los formatos publicitarios rígidos para detonar recomendaciones directas.',
    resultsOrNextPhaseTitle: 'RESULTADOS DOCUMENTADOS',
    resultsOrNextPhaseContent: [
      '2.527 Likes en Instagram alcanzados con alta tasa de interacción local.',
      '686 compartidos directos por mensajería: el indicador más claro de recomendación persona a persona.',
      '138 comentarios de clientes habituales y nuevos prospectos.',
      'Costo promedio de ~$0.10 por conversación de mensajería directa iniciada mediante Meta Ads segmentados.',
      'Ocupación y uso continuo del nuevo patio exterior tras el lanzamiento.'
    ],
    learnings: [
      'Investigación antes de construcción: Las inversiones en infraestructura física tienen éxito cuando nacen de una demanda de consumidor demostrada.',
      'Cultura local vs. Publicidad tradicional: El humor genuino y los códigos comunitarios multiplican los compartidos directos sin inflar el presupuesto.',
      'Eficiencia en mensajería: Campañas creativas bien enfocadas logran costos de ~$0.10 por conversación sin intermediarios.'
    ],
    externalLinks: {
      instagram: 'https://www.instagram.com/reel/DLtBdNBSp3b/?igsi=bWI0ZTVzNm5senhr',
      website: 'https://www.instagram.com/reel/DLtBdNBSp3b/?igsi=bWI0ZTVzNm5senhr',
      thesisPdfDownload: true,
      thesisPdfName: 'Ilan_Irausquin_Tesis_UNEFM_2025.pdf',
    },
    detailedSections: [
      {
        stepNumber: '01',
        title: 'PROBLEMA E INVESTIGACIÓN',
        subtitle: 'Diagnóstico de mercado y consulta a clientes activos',
        content: [
          'Bodegón Rodrigues 2004 operaba con flujo constante pero sin datos sobre el comportamiento de sus clientes.',
          'Apliqué encuestas y entrevistas directas para evaluar la percepción de marca y las ocasiones de consumo.'
        ]
      },
      {
        stepNumber: '02',
        title: 'INSIGHT Y DECISIÓN DE NEGOCIO',
        subtitle: 'De la demanda identificada a la obra física',
        content: [
          'Los datos revelaron que los clientes deseaban consumir en el lugar en un espacio social al aire libre.',
          'La gerencia aprobó la inversión para construir la terraza exterior basada en la evidencia recopilada.'
        ],
        quote: '"La investigación eliminó la incertidumbre en la ampliación física del negocio, transformando una corazonada en una decisión estratégica validada."'
      },
      {
        stepNumber: '03',
        title: 'EJECUCIÓN CREATIVA Y CONTENIDO',
        subtitle: 'Humor local y narrativa cercana',
        content: [
          'Para dar a conocer el nuevo espacio, produjimos contenido en video basado en la jerga local y situaciones cotidianas.',
          'La narrativa conectó con la comunidad, impulsando compartidos orgánicos entre grupos de amigos.'
        ]
      },
      {
        stepNumber: '04',
        title: 'RESULTADOS DOCUMENTADOS',
        subtitle: 'Métricas reportadas de la campaña',
        content: [
          'La campaña generó 2.527 likes, 686 compartidos directos por mensajería y 138 comentarios.',
          'El costo por conversación se ubicó en aproximadamente ~$0.10 en Meta Ads.'
        ],
        diagramType: 'metrics'
      }
    ]
  },
  {
    id: 'abc-poker',
    title: 'ABC Poker',
    subtitle: 'Desarrollo proactivo de la primera presencia web oficial, arquitectura digital y estrategia de adquisición.',
    tagline: 'Desarrollo proactivo de la primera plataforma web oficial para ABC Poker —que previamente no contaba con página web—, optimizando la arquitectura de información, la comunicación visual y preparando el embudo de adquisición para convertir visitantes en jugadores del club.',
    tier: 1,
    categories: ['ESTRATEGIA', 'WEB', 'MARKETING'],
    tags: ['Estrategia Digital', 'Desarrollo Web', 'Proactividad Comercial', 'Arquitectura de Embudos', 'UI/UX'],
    year: '2026',
    role: 'Estratega Digital y Desarrollador Web',
    featured: true,
    coverImage: './projects/abc/delante.png',
    summary: 'Desarrollo proactivo de la primera plataforma web oficial para ABC Poker —que previamente no contaba con página web—, optimizando la arquitectura de información, la comunicación visual y preparando el embudo de adquisición.',
    hasRealMetrics: false,
    challenge: 'ABC Poker no contaba con página web ni presencia digital previa. De manera proactiva, identifiqué la oportunidad y construí su primera plataforma web oficial desde cero para comunicar con claridad las reglas del club, modalidades de juego, calendarios de torneos y eliminar la fricción al incorporar nuevos jugadores.',
    approach: 'Realicé una auditoría del recorrido del usuario y estructuré la arquitectura de información desde cero. Diseñé una experiencia web optimizada para navegación móvil, con mensajes directos sobre seguridad, transparencia y soporte en vivo.',
    build: 'Desarrollé la interfaz web completa con tiempos de carga rápidos y llamados a la acción directos. Diseñé un sistema de plantillas gráficas para anuncios de torneos diarios y contenido para redes sociales.',
    creative: 'Creé flyers de torneos, banners y recursos visuales de alto contraste que elevan la percepción de la comunidad a un estándar profesional y competitivo.',
    resultsOrNextPhaseTitle: 'FASE DE ADQUISICIÓN PLANIFICADA',
    resultsOrNextPhaseContent: [
      'Presencia Web Oficial: Desarrollada y desplegada desde cero para navegación en dispositivos móviles y de escritorio.',
      'Sistema Visual: Desplegado con plantillas modulares para anuncios diarios y promociones.',
      'Campaña de Rendimiento (Siguiente Fase): Embudo planificado estructurado (Anuncio → Web → CTA Club → WhatsApp → Miembro Activo).',
      'Infraestructura de medición preparada con eventos de Pixel, GA4 y taxonomía UTM para activación una vez iniciada la pauta publicitaria.'
    ],
    learnings: [
      'Iniciativa proactiva: Construir soluciones antes de que el cliente las pida formalmente abre nuevas vías de negocio inmediatas.',
      'Claridad antes de conversión: Una arquitectura web limpia es el prerrequisito necesario antes de destinar presupuesto publicitario.',
      'Señales de confianza: En comunidades de juego online, la transparencia en reglas y soporte es el factor decisivo para el registro.'
    ],
    externalLinks: {
      website: 'https://abcpokerclub.com',
    },
    detailedSections: [
      {
        stepNumber: '01',
        title: 'EL RETO Y AUDITORÍA DIGITAL',
        subtitle: 'Creación de la presencia digital oficial desde cero',
        content: [
          'ABC Poker operaba sin un sitio web ni una plataforma centralizada para explicar sus dinámicas de juego.',
          'De forma proactiva, estructuré la solución web para solucionar la falta de información y agilizar el onboarding de jugadores.'
        ]
      },
      {
        stepNumber: '02',
        title: 'ARQUITECTURA WEB Y DESARROLLO',
        subtitle: 'Diseño enfocado en usabilidad móvil y velocidad',
        content: [
          'Reestructuré el sitio web para resolver dudas inmediatas: modalidades, calendarios, seguridad y pasos de ingreso.',
          'Diseñé interfaces responsivas con modo oscuro y llamados a la acción sin fricción.'
        ]
      },
      {
        stepNumber: '03',
        title: 'SISTEMA GRÁFICO Y CONTENIDO',
        subtitle: 'Identidad visual para torneos y redes',
        content: [
          'Desarrollé un sistema de piezas gráficas para anuncios diarios de mesas y eventos especiales.',
          'Garantía de coherencia estética entre redes sociales y el sitio web.'
        ]
      },
      {
        stepNumber: '04',
        title: 'CAMPAÑA PENDIENTE DE EJECUCIÓN',
        subtitle: 'Estructura de adquisición preparada para lanzamiento',
        content: [
          'Flujo definido: ANUNCIO → SITIO WEB → CTA UNIRSE → CHAT WHATSAPP → JUGADOR ACTIVO.',
          'Ecosistema de medición listo para monitoreo una vez que la campaña entre en etapa de pauta.'
        ],
        diagramType: 'funnel'
      }
    ]
  },
  {
    id: 'personal-finance-dashboard',
    title: 'FinTrack — Dashboard de Finanzas Personales',
    subtitle: 'Aplicación web para gestión financiera diaria y reemplazo de hojas de cálculo.',
    tagline: 'Construcción de una aplicación de finanzas personales diseñada para reemplazar hojas de cálculo tradicionales por una experiencia digital más accesible y persistente.',
    tier: 1,
    categories: ['PRODUCTO DIGITAL', 'WEB', 'TECNOLOGÍA'],
    tags: ['Producto Digital', 'Antigravity', 'Supabase', 'GitHub', 'Flujos con IA', 'Responsivo'],
    year: '2026',
    role: 'Product Design & Development',
    featured: true,
    coverImage: './projects/dashboard/detras.png',
    summary: 'Construcción de una aplicación de finanzas personales diseñada para reemplazar hojas de cálculo tradicionales por una experiencia digital más accesible y persistente.',
    hasRealMetrics: false,
    challenge: 'Las hojas de cálculo tradicionales son incómodas y lentas para registrar gastos diarios desde el teléfono móvil, lo que genera abandono del hábito financiero. Las aplicaciones comerciales suelen imponer suscripciones o publicidad intrusiva.',
    approach: 'Diseñé una solución web ligera enfocada en velocidad de carga, registro de transacciones en pocos toques y visualización clara de ingresos, gastos y ahorro.',
    build: 'Construí la aplicación utilizando Antigravity para desarrollo asistido por IA, Supabase para autenticación multiusuario y base de datos relacional PostgreSQL, y GitHub para control de versiones. La herramienta es totalmente responsiva tanto en computadoras como en smartphones.',
    creative: 'Diseñé una interfaz sobria en modo oscuro con gráficos limpios, barras de presupuesto y modales de registro directo sin pantallas intermedias innecesarias.',
    resultsOrNextPhaseTitle: 'DESPLIEGUE Y USO REAL',
    resultsOrNextPhaseContent: [
      'Aplicación web completamente operativa y disponible en navegadores móviles y de escritorio.',
      'Autenticación y partición de datos independiente para cada usuario.',
      'Uso continuo por parte de un círculo personal para el control mensual de ingresos y egresos.',
      'Demostración de capacidad para identificar un problema, diseñar la solución, construir el producto digital con tecnología moderna y ponerlo en producción.'
    ],
    learnings: [
      'Fricción mínima: Reducir los pasos para registrar una transacción es la clave para que los usuarios mantengan la constancia.',
      'Aceleración con IA: Herramientas como Antigravity permiten pasar de la idea a una aplicación con base de datos en tiempos reducidos manteniendo código modular.',
      'Enfoque en lo esencial: Una herramienta enfocada que resuelve un problema concreto resulta más efectiva que plataformas sobrecargadas.'
    ],
    externalLinks: {
      website: 'https://fintrack-nine-mu.vercel.app',
      demo: 'https://fintrack-nine-mu.vercel.app',
    },
    detailedSections: [
      {
        stepNumber: '01',
        title: 'EL PROBLEMA',
        subtitle: 'Fricción en las hojas de cálculo tradicionales',
        content: [
          'Las hojas de cálculo en teléfonos móviles resultan poco prácticas para el registro cotidiano.',
          'La meta fue crear una herramienta directa, accesible desde cualquier dispositivo y sin distracciones.'
        ]
      },
      {
        stepNumber: '02',
        title: 'ARQUITECTURA Y STACK',
        subtitle: 'Tecnología moderna y persistencia de datos',
        content: [
          'Stack: Antigravity para ingeniería asistida por IA, Supabase para autenticación y base de datos PostgreSQL, GitHub para control de versiones.',
          'Diseño responsivo optimizado para uso móvil inmediato.'
        ],
        diagramType: 'stack'
      },
      {
        stepNumber: '03',
        title: 'CARACTERÍSTICAS DEL PRODUCTO',
        subtitle: 'Funcionalidades esenciales para el control financiero',
        content: [
          'Cuentas de usuario independientes con privacidad total.',
          'Categorización rápida de gastos, ingresos fijos/variables y metas de ahorro.',
          'Gráficos de flujo de caja y balances mensuales automáticos.'
        ]
      },
      {
        stepNumber: '04',
        title: 'USO EN CONTEXTO REAL',
        subtitle: 'Producto digital en producción',
        content: [
          'Desplegado y utilizado activamente para el seguimiento financiero real.',
          'Iteraciones periódicas de interfaz basadas en la experiencia cotidiana de uso.'
        ]
      }
    ]
  },
  {
    id: 'thesis-business-strategy',
    title: 'Tesis: Estrategia de Negocios y Competitividad',
    subtitle: 'Análisis de dinámicas competitivas del comercio minorista mediante las 5 Fuerzas de Porter.',
    tagline: 'Trabajo Especial de Grado basado en el análisis de las dinámicas competitivas del comercio minorista mediante las 5 Fuerzas de Porter, formulando estrategias gerenciales aplicadas a Bodegón Rodrigues 2004.',
    tier: 2,
    categories: ['ESTRATEGIA', 'INVESTIGACIÓN'],
    tags: ['5 Fuerzas de Porter', 'Análisis Competitivo', 'Diagnóstico Empresarial', 'Investigación Académica', 'Estrategia'],
    year: '2025',
    role: 'Investigador Principal',
    featured: true,
    coverImage: './projects/bodegon/delante.JPG',
    summary: 'Trabajo Especial de Grado basado en el análisis de las dinámicas competitivas del comercio minorista mediante las 5 Fuerzas de Porter, formulando estrategias gerenciales aplicadas a Bodegón Rodrigues 2004.',
    hasRealMetrics: false,
    challenge: 'Las pequeñas y medianas empresas comerciales a menudo operan por intuición sin marcos de análisis competitivo estructurados, lo que las deja vulnerables ante cambios en el comportamiento del consumidor y la rivalidad del sector.',
    approach: 'Desarrollé un diagnóstico empresarial integral aplicando el modelo de las Cinco Fuerzas de Michael Porter, adaptado a las características y realidades del comercio minorista local.',
    build: 'Integré la investigación teórica con datos empíricos de campo, estructurando recomendaciones estratégicas en diferenciación de servicio, fidelización de clientes y optimización de espacios comerciales.',
    resultsOrNextPhaseTitle: 'APLICACIÓN Y CONCLUSIONES',
    resultsOrNextPhaseContent: [
      'Evaluación exhaustiva de las 5 Fuerzas: Rivalidad en la industria, Poder de compradores, Poder de proveedores, Amenaza de sustitutos y Nuevos entrantes.',
      'Los hallazgos de campo sobre preferencias de los clientes fundamentaron la decisión de ampliar el patio exterior de Bodegón Rodrigues 2004.',
      'Demostración de cómo los marcos de estrategia empresarial académica se traducen en decisiones de negocio prácticas.'
    ],
    learnings: [
      'Estrategia aplicada: Los marcos de análisis estratégico cobran valor cuando se conectan con decisiones operativas reales.',
      'Diferenciación vs. Precio: En retail, competir por experiencia y comunidad ofrece mayor sostenibilidad que competir exclusivamente por precio.',
      'Rigor en la toma de decisiones: El diagnóstico estructurado proporciona certeza antes de comprometer recursos de la empresa.'
    ],
    externalLinks: {
      pdfUrl: './tesis/7. TEG Ilan y Andrea 1.pdf',
      thesisPdfDownload: true,
      thesisPdfName: '7. TEG Ilan y Andrea 1.pdf',
    },
    detailedSections: [
      {
        stepNumber: '01',
        title: 'EL MARCO DE ANÁLISIS',
        subtitle: 'Las Cinco Fuerzas de Porter aplicadas al comercio minorista',
        content: [
          'Evaluación de las fuerzas competitivas que determinan la rentabilidad y posicionamiento en el sector comercial.',
          'Identificación de la experiencia en el local como la palanca clave de diferenciación.'
        ],
        diagramType: 'porter'
      },
      {
        stepNumber: '02',
        title: 'DIAGNÓSTICO EMPRESARIAL',
        subtitle: 'Conexión con el caso Bodegón Rodrigues 2004',
        content: [
          'Aplicación del análisis al contexto real del bodegón para identificar fortalezas y áreas de oportunidad comercial.',
          'Formulación de lineamientos estratégicos para la retención de clientes y diversificación de ingresos.'
        ]
      }
    ]
  }
];

export const CREATIVE_GALLERY: CreativeItem[] = [
  {
    id: 'poker-tournament-flyers',
    title: 'Serie de Campeonatos ABC Poker',
    category: 'POKER',
    year: '2024',
    tools: ['Photoshop', 'Figma'],
    description: 'Identidad visual y flyers promocionales de torneos de alto impacto diseñados para feeds móviles y anuncios del club.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_01]',
    aspectRatio: 'portrait',
    gradientOrTheme: 'from-amber-950/40 via-zinc-900 to-black',
    mockupType: 'flyer'
  },
  {
    id: 'bodegon-video-campaign-assets',
    title: 'Campaña en Redes Bodegón Rodrigues',
    category: 'CAMPAIGNS',
    year: '2024',
    tools: ['DaVinci Resolve', 'CapCut', 'Photoshop'],
    description: 'Videos en formato corto, teasers para historias y banners promocionales para el lanzamiento del nuevo patio exterior.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_02]',
    aspectRatio: 'portrait',
    gradientOrTheme: 'from-blue-950/40 via-zinc-900 to-black',
    mockupType: 'campaign'
  },
  {
    id: 'digital-brand-posters',
    title: 'Serie de Posters Editoriales — Negocios × Tech',
    category: 'POSTERS',
    year: '2024',
    tools: ['Figma', 'Photoshop', 'Affinity'],
    description: 'Exploraciones en tipografía, espacio negativo y ritmo visual equilibrando datos comerciales con estética editorial.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_03]',
    aspectRatio: 'portrait',
    gradientOrTheme: 'from-emerald-950/40 via-zinc-900 to-black',
    mockupType: 'poster'
  },
  {
    id: 'poker-nightly-cash-graphics',
    title: 'Gráficas de Mesas y Tablas de Posiciones',
    category: 'POKER',
    year: '2024',
    tools: ['Photoshop', 'Figma'],
    description: 'Sistema de plantillas para actualización diaria de clasificaciones de jugadores, pozos acumulados y mesas de juego.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_04]',
    aspectRatio: 'square',
    gradientOrTheme: 'from-red-950/40 via-zinc-900 to-black',
    mockupType: 'social'
  },
  {
    id: 'social-identity-experiments',
    title: 'Diseño de Identidad y Feeds para Redes',
    category: 'SOCIAL',
    year: '2025',
    tools: ['Photoshop', 'Figma', 'CapCut'],
    description: 'Estructuras de feed para redes sociales, carruseles y fragmentos en video optimizados para captar la atención de la audiencia.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_05]',
    aspectRatio: 'square',
    gradientOrTheme: 'from-purple-950/40 via-zinc-900 to-black',
    mockupType: 'social'
  },
  {
    id: '3d-blender-experiments',
    title: 'Exploraciones y Renders 3D en Blender',
    category: 'EXPERIMENTAL',
    year: '2024',
    tools: ['Blender', 'Photoshop'],
    description: 'Iluminación volumétrica, refracción de materiales y formas geométricas explorando empaques de producto y emblemas de marca.',
    behanceUrlPlaceholder: '[BEHANCE_PROJECT_06]',
    aspectRatio: 'landscape',
    gradientOrTheme: 'from-cyan-950/40 via-zinc-900 to-black',
    mockupType: '3d'
  }
];

export const REAL_LAB_PROJECTS: LabExperiment[] = [
  {
    id: 'ai-video-workflows',
    title: 'Flujos de Generación Audiovisual y Cinemática con IA',
    category: 'Video & IA Generativa',
    status: 'Producción Activa',
    description: 'Exploración y producción de piezas audiovisuales utilizando modelos de generación de video (OpenAI Sora, Google Veo) combinados con edición dinámica.',
    technologies: ['OpenAI Sora', 'Google Veo', 'CapCut', 'DaVinci Resolve'],
    highlight: 'Dirección de arte asistida por IA para anuncios, teasers y conceptos visuales de alta fidelidad.'
  },
  {
    id: 'personal-finance-dashboard',
    title: 'Modelos Financieros y Dashboards de Control de Gestión',
    category: 'Estrategia & Análisis',
    status: 'Metodología Activa',
    description: 'Estructuración de plantillas automatizadas, flujos de caja y análisis de métricas clave de rentabilidad para negocios.',
    technologies: ['Microsoft Excel', 'Figma', 'Antigravity', 'ChatGPT'],
    highlight: 'Herramientas de diagnóstico para evaluar viabilidad económica y toma de decisiones financieras.'
  },
  {
    id: 'ui-design-systems',
    title: 'Arquitectura de Prototipos UI y Sistemas Visuales',
    category: 'Diseño UX/UI',
    status: 'Librería de Componentes',
    description: 'Estructuración de componentes visuales interactivos en Figma, tipografía técnica, jerarquía y estética oscura sobria.',
    technologies: ['Figma', 'Photoshop', 'Affinity Suite'],
    highlight: 'Estética editorial con jerarquía visual precisa y especificación para productos digitales.'
  },
  {
    id: '3d-spatial-exploration',
    title: 'Estudios de Iluminación y Modelado 3D en Blender',
    category: 'Creatividad 3D',
    status: 'Exploración Visual',
    description: 'Pruebas de modelado volumétrico, texturizado y renderizado de geometrías espaciales para branding y activos digitales.',
    technologies: ['Blender', 'Cycles / Eevee', 'Photoshop'],
    highlight: 'Exploración de dimensiones tridimensionales para complementar la identidad visual de marca.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    name: 'INVESTIGACIÓN',
    tagline: 'Comprender el problema con datos reales.',
    description: 'Analizar las dinámicas de mercado, consultar el comportamiento de los consumidores, auditar los canales existentes y obtener insights empíricos antes de comprometer capital o diseño.',
    outputs: ['Encuestas de consumidor', 'Auditorías de competencia', 'Perfilado de audiencias', 'Validación de datos'],
    example: 'Identificación de demanda de consumo in-situ en Bodegón Rodrigues 2004.',
    relatedProject: 'Bodegón Rodrigues 2004',
    relatedProjectId: 'bodegon-rodrigues-2004',
    buttonLabel: 'Ver Caso de Bodegón 2004'
  },
  {
    number: '02',
    name: 'ESTRATEGIA',
    tagline: 'Definir la dirección y el modelo de negocio.',
    description: 'Sintetizar la investigación en una decisión de negocio coherente, ángulo de posicionamiento, arquitectura de embudo de conversión y priorización de acciones.',
    outputs: ['Propuesta de valor', 'Mapeo de embudos', 'Estrategia de posicionamiento', 'Definición de KPIs'],
    example: 'Análisis de 5 Fuerzas de Porter aplicado a la competitividad en comercio minorista.',
    relatedProject: 'Tesis de Grado',
    relatedProjectId: 'thesis-business-strategy',
    buttonLabel: 'Ver Caso de Tesis de Grado'
  },
  {
    number: '03',
    name: 'CONSTRUCCIÓN',
    tagline: 'Crear soluciones digitales y activos de conversión.',
    description: 'Ejecutar la estrategia mediante puntos de contacto modernos, plataformas web oficiales, piezas creativas de alto impacto y flujos asistidos por tecnología.',
    outputs: ['Desarrollo web', 'Campañas visuales', 'Productos digitales', 'Copywriting y medios'],
    example: 'Desarrollo proactivo de la primera web oficial y sistema gráfico para ABC Poker.',
    relatedProject: 'ABC Poker',
    relatedProjectId: 'abc-poker',
    buttonLabel: 'Ver Caso de ABC Poker'
  },
  {
    number: '04',
    name: 'MEDICIÓN',
    tagline: 'Medir el impacto y retorno con rigor.',
    description: 'Implementar analítica rigurosa (Meta Pixel, GA4, taxonomía UTM, monitoreo de conversaciones) para evaluar el desempeño con datos reales y verificables.',
    outputs: ['Seguimiento de conversiones', 'Métricas de interacción', 'Costo por conversación', 'Reportes analíticos'],
    example: 'Registro de 2.527 likes, 686 compartidos internos y ~$0.10 costo/conversación en Bodegón Rodrigues.',
    relatedProject: 'Bodegón Rodrigues 2004',
    relatedProjectId: 'bodegon-rodrigues-2004',
    buttonLabel: 'Ver Caso de Bodegón 2004'
  },
  {
    number: '05',
    name: 'ITERACIÓN',
    tagline: 'Mejorar con base en evidencia empírica.',
    description: 'Revisar la evidencia empírica, eliminar puntos de fricción, potenciar los ganchos más efectivos y perfeccionar continuamente la experiencia de producto y negocio.',
    outputs: ['Optimización de embudos', 'Pruebas de interfaz', 'Mejoras de producto', 'Ajustes estratégicos'],
    example: 'Refinamiento continuo de la interfaz y experiencia de usuario del Dashboard de Finanzas.',
    relatedProject: 'Dashboard de Finanzas',
    relatedProjectId: 'personal-finance-dashboard',
    buttonLabel: 'Ver Caso de Dashboard'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'NEGOCIOS Y ESTRATEGIA',
    subtitle: 'Pensamiento comercial, análisis de mercado y toma de decisiones estructurada',
    iconName: 'TrendingUp',
    skills: [
      'Estrategia de Negocios',
      'Investigación de Mercado',
      'Análisis Competitivo',
      'Desarrollo Empresarial',
      'Planificación de Proyectos',
      'Diagnóstico Empresarial',
      'Marco de las 5 Fuerzas de Porter',
      'Evaluación de Viabilidad Comercial'
    ]
  },
  {
    title: 'MARKETING DIGITAL',
    subtitle: 'Adquisición de audiencias, arquitectura de embudos y analítica de rendimiento',
    iconName: 'Target',
    skills: [
      'Marketing Digital',
      'Estrategia en Redes Sociales',
      'Meta Ads y Administrador de Anuncios',
      'Estrategia de Contenidos',
      'Embudos de Conversión',
      'Interacción con Clientes',
      'Metricool y Programación',
      'GA4 y Analítica Web'
    ]
  },
  {
    title: 'TECNOLOGÍA E IA',
    subtitle: 'Flujos con inteligencia artificial generativa, análisis y gestión de proyectos',
    iconName: 'Sparkles',
    skills: [
      'Flujos Asistidos por IA (Gemini, ChatGPT)',
      'Generación Audiovisual con IA (Sora, Veo)',
      'Prototipado en Figma',
      'Gestión y Planificación de Proyectos',
      'Modelado de Datos en Excel',
      'Estructuración y Presentaciones Ejecutivas',
      'Automatización y Productividad Digital'
    ]
  },
  {
    title: 'CREATIVIDAD Y MEDIOS',
    subtitle: 'Identidad visual, narrativa audiovisual y dirección estética',
    iconName: 'Sparkles',
    skills: [
      'Figma y Prototipado UI',
      'Adobe Photoshop',
      'DaVinci Resolve',
      'CapCut',
      'OpenAI Sora (Video con IA)',
      'Google Veo (Video con IA)',
      'Blender (Modelado 3D)',
      'Affinity Suite',
      'Narrativa Visual y Storytelling'
    ]
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: 'Marketing y Analítica',
    items: ['Meta Business Manager', 'Metricool', 'Google Analytics (GA4)', 'Pixel de Seguimiento']
  },
  {
    category: 'Diseño y Prototipado',
    items: ['Figma', 'Photoshop', 'Affinity']
  },
  {
    category: 'Video y Contenido',
    items: ['DaVinci Resolve', 'CapCut', 'OpenAI Sora', 'Google Veo']
  },
  {
    category: 'Espacio 3D',
    items: ['Blender']
  },
  {
    category: 'IA y Aceleración',
    items: ['Google Veo', 'OpenAI Sora', 'Antigravity', 'Gemini', 'ChatGPT']
  },
  {
    category: 'Productividad y Análisis',
    items: ['Microsoft Excel', 'PowerPoint', 'Word']
  }
];

export const PROGRAM_TOOLS_DATA: ProgramTool[] = [
  // Marketing y Analítica
  {
    name: 'Meta Business Manager',
    category: 'marketing',
    categoryLabel: 'Marketing y Analítica',
    percentage: 92,
    level: 'Avanzado',
    iconKey: 'meta',
    accentColor: '#0081FB',
    description: 'Campañas de anuncios, públicos personalizados y optimización de conversión'
  },
  {
    name: 'Metricool',
    category: 'marketing',
    categoryLabel: 'Marketing y Analítica',
    percentage: 90,
    level: 'Avanzado',
    iconKey: 'metricool',
    accentColor: '#FF6B6B',
    description: 'Planificación de contenido, analítica de engagement y reportes'
  },
  {
    name: 'Google Analytics (GA4)',
    category: 'marketing',
    categoryLabel: 'Marketing y Analítica',
    percentage: 85,
    level: 'Avanzado',
    iconKey: 'ga4',
    accentColor: '#F9AB00',
    description: 'Seguimiento de eventos, embudos de tráfico y atribución web'
  },
  {
    name: 'Pixel de Seguimiento',
    category: 'marketing',
    categoryLabel: 'Marketing y Analítica',
    percentage: 88,
    level: 'Avanzado',
    iconKey: 'pixel',
    accentColor: '#00C2FF',
    description: 'Configuración de eventos estándar, conversiones personalizadas y tracking'
  },

  // Diseño y Prototipado
  {
    name: 'Figma',
    category: 'design',
    categoryLabel: 'Diseño y Prototipado',
    percentage: 88,
    level: 'Avanzado',
    iconKey: 'figma',
    accentColor: '#A259FF',
    description: 'Diseño UI/UX, wireframing y componentes interactivos'
  },
  {
    name: 'Adobe Photoshop',
    category: 'design',
    categoryLabel: 'Diseño y Prototipado',
    percentage: 85,
    level: 'Avanzado',
    iconKey: 'photoshop',
    accentColor: '#31A8FF',
    description: 'Composición digital, diseño publicitario y retoque fotográfico'
  },
  {
    name: 'Affinity Suite',
    category: 'design',
    categoryLabel: 'Diseño y Prototipado',
    percentage: 80,
    level: 'Competente',
    iconKey: 'affinity',
    accentColor: '#22D3EE',
    description: 'Diseño vectorial y maquetación gráfica editorial'
  },

  // Video y Contenido
  {
    name: 'DaVinci Resolve',
    category: 'video',
    categoryLabel: 'Video y Contenido',
    percentage: 82,
    level: 'Competente',
    iconKey: 'davinci',
    accentColor: '#EC4899',
    description: 'Edición audiovisual, etalonaje de color y montaje dinámico'
  },
  {
    name: 'CapCut',
    category: 'video',
    categoryLabel: 'Video y Contenido',
    percentage: 90,
    level: 'Avanzado',
    iconKey: 'capcut',
    accentColor: '#E2E8F0',
    description: 'Edición ágil de video vertical, ritmo y efectos para Reels/TikTok'
  },
  {
    name: 'OpenAI Sora',
    category: 'video',
    categoryLabel: 'Video y Generación IA',
    percentage: 90,
    level: 'Avanzado',
    iconKey: 'sora',
    accentColor: '#10A37F',
    description: 'Generación, dirección y cinematografía de video con IA'
  },
  {
    name: 'Google Veo',
    category: 'video',
    categoryLabel: 'Video y Generación IA',
    percentage: 88,
    level: 'Avanzado',
    iconKey: 'veo',
    accentColor: '#8B5CF6',
    description: 'Generación de video HD con alta coherencia visual y estilos'
  },

  // Espacio 3D
  {
    name: 'Blender 3D',
    category: '3d',
    categoryLabel: 'Espacio 3D',
    percentage: 75,
    level: 'Intermedio',
    iconKey: 'blender',
    accentColor: '#EA7600',
    description: 'Modelado tridimensional, iluminación y renderizado de producto'
  },

  // IA y Aceleración
  {
    name: 'Antigravity',
    category: 'ai',
    categoryLabel: 'IA y Aceleración',
    percentage: 95,
    level: 'Experto',
    iconKey: 'antigravity',
    accentColor: '#F97316',
    description: 'Aceleración de flujos de trabajo asistidos por IA y agentes'
  },
  {
    name: 'Google Gemini',
    category: 'ai',
    categoryLabel: 'IA y Aceleración',
    percentage: 92,
    level: 'Experto',
    iconKey: 'gemini',
    accentColor: '#8B5CF6',
    description: 'Investigación profunda, estructuración conceptual y síntesis'
  },
  {
    name: 'ChatGPT',
    category: 'ai',
    categoryLabel: 'IA y Aceleración',
    percentage: 92,
    level: 'Experto',
    iconKey: 'chatgpt',
    accentColor: '#10A37F',
    description: 'Prompting avanzado, redacción de copy e investigación'
  },

  // Productividad y Análisis
  {
    name: 'Microsoft Excel',
    category: 'productivity',
    categoryLabel: 'Productividad y Análisis',
    percentage: 90,
    level: 'Avanzado',
    iconKey: 'excel',
    accentColor: '#107C41',
    description: 'Modelado financiero, análisis de datos y tabulación'
  },
  {
    name: 'Microsoft PowerPoint',
    category: 'productivity',
    categoryLabel: 'Productividad y Análisis',
    percentage: 88,
    level: 'Avanzado',
    iconKey: 'powerpoint',
    accentColor: '#D24726',
    description: 'Presentaciones ejecutivas de proyectos y diagnósticos'
  },
  {
    name: 'Microsoft Word',
    category: 'productivity',
    categoryLabel: 'Productividad y Análisis',
    percentage: 90,
    level: 'Avanzado',
    iconKey: 'word',
    accentColor: '#2B579A',
    description: 'Redacción de informes estratégicos, memorias y tesis'
  }
];
