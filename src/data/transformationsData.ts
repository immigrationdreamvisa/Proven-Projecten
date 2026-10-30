export interface TransformationItem {
  id: string;
  category: 'Living Room' | 'Kitchen' | 'Bathroom' | 'Exterior Facade' | 'Complete House';
  title: string;
  location: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  scope: string[];
  specs: { label: string; value: string }[];
}

export const transformationsData: TransformationItem[] = [
  {
    id: 'living-room',
    category: 'Living Room',
    title: 'Monumental Canal Salon Transformation',
    location: 'Keizersgracht, Amsterdam',
    duration: '8 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    beforeLabel: 'Before: Unrenovated Structural State',
    afterLabel: 'After: Turnkey Living Salon',
    description: 'Transforming a dark, compartmentalized 19th-century salon into an expansive, light-filled living space with restored ornamental moldings, bespoke oak joinery, and an integrated natural stone hearth.',
    scope: [
      'Subfloor leveling & acoustic barrier installation (Rw + Ctr 54dB)',
      'Installation of French oak chevron parquet with matte organic hardwax oil',
      'Restoration of period ornamental plaster cornices & ceiling roses',
      'Integrated architectural LED perimeter cove lighting'
    ],
    specs: [
      { label: 'Flooring', value: 'French Chevron Oak 120x600mm' },
      { label: 'Acoustics', value: 'High-density acoustic underlayment' },
      { label: 'Plasterwork', value: 'Q4 artisanal mineral finish' },
      { label: 'Atmosphere', value: '2700K warm architectural lighting' }
    ]
  },
  {
    id: 'kitchen',
    category: 'Kitchen',
    title: 'Minimalist Natural Oak Culinary Hub',
    location: 'Oud-Zuid, Amsterdam',
    duration: '6 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    beforeLabel: 'Before: Stripped Structural Framing',
    afterLabel: 'After: Custom Architectural Kitchen',
    description: 'Replacing partitioned masonry and dated infrastructure with a monolithic marble island, seamless smoked oak cabinetry, and state-of-the-art concealed induction downdraft ventilation.',
    scope: [
      'Load-bearing partition removal & structural steel lintel installation',
      'Waterfall island fabrication in bookmatched Calacatta Viola marble',
      'Bespoke handleless smoked European oak cabinetry with Blum soft-close servos',
      'Dedicated three-phase electrical circuitry for chef-grade induction systems'
    ],
    specs: [
      { label: 'Cabinetry', value: 'Smoked European Oak with continuous grain' },
      { label: 'Worktops', value: 'Honed Calacatta Viola Marble (20mm)' },
      { label: 'Ventilation', value: 'Integrated downdraft plasma extraction' },
      { label: 'Hardware', value: 'Patinated gunmetal brass fittings' }
    ]
  },
  {
    id: 'bathroom',
    category: 'Bathroom',
    title: 'Travertine Spa Sanctuary & Walk-in Shower',
    location: 'Bloemendaal, North Holland',
    duration: '4 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    beforeLabel: 'Before: Complete Substrate Strip-Out',
    afterLabel: 'After: Honed Travertine Spa En-Suite',
    description: 'Complete wet-room restructuring utilizing seamless waterproofing membranes, large-format honed travertine slabs, dual concealed thermostatic rain shower heads, and warm recessed niche illumination.',
    scope: [
      'Dual-coat elastomeric waterproofing tanking with reinforced corners',
      'Precision gradient screed sloping toward linear stainless drainage channels',
      'Wall-hung floating vanity crafted from solid European oak and travertine',
      'Full-height frameless fluted glass screen with brushed champagne hardware'
    ],
    specs: [
      { label: 'Wall Finish', value: '120x280cm Honed Roman Travertine' },
      { label: 'Heating', value: 'Radiant electric underfloor mesh + towel rail' },
      { label: 'Brassware', value: 'Brushed champagne PVD thermostatic fixtures' },
      { label: 'Sanitaryware', value: 'Rimless wall-hung ceramic with concealed cistern' }
    ]
  },
  {
    id: 'exterior-facade',
    category: 'Exterior Facade',
    title: 'Historic Masonry Restoration & Modern Glazing',
    location: 'Prinsengracht, Amsterdam',
    duration: '10 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    beforeLabel: 'Before: Weathered Brick & Repointing',
    afterLabel: 'After: Restored Facade & Garden Extension',
    description: 'Meticulous heritage facade restoration combining traditional knipvoeg lime mortar repointing with a ground-floor contemporary steel-and-glass garden extension.',
    scope: [
      'Careful low-pressure steam cleaning of historic Dutch brickwork',
      'Historic knipvoeg pointing using natural hydraulic lime mortar',
      'Ground-floor rear opening with HEB 240 structural steel portal frames',
      'Flush-threshold minimal-frame thermal sliding glass panels'
    ],
    specs: [
      { label: 'Pointing', value: 'Traditional Dutch knipvoeg (hydraulic lime)' },
      { label: 'Glazing', value: 'Triple-pane solar-control vacuum glass (Ug 0.6)' },
      { label: 'Roof Trim', value: 'Standing seam architectural pre-weathered zinc' },
      { label: 'Thermal', value: 'Breathable interior aerogel insulation' }
    ]
  },
  {
    id: 'complete-house',
    category: 'Complete House',
    title: 'Turnkey Canal House Full Renovation',
    location: 'Zaandijk, North Holland',
    duration: '18 Weeks',
    beforeImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    beforeLabel: 'Before: Structural Timber & MEP Strip-down',
    afterLabel: 'After: Master Handover Standard',
    description: 'A 320m² total turnkey residential metamorphosis. Every structural element, floorplate, mechanical installation, and interior surface was re-engineered and finished to European luxury standards.',
    scope: [
      'Total gut renovation down to primary masonry and structural floor joists',
      'Multi-zone hybrid heat pump and zoned hydronic underfloor heating throughout',
      'Custom architectural millwork across four levels including walk-in dressing suites',
      'Acoustic decoupling between living zones and private sleeping quarters'
    ],
    specs: [
      { label: 'Gross Area', value: '320 m² across 4 levels' },
      { label: 'Energy Rating', value: 'Upgraded from Energy Label G to Label A+' },
      { label: 'HVAC', value: 'Acoustic balanced ventilation with heat recovery' },
      { label: 'Handover', value: 'Turnkey architectural completion with 10-year warranty' }
    ]
  }
];
