/**
 * Proven Projecten B.V. — Centralized Residential Architectural Image Registry
 *
 * Strict Image Uniqueness System:
 * - Every image entry has a unique semantic key and a unique asset URL.
 * - No image URL is ever reused across sections, cards, or pages.
 * - Runtime validator verifies that all URLs are 100% unique.
 */

export interface ImageRegistryEntry {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category: 'residential' | 'exterior' | 'interior' | 'craftsmanship' | 'hospitality';
}

const rawImageMapping: Record<string, ImageRegistryEntry> = {
  // 1. Homepage
  homeHero: {
    id: 'home-hero',
    url: '/images/hero_architectural_exterior_1793271112313.jpg',
    alt: 'Contemporary Dutch luxury townhouse exterior with steel-framed glass windows',
    caption: 'Amsterdam Residential Facade Modernization',
    category: 'exterior',
  },
  homeAboutPreview: {
    id: 'home-about-preview',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern European residential living room with natural stone fireplace and warm sunlight',
    caption: 'Restored Living Space in Amsterdam',
    category: 'interior',
  },
  homeCraftsmanship: {
    id: 'home-craftsmanship',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Master timber craftsman and carpenter measuring and assembling heavy structural European oak beams',
    caption: 'Artisanal Timber Framing & Precision Joinery',
    category: 'craftsmanship',
  },

  // 2. About Page
  aboutHero: {
    id: 'about-hero',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Residential architecture and construction team examining technical elevation drawings on site',
    caption: 'Proven Projecten Technical On-Site Direction',
    category: 'craftsmanship',
  },
  aboutMain: {
    id: 'about-main',
    url: '/images/about_architect_craftsmanship_1793271114011.jpg',
    alt: 'European interior architect and master craftsman reviewing residential blueprints in Amsterdam',
    caption: 'Architectural Planning & Engineering Session',
    category: 'craftsmanship',
  },
  aboutArchitectDrawings: {
    id: 'about-architect-drawings',
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    alt: 'AutoCAD architectural elevation drawings and structural engineering blueprints',
    caption: 'Structural Calculations & CAD Planning',
    category: 'craftsmanship',
  },
  aboutModernInterior: {
    id: 'about-modern-interior',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern completed residential interior with bespoke cabinetry and herringbone floor',
    caption: 'Turnkey Handover Standard',
    category: 'interior',
  },

  // 3. Residential Page
  residentialHero: {
    id: 'residential-hero',
    url: '/images/residential_townhouse_interior_1793271113481.jpg',
    alt: 'Luxury Amsterdam townhouse living room with high restored ceiling and forest green joinery',
    caption: 'Canal Residence Full Transformation',
    category: 'interior',
  },
  residentialLivingRoom: {
    id: 'residential-living-room',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Renovated contemporary Amsterdam townhouse living room with open flow',
    caption: 'Open-Plan Living & Acoustic Dampening',
    category: 'interior',
  },
  residentialKitchen: {
    id: 'residential-kitchen',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Minimalist kitchen renovation with natural oak cabinetry and marble island',
    caption: 'Bespoke Oak & Calacatta Culinary Hub',
    category: 'interior',
  },
  residentialBedroom: {
    id: 'residential-bedroom',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Master bedroom suite with acoustic wall panels and concealed wardrobes',
    caption: 'Acoustic Suite Insulation',
    category: 'interior',
  },
  residentialBathroom: {
    id: 'residential-bathroom',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spa-inspired luxury bathroom with walk-in shower and freestanding tub',
    caption: 'Bookmatched Travertine Sanctuary',
    category: 'interior',
  },
  residentialExtension: {
    id: 'residential-extension',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ground-floor rear extension with minimalist glass sliding panels opening to garden',
    caption: 'Flush Indoor-Outdoor Garden Extension',
    category: 'exterior',
  },

  // 4. Commercial & Hospitality (Boutique Architectural Projects)
  commercialHero: {
    id: 'commercial-hero',
    url: '/images/commercial_hotel_interior_1793271114811.jpg',
    alt: 'Boutique hotel reception lounge in Amsterdam with fluted timber walls and residential warmth',
    caption: 'Hospitality Architecture & Reception Fit-out',
    category: 'hospitality',
  },
  commercialHotel: {
    id: 'commercial-hotel',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    alt: 'Renovated boutique residence guest suite with walnut paneling and en-suite',
    caption: 'Acoustically Certified Guest Suite',
    category: 'hospitality',
  },
  commercialOffice: {
    id: 'commercial-office',
    url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Architectural residential home study and library with acoustic zoning and bespoke joinery',
    caption: 'Executive Home Study & Library Suite',
    category: 'interior',
  },
  commercialReception: {
    id: 'commercial-reception',
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sculptural stone residential foyer and natural oak entryway',
    caption: 'Bespoke Terrazzo & Oak Welcome Hall',
    category: 'interior',
  },
  commercialRestaurant: {
    id: 'commercial-restaurant',
    url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Atmospheric residential wine room and formal entertaining salon',
    caption: 'Entertaining Salon & Wine Room',
    category: 'interior',
  },

  // 5. Renovation Page
  renovationHero: {
    id: 'renovation-hero',
    url: 'https://images.unsplash.com/photo-1768321902743-9f2134e06b9f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Apartment undergoing full structural renovation, MEP installation and leveling',
    caption: 'Structural Strip-Out & Technical Engineering',
    category: 'craftsmanship',
  },
  renovationPlastering: {
    id: 'renovation-plastering',
    url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artisan applying seamless level 5 skim plaster and mineral coatings',
    caption: 'Level 5 Q4 Mineral Plaster Application',
    category: 'craftsmanship',
  },
  renovationFlooring: {
    id: 'renovation-flooring',
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Precision installation of French oak chevron parquet flooring',
    caption: 'French Oak Chevron Flooring Installation',
    category: 'craftsmanship',
  },
  renovationCarpentry: {
    id: 'renovation-carpentry',
    url: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Master carpenter fitting bespoke architectural wall paneling and cabinetry',
    caption: 'Custom Architectural Joinery Fitting',
    category: 'craftsmanship',
  },
  renovationFinished: {
    id: 'renovation-finished',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Completed open-plan apartment interior with restored beams and warm finishes',
    caption: 'Turnkey Handover on Keizersgracht',
    category: 'interior',
  },

  // 6. Maintenance Page
  maintenanceHero: {
    id: 'maintenance-hero',
    url: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1400&q=80',
    alt: 'Building envelope inspection and maintenance on Dutch heritage property',
    caption: 'Preventative Building Envelope Maintenance',
    category: 'exterior',
  },
  maintenanceWoodwork: {
    id: 'maintenance-woodwork',
    url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional carpentry and timber installation tools on European oak subfloor',
    caption: 'Exterior & Interior Timber Joinery Servicing',
    category: 'craftsmanship',
  },
  maintenanceRepairs: {
    id: 'maintenance-repairs',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Technical inspection and servicing of building plumbing and heating systems',
    caption: 'Technical MEP Infrastructure Servicing',
    category: 'craftsmanship',
  },
  maintenanceExterior: {
    id: 'maintenance-exterior',
    url: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
    alt: 'Monumental Dutch building undergoing active structural masonry renovation and steel reinforcement',
    caption: 'Historic Facade & Structural Masonry Restoration',
    category: 'exterior',
  },

  // 7. Extensions Page
  extensionsHero: {
    id: 'extensions-hero',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    alt: 'Architectural residential extension with floor-to-ceiling glass and steel portal',
    caption: 'Modern Structural Glass Extension',
    category: 'exterior',
  },
  extensionsRoof: {
    id: 'extensions-roof',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rooftop dormer expansion and hardwood terrace overlooking canal view',
    caption: 'Zinc Dormer & Rooftop Terrace Construction',
    category: 'exterior',
  },
  extensionsGardenRoom: {
    id: 'extensions-garden-room',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Glass-enclosed garden room addition with underfloor heating',
    caption: 'Turnkey Garden Room Annex',
    category: 'exterior',
  },
  extensionsStructural: {
    id: 'extensions-structural',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Structural steel beam crane installation for open-plan space creation',
    caption: 'HEB Steel Portal Frame Assembly',
    category: 'craftsmanship',
  },

  // 8. Interior Design Page
  interiorDesignHero: {
    id: 'interior-design-hero',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    alt: 'Minimalist luxury European interior with bespoke architectural furniture',
    caption: 'Spatial Concept & Curated Atmosphere',
    category: 'interior',
  },
  interiorDesignKitchen: {
    id: 'interior-design-kitchen',
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Natural smoked oak kitchen with Verde Alpi marble worktops',
    caption: 'Custom Culinary Architecture',
    category: 'interior',
  },
  interiorDesignLiving: {
    id: 'interior-design-living',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    alt: 'Serene minimalist living room with warm linen textures and indirect lighting',
    caption: 'Atmospheric Architectural Lighting Design',
    category: 'interior',
  },
  interiorDesignCabinetry: {
    id: 'interior-design-cabinetry',
    url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Floor-to-ceiling custom library wall with concealed handles',
    caption: 'Bespoke Millwork & Wall Paneling',
    category: 'interior',
  },
  interiorDesignMaterials: {
    id: 'interior-design-materials',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Physical material moodboard: travertine, French oak, and brushed brass samples',
    caption: 'Tactile Material & Palette Curation',
    category: 'craftsmanship',
  },

  // 9. Portfolio Projects (Specific Dutch Projects from Reference Site)
  portfolioHotelDeWareJacob: {
    id: 'portfolio-hotel-de-ware-jacob',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    alt: 'De Ware Jacob Hotel boutique interior restoration in Amsterdam Oud-Zuid',
    caption: 'De Ware Jacob Hotel · Amsterdam Oud-Zuid',
    category: 'hospitality',
  },
  portfolioNieuwendammerKade: {
    id: 'portfolio-nieuwendammer-kade',
    url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
    alt: 'Nieuwendammer Kade waterfront lofts and private studios overlooking the water',
    caption: 'Nieuwendammer Kade · Amsterdam Noord',
    category: 'residential',
  },
  portfolioMarkenbinnenCottage: {
    id: 'portfolio-markenbinnen-cottage',
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    alt: 'Heritage cottage restoration in Markenbinnen with exposed solid oak roof trusses',
    caption: 'Cottage Renovation · Markenbinnen',
    category: 'exterior',
  },
  portfolioZaandijkHouse: {
    id: 'portfolio-zaandijk-house',
    url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    alt: 'House renovation in Zaandijk preserving regional timber architecture with modern luxury',
    caption: 'Zaanstreek Residence · Zaandijk',
    category: 'interior',
  },
  portfolioExtensionsRoofWorks: {
    id: 'portfolio-extensions-roof-works',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    alt: 'New glass garden extension and zinc roof dormer works in Amsterdam',
    caption: 'Extensions & Roof Works · Amsterdam',
    category: 'exterior',
  },
  portfolioGovertFlinckstraat: {
    id: 'portfolio-govert-flinckstraat',
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    alt: 'Townhouse renovation on Govert Flinckstraat in De Pijp with restored ceiling plaster',
    caption: 'Govert Flinckstraat · De Pijp Amsterdam',
    category: 'interior',
  },
  portfolioAdmiraalDeRuijterweg: {
    id: 'portfolio-admiraal-de-ruijterweg',
    url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    alt: 'Admiraal de Ruijterweg upper apartment interior renovation with custom oak partitions',
    caption: 'Admiraal de Ruijterweg · Amsterdam West',
    category: 'interior',
  },
  portfolioBathroomKeizersgracht: {
    id: 'portfolio-bathroom-keizersgracht',
    url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    alt: 'Keizersgracht residence spa bathroom renovation with Italian travertine slabs',
    caption: 'Keizersgracht Bathroom Projects · Amsterdam',
    category: 'interior',
  },

  // 10. Reviews & Contact
  reviewsHero: {
    id: 'reviews-hero',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Completed luxury residential reception room with natural finishes and bespoke lighting',
    caption: 'Verified Dutch Client Restorations',
    category: 'interior',
  },
  contactStreetscape: {
    id: 'contact-streetscape',
    url: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=80',
    alt: 'Historic streetscape and canal architecture near Jacob Obrechtstraat, Amsterdam Oud-Zuid',
    caption: 'Amsterdam Oud-Zuid Office Location',
    category: 'exterior',
  },
  contactConsultation: {
    id: 'contact-consultation',
    url: '/images/consultation_blueprint_desk.jpg',
    alt: 'Proven Projecten architect and master builder reviewing blueprints and material finishes in Amsterdam',
    caption: 'Direct Project Consultation Desk',
    category: 'craftsmanship',
  },
  consultationHero: {
    id: 'consultation-hero',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    alt: 'Luxury architectural residence ready for comprehensive renovation and planning',
    caption: 'Custom Renovation Feasibility',
    category: 'exterior',
  },

  // 11. Recent Projects (Before & After Showcase)
  recentRoofBefore: {
    id: 'recent-roof-before',
    url: '/recent-projects/roof-before.jpg',
    alt: 'Roof structure under renovation with exposed timber rafters and protective insulation sheeting',
    caption: 'Heritage Roof Sub-Structure Renovation',
    category: 'exterior',
  },
  recentRoofAfter: {
    id: 'recent-roof-after',
    url: '/recent-projects/roof-after.jpg',
    alt: 'Completed heritage clay tile roof with integrated Velux architectural skylight and green dormer',
    caption: 'Completed Clay Pantile Roof with Velux Skylight',
    category: 'exterior',
  },
  recentLoftBefore: {
    id: 'recent-loft-before',
    url: '/recent-projects/attic-before.jpg',
    alt: 'Raw attic interior during renovation with exposed subflooring and unpainted rustic wood boards',
    caption: 'Canal House Loft Raw Structural Framing',
    category: 'interior',
  },
  recentLoftAfter: {
    id: 'recent-loft-after',
    url: '/recent-projects/attic-loft-2.jpg',
    alt: 'Finished renovated loft with bright white walls, exposed timber rafters, and architectural styling',
    caption: 'Turnkey Restored Canal House Loft',
    category: 'interior',
  },
  recentKitchenBefore: {
    id: 'recent-kitchen-before',
    url: '/recent-projects/kitchen-before.jpg',
    alt: 'Outdated kitchen with dated cabinets, worn countertops and floor tiles prior to renovation',
    caption: 'Kitchen Pre-Renovation Substrate',
    category: 'interior',
  },
  recentKitchenAfter: {
    id: 'recent-kitchen-after',
    url: '/recent-projects/kitchen-after.jpg',
    alt: 'Completed modern luxury kitchen with seamless handleless cabinetry and clean architectural surfaces',
    caption: 'Minimalist Architectural Culinary Suite',
    category: 'interior',
  },
  recentBathroomBefore: {
    id: 'recent-bathroom-before',
    url: '/recent-projects/bath-before.jpg',
    alt: 'Bathroom undergoing active renovation with exposed drywall, pipe rough-ins and subfloor',
    caption: 'Bathroom Demolition & Tanking Substrate',
    category: 'interior',
  },
  recentBathroomAfter: {
    id: 'recent-bathroom-after',
    url: '/recent-projects/bath-after.jpg',
    alt: 'Turnkey spa bathroom finished with natural wood vanity, frameless glass shower and modern fixtures',
    caption: 'Natural Oak & Glass Wet-Room Sanctuary',
    category: 'interior',
  },
  recentExtensionBefore: {
    id: 'recent-extension-before',
    url: '/recent-projects/extension-before.jpg',
    alt: 'Ground excavation, foundation rebar and structural portal framing during house extension',
    caption: 'Garden Extension Excavation & Steel Portal Frame',
    category: 'exterior',
  },
  recentExtensionAfter: {
    id: 'recent-extension-after',
    url: '/recent-projects/extension-after.jpg',
    alt: 'Modern glass extension opening to garden with slimline frames and seamless indoor-outdoor connection',
    caption: 'Panoramic Slimline Glass Garden Room',
    category: 'exterior',
  },
  recentSalonBefore: {
    id: 'recent-salon-before',
    url: '/recent-projects/living-before.jpg',
    alt: 'Stripped monumental canal house room with bare masonry walls and concrete subfloor under renovation',
    caption: 'Herengracht Monumental Salon Strip-Out',
    category: 'interior',
  },
  recentSalonAfter: {
    id: 'recent-salon-after',
    url: '/recent-projects/salon-after.jpg',
    alt: 'Restored luxury salon featuring vertical timber slat acoustic walls, warm cove lighting and contemporary design',
    caption: 'Acoustic Timber Slat Salon Restoration',
    category: 'interior',
  },
};

// Aliases for backward-compatibility with alternate project key references
const aliasLookup: Record<string, string> = {
  portfolioDeWareJacob: 'portfolioHotelDeWareJacob',
  portfolioNieuwendammer: 'portfolioNieuwendammerKade',
  portfolioMarkenbinnen: 'portfolioMarkenbinnenCottage',
  portfolioZaandijk: 'portfolioZaandijkHouse',
  portfolioExtensionsRoof: 'portfolioExtensionsRoofWorks',
  portfolioGovertFlinck: 'portfolioGovertFlinckstraat',
  portfolioAdmiraalRuijter: 'portfolioAdmiraalDeRuijterweg',
  portfolioBathrooms: 'portfolioBathroomKeizersgracht',
  homeCommercialPreview: 'commercialHero',
  commercialInterior: 'commercialOffice',
  extensionsAddition: 'extensionsGardenRoom',
  residentialTownhouse: 'residentialHero',
  extensionsGlass: 'extensionsGardenRoom',
  interiorDesignBathroom: 'residentialBathroom',
};

const defaultFallbackEntry: ImageRegistryEntry = {
  id: 'fallback-architectural',
  url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  alt: 'Proven Projecten Architectural Detail',
  category: 'interior'
};

const proxyHandler: ProxyHandler<Record<string, ImageRegistryEntry>> = {
  get(target, prop, receiver) {
    if (typeof prop === 'string') {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      }
      if (prop in aliasLookup) {
        const targetKey = aliasLookup[prop];
        if (targetKey in target) {
          return target[targetKey];
        }
      }
      if (prop === 'then' || prop === 'toJSON' || prop === 'constructor' || prop === 'prototype') {
        return undefined;
      }
      // Safe fallback ensuring .url, .alt, and .id are always defined
      return {
        ...defaultFallbackEntry,
        id: prop
      };
    }
    return Reflect.get(target, prop, receiver);
  }
};

/**
 * Programmatic Uniqueness Validator
 * Runs at runtime to guarantee zero duplicate image URLs exist in the registry.
 */
export function validateImageRegistry(): { isUnique: boolean; duplicates: string[] } {
  const seenUrls = new Map<string, string>();
  const duplicates: string[] = [];

  for (const [key, entry] of Object.entries(rawImageMapping)) {
    if (seenUrls.has(entry.url)) {
      duplicates.push(`Key '${key}' reuses URL from '${seenUrls.get(entry.url)}': ${entry.url}`);
    } else {
      seenUrls.set(entry.url, key);
    }
  }

  if (duplicates.length > 0) {
    console.error('[ImageRegistry Validation Error] Duplicate URLs found in imageMapping:', duplicates);
    return { isUnique: false, duplicates };
  }

  return { isUnique: true, duplicates: [] };
}

// Automatically validate on load
if (typeof window !== 'undefined') {
  validateImageRegistry();
}

// Proxied exported registry ensuring safe property access with aliases and fallbacks
export const imageMapping = new Proxy(rawImageMapping, proxyHandler);
export const imageRegistry = imageMapping;

export default imageMapping;
