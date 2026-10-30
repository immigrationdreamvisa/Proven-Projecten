export interface RecentProjectItem {
  id: string;
  title: string;
  category: 'Roof & Dormers' | 'Loft & Interior' | 'Kitchens' | 'Bathrooms' | 'Extensions' | 'Living Salons';
  location: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeAlt: string;
  afterAlt: string;
  shortDescription: string;
  detailedScope: string[];
  keySpecs: { label: string; value: string }[];
  tags: string[];
}

/**
 * 100% Authentic, Situational Before & After Residential Renovation Projects
 * Uses optimized local public assets for instant loading and zero network latency.
 */
export const recentProjectsData: RecentProjectItem[] = [
  {
    id: 'recent-roof-zaandijk',
    title: 'Heritage Roof & Dormer Modernization',
    category: 'Roof & Dormers',
    location: 'Zaandijk, North Holland',
    duration: '3 Weeks',
    beforeImage: '/recent-projects/roof-before.jpg',
    afterImage: '/recent-projects/roof-after.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Roof structure under renovation with exposed timber rafters and protective insulation sheeting',
    afterAlt: 'Completed heritage clay tile roof with integrated Velux architectural skylight and green dormer',
    shortDescription: 'Full structural timber strip-out, high-performance R-6.0 vapor membrane installation, Velux skylight integration, and precision traditional Dutch clay pantile setting.',
    detailedScope: [
      'Sub-batten structural realignment and rotten timber replacement',
      'Installation of dual-layer breathable vapor barrier & rigid thermal insulation (Rc 6.0)',
      'Precision setting of interlocking red clay pantiles with zinc valley gutters',
      'Triple-glazed Velux heritage roof window installation with airtight flashing'
    ],
    keySpecs: [
      { label: 'Roof Covering', value: 'Interlocking Dutch Clay Pantiles' },
      { label: 'Thermal Value', value: 'Rc 6.0 m²K/W High-Density PIR' },
      { label: 'Glazing', value: 'Velux Triple-Glazed Heritage Window' },
      { label: 'Warranty', value: '10-Year Water-Tight Guarantee' }
    ],
    tags: ['Roof Renovation', 'Velux Skylight', 'Thermal Insulation', 'Zinc Flashings']
  },
  {
    id: 'recent-loft-amsterdam',
    title: 'Monumental Canal Loft & Ceiling Beams',
    category: 'Loft & Interior',
    location: 'Keizersgracht, Amsterdam',
    duration: '6 Weeks',
    beforeImage: '/recent-projects/attic-before.jpg',
    afterImage: '/recent-projects/attic-loft-2.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Raw attic interior during renovation with exposed subflooring and unpainted rustic wood boards',
    afterAlt: 'Finished renovated loft with bright white walls, exposed timber rafters, and architectural styling',
    shortDescription: 'Historic upper-floor conversion transforming raw uninsulated timber framing into an open architectural sanctuary with restored structural ceiling beams and acoustic lining.',
    detailedScope: [
      'Structural reinforcement of historical pine ceiling joists and collar ties',
      'Artisanal sanding, priming, and lacquering of timber beams in heritage forest green',
      'Installation of vertical tongue-and-groove panelling with concealed acoustic insulation',
      'Precision engineered European oak plank subfloor leveling and micro-bevel finishing'
    ],
    keySpecs: [
      { label: 'Beam Finish', value: 'Satin Dutch Heritage Forest Green' },
      { label: 'Wall Paneling', value: 'Acoustic Tongue & Groove Q4 White' },
      { label: 'Flooring', value: 'Engineered European Oak 220mm Planks' },
      { label: 'Acoustic Rating', value: 'Rw + Ctr 52dB Impact Dampening' }
    ],
    tags: ['Attic Conversion', 'Canal House', 'Beam Restoration', 'Custom Joinery']
  },
  {
    id: 'recent-kitchen-oudzuid',
    title: 'Contemporary Culinary Suite & Island',
    category: 'Kitchens',
    location: 'Jacob Obrechtstraat, Amsterdam Oud-Zuid',
    duration: '5 Weeks',
    beforeImage: '/recent-projects/kitchen-before.jpg',
    afterImage: '/recent-projects/kitchen-after.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Outdated kitchen with dated cabinets, worn countertops and floor tiles prior to renovation',
    afterAlt: 'Completed modern luxury kitchen with seamless handleless cabinetry and clean architectural surfaces',
    shortDescription: 'Complete culinary overhaul replacing dated cabinetry and worn surfaces with a bespoke minimalist kitchen, integrated cooktop, and streamlined handleless storage.',
    detailedScope: [
      'Removal of outdated cabinetry, fixtures, and worn tile flooring',
      'Three-phase 3x25A electrical rewiring for high-voltage induction culinary appliances',
      'Installation of seamless handleless cabinetry with soft-close hardware',
      'Precision stone countertops with flush-mount induction cooktop integration'
    ],
    keySpecs: [
      { label: 'Style', value: 'Minimalist Architectural Modern' },
      { label: 'Cabinetry', value: 'Matte Anti-Fingerprint Seamless Finish' },
      { label: 'Countertops', value: 'Engineered Quartz with Waterfall Edge' },
      { label: 'Appliances', value: 'Integrated High-Efficiency Induction' }
    ],
    tags: ['Kitchen Overhaul', 'Induction Island', 'Seamless Cabinetry', 'Oud-Zuid']
  },
  {
    id: 'recent-bath-bloemendaal',
    title: 'Honed Roman Travertine Spa Sanctuary',
    category: 'Bathrooms',
    location: 'Bloemendaal, North Holland',
    duration: '4 Weeks',
    beforeImage: '/recent-projects/bath-before.jpg',
    afterImage: '/recent-projects/bath-after.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Demolished bathroom down to concrete subfloor and raw plumbing pipe rough-ins',
    afterAlt: 'Turnkey spa bathroom finished with large-format honed Roman travertine and rainfall shower',
    shortDescription: 'Complete wet-room transformation featuring seamless dual-coat waterproofing tanking, full-height honed travertine slabs, and brushed champagne thermostatic fixtures.',
    detailedScope: [
      'Stripping down to structural substrate and dual-coat elastomeric membrane tanking',
      'Precision gradient screed towards concealed linear stainless drainage channel',
      'Installation of 120x280cm bookmatched Roman travertine wall slabs with epoxy grout',
      'Wall-hung floating European oak vanity with integrated travertine basin and LED niche'
    ],
    keySpecs: [
      { label: 'Stone', value: 'Honed Roman Travertine (120x280cm)' },
      { label: 'Fittings', value: 'Brushed Champagne PVD Thermostatic' },
      { label: 'Drainage', value: 'Concealed Linear Stainless Channel' },
      { label: 'Heating', value: 'Radiant Underfloor Electric Mesh' }
    ],
    tags: ['Travertine Spa', 'Walk-in Shower', 'Linear Drain', 'Bespoke Vanity']
  },
  {
    id: 'recent-extension-amstelveen',
    title: 'Steel-Framed Glass Garden Room Extension',
    category: 'Extensions',
    location: 'Amstelveen, Greater Amsterdam',
    duration: '8 Weeks',
    beforeImage: '/recent-projects/extension-before.jpg',
    afterImage: '/recent-projects/extension-after.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Excavation groundworks and foundation curing with steel portal frame erection',
    afterAlt: 'Modern glass extension opening to garden with black slimline aluminum frames and warm interior',
    shortDescription: 'Ground excavation and structural portal integration to construct a panoramic garden extension, merging indoor living with landscaped outdoor views via ultra-slim glazing.',
    detailedScope: [
      'Excavation, steel reinforcement rebar cage installation, and concrete slab pouring',
      'Erection of thermally broken structural steel portal frame tied to rear facade',
      'Installation of Reynaers slimline multi-slide triple-glazed patio doors (Uw 0.85)',
      'Continuous underfloor heating installation and seamless microcement flooring'
    ],
    keySpecs: [
      { label: 'Glazing System', value: 'Reynaers SlimLine 38 Multi-Slide' },
      { label: 'Structural Frame', value: 'Thermally Broken Steel Portal' },
      { label: 'Glass Specs', value: 'Triple-Glazed Solar Control Low-E' },
      { label: 'Flooring', value: 'Seamless Polished Microcement' }
    ],
    tags: ['Glass Extension', 'Garden Room', 'Steel Portal', 'Triple Glazing']
  },
  {
    id: 'recent-salon-herengracht',
    title: 'Canal House Grand Salon & Chevron Parquet',
    category: 'Living Salons',
    location: 'Herengracht, Amsterdam Centrum',
    duration: '7 Weeks',
    beforeImage: '/recent-projects/living-before.jpg',
    afterImage: '/recent-projects/salon-after.jpg',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeAlt: 'Stripped monumental canal house salon with damaged lath ceiling and exposed conduits',
    afterAlt: 'Restored salon featuring French oak chevron parquet, heritage moldings, and perimeter cove lighting',
    shortDescription: 'Meticulous heritage interior restoration combining historical plaster cornice reconstruction with acoustic subfloor leveling and French chevron parquet.',
    detailedScope: [
      'Precision laser leveling of historical timber joists and acoustic Fermacell underlayment',
      'Artisanal hand-casting and repair of ornamental gypsum ceiling cornices & medallions',
      'Laying of French oak chevron parquet (120x600mm) finished in matte natural hardwax',
      'Concealed perimeter LED lighting channel integration for 2700K ambient illumination'
    ],
    keySpecs: [
      { label: 'Flooring', value: 'French Oak Chevron 120x600mm' },
      { label: 'Plaster Restoration', value: 'Hand-Cast Monumental Cornices' },
      { label: 'Lighting', value: 'Architectural Concealed 2700K Cove' },
      { label: 'Acoustics', value: 'Fermacell 2E22 Honeycomb System' }
    ],
    tags: ['Monumental Salon', 'Chevron Parquet', 'Cornice Repair', 'Architectural Light']
  }
];
