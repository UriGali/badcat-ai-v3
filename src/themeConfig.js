// ============================================================
// BADCAT V3 — THEME CONFIG
// ============================================================
// Para añadir un proyecto nuevo:
//   1. Copia cualquier objeto del array `projects`
//   2. Cambia los valores (brand, title, thumbnail, director…)
//   3. Guarda el archivo. El proyecto aparece automáticamente.
//
// Para añadir un cliente al carrusel:
//   1. Añade un objeto { name, logo } al array `clients`
//   2. Si tienes el logo en PNG/SVG, pon la ruta en `logo`
//   3. Si no tienes logo, deja logo: null → usa el nombre en texto
// ============================================================

export const theme = {

  // ── Marca ────────────────────────────────────────────────
  brand: {
    name: 'BADCAT',
    aiSuffix: '& IA',
    tagline: 'Craft Meets Intelligence',
    subTagline: 'Producción Cinematográfica · Inteligencia Artificial · Madrid, España',
    ctaText: 'Start a Project',
    ctaEmail: 'hola@badcat.es',
  },

  // ── Navegación ───────────────────────────────────────────
  nav: {
    links: [
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Clients',   href: '#clients' },
      { label: 'Contact',   href: '#contact' },
    ],
  },

  // ── Proyectos por categoría ──────────────────────────────
  //
  // Cada categoría corresponde a una carpeta en public/Spots/
  // Opciones de `size`:
  //   'normal'   → 1 columna × 1 fila
  //   'wide'     → 2 columnas × 1 fila
  //   'tall'     → 1 columna × 2 filas
  //   'featured' → 2 columnas × 2 filas
  // ─────────────────────────────────────────────────────────
  projectCategories: [
    {
      id: 'spots',
      name: 'SPOTS',
      projects: [
        {
          id: 101,
          brand: 'LIDL',
          title: 'BARBERO',
          category: 'TV Commercial',
          year: '2024',
          poster: '/Spots/SPOTS/Portada LIDL-Barbero.avif',
          hoverVideo: '/Spots/SPOTS/BARBERO.mp4',
          fullVideo: '/Spots/SPOTS/BARBERO.mp4',
          director: 'Carlos Martín',
          dop: 'Alejandro Reyes',
          agency: 'Publicis España',
          description: 'Campaña de verano para Lidl España destacando la frescura y calidad de sus productos de temporada.',
          size: 'featured',
        },
        {
          id: 102,
          brand: 'LIDL',
          title: 'TETERA',
          category: 'TV Commercial',
          year: '2024',
          poster: '/Spots/SPOTS/portada_tetera.jpg',
          hoverVideo: '/Spots/SPOTS/LIDL-tetera.mp4',
          fullVideo: '/Spots/SPOTS/LIDL-tetera.mp4',
          director: 'Carlos Martín',
          dop: 'Alejandro Reyes',
          agency: 'Publicis España',
          description: 'Spot de producto para la línea de cocina de Lidl.',
          size: 'normal',
        },
        {
          id: 103,
          brand: 'REEBOK',
          title: 'BE MORE HUMAN',
          category: 'TV Commercial',
          year: '2024',
          poster: '/Spots/SPOTS/portada_rebook.avif',
          hoverVideo: '/Spots/SPOTS/REEBOK_-_Be_More_Human_Weekend.mp4',
          fullVideo: '/Spots/SPOTS/REEBOK_-_Be_More_Human_Weekend.mp4',
          director: 'Javier Font',
          dop: 'Rosa Canals',
          agency: 'Reebok Global',
          description: 'Pieza de marca que reivindica la autenticidad del deporte y el espíritu humano.',
          size: 'tall',
        },
        {
          id: 104,
          brand: 'LIDL',
          title: 'NAVIDAD',
          category: 'TV Commercial',
          year: '2024',
          poster: '/Spots/SPOTS/portada_Navidad.avif',
          hoverVideo: '/Spots/SPOTS/LIDL_-_Contágiate_de_la_Navidad.mp4',
          fullVideo: '/Spots/SPOTS/LIDL_-_Contágiate_de_la_Navidad.mp4',
          director: 'Carlos Martín',
          dop: 'Alejandro Reyes',
          agency: 'Publicis España',
          description: 'Campaña navideña de Lidl España. Cálida, familiar y con el sello de calidad de la marca.',
          size: 'wide',
        },
        {
          id: 105,
          brand: 'ZOPO',
          title: 'DREAM',
          category: 'Brand Film',
          year: '2024',
          poster: '/Spots/SPOTS/portada_Zopo.avif',
          hoverVideo: '/Spots/SPOTS/Zopo_Dream.mp4',
          fullVideo: '/Spots/SPOTS/Zopo_Dream.mp4',
          director: 'María Soler',
          dop: 'Tomás Escribano',
          agency: 'Zopo Creative',
          description: 'Film de marca que explora el sueño como motor de creatividad e innovación.',
          size: 'normal',
        },
      ],
    },

    {
      id: 'spec-ads',
      name: 'SPEC ADS',
      projects: [
        {
          id: 201,
          brand: 'BAD_CAT',
          title: 'VOODOO MAMA',
          category: 'Brand Film',
          year: '2024',
          poster: '/Spots/SPEC ADS/Portada VOODOO MAMA.avif',
          hoverVideo: '/Spots/SPEC ADS/VOODOO_MAMA.mp4',
          fullVideo: '/Spots/SPEC ADS/VOODOO_MAMA.mp4',
          director: 'María Soler',
          dop: 'Tomás Escribano',
          agency: 'Internal Creative',
          description: 'Pieza de identidad de marca con una energía visual cruda y directa. El alma de BadCat en movimiento.',
          size: 'featured',
        },
        {
          id: 202,
          brand: 'WHISKAS',
          title: 'CAT FOOD',
          category: 'Spec Ad',
          year: '2024',
          poster: '/Spots/SPEC ADS/portada_cat.jpg',
          hoverVideo: '/Spots/SPEC ADS/Cat food.mp4',
          fullVideo: '/Spots/SPEC ADS/Cat food.mp4',
          director: 'Pablo Díez',
          dop: 'Ignacio Leal',
          agency: 'Spec',
          description: 'Spec ad para producto de alimentación felina. Visual minimalista y elegante.',
          size: 'tall',
        },
        {
          id: 203,
          brand: 'RAYBAN',
          title: 'NEVER HIDE',
          category: 'Spec Ad',
          year: '2024',
          poster: '/Spots/SPEC ADS/Portada RayBan.avif',
          hoverVideo: '/Spots/SPEC ADS/NEVER_HIDE.mp4',
          fullVideo: '/Spots/SPEC ADS/NEVER_HIDE.mp4',
          director: 'Javier Font',
          dop: 'Rosa Canals',
          agency: 'Spec',
          description: 'La esencia del estilo y la autenticidad de RayBan en una pieza de alto impacto visual.',
          size: 'wide',
        },
        {
          id: 204,
          brand: 'COCA-COLA',
          title: 'SPEC',
          category: 'Spec Ad',
          year: '2024',
          poster: '/Spots/SPEC ADS/portada_CocaCola.jpg',
          hoverVideo: '/Spots/SPEC ADS/Coca Cola Spec.mp4',
          fullVideo: '/Spots/SPEC ADS/Coca Cola Spec.mp4',
          director: 'Carlos Martín',
          dop: 'Alejandro Reyes',
          agency: 'Spec',
          description: 'Spec ad para Coca-Cola. Energía, ritmo y el inconfundible rojo de la marca.',
          size: 'normal',
        },
      ],
    },

    {
      id: 'corporatius',
      name: 'CORPORATIUS',
      projects: [
        {
          id: 301,
          brand: 'PPG',
          title: 'INNOVATION',
          category: 'Corporate Film',
          year: '2024',
          poster: '/Spots/CORPORATIUS/portada_Bringing.avif',
          hoverVideo: '/Spots/CORPORATIUS/bringing_innovation_to_the_surface,_ppg_v1 (720p).mp4',
          fullVideo: '/Spots/CORPORATIUS/bringing_innovation_to_the_surface,_ppg_v1 (720p).mp4',
          director: 'Pablo Díez',
          dop: 'Ignacio Leal',
          agency: 'PPG Inhouse',
          description: 'Film corporativo para PPG. La innovación como eje narrativo de una marca global de recubrimientos.',
          size: 'featured',
        },
        {
          id: 302,
          brand: 'NEXA',
          title: 'FAST CLEARCOAT',
          category: 'Product Film',
          year: '2024',
          poster: '/Spots/CORPORATIUS/portada_ClearCoat.jpg',
          hoverVideo: '/Spots/CORPORATIUS/Nexa_Fast_ClearCoat._Promotional.mp4',
          fullVideo: '/Spots/CORPORATIUS/Nexa_Fast_ClearCoat._Promotional.mp4',
          director: 'Carlos Martín',
          dop: 'Alejandro Reyes',
          agency: 'Nexa Autocolor',
          description: 'Promotional film para el barniz de acabado rápido de Nexa Autocolor.',
          size: 'wide',
        },
        {
          id: 303,
          brand: 'SELEMIX',
          title: 'DIRECT PRO',
          category: 'Product Film',
          year: '2024',
          poster: '/Spots/CORPORATIUS/portada_selemix.avif',
          hoverVideo: '/Spots/CORPORATIUS/Selemix_-_Direct_Pro.mp4',
          fullVideo: '/Spots/CORPORATIUS/Selemix_-_Direct_Pro.mp4',
          director: 'María Soler',
          dop: 'Tomás Escribano',
          agency: 'Selemix',
          description: 'Film de producto para la gama Direct Pro de Selemix. Precisión técnica con acabado premium.',
          size: 'normal',
        },
      ],
    },

    {
      id: 'videoclips',
      name: 'VIDEOCLIPS',
      projects: [
        {
          id: 401,
          brand: 'LEÏTI SENE',
          title: 'T-REX',
          category: 'Music Video',
          year: '2024',
          poster: '/Spots/VIDEOCLIPS/portada_leite.avif',
          hoverVideo: '/Spots/VIDEOCLIPS/leïti_sene_-_t-rex_v1 (1080p).mp4',
          fullVideo: '/Spots/VIDEOCLIPS/leïti_sene_-_t-rex_v1 (1080p).mp4',
          director: 'Javier Font',
          dop: 'Rosa Canals',
          agency: 'BadCat',
          description: 'Videoclip para el artista Leïti Sene. Visualmente salvaje, rítmicamente preciso.',
          size: 'featured',
        },
      ],
    },
  ],

  // ── Clientes (carrusel inferior) ─────────────────────────
  clients: [
    { name: 'LIDL',          logo: null },
    { name: 'RENFE',         logo: null },
    { name: 'ESTRELLA DAMM', logo: null },
    { name: 'MAHOU',         logo: null },
    { name: 'SANTANDER',     logo: null },
    { name: 'INDITEX',       logo: null },
    { name: 'MOVISTAR',      logo: null },
    { name: 'EL CORTE INGLÉS', logo: null },
    { name: 'CAMPOFRÍO',     logo: null },
    { name: 'SEAT',          logo: null },
    { name: 'VOLVIC',        logo: null },
    { name: 'MAPFRE',        logo: null },
  ],

  // ── Contacto ─────────────────────────────────────────────
  contact: {
    email: 'hola@badcat.es',
    phone: '+34 612 345 678',
    location: 'Madrid, España',
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Vimeo',     href: '#' },
      { label: 'LinkedIn',  href: '#' },
    ],
    legalLinks: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Aviso Legal',            href: '#' },
    ],
  },
};
