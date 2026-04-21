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
      { label: 'Work',    href: '#work' },
      { label: 'Clients', href: '#clients' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  // ── Proyectos ────────────────────────────────────────────
  //
  // Opciones de `size`:
  //   'normal'   → 1 columna × 1 fila  (por defecto)
  //   'wide'     → 2 columnas × 1 fila  (plano panorámico)
  //   'tall'     → 1 columna × 2 filas  (retrato destacado)
  //   'featured' → 2 columnas × 2 filas (pieza hero)
  //
  // `thumbnail`  → imagen de fondo de la tarjeta
  // `hoverVideo` → video corto que se reproduce al hover (mute)
  //               Déjalo en null hasta tener el archivo listo.
  // `fullVideo`  → video completo del modal (embed o archivo)
  //               Acepta URLs de Vimeo, YouTube embed, o ruta local.
  // ─────────────────────────────────────────────────────────
  projects: [
    {
      id: 1,
      brand: 'LIDL',
      title: 'BARBERO',
      category: 'TV Commercial',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/lidl-barbero/1200/800',
      poster: '/Spots/Portada LIDL-Barbero.avif',
      hoverVideo: '/Spots/BARBERO.mp4',
      fullVideo: '/Spots/BARBERO.mp4',
      director: 'Carlos Martín',
      dop: 'Alejandro Reyes',
      agency: 'Publicis España',
      description: 'Campaña de verano para Lidl España destacando la frescura y calidad de sus productos de temporada. Rodado en tres localizaciones durante dos días.',
      size: 'featured',
    },
    {
      id: 2,
      brand: 'BAD_CAT',
      title: 'VOODOO MAMA',
      category: 'Brand Film',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/badcat-voodoo/1000/650',
      poster: '/Spots/Portada VOODOO MAMA.avif',
      hoverVideo: '/Spots/VOODOO_MAMA.mp4',
      fullVideo: '/Spots/VOODOO_MAMA.mp4',
      director: 'María Soler',
      dop: 'Tomás Escribano',
      agency: 'Internal Creative',
      description: 'Pieza de identidad de marca con una energía visual cruda y directa. El alma de BadCat en movimiento.',
      size: 'tall',
    },
    {
      id: 3,
      brand: 'RAYBAN',
      title: 'NEVER HIDE',
      category: 'TV Commercial',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/rayban-neverhide/800/500',
      poster: '/Spots/Portada RayBan.avif',
      hoverVideo: '/Spots/NEVER_HIDE.mp4',
      fullVideo: '/Spots/NEVER_HIDE.mp4',
      director: 'Javier Font',
      dop: 'Rosa Canals',
      agency: 'Villarrosas',
      description: 'La esencia del estilo y la autenticidad de RayBan en una pieza de alto impacto visual.',
      size: 'normal',
    },
    {
      id: 4,
      brand: 'LIDL',
      title: 'LIBROS',
      category: 'TV Commercial',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/lidl-libros/850/600',
      poster: '/Spots/Portada LIDL-Libros.avif',
      hoverVideo: '/Spots/LIDL - LIBROS.mp4',
      fullVideo: '/Spots/LIDL - LIBROS.mp4',
      director: 'Carlos Martín',
      dop: 'Alejandro Reyes',
      agency: 'Publicis España',
      description: 'Spot para la campaña de vuelta al cole de Lidl. Variedad, calidad y precio en un solo golpe visual.',
      size: 'normal',
    },
    {
      id: 5,
      brand: 'SILVERCREST',
      title: 'THE RANGE',
      category: 'Product Film',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/silvercrest-tools/1000/650',
      poster: '/Spots/Portada SILVERCREST.avif',
      hoverVideo: '/Spots/SILVERCREST.mp4',
      fullVideo: '/Spots/SILVERCREST.mp4',
      director: 'Pablo Díez',
      dop: 'Ignacio Leal',
      agency: 'Lidl Inhouse',
      description: 'Spot de producto para la línea SILVERCREST de Lidl. Prestaciones de alta gama a precio imbatible.',
      size: 'wide',
    },
    {
      id: 6,
      brand: 'GRUPO IFA',
      title: 'BESO',
      category: 'TV Commercial',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/grupoifa-beso/650/900',
      poster: '/Spots/Portada Grupo IFA 40s BESO Versión Bobina.avif',
      hoverVideo: '/Spots/Grupo IFA 40s BESO Versión Bobina.mp4',
      fullVideo: '/Spots/Grupo IFA 40s BESO Versión Bobina.mp4',
      director: 'María Soler',
      dop: 'Tomás Escribano',
      agency: 'Grupo IFA',
      description: 'Spot emocional de 40 segundos. Una historia cotidiana cargada de afecto y proximidad de marca.',
      size: 'normal',
    },
    {
      id: 7,
      brand: 'GRUPO IFA',
      title: 'PISCINA',
      category: 'TV Commercial',
      year: '2024',
      thumbnail: 'https://picsum.photos/seed/grupoifa-piscina/1200/800',
      poster: '/Spots/PORTADA Grupo IFA 40s PISCINA Versión Bobina.avif',
      hoverVideo: '/Spots/Grupo IFA 40s PISCINA Versión Bobina.mp4',
      fullVideo: '/Spots/Grupo IFA 40s PISCINA Versión Bobina.mp4',
      director: 'Javier Font',
      dop: 'Rosa Canals',
      agency: 'Grupo IFA',
      description: 'Spot veraniego de 40 segundos. Frescura, familia y la esencia del verano español en plena ebullición.',
      size: 'normal',
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
