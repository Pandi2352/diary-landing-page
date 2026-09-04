export interface SorsonsProductSeries {
  id: string
  name: string
  category: 'executive' | 'planners' | 'compact' | 'pocket' | 'platinum'
  categoryLabel: string
  sizeImperial: string
  sizeMetric: string
  layout: string
  pageFrequency: '1-Day/Page' | '2-Days/Page' | 'Planner' | 'Undated'
  weekendStyle: 'Sunday Separate' | 'Sat & Sun Clubbed' | 'Full Week Spreads'
  binding: string
  coverMaterial: string
  features: string[]
  authenticDescription: string
  image: string
  tag: string
  isPopular?: boolean
  isNew2025?: boolean
  dieCutTabs?: boolean
}

export interface ProductCategoryGroup {
  id: 'all' | 'executive' | 'planners' | 'compact' | 'pocket' | 'platinum'
  label: string
  shortLabel: string
  description: string
  iconName: string
  count: number
}

export const PRODUCT_CATEGORIES: ProductCategoryGroup[] = [
  {
    id: 'all',
    label: 'All 2025 Series',
    shortLabel: 'All',
    description: 'Explore the complete 19-series collection manufactured in Sivakasi.',
    iconName: 'BookOpen',
    count: 19,
  },
  {
    id: 'executive',
    label: 'Executive & Mega Series',
    shortLabel: 'Executive',
    description: 'Spacious desk formats with comprehensive corporate logs and calendars.',
    iconName: 'Award',
    count: 3,
  },
  {
    id: 'planners',
    label: 'Ojas & Daily Planners',
    shortLabel: 'Planners',
    description: 'Daily quotes, proverbs, and 12-month full-colour planning spreads.',
    iconName: 'Calendar',
    count: 4,
  },
  {
    id: 'compact',
    label: 'Compact & Desk Companions',
    shortLabel: 'Compact',
    description: 'Medium 5 ¼" × 8 ¼" executive sizes engineered for desk and briefcase.',
    iconName: 'Briefcase',
    count: 4,
  },
  {
    id: 'pocket',
    label: 'Pocket & Mobile Series',
    shortLabel: 'Pocket',
    description: 'Slimline pocketbooks and companion formats for executives on the move.',
    iconName: 'Compass',
    count: 2,
  },
  {
    id: 'platinum',
    label: 'Platinum Leather Collection',
    shortLabel: 'Platinum Leather',
    description: 'Imported thermal PU leatherette, month-wise die-cut tabs & gold foil.',
    iconName: 'Crown',
    count: 6,
  },
]

export const SORSONS_PRODUCTS: SorsonsProductSeries[] = [
  // 1. MEGA SERIES
  {
    id: 'mega-series',
    name: 'Mega Series',
    category: 'executive',
    categoryLabel: 'Executive & Mega Series',
    sizeImperial: '8 ¼" × 10 ½"',
    sizeMetric: '210 × 267 mm',
    layout: 'One day in a page (Sat & Sun Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Section Sewn Hard Bound Lay-Flat',
    coverMaterial: 'Dual-Tone Thermal PU / Laminated Hardboard',
    features: [
      'Expanded page capacity for extensive daily notes',
      'Year planning spreads & international dial codes',
      'Satin bookmark ribbon with gold crest stamping',
      'Heidelberg 4-colour printed inner pages',
    ],
    authenticDescription: 'One day in a page | Saturday & Sunday Clubbed | 8 ¼" × 10 ½" (approx.)',
    image: '/images/majestic_diary.jpg',
    tag: 'Large Executive',
    isPopular: true,
  },

  // 2. OJAS SERIES
  {
    id: 'ojas-series',
    name: 'Ojas Series',
    category: 'planners',
    categoryLabel: 'Ojas & Daily Planners',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day to a page (Sunday Separate)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Precision Section Sewn Hard Bound',
    coverMaterial: 'Colour Design Laminated Cover & Gloss Finish',
    features: [
      'Inspiring daily proverbs & motivational quotes',
      'Dedicated Sunday page for weekend planning',
      'Thermal high-gloss protective lamination',
      'Natural shade 70 GSM smooth writing bond',
    ],
    authenticDescription: 'One day to a page (Sunday Separate) | With proverbs & colour design | laminated cover and hard bound binding | 7" × 9 ½" (approx.)',
    image: '/images/pastel_marble_diary.jpg',
    tag: 'Daily Proverbs',
    isPopular: true,
  },

  // 3. OJAS RAINBOW SERIES
  {
    id: 'ojas-rainbow-series',
    name: 'Ojas Rainbow Series',
    category: 'planners',
    categoryLabel: 'Ojas & Daily Planners',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One Day to a page with 12 Colour Planners',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Hard Bound Machine Bound with Reinforced Spine',
    coverMaterial: 'Vibrant Multi-Hue Laminated Hardcover',
    features: [
      '12 Colourful Monthly Planner inserts',
      'Sunday Separate layout with inspirational proverbs',
      'Multi-colour bookmark ribbons',
      'Heidelberg colour-calibrated page dividers',
    ],
    authenticDescription: 'One Day to a page (Sunday separate) | with proverbs & 12 Colourful Planners, Colour Design laminated cover hard bound binding. | 7" × 9 ½" (approx.)',
    image: '/images/outline_diary.jpg',
    tag: '12 Color Planners',
    isPopular: true,
    isNew2025: true,
  },

  // 4. EXECUTIVE SERIES
  {
    id: 'executive-series',
    name: 'Executive Series',
    category: 'executive',
    categoryLabel: 'Executive & Mega Series',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'Two days to a page (Sat & Sun Clubbed)',
    pageFrequency: '2-Days/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Deluxe Hard Bound Section Sewn',
    coverMaterial: 'Imported Premium Leatherette / Textured Board',
    features: [
      'Slim ergonomic profile with two days per spread',
      'Ideal balance between notes and portability',
      'Gold foil hot-stamped crest and typography',
      'Smooth micro-perforated tear-off page corners',
    ],
    authenticDescription: 'Two days to a page | Saturday & Sunday Clubbed | 7" × 9 ½" (approx.)',
    image: '/images/executive_diary.jpg',
    tag: 'Desk Essential',
    isPopular: true,
  },

  // 5. GLOBAL SERIES
  {
    id: 'global-series',
    name: 'Global Series',
    category: 'executive',
    categoryLabel: 'Executive & Mega Series',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day in a page (Sat & Sun Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Heavy Duty Hard Bound with Curved Spine',
    coverMaterial: 'Subtle Grained PU with Blind Debossing',
    features: [
      'Comprehensive world maps & time-zone reference charts',
      'International dial codes & metric conversion guides',
      'Round cornered pages with gold edge gilding option',
      'Elastic closure band with ribbon marker',
    ],
    authenticDescription: 'One day in a page | Saturday & Sunday Clubbed | 7" × 9 ½" (approx.)',
    image: '/images/emerald_botanical_diary.jpg',
    tag: 'International Desk',
  },

  // 6. ANGEL SERIES
  {
    id: 'angel-series',
    name: 'Angel Series',
    category: 'compact',
    categoryLabel: 'Compact & Desk Companions',
    sizeImperial: '5 ¼" × 8 ¼"',
    sizeMetric: '133 × 210 mm',
    layout: 'One day in a page (Sunday Separate)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Hard Bound Machine Binding',
    coverMaterial: 'Colour Design Laminated Art Cover',
    features: [
      'Compact A5-style footprint easy to slide into laptop bags',
      'Dedicated Sunday pages for relaxed weekend writing',
      'Vibrant photographic and abstract laminated covers',
      'Bright white 70 GSM high-opacity paper',
    ],
    authenticDescription: 'One day in a page (Sunday Seperate) | 5 ¼" × 8 ¼" (approx.)',
    image: '/images/pastel_marble_diary.jpg',
    tag: 'A5 Compact',
  },

  // 7. ACHIEVER SERIES
  {
    id: 'achiever-series',
    name: 'Achiever Series',
    category: 'compact',
    categoryLabel: 'Compact & Desk Companions',
    sizeImperial: '5 ¼" × 8 ¼"',
    sizeMetric: '133 × 210 mm',
    layout: 'One day in a page',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Reinforced Thread Bound Lay-Flat',
    coverMaterial: 'Textured Linen-Touch Board with Foil Title',
    features: [
      'Built for managers, goal tracking and milestones',
      'Priorities checklist and daily meeting lines',
      'Durable rounded spine engineered for heavy daily use',
      'Double ribbon markers for fast reference',
    ],
    authenticDescription: 'One day in a page | 5 ¼" × 8 ¼" (approx.)',
    image: '/images/burgundy_diary.jpg',
    tag: 'Goal Planner',
    isPopular: true,
  },

  // 8. AGASTHYA SERIES
  {
    id: 'agasthya-series',
    name: 'Agasthya Series',
    category: 'compact',
    categoryLabel: 'Compact & Desk Companions',
    sizeImperial: '5 ¼" × 8 ¼"',
    sizeMetric: '133 × 210 mm',
    layout: 'One day in a page (Sat & Sunday Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Section Sewn Traditional Hard Bound',
    coverMaterial: 'Classic Marbled Hard Cover with Gold Borders',
    features: [
      'Heritage Sivakasi typographic craftsmanship',
      'Saturday & Sunday clubbed for streamlined corporate logging',
      'Golden headband and tailband for spine endurance',
      'Archival acid-free paper stock',
    ],
    authenticDescription: 'One day in a page | Saturday & Sunday Clubed | 5 ¼" × 8 ¼" (approx.)',
    image: '/images/charcoal_diary.jpg',
    tag: 'Classic Heritage',
  },

  // 9. PRINCE SERIES
  {
    id: 'prince-series',
    name: 'Prince Series',
    category: 'compact',
    categoryLabel: 'Compact & Desk Companions',
    sizeImperial: '5 ¼" × 8 ¼"',
    sizeMetric: '133 × 210 mm',
    layout: 'Two days to a page (Sat & Sunday Clubbed)',
    pageFrequency: '2-Days/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Hard Bound Lightweight Binding',
    coverMaterial: 'Soft Touch Matte Lamination with Spot UV',
    features: [
      'Ultra-lightweight two days spread',
      'Perfect for students, executives, and fieldwork notes',
      'Compact spine thickness with maximum durability',
      'Annual calendar and metric conversions included',
    ],
    authenticDescription: 'Two days to a page | Saturday & Sunday Clubed | 5 ¼" × 8 ¼" (approx.)',
    image: '/images/open_outline_diary.jpg',
    tag: 'Lightweight',
  },

  // 10. PRESTIGE SERIES
  {
    id: 'prestige-series',
    name: 'Prestige Series',
    category: 'pocket',
    categoryLabel: 'Pocket & Mobile Series',
    sizeImperial: '4 ¾" × 6 ⅞"',
    sizeMetric: '120 × 175 mm',
    layout: 'One day in a page (Sat & Sunday Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Pocket Precision Hard Bound',
    coverMaterial: 'Padded PVC Leatherette with Gold Corner Clips',
    features: [
      'Pocket-friendly dimensions for suit coats and handbag',
      'Gold foil gilded page edges protect against dust',
      'Integrated ribbon bookmark with metallic charm',
      'Emergency numbers & national holidays list',
    ],
    authenticDescription: 'One days in a page | Saturday & Sunday Clubed | 4 ¾" × 6 ⅞" (approx.)',
    image: '/images/spiral_diary.jpg',
    tag: 'Pocket Deluxe',
  },

  // 11. COMPANION SERIES
  {
    id: 'companion-series',
    name: 'Companion Series',
    category: 'pocket',
    categoryLabel: 'Pocket & Mobile Series',
    sizeImperial: '4 ¾" × 6 ¾"',
    sizeMetric: '120 × 170 mm',
    layout: 'Two days in a page (Sat & Sunday Clubbed)',
    pageFrequency: '2-Days/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Flexible Sewn Hard Bound',
    coverMaterial: 'Leather-Grain Textured Paper over Board',
    features: [
      'Handy two-days-per-page pocket calendar',
      'Fits neatly in glove compartments and travel pouches',
      'Durable reinforced hinge prevents spine split',
      'Ruled memo and expense tracking pages',
    ],
    authenticDescription: 'Two days in a page | Saturday & Sunday Clubed | 4 ¾" × 6 ¾" (approx.)',
    image: '/images/dreamy_hero_diaries.jpg',
    tag: 'Pocket Companion',
  },

  // 12. MONTHLY PLANNER
  {
    id: 'monthly-planner',
    name: 'Monthly Planner',
    category: 'planners',
    categoryLabel: 'Ojas & Daily Planners',
    sizeImperial: '5 ¼" × 8 ¼"',
    sizeMetric: '133 × 210 mm',
    layout: 'One day in a page (Sunday Separate) + Monthly Overviews',
    pageFrequency: 'Planner',
    weekendStyle: 'Sunday Separate',
    binding: 'Wire-O Twin Spiral or Lay-Flat Hard Bound',
    coverMaterial: 'Frosted Polypropylene or Custom Hardboard',
    features: [
      'Full monthly calendar blocks before each month begins',
      'Sunday Separate layout for in-depth schedule planning',
      'Expense sheets, project milestones, and habit tracker grids',
      '180° Lay-flat opening for easy desk writing',
    ],
    authenticDescription: 'One day in a page | Sunday Seperate | 5 ¼" × 8 ¼" (approx.)',
    image: '/images/spiral_diary.jpg',
    tag: 'Monthly Spreads',
    isPopular: true,
  },

  // 13. NELLAI SERIES
  {
    id: 'nellai-series',
    name: 'Nellai Series',
    category: 'planners',
    categoryLabel: 'Ojas & Daily Planners',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day in a page (Sunday Separate)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Deluxe Hard Bound Book Binding',
    coverMaterial: 'Traditional Embossed Art Cover with Lamination',
    features: [
      'Regional & bilingual cultural festival calendar',
      'Auspicious days, muhurtham timings & astrological charts',
      'Sunday Separate with generous diary ruling',
      'Authentic South Indian printing press heritage edition',
    ],
    authenticDescription: 'One day in a page | Sunday Seperate | 7" × 9 ½" (approx.)',
    image: '/images/majestic_diary.jpg',
    tag: 'Heritage Edition',
  },

  // 14. PLATINUM LEATHER (MEGA 501)
  {
    id: 'platinum-mega-501',
    name: 'Platinum Series (Mega) 501',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '8 ¼" × 10 ½"',
    sizeMetric: '210 × 267 mm',
    layout: 'One day in a page (Sat & Sunday Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Luxury Hard Bound with Padded Foam Spine',
    coverMaterial: 'Imported Thermal PU Leather with Custom Deboss',
    features: [
      'Massive 8 ¼" × 10 ½" executive size in genuine leather finish',
      'Deep heat burnish stamping for corporate logos',
      'Gilded gold foil edge trim along paper borders',
      'Supplied in custom gift presentation box',
    ],
    authenticDescription: 'Platinum Series (Mega) 501 | 8 ¼" X 10 ½" (approx.) | One day in a page Sat & Sunday Clubbed | Leather Finish',
    image: '/images/executive_diary.jpg',
    tag: 'Mega 501',
    isPopular: true,
  },

  // 15. PLATINUM LEATHER (OJAS RAINBOW 517-521)
  {
    id: 'platinum-ojas-rainbow',
    name: 'Platinum Leather (Ojas Rainbow 517–521)',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day in a page with Month-Wise Die-Cut Tabs',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Month-Wise Precision Die-Cut Hard Bound',
    coverMaterial: 'Padded Italian Vegan Leather with Blind Deboss',
    features: [
      'Month-wise index die-cut tabs for instant 12-month navigation',
      '12 Colourful Monthly Planner divider pages',
      'Sunday separate with daily inspirational proverbs',
      'Dual pen loop and magnetic closure buckle option',
    ],
    authenticDescription: 'Platinum Leather (Ojas Rainbow) 517,518,519,520,521 | 7" X 9 ½" (approx.) | One day in a page, Sunday separate with proverbs & 12 Colourful Planners, with Leather Finish and Month wise die cut hard bound binding.',
    image: '/images/outline_diary.jpg',
    tag: 'Die-Cut Tabs',
    isPopular: true,
    isNew2025: true,
    dieCutTabs: true,
  },

  // 16. PLATINUM LEATHER (OJAS 502-505)
  {
    id: 'platinum-ojas',
    name: 'Platinum Series (Ojas 502–505)',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day to a page (Sunday Separate) with Die-Cut',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sunday Separate',
    binding: 'Precision Die-Cut Leather Bound',
    coverMaterial: 'Imported Padded Thermal PU Leather',
    features: [
      'Month-wise thumb die-cut indexing system',
      'Sunday Separate layout with curated proverbs',
      'Gold foil border and metallic corner guards',
      'Velveteen interior endpapers with business card pouch',
    ],
    authenticDescription: 'Platinum Series (Ojas) 502,503,504,505 | One day to a page (Sunday Seperate) | with proverbs & Leather Finish | with month wise Die Cut',
    image: '/images/emerald_botanical_diary.jpg',
    tag: 'Die-Cut 502-505',
    dieCutTabs: true,
  },

  // 17. PLATINUM GLOBAL SERIES (510-513)
  {
    id: 'platinum-global',
    name: 'Platinum Global Series (510–513)',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '7" × 9 ½"',
    sizeMetric: '178 × 241 mm',
    layout: 'One day in a page (Sat & Sunday Clubbed) with Die-Cut',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Die-Cut Month Hard Bound with Rounded Spine',
    coverMaterial: 'Multi-Tone Two-Tone Leatherette Finish',
    features: [
      'Month-wise die-cut index for effortless international scheduling',
      'Heidelberg 4-colour printed world travel maps',
      'Custom debossed client company logo and year crest',
      'Dual satin ribbons in metallic gold and navy',
    ],
    authenticDescription: 'Platinum Series (Global) 510,511,512,513 | 7" X 9 ½" (approx.) | One day in a page (Sat & Sunday Clubbed) | Leather Finish with month wise Die Cut',
    image: '/images/executive_diary.jpg',
    tag: 'Global 510-513',
    dieCutTabs: true,
  },

  // 18. PLATINUM CORPORATE SERIES (523-524)
  {
    id: 'platinum-corporate',
    name: 'Platinum Corporate Series (523–524)',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '6 ⅛" × 8 ¼"',
    sizeMetric: '155 × 210 mm',
    layout: 'One day in a page (Sat & Sunday Clubbed)',
    pageFrequency: '1-Day/Page',
    weekendStyle: 'Sat & Sun Clubbed',
    binding: 'Section Sewn Flexible Leatherette Bound',
    coverMaterial: 'Grained Vegan Leather with Burnished Stitch Edges',
    features: [
      'Mid-compact 6 ⅛" × 8 ¼" executive proportion',
      'Perimeter perimeter sewing for lifetime flex and durability',
      'Year planning, financial summaries, and notes section',
      'Custom gold/silver foil crest customization available',
    ],
    authenticDescription: 'Platinum Series (Corporate) 523,524 | 6 ⅛" X 8 ¼" (approx.) | One day in a page Sat & Sunday Clubbed | with Leather Finish',
    image: '/images/charcoal_diary.jpg',
    tag: 'Corp 523-524',
  },

  // 19. PLATINUM JOURNALS SERIES (526-532)
  {
    id: 'platinum-journals',
    name: 'Platinum Journals Series (526–532)',
    category: 'platinum',
    categoryLabel: 'Platinum Leather Collection',
    sizeImperial: '6 ⅛" × 8 ¼"',
    sizeMetric: '155 × 210 mm',
    layout: 'All-Time Undated Ruled Luxury Journal',
    pageFrequency: 'Undated',
    weekendStyle: 'Full Week Spreads',
    binding: 'Lay-Flat 180° Smyth Sewn Binding',
    coverMaterial: 'Full Leather Finish with Debossed Geometry',
    features: [
      'Undated multi-year format usable anytime throughout the year',
      'Premium 80 GSM natural ivory paper suitable for fountain pens',
      'Expandable back gusset pocket for receipts and documents',
      'Reinforced elastic pen holder & ribbon marker',
    ],
    authenticDescription: 'Platinum Series (Journels) 526,527,528,529,530,531,532 | 6 ⅛" X 8 ¼" (approx.) | to use all time | with Leather Finish',
    image: '/images/burgundy_diary.jpg',
    tag: 'All-Time Journal',
    isPopular: true,
  },
]
