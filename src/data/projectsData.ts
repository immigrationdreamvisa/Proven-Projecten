
import { ProjectItem } from '../types.ts';
import { imageRegistry } from './imageMapping.ts';

export interface EnrichedProjectItem extends ProjectItem {
  residentialType?: string;
  beforeImage?: string;
  afterImage?: string;
}

export const projectsData: EnrichedProjectItem[] = [
  {
    id: 'p1',
    slug: 'renovation-de-ware-jacob-hotel',
    title: 'De Ware Jacob Architectural Suites',
    location: 'Jacob Obrechtstraat, Amsterdam Oud-Zuid',
    category: 'Complete Renovations',
    residentialType: 'Heritage Hospitality Suites',
    shortDescription: 'Comprehensive architectural refurbishment transforming historical suites, private guest lounges, and bespoke oak and brass finishes.',
    fullDescription: 'A landmark renovation within Amsterdam’s prestigious museum district on Jacob Obrechtstraat. The project encompassed a complete architectural overhaul of boutique guest rooms, acoustic wall partitions, custom walnut millwork, atmospheric architectural lighting, and luxury en-suite bathrooms tailored for discerning visitors.',
    mainImage: imageRegistry.portfolioHotelDeWareJacob.url,
    beforeImage: '/recent-projects/attic-before.jpg',
    afterImage: imageRegistry.portfolioHotelDeWareJacob.url,
    galleryImages: [
      imageRegistry.portfolioHotelDeWareJacob.url,
      imageRegistry.commercialHotel.url,
      imageRegistry.commercialReception.url,
      imageRegistry.commercialRestaurant.url
    ],
    scopeOfWork: [
      'Complete interior strip-out and acoustic barrier installation (Rw + Ctr 54dB)',
      'Custom fluted walnut cabinetry and integrated headboards',
      'Luxury en-suite bathrooms with frameless walk-in showers and brass fittings',
      'Integrated hospitality lighting control systems and smart keycard integration',
      'Refurbishment of the reception lounge and private salon area'
    ],
    completionYear: '2024',
    duration: '18 Weeks',
    keyFeatures: [
      'Acoustic isolation rating Rw + Ctr 54dB',
      'Custom artisanal Dutch joinery throughout',
      'Natural Italian marble vanity surfaces',
      'Hospitality ventilation & smart climate zoning'
    ]
  },
  {
    id: 'p2',
    slug: 'nieuwendammer-kade-offices-apartments',
    title: 'Nieuwendammer Kade Waterfront Lofts',
    location: 'Nieuwendammer Kade, Amsterdam Noord',
    category: 'Living Rooms',
    residentialType: 'Waterfront Residential Loft',
    shortDescription: 'Dual-purpose waterfront industrial transformation combining flexible creative studio suites and light-filled open-plan lofts.',
    fullDescription: 'Located along the historic Nieuwendammer Kade in Amsterdam Noord, this project revitalized a waterfront property into flexible creative studio spaces on the lower levels and contemporary residential apartments above, featuring expansive steel-framed glazing overlooking the water.',
    mainImage: imageRegistry.portfolioNieuwendammerKade.url,
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: imageRegistry.portfolioNieuwendammerKade.url,
    galleryImages: [
      imageRegistry.portfolioNieuwendammerKade.url,
      imageRegistry.commercialOffice.url,
      imageRegistry.commercialHero.url
    ],
    scopeOfWork: [
      'Structural steel portal reinforcement for wide open-span floorplates',
      'Polished concrete floor installation with integrated underfloor heating',
      'Acoustic glass partitions with matte black steel framing',
      'Gourmet kitchen breakout zone and private living salon',
      'Full exterior thermal insulation and facade brick repointing'
    ],
    completionYear: '2023',
    duration: '22 Weeks',
    keyFeatures: [
      'Waterfront steel-framed panoramic windows',
      'Polished architectural concrete screed',
      'Dual-zone residential MEP infrastructure',
      'Energy Label A+ performance rating'
    ]
  },
  {
    id: 'p3',
    slug: 'cottage-renovation-markenbinnen',
    title: 'Heritage Cottage Renovation in Markenbinnen',
    location: 'Markenbinnen, North Holland',
    category: 'Complete Renovations',
    residentialType: 'Rural Detached Cottage',
    shortDescription: 'Delicate restoration and modern expansion of a historic Dutch rural cottage, preserving timber roof beams while introducing natural light.',
    fullDescription: 'A sensitive rural restoration that respected the vernacular Dutch heritage of Markenbinnen while transforming dark, partitioned rooms into an open, light-drenched modern family home with exposed solid oak roof trusses and panoramic garden views.',
    mainImage: imageRegistry.portfolioMarkenbinnenCottage.url,
    beforeImage: '/recent-projects/roof-before.jpg',
    afterImage: imageRegistry.portfolioMarkenbinnenCottage.url,
    galleryImages: [
      imageRegistry.portfolioMarkenbinnenCottage.url,
      imageRegistry.maintenanceWoodwork.url,
      imageRegistry.renovationCarpentry.url
    ],
    scopeOfWork: [
      'Restoration and structural stabilization of original timber roof trusses',
      'Installation of breathable insulated lime plaster on exterior stone walls',
      'Open-plan kitchen diner addition with zinc standing-seam roof',
      'Underfloor heating paired with a quiet air-to-water heat pump',
      'Handcrafted natural oak doors, architraves, and window surrounds'
    ],
    completionYear: '2023',
    duration: '16 Weeks',
    keyFeatures: [
      'Original exposed timber beam architecture',
      'Energy-efficient heat pump heating system',
      'French limestone flooring in living areas',
      'Custom handcrafted timber casement windows'
    ]
  },
  {
    id: 'p4',
    slug: 'house-renovation-zaandijk',
    title: 'Historic House Modernization in Zaandijk',
    location: 'Zaandijk, Zaanstreek, The Netherlands',
    category: 'Exterior Design',
    residentialType: 'Regional Heritage Home',
    shortDescription: 'Complete modernization of a 300-year-old traditional Zaanstreek residence, marrying authentic regional green timber cladding with luxury interiors.',
    fullDescription: 'Honoring the legendary wooden architecture of the Zaan region on a property spanning over 300 years of history. This full home transformation updated the building envelope with high-performance acoustic and thermal insulation while crafting an ultra-modern interior with custom oak cabinetry and minimalist lines.',
    mainImage: imageRegistry.portfolioZaandijkHouse.url,
    beforeImage: '/recent-projects/living-before.jpg',
    afterImage: imageRegistry.portfolioZaandijkHouse.url,
    galleryImages: [
      imageRegistry.portfolioZaandijkHouse.url,
      imageRegistry.residentialKitchen.url,
      imageRegistry.renovationFlooring.url
    ],
    scopeOfWork: [
      'Complete strip-out and structural floor realignment',
      'Restoration of traditional Zaanse green exterior timber cladding',
      'Installation of bespoke minimalist kitchen with quartz island',
      'Full electrical rewiring with recessed ceiling lighting tracks',
      'Renovation of two family bathrooms with microcement finishes'
    ],
    completionYear: '2024',
    duration: '14 Weeks',
    keyFeatures: [
      'Authentic Zaan architectural exterior preservation',
      'Chevron European oak parquet flooring',
      'Custom built-in library and storage joinery',
      'Seamless microcement bathrooms'
    ]
  },
  {
    id: 'p5',
    slug: 'new-extensions-and-roof-works',
    title: 'Modern Glass Extension & Zinc Dormer',
    location: 'Amsterdam, The Netherlands',
    category: 'Extensions',
    residentialType: 'Urban Townhouse Extension',
    shortDescription: 'Rear glass-walled garden expansion combined with a complete zinc mansard roof dormer and private rooftop terrace construction.',
    fullDescription: 'A multi-level expansion of an Amsterdam residence that maximized spatial efficiency in a dense urban environment. On the ground floor, a full-width glass extension opened the living quarters into the garden; on the top floor, a zinc dormer and private rooftop terrace unlocked panoramic city views.',
    mainImage: imageRegistry.portfolioExtensionsRoofWorks.url,
    beforeImage: '/recent-projects/extension-before.jpg',
    afterImage: imageRegistry.portfolioExtensionsRoofWorks.url,
    galleryImages: [
      imageRegistry.portfolioExtensionsRoofWorks.url,
      imageRegistry.extensionsRoof.url,
      imageRegistry.extensionsGardenRoom.url
    ],
    scopeOfWork: [
      'Foundation screw pile drilling in narrow Amsterdam garden courtyard',
      'Installation of structural steel HEB beams to open rear facade',
      'Flush-floor minimal sliding glass doors with electric roller shades',
      'Structural zinc dormer framing with roof insulation overhaul',
      'Finished timber roof terrace deck with integrated perimeter planter boxes'
    ],
    completionYear: '2024',
    duration: '12 Weeks',
    keyFeatures: [
      'Flush indoor-outdoor threshold connection',
      'Standing-seam dark zinc exterior craftsmanship',
      'Integrated structural skylights bringing natural top light',
      'Engineered rooftop decking with concealed drainage'
    ]
  },
  {
    id: 'p6',
    slug: 'renovation-govert-flinckstraat',
    title: 'Townhouse Renovation Govert Flinckstraat',
    location: 'Govert Flinckstraat, De Pijp, Amsterdam',
    category: 'Kitchens',
    residentialType: '19th-Century Dutch Townhouse',
    shortDescription: 'High-spec townhouse renovation in the vibrant De Pijp quarter, restoring classical ornamental plasterwork alongside modern smoked oak kitchen joinery.',
    fullDescription: 'Located on Govert Flinckstraat in Amsterdam’s vibrant De Pijp quarter. Outdated living quarters constrained by aging infrastructure were transformed into a modern, functional, and aesthetically pleasing urban residence, restoring 19th-century ceiling plaster cornices alongside high-efficiency underfloor heating and open-plan kitchen joinery.',
    mainImage: imageRegistry.portfolioGovertFlinckstraat.url,
    beforeImage: '/recent-projects/kitchen-before.jpg',
    afterImage: imageRegistry.portfolioGovertFlinckstraat.url,
    galleryImages: [
      imageRegistry.portfolioGovertFlinckstraat.url,
      imageRegistry.renovationFinished.url,
      imageRegistry.renovationPlastering.url
    ],
    scopeOfWork: [
      'Acoustic floor dampening using high-density subfloor boards',
      'Restoration of heritage ornamental ceiling cornices and roses',
      'Installation of custom smoked oak kitchen with Verde Alpi marble tops',
      'Underfloor heating across all four floors with individual thermostat zones',
      'Complete replacement of rear windows with high-efficiency vacuum glazing'
    ],
    completionYear: '2023',
    duration: '15 Weeks',
    keyFeatures: [
      'Restored 19th-century ceiling plaster moldings',
      'Verde Alpi marble kitchen island',
      'Multi-floor zoned underfloor heating',
      'Artisanal oak staircase restoration'
    ]
  },
  {
    id: 'p7',
    slug: 'admiraal-de-ruijterweg-apartment-renovation',
    title: 'Admiraal de Ruijterweg Parquet & Joinery',
    location: 'Admiraal de Ruijterweg, Amsterdam West',
    category: 'Flooring & Finishing',
    residentialType: 'Upper Floor Canal Apartment',
    shortDescription: 'Streamlined turnkey interior renovation of a light-filled upper apartment with bespoke oak room dividers and Hungarian point French parquet.',
    fullDescription: 'A complete spatial reorganization of an Amsterdam West apartment on Admiraal de Ruijterweg. Walls were reconfigured to optimize natural light and open circulation, while custom slatted oak room dividers created private zones without sacrificing the influx of afternoon sunlight.',
    mainImage: imageRegistry.portfolioAdmiraalDeRuijterweg.url,
    beforeImage: '/recent-projects/living-before.jpg',
    afterImage: imageRegistry.portfolioAdmiraalDeRuijterweg.url,
    galleryImages: [
      imageRegistry.portfolioAdmiraalDeRuijterweg.url,
      imageRegistry.homeAboutPreview.url,
      imageRegistry.interiorDesignCabinetry.url
    ],
    scopeOfWork: [
      'Non-load-bearing wall removal and steel lintel placement',
      'Bespoke slatted oak room dividers with integrated pivot door',
      'Installation of Hungarian point French oak parquet with matte hardwax oil',
      'Bathroom renovation with continuous seamless shower bench and niches',
      'Built-in wardrobe wall with concealed handle profiles and interior illumination'
    ],
    completionYear: '2024',
    duration: '10 Weeks',
    keyFeatures: [
      'Bespoke slatted oak architectural pivot partitions',
      'Hungarian point French oak flooring',
      'Concealed flush door frames',
      'Full LED ambient cove lighting package'
    ]
  },
  {
    id: 'p8',
    slug: 'bathroom-renovation-projects-keizersgracht',
    title: 'Keizersgracht Travertine Master Sanctuary',
    location: 'Keizersgracht Residence, Amsterdam',
    category: 'Bathrooms',
    residentialType: 'Monumental Canal Mansion En-Suite',
    shortDescription: 'Spa-grade bathroom remodeling showcasing book-matched Roman travertine slabs, walk-in rain shower, and brushed champagne brass fixtures.',
    fullDescription: 'An exquisite master en-suite remodeling within a monumental Keizersgracht canal house. The design combines book-matched Italian travertine slabs, under-vanity ambient glow, and recessed ceiling rain showers, creating a timeless private retreat.',
    mainImage: imageRegistry.portfolioBathroomKeizersgracht.url,
    beforeImage: '/recent-projects/bath-before.jpg',
    afterImage: imageRegistry.portfolioBathroomKeizersgracht.url,
    galleryImages: [
      imageRegistry.portfolioBathroomKeizersgracht.url,
      imageRegistry.residentialBathroom.url,
      imageRegistry.interiorDesignLiving.url
    ],
    scopeOfWork: [
      'Full demolition, waterproof tanking membrane & slope leveling',
      'Precision installation of 120x280cm book-matched travertine porcelain slabs',
      'Concealed thermostatic shower mixer with dual ceiling rain heads',
      'Custom wall-hung floating travertine and natural walnut vanity',
      'Anti-fog LED vanity mirror with touchless dimming sensors'
    ],
    completionYear: '2024',
    duration: '4 Weeks',
    keyFeatures: [
      'Book-matched honed travertine slabs',
      'Waterproof radiant underfloor heating',
      'Architectural recessed niches with concealed warm LED',
      'Brushed champagne brass fixtures'
    ]
  }
];
