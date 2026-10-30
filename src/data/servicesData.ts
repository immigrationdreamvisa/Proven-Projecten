import { ServiceItem } from '../types.ts';
import { imageRegistry } from './imageMapping.ts';

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    slug: 'residential-renovation',
    title: 'Residential Renovation',
    shortDescription: 'Comprehensive structural and interior renovation of Dutch canal houses, modern townhomes, and historic apartments.',
    fullDescription: 'Our complete residential renovation service redefines your living space with master craftsmanship. From foundation reinforcement and structural steel beam installation to acoustic floor dampening and artisanal joinery, we oversee every detail with architectural precision.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Comprehensive structural assessment & permit coordination',
      'Removal and replacement of non-load-bearing and structural walls',
      'Full electrical rewiring and modern smart lighting integration',
      'Plumbing overhaul with underfloor heating installation',
      'High-performance thermal and acoustic insulation'
    ],
    keyMaterials: ['Natural European Oak', 'Steel Beam Frame Systems', 'Lime Plaster', 'Acoustic Subflooring'],
    typicalDuration: '8 – 16 Weeks',
    idealFor: 'Full townhouse renovations, heritage apartment modernization, and turnkey family homes.'
  },
  {
    id: '2',
    slug: 'commercial-renovation',
    title: 'Commercial Renovation',
    shortDescription: 'Sophisticated hospitality spaces, boutique hotels, representative corporate offices, and contemporary retail fit-outs.',
    fullDescription: 'We deliver commercial renovation projects that align brand prestige with functional durability. Whether transforming a historic hotel lobby or engineering high-performance collaborative workspaces, we maintain rigorous deadline discipline to minimize business interruption.',
    category: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Commercial code compliance, egress planning & safety certificates',
      'Acoustic partitioning and zoned ventilation systems',
      'Commercial-grade architectural finishes and custom reception counters',
      'Specialized MEP (Mechanical, Electrical, Plumbing) integration',
      'Night-shift and phased construction management for active sites'
    ],
    keyMaterials: ['Fluted Architectural Timber', 'Terrazzo & Honed Stone', 'Commercial Acoustic Panels', 'Architectural Brass'],
    typicalDuration: '6 – 20 Weeks',
    idealFor: 'Boutique hotels, executive corporate headquarters, creative studios, and upscale restaurants.'
  },
  {
    id: '3',
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    shortDescription: 'Bespoke European culinary spaces combining minimalist cabinetry, natural stone worktops, and premium integrated appliances.',
    fullDescription: 'The kitchen is the architectural centerpiece of modern living. We design and install tailored culinary environments featuring seamless integrated joinery, waterfall marble islands, concealed pantries, and precision ventilation crafted for effortless hospitality.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Custom millwork design, manufacturing & precision fitting',
      'Quartz, marble and sintered stone countertop fabrication',
      'Dedicated induction lines, ventilation ducts & utility routing',
      'Integrated architectural LED task and ambient lighting',
      'Plumbing for boiling-water taps and secondary prep sinks'
    ],
    keyMaterials: ['Fumed Natural Oak', 'Calacatta & Pietra Grey Marble', 'Matte Lacquered Panels', 'Gunmetal Hardware'],
    typicalDuration: '3 – 6 Weeks',
    idealFor: 'Open-plan living spaces, gourmet residential kitchens, and luxury apartment upgrades.'
  },
  {
    id: '4',
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    shortDescription: 'Spa-inspired sanctuaries with seamless walk-in rain showers, freestanding baths, and microcement or large-format stone.',
    fullDescription: 'Transforming functional washrooms into private sanctuaries. Our bathroom remodeling combines waterproof tanking membranes, concealed thermostatic valves, recessed atmospheric niche lighting, and tactile natural surfaces built to endure.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Complete strip-out and structural waterproofing membrane tanking',
      'Underfloor electric heating mats and heated towel rail circuits',
      'Concealed thermostatic shower fixtures and wall-hung toilet cisterns',
      'Custom floating solid wood and natural stone vanities',
      'Large-format porcelain slabs and seamless microcement finishes'
    ],
    keyMaterials: ['Large-Format Travertine', 'Waterproof Béton Ciré Microcement', 'Brushed Bronze Tapware', 'Fluted Glass Screens'],
    typicalDuration: '2 – 4 Weeks',
    idealFor: 'Master en-suites, guest powder rooms, and boutique hotel bathrooms.'
  },
  {
    id: '5',
    slug: 'home-extensions-additions',
    title: 'Home Extensions & Additions',
    shortDescription: 'Seamless ground-floor rear extensions, garden rooms, dormer installations, and light-filled structural expansions.',
    fullDescription: 'Expand your square footage with an architect-designed extension that flows naturally from your existing structure. We handle foundation screw piles, slim-profile structural steel portal frames, and minimal-frame glass sliding doors that bridge interior and garden.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Soil testing, foundation engineering & screw pile driving',
      'Structural steel portal frame calculations & crane installation',
      'Flush-threshold minimal sliding glass door systems',
      'Green sedum flat roofs and zinc architectural standing-seam cladding',
      'Interior level alignment and continuous underfloor heating'
    ],
    keyMaterials: ['Anthracite Powder-Coated Aluminium', 'Structural HEB Steel Beams', 'Triple-Glazed Solar Control Glass', 'Standing Seam Zinc'],
    typicalDuration: '6 – 12 Weeks',
    idealFor: 'Ground-floor living room extensions, garden rooms, and expanded kitchen-diners.'
  },
  {
    id: '6',
    slug: 'property-maintenance',
    title: 'Property Maintenance',
    shortDescription: 'Scheduled preventative maintenance, technical inspections, and rapid remedial upkeep for residential and commercial portfolios.',
    fullDescription: 'Preserve property value and architectural integrity with our disciplined maintenance programs. We provide scheduled roof inspections, masonry moisture checks, exterior timber protection, and proactive technical servicing tailored for high-value Dutch real estate.',
    category: 'both',
    imageUrl: imageRegistry.maintenanceHero.url,
    scopeOfWork: [
      'Annual building envelope integrity & roof flashing inspections',
      'Gutter cleaning, drainage clearing & moisture barrier audits',
      'Door and window hardware realignment & weatherstrip renewal',
      'Exterior woodwork inspection & micro-porous paint maintenance',
      'Detailed condition reports with photographic documentation'
    ],
    keyMaterials: ['High-Solid Microporous Coatings', 'Lead-Alternative Flashing', 'UV-Resistant Silicone', 'Treated Hardwoods'],
    typicalDuration: 'Ongoing / Scheduled',
    idealFor: 'Real estate investors, homeowner associations (VvE), and commercial property managers.'
  },
  {
    id: '7',
    slug: 'carpentry-woodwork',
    title: 'Carpentry & Woodwork',
    shortDescription: 'Artisanal architectural joinery, bespoke wall paneling, custom walk-in wardrobes, and handcrafted storage solutions.',
    fullDescription: 'Our master carpenters construct made-to-measure woodwork tailored precisely to your property’s dimensions. From floor-to-ceiling library shelving with integrated ladders to seamless acoustic slatted acoustic wall features, our woodwork adds warmth, function, and enduring beauty.',
    category: 'both',
    imageUrl: imageRegistry.homeCraftsmanship.url,
    scopeOfWork: [
      'Digital 3D laser templating and shop drawing preparation',
      'Custom closet, dressing room and bespoke library fabrication',
      'Acoustic slatted timber wall panels with concealed door systems',
      'Restoration of period decorative timber moldings and architraves',
      'Solid wood dining and conference table fabrication'
    ],
    keyMaterials: ['Solid White Oak', 'American Black Walnut', 'Birch Multiplex', 'Zero-VOC Natural Hardwax Oils'],
    typicalDuration: '2 – 5 Weeks',
    idealFor: 'Bespoke closets, home offices, heritage paneling, and architectural retail fixtures.'
  },
  {
    id: '8',
    slug: 'painting-finishing',
    title: 'Painting & Finishing',
    shortDescription: 'High-end interior and exterior painting, breathable mineral coatings, decorative limewash, and immaculate plaster skimming.',
    fullDescription: 'Flawless surfaces define the character of refined spaces. Our finishing specialists utilize airless spray techniques for mirror-smooth doors and woodwork, complemented by breathable mineral paints, chalky limewashes, and micro-smooth skim plastering.',
    category: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Level 5 Q4 plaster skim coating across all ceilings and walls',
      'Application of natural breathable mineral and lime paints',
      'Airless spray lacquering of trim, doors, and interior stairs',
      'Exterior weather-resistant masonry coatings and UV treatments',
      'Artisanal tadelakt and Venetian plaster application'
    ],
    keyMaterials: ['Breathable Mineral Silicate Paint', 'Natural Lime Wash', 'Polyurethane Lacquers', 'Fine Marble Dust Plasters'],
    typicalDuration: '1 – 3 Weeks',
    idealFor: 'Complete interior refreshes, period home restoration, and gallery-grade wall surfaces.'
  },
  {
    id: '9',
    slug: 'flooring-tiling',
    title: 'Flooring & Tiling',
    shortDescription: 'Precision installation of herringbone and chevron parquet, wide-plank oak, terrazzo tiles, and large-format porcelain.',
    fullDescription: 'Flooring provides the tactile foundation of any interior. We specialize in traditional French chevron and Hungarian point oak parquet with brass transition inlays, as well as laser-leveled large-format porcelain tile installations with razor-thin grout lines.',
    category: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Subfloor leveling, moisture barrier application & acoustic decoupling',
      'Underfloor heating compatibility engineering and heat transfer checks',
      'Herringbone and chevron parquet glued and nailed installation',
      'Large-format (up to 120x240cm) porcelain slab wall and floor tiling',
      'Custom brass, bronze, and blackened steel transition profiles'
    ],
    keyMaterials: ['FSC-Certified French Oak', 'Italian Porcelain Slabs', 'Cast Terrazzo', 'Acoustic Decoupling Membranes'],
    typicalDuration: '1 – 3 Weeks',
    idealFor: 'Luxury residences, open-plan apartments, and high-traffic commercial venues.'
  },
  {
    id: '10',
    slug: 'exterior-renovation',
    title: 'Exterior Renovation',
    shortDescription: 'Restoration of historic Dutch facades, masonry repointing, zinc roofing, thermally broken windows, and modern exterior cladding.',
    fullDescription: 'Preserve the architectural heritage and improve energy efficiency of your building facade. We specialize in historical lime mortar joint restoration (knipvoeg & snijvoeg), exterior zinc craftsmanship, and modern thermally insulated facade upgrades.',
    category: 'both',
    imageUrl: imageRegistry.maintenanceExterior.url,
    scopeOfWork: [
      'Careful masonry cleaning and traditional knipvoeg joint restoration',
      'Replacement of traditional sash windows with vacuum double glazing',
      'Zinc and slate dormer and roof flashing fabrication',
      'Structural balcony reinforcement and cast iron balustrade restoration',
      'Exterior thermal insulation rendering systems (ETICS)'
    ],
    keyMaterials: ['Historic Dutch Brick', 'Hydraulic Lime Mortar', 'Natural Rheinzink', 'Vacuum Insulated Slimline Glass'],
    typicalDuration: '4 – 10 Weeks',
    idealFor: 'Monumental Amsterdam canal houses, 19th-century townhomes, and facade upgrades.'
  },
  {
    id: '11',
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Spatial planning, material curation, lighting architecture, and bespoke furniture concepts that harmonize form and function.',
    fullDescription: 'Before construction begins, our design consultants translate your lifestyle and spatial requirements into cohesive architectural layouts. We develop 3D spatial visualizations, tactile material boards, and detailed lighting plans that guide construction seamlessly.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Detailed spatial flow and furniture layout 2D/3D modeling',
      'Curated physical material, fabric, and stone moodboards',
      'Architectural lighting plan with layered ambient and task circuits',
      'Custom furniture, upholstery, and window treatment curation',
      'Full technical drawings package ready for fabrication'
    ],
    keyMaterials: ['Tactile Linens & Bouclés', 'Honed Travertine', 'Smoked European Oak', 'Hand-Spun Brass Fixtures'],
    typicalDuration: '3 – 6 Weeks',
    idealFor: 'Homeowners seeking a cohesive vision from concept through final execution.'
  },
  {
    id: '12',
    slug: 'complete-property-transformation',
    title: 'Complete Property Transformation',
    shortDescription: 'End-to-end turnkey transformation managing architectural redesign, structural works, building systems, and interior styling.',
    fullDescription: 'Our flagship turnkey service for discerning clients who demand seamless delivery. We manage the entire lifecycle: planning permits, structural interventions, high-efficiency MEP engineering, bespoke joinery, and final decorative styling—with a single accountable project director.',
    category: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    scopeOfWork: [
      'Dedicated senior project director and digital progress dashboard',
      'Municipal permit acquisition and historic monument clearances',
      'Full architectural and structural engineering coordination',
      'Complete building envelope and interior reconstruction',
      'Turnkey handover with comprehensive quality sign-off and guarantees'
    ],
    keyMaterials: ['Curated Architectural Palette', 'Engineered Structural Steels', 'Geothermal & Heat Pump Systems', 'Hand-Crafted Joinery'],
    typicalDuration: '12 – 24 Weeks',
    idealFor: 'Comprehensive estate renovations, investment property transformations, and turnkey luxury residences.'
  }
];
