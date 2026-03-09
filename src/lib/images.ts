/**
 * Centralized image path constants for the Keif Al-Diafa website.
 * All images are served locally from public/images/.
 *
 * Sources:
 *   - https://github.com/manaje12/img_kef.git (236 original images)
 *   - https://github.com/moain2026/img_kef_updated.git (243 updated images)
 *
 * Structure:
 *   logo/            -> 6 files (color, gold, dark in png+svg)
 *   hero/            -> 5 images (hero-main, hero-bg-pattern, hero-1..3)
 *   services/male/   -> cover, sabbab, uniforms, safraja + hosts/sawas/souqiya/safarjia
 *   services/female/ -> cover, reception, hostess
 *   services/artistic/
 *   arts/            -> painters, folk-team, photobooth, heritage-tent
 *   offerings/       -> coffee, tea, cups, distributions, sweets, buffet, table, counter
 *   portfolio/       -> events(82), weddings(18), arts(21)
 *   partners/        -> 36+ logos
 *   events/          -> 82 images (legacy)
 *   weddings/        -> 18 images (legacy)
 *   distributions/   -> 5 images (legacy)
 *   equipment/       -> 21 images (legacy)
 */

// ═══════════════════════════════════════════════════════════════
// NEW UNIFIED IMAGES OBJECT (per agent prompt specification)
// ═══════════════════════════════════════════════════════════════

export const IMAGES = {
  logo: {
    color: '/images/logo/logo-color.png',
    colorSvg: '/images/logo/logo-color.svg',
    gold: '/images/logo/logo-gold.png',
    goldSvg: '/images/logo/logo-gold.svg',
    dark: '/images/logo/logo-dark.png',
    darkSvg: '/images/logo/logo-dark.svg',
  },

  hero: {
    main: '/images/hero/hero-main.webp',
    bg: '/images/hero/hero-bg-pattern.webp',
  },

  services: {
    male: {
      cover: '/images/services/male/cover.webp',
      sabbab: [
        '/images/services/male/sabbab-1.webp',
        '/images/services/male/sabbab-2.webp',
      ],
      uniforms: {
        dagla: '/images/services/male/moDhif-dagla.webp',
        sediri: '/images/services/male/moDhif-sediri.webp',
        hizam: '/images/services/male/moDhif-hizam.webp',
        makawi: '/images/services/male/moDhif-makawi.webp',
      },
      safraja: '/images/services/male/safraja.webp',
    },
    female: {
      cover: '/images/services/female/cover.webp',
      reception: [
        '/images/services/female/reception-1.webp',
        '/images/services/female/reception-2.webp',
      ],
      hostess: [
        '/images/services/female/hostess-1.webp',
        '/images/services/female/hostess-2.webp',
      ],
    },
  },

  arts: {
    painters: [
      '/images/arts/painters-1.webp',
      '/images/arts/painters-2.webp',
    ],
    folkTeam: [
      '/images/arts/folk-team-1.webp',
      '/images/arts/folk-team-2.webp',
    ],
    photobooth: ['/images/arts/photobooth-1.webp'],
    heritageTent: ['/images/arts/heritage-tent-1.webp'],
  },

  offerings: {
    coffeeDallah: '/images/offerings/coffee-dallah.webp',
    teaRed: '/images/offerings/tea-red.webp',
    cupsDecorated: '/images/offerings/cups-decorated.webp',
    distributions: [
      '/images/offerings/distributions-1.webp',
      '/images/offerings/distributions-2.webp',
    ],
    sweetsPlate: '/images/offerings/sweets-plate.webp',
    buffet: '/images/offerings/buffet-1.webp',
    serviceTable: '/images/offerings/service-table-1.webp',
    receptionCounter: '/images/offerings/reception-counter.webp',
  },

  portfolio: {
    events: Array.from({ length: 82 }, (_, i) =>
      `/images/portfolio/events/event-${String(i + 1).padStart(2, '0')}.webp`
    ),
    weddings: Array.from({ length: 18 }, (_, i) =>
      `/images/portfolio/weddings/wedding-${String(i + 1).padStart(2, '0')}.webp`
    ),
    arts: Array.from({ length: 21 }, (_, i) =>
      `/images/portfolio/arts/arts-${String(i + 1).padStart(2, '0')}.webp`
    ),
  },

  partners: Array.from({ length: 36 }, (_, i) =>
    `/images/partners/partner-${String(i + 1).padStart(2, '0')}.webp`
  ),
} as const;

// ═══════════════════════════════════════════════════════════════
// LEGACY EXPORTS (backward compatibility with existing components)
// ═══════════════════════════════════════════════════════════════

export const HERO_IMAGES = {
  main: "/images/hero/hero-1.webp",
  secondary: "/images/hero/hero-2.webp",
  tertiary: "/images/hero/hero-3.webp",
};

export const EVENT_IMAGES = Array.from({ length: 82 }, (_, i) => `/images/events/event-${i + 1}.webp`);
export const WEDDING_IMAGES = Array.from({ length: 18 }, (_, i) => `/images/weddings/wedding-${i + 1}.webp`);
export const DISTRIBUTION_IMAGES = Array.from({ length: 5 }, (_, i) => `/images/distributions/dist-${i + 1}.webp`);

export const SERVICES_MALE = {
  hosts: {
    hizam: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/hizam/hizam-${i + 1}.webp`),
    dagla: Array.from({ length: 6 }, (_, i) => `/images/services/male/hosts/dagla/dagla-${i + 1}.webp`),
    daglaJanbiya: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/dagla-janbiya/dagla-janbiya-${i + 1}.webp`),
    sideriya: Array.from({ length: 3 }, (_, i) => `/images/services/male/hosts/sideriya/sideriya-${i + 1}.webp`),
    makkawi: Array.from({ length: 2 }, (_, i) => `/images/services/male/hosts/makkawi/makkawi-${i + 1}.webp`),
    main: "/images/services/male/hosts/dagla/dagla-1.webp",
  },
  safarjia: Array.from({ length: 6 }, (_, i) => `/images/services/male/safarjia/safarjia-${i + 1}.webp`),
  sawas: Array.from({ length: 9 }, (_, i) => `/images/services/male/sawas/sawas-${i + 1}.webp`),
  souqiya: Array.from({ length: 8 }, (_, i) => `/images/services/male/souqiya/souqiya-${i + 1}.webp`),
};

export const SERVICES_FEMALE = Array.from({ length: 2 }, (_, i) => `/images/services/female/female-${i + 1}.webp`);

export const SERVICES_ARTISTIC = {
  artist: Array.from({ length: 11 }, (_, i) => `/images/services/artistic/artist/artist-${i + 1}.webp`),
  folkband: Array.from({ length: 2 }, (_, i) => `/images/services/artistic/folkband/folkband-${i + 1}.webp`),
  heritageTent: Array.from({ length: 4 }, (_, i) => `/images/services/artistic/heritage-tent/tent-${i + 1}.webp`),
  counter: Array.from({ length: 2 }, (_, i) => `/images/services/artistic/counter/counter-${i + 1}.webp`),
  photoBooth: Array.from({ length: 6 }, (_, i) => `/images/services/artistic/photo-booth/photo-booth-${i + 1}.webp`),
  buffet: Array.from({ length: 3 }, (_, i) => `/images/services/artistic/buffet/buffet-${i + 1}.webp`),
  mobileTable: Array.from({ length: 6 }, (_, i) => `/images/services/artistic/mobile-table/table-${i + 1}.webp`),
};

export const EQUIPMENT_IMAGES = Array.from({ length: 21 }, (_, i) => `/images/equipment/equip-${i + 1}.webp`);
export const PARTNER_LOGOS = Array.from({ length: 36 }, (_, i) => `/images/partners/partner-${i + 1}.webp`);

// Convenience shortcuts
export const HERO_IMG = HERO_IMAGES.main;
export const COFFEE_IMG = SERVICES_MALE.safarjia[0];
export const CATERING_IMG = EVENT_IMAGES[2];
export const TEA_IMG = DISTRIBUTION_IMAGES[0];
export const EVENT_IMG = EVENT_IMAGES[0];
export const WAITER_IMG = SERVICES_MALE.hosts.main;
export const EQUIP_IMG = EQUIPMENT_IMAGES[0];
export const GALA_IMG = EVENT_IMAGES[5];
export const HOTEL_IMG = EVENT_IMAGES[10];
export const DATES_IMG = DISTRIBUTION_IMAGES[1];
export const FOOD_IMG = DISTRIBUTION_IMAGES[2];
export const PORTFOLIO_IMG = EVENT_IMAGES[7];
export const KITCHEN_IMG = EQUIPMENT_IMAGES[5];
export const TEAM_IMG = SERVICES_MALE.hosts.dagla[1];
export const CONF_IMG = EVENT_IMAGES[12];

export const SERVICE_IMAGES = {
  maleWaiter: SERVICES_MALE.hosts.main,
  zamzam: SERVICES_MALE.safarjia[1],
  butler: SERVICES_MALE.safarjia[2],
  sawas: SERVICES_MALE.sawas[0],
  hostess: SERVICES_FEMALE[0],
  calligrapher: SERVICES_ARTISTIC.artist[0],
  artist: SERVICES_ARTISTIC.artist[1],
  folkband: SERVICES_ARTISTIC.folkband[0],
  heritageTent: SERVICES_ARTISTIC.heritageTent[0],
  counter: SERVICES_ARTISTIC.counter[0],
  photoBooth: SERVICES_ARTISTIC.photoBooth[0],
  buffet: SERVICES_ARTISTIC.buffet[0],
  mobileTable: SERVICES_ARTISTIC.mobileTable[0],
};

export const OUTFIT_IMAGES = {
  hizam: SERVICES_MALE.hosts.hizam[0],
  dagla: SERVICES_MALE.hosts.dagla[0],
  daglaJanbiya: SERVICES_MALE.hosts.daglaJanbiya[0],
  sideriya: SERVICES_MALE.hosts.sideriya[0],
  makkawi: SERVICES_MALE.hosts.makkawi[0],
  souqiya: SERVICES_MALE.souqiya[0],
  female: SERVICES_FEMALE[0],
  safarjia: SERVICES_MALE.safarjia[0],
  sawas: SERVICES_MALE.sawas[0],
};
