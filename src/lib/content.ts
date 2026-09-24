// Copy and data lifted verbatim from the design canvas (TCMCF Website.dc.html)
// and the supplied content.txt.

export const CONTACT = {
  email: "thechangemakersoc@gmail.com",
  phone: "+91 95607 19521",
  city: "Bhopal, Madhya Pradesh",
} as const;

export const HINDI_LINE = "“गांव मजबूत तो देश मजबूत”";
export const HINDI_GLOSS = "When the village is strong, the nation is strong";

export const STATS = [
  { value: 27000, suffix: "+", label: "Farmers Trained & Supported" },
  { value: 24750, suffix: "", label: "Hectares Certified Organic" },
  { value: 15, suffix: "", label: "FPOs & Cooperatives" },
  { value: 8, suffix: "", label: "International Certifications" },
] as const;

export const PROGRAMMES = [
  {
    i: "01",
    title: "Organic & Regenerative Farming",
    body: "Helping farmers move from chemical-heavy conventional methods to certified organic, natural, and regenerative practice; yields up, soil restored, input costs cut 12–15% per farmer.",
    short: "Yields up, soil restored, input costs cut 12–15% per farmer.",
  },
  {
    i: "02",
    title: "Women-Led Entrepreneurship",
    body: "Backing women-run bio-input production centres and putting women into FPO leadership roles.",
    short:
      "Backing women-run bio-input production centres and putting women into FPO leadership roles.",
  },
  {
    i: "03",
    title: "Ethical Supply Chains",
    body: "Connecting farmers directly to fair-price buyers and global brands through transparent, traceable procurement.",
    short:
      "Connecting farmers directly to fair-price buyers and global brands through transparent, traceable procurement.",
  },
] as const;

export const STORIES = [
  {
    q: "Chemical pesticides were destroying my soil and my health. Today, I make my own inputs, for a fraction of the cost.",
    who: "Rajkumar Kishan Gore · Organic Cotton Farmer · Village Gunj, Yavatmal",
    body: "For years, Rajkumar farmed cotton the way everyone around him did, buying chemical fertiliser and pesticide season after season, watching input costs eat his margins and his soil grow tired. Then TCMCF brought a simple idea to his village: make it yourself. His input costs fell by roughly 96%. His yield rose by 25–30%. Now his neighbours are following his lead.",
  },
  {
    q: "Story slot 2 — pull quote to be supplied",
    who: "FARMER NAME · CROP · VILLAGE, DISTRICT",
    body: "PLACEHOLDER — second farmer story, roughly 60–70 words, ending in a measurable outcome. Content to be supplied by TCMCF.",
  },
  {
    q: "Story slot 3 — pull quote to be supplied",
    who: "FARMER NAME · CROP · VILLAGE, DISTRICT",
    body: "PLACEHOLDER — third farmer story, roughly 60–70 words. Ideally a women-led bio-input centre story to balance the set.",
  },
] as const;

export const BRANDS = [
  "BESTSELLER",
  "SUPERDRY",
  "KIABI",
  "ITC LIMITED",
  "WWF INDIA",
  "LT FOODS",
  "RSWM",
  "OCA",
  "IFFDC",
] as const;

export const CERTS = [
  "USDA Organic",
  "India Organic (APEDA)",
  "GOTS",
  "OC100",
  "OEKO-TEX®",
  "Regenagri®",
  "FSSAI",
  "APEDA",
] as const;

export const FACTS = [
  { k: "Founded", v: "March 2019" },
  { k: "Headquarters", v: "Bhopal, Madhya Pradesh" },
  { k: "States", v: "Madhya Pradesh, Maharashtra, Karnataka" },
  { k: "Project offices", v: "5" },
  { k: "Team", v: "70 members" },
  {
    k: "Legal status",
    v: "Registered Society, MP Society Act · 12A & 80G compliant",
  },
] as const;

export const PHASES = [
  {
    years: "2019–2022",
    name: "Foundation",
    items: [
      "Piloted organic cotton farming in Alirajpur",
      "Onboarded the first cohort of farmers and earned TCMCF's first organic certifications",
      "Opened two women-led bio-input production centres",
    ],
  },
  {
    years: "2023–2024",
    name: "Scale",
    items: [
      "Crossed 27,000 farmers onboarded and certified 24,750 hectares",
      "Expanded into Maharashtra",
      "Established the OCA partnership, connecting TCMCF's cotton to global fashion brands",
    ],
  },
  {
    years: "2025–2026",
    name: "Deepen — where we are now",
    items: [
      "Entered Karnataka",
      "Procured 16,500 MT of organic commodities in FY 2024–25",
      "Built digital traceability systems and strengthened communications and brand presence",
    ],
  },
] as const;

export const VALUES = [
  {
    t: "Non-Discriminatory Approach",
    d: "Fair, inclusive engagement with every community member, regardless of background.",
  },
  {
    t: "Transparency & Accountability",
    d: "Open books, verified claims, and accountability to farmers, partners, and funders alike.",
  },
  {
    t: "Green Practices",
    d: "Organic, regenerative methods that restore soil rather than deplete it.",
  },
] as const;

export const FOUNDERS = [
  {
    n: "Manas Mohan",
    r: "Promoter, Founder & Director",
    d: "25+ years in startup leadership and gin management. Built TCMCF's cotton supply chain and its industry tie-ups with spinners and global brands.",
    short:
      "25+ years in startup leadership and gin management. Built TCMCF's cotton supply chain and industry tie-ups.",
  },
  {
    n: "Darshan Parasmal Jain",
    r: "Promoter, Founder & CEO",
    d: "20+ years leading business units, cooperatives, and FPOs. Architect of TCMCF's large-scale farm projects, agri supply chains, and processing infrastructure.",
    short:
      "20+ years leading business units, cooperatives, and FPOs. Architect of TCMCF's large-scale farm projects.",
  },
] as const;

export const LEADERS = [
  {
    n: "Sarfaraz Khan",
    r: "Chartered Accountant",
    d: "15+ years in finance management and accounting, anchoring the financial rigour and transparency behind TCMCF's institutional partnerships.",
    short:
      "15+ years in finance management and accounting, anchoring TCMCF's financial rigour.",
  },
  {
    n: "VedPrakash Sao",
    r: "Director, Supply Chain – Food Commodities",
    d: "20+ years in supply chain, food processing, and warehouse management for cooperatives and FPOs.",
    short:
      "20+ years in supply chain, food processing, and warehouse management.",
  },
  {
    n: "Deepak Soni",
    r: "Director, Project Management",
    d: "18+ years in consulting, corporate strategy, and project management. Leads the design and traceability systems behind TCMCF's sustainable farm projects.",
    short:
      "18+ years in consulting, corporate strategy, and project management.",
  },
] as const;

/** Flat roster used by the tablet/mobile team grids (design 1e / 1f). */
export const TEAM = [...FOUNDERS, ...LEADERS] as const;

export const CRISES = [
  {
    i: "01",
    t: "Low & Volatile Incomes",
    d: "Small and marginal farmers earn below-subsistence returns, with yields well below their genetic potential under rain-fed conditions.",
  },
  {
    i: "02",
    t: "Chemical Dependency",
    d: "Decades of heavy pesticide and fertiliser use have depleted soil health without improving incomes.",
  },
  {
    i: "03",
    t: "Market Exclusion",
    d: "Tribal farmers are largely locked out of premium organic markets, certifications, and fair-price buyers.",
  },
  {
    i: "04",
    t: "Land Vulnerability",
    d: "Degraded soils, erratic monsoons, and climate variability threaten food security and farm viability.",
  },
  {
    i: "05",
    t: "Institutional Weakness",
    d: "Farmer Producer Organisations often lack the capacity, market linkages, and governance support to negotiate on equal terms.",
  },
  {
    i: "06",
    t: "Women's Exclusion",
    d: "Despite doing the majority of farm labour, women are largely absent from leadership and decision-making.",
  },
] as const;

/* ------------------------------------------------------------------ Impact */

export const IMPACT_STATS = [
  { v: "14,500+", k: "Farmers on guaranteed fair farm-gate prices" },
  { v: "8%+", k: "Premium paid to certified organic farmers" },
  { v: "16,500 MT", k: "Organic commodities procured FY 2024–25" },
  { v: "24,750 ha", k: "Under certified organic practices" },
] as const;

export const IMPACT_GROUPS = [
  {
    i: "01",
    t: "Economic Impact",
    items: [
      "Fair farm-gate prices guaranteed to 14,500+ farmers",
      "8%+ premium paid to certified organic farmers",
      "Input costs reduced by 12–15% per farmer",
      "16,500 MT of organic commodities procured in FY 2024–25",
    ],
  },
  {
    i: "02",
    t: "Ecological Impact",
    items: [
      "24,750 ha under certified organic practices",
      "Chemical input dependency reduced across the Internal Control System (ICS)",
      "Biochar application improving soil organic mass — 1,000 MT annual production capacity",
      "Regenerative agriculture practices on 15,000 ha of cotton land",
      "Non-GMO cotton seeds distributed free of cost",
    ],
  },
  {
    i: "03",
    t: "Social Impact",
    items: [
      "26 Farmer Groups developed (500 members each)",
      "15 FPOs and cooperatives supported",
      "2 women-led bio-input centres operational",
      "30% of farmers receiving Direct Bank Transfers",
      "Seed production by 130+ smallholder growers",
    ],
  },
] as const;

export const TRACEABILITY_LINE =
  "Every bale of cotton, every batch of grain, can be traced back to the farmer's field — backed by Transaction Certificates and a dedicated digital traceability system.";

/* ----------------------------------------------------------------- Stories */

export const STORY_METRICS = [
  { v: "96%", k: "Reduction in input cost per acre" },
  { v: "25–30%", k: "Rise in cotton yield" },
  { v: "₹200–300", k: "Input cost per acre, from ₹7,000–8,000" },
  { v: "3.64 ha", k: "Farm size, Village Gunj" },
] as const;

export const STORY_PARAS = [
  "The soil in village Gunj used to smell like the market: sharp, chemical, nothing like earth. Rajkumar Kishan Gore worked that soil for years before he learned there was another way.",
  "Rajkumar farms 3.64 hectares of cotton in village Gunj. Like most families in the region, farming isn't just his livelihood, it's the foundation everything else in his household is built on: his children's schooling, his family's food security, his standing in the community.",
  "For years, he farmed the way everyone around him did, buying chemical fertiliser and pesticide from the market, season after season. The inputs alone cost him ₹7,000 to ₹8,000 an acre. His soil grew tired under the chemical load. His health suffered from years of handling pesticide. And despite the rising costs, his yields kept slipping, not climbing.",
  "TCMCF arrived in village Gunj with a simple idea: make it yourself. Rajkumar joined the village's newly formed Organic Producer Group and, through TCMCF's training, learned to turn five leaves, cow dung, and soybean into everything his fields needed: five-leaf extract, Amrutpani, and a soybean-based nutrient tonic, all produced on his own land, at a fraction of the cost of what he used to buy.",
  "The difference showed fast. Input costs that once ran ₹7,000 to ₹8,000 an acre fell to just ₹200 to ₹300, a reduction of roughly 96%. His cotton yield climbed 25 to 30%, the kind of number that changes how a family plans its year, not just its season.",
  "Rajkumar didn't keep what he'd learned to himself. He started walking his neighbours through the same process, farm by farm, field by field. What began as one man's shift away from chemical inputs is slowly becoming how the whole village farms, easing input costs, restoring soil health, and building income security for an entire community, not just one household.",
] as const;

export const STORY_SLOTS = [
  {
    t: "Story slot 2",
    d: "PLACEHOLDER — second farmer story. Ideally a women-led bio-input centre, to balance the set.",
  },
  {
    t: "Story slot 3",
    d: "PLACEHOLDER — an FPO or cooperative story from the Alirajpur & Jhabua cluster.",
  },
  {
    t: "Story slot 4",
    d: "PLACEHOLDER — a food-commodity farmer (rice, wheat, chia or quinoa) from Karnataka.",
  },
] as const;

/* ---------------------------------------------------------- Accreditations */

export const CERT_MARKS = [
  "USDA ORGANIC",
  "INDIA ORGANIC",
  "GOTS",
  "OC100",
  "OEKO-TEX®",
  "REGENAGRI®",
  "FSSAI",
  "APEDA",
] as const;

export const CERT_ROWS = [
  {
    c: "USDA Organic",
    b: "United States Department of Agriculture",
    d: "Opens access to the US organic market and supports premium pricing for certified produce.",
  },
  {
    c: "India Organic",
    b: "APEDA, Government of India",
    d: "India's national organic certification, verifying compliance with domestic organic standards.",
  },
  {
    c: "GOTS",
    b: "Global Standard gGmbH",
    d: "The benchmark for organic fibre through the textile supply chain, from farm to finished garment.",
  },
  {
    c: "OC100",
    b: "Textile Exchange",
    d: "Verifies and traces the organic content of cotton through every stage of processing.",
  },
  {
    c: "OEKO-TEX®",
    b: "OEKO-TEX Association",
    d: "Tests for harmful substances, giving international buyers confidence in product safety.",
  },
  {
    c: "Regenagri®",
    b: "Control Union / Regenagri",
    d: "Verifies regenerative agriculture practices — central to TCMCF's emerging carbon credit and carbon market work.",
  },
  {
    c: "FSSAI",
    b: "Food Safety and Standards Authority of India",
    d: "India's food safety certification, covering TCMCF's processed food commodities.",
  },
  {
    c: "APEDA Accreditation",
    b: "Government of India",
    d: "TCMCF's certification body is APEDA-accredited, meaning our audits carry government-recognised authority.",
  },
] as const;

/* ---------------------------------------------------------------- Partners */

export const PARTNERS = [
  {
    logo: "BESTSELLER LOGO",
    n: "Bestseller",
    d: "Organic cotton sourcing & GOTS supply chain",
  },
  {
    logo: "SUPERDRY LOGO",
    n: "Superdry®",
    d: "Sustainable cotton sourcing & certification",
  },
  {
    logo: "KIABI LOGO",
    n: "Kiabi",
    d: "Organic cotton textile supply chain",
  },
  {
    logo: "ITC LOGO",
    n: "ITC Limited",
    d: "Commodity procurement & market linkage",
  },
  {
    logo: "WWF INDIA LOGO",
    n: "WWF India",
    d: "Sustainable agriculture & ecological alignment",
  },
  { logo: "LT FOODS LOGO", n: "LT Foods", d: "Organic rice & grain procurement" },
  {
    logo: "RSWM LOGO",
    n: "RSWM Limited",
    d: "LNJ Bhilwara Group — fibre & textile linkage",
  },
  {
    logo: "OCA LOGO",
    n: "OCA",
    d: "Organic Cotton Accelerator — global brand facilitation",
  },
  {
    logo: "IFFDC LOGO",
    n: "IFFDC",
    d: "Institutional capacity building & FPO support",
  },
] as const;

/* ----------------------------------------------------------- Get Involved */

export const PARTNER_ROUTES = [
  {
    i: "1",
    t: "CSR Grant Partner",
    ask: "Programme funding",
    get: "80G tax deduction · branded impact report · field visit · farmer attribution",
    focus: [
      "Farmer training fund",
      "Bio-input centre support",
      "FPO capacity building",
      "Processing infrastructure",
    ],
  },
  {
    i: "2",
    t: "Supply Chain Partner",
    ask: "Ethical sourcing",
    get: "Certified organic supply · full traceability · GOTS/USDA documentation · ESG reporting data",
    focus: [
      "Cotton sourcing for fashion brands",
      "Rice, wheat and pulses",
      "Chia and quinoa specialty crops",
      "OEM organic ingredient supply",
    ],
  },
  {
    i: "3",
    t: "Institutional / Foundation",
    ask: "Strategic investment",
    get: "Co-creation of indicators · board engagement · grant and technical-assistance opportunities · MEL partnership",
    focus: [
      "Farmer income research",
      "Soil health study",
      "Women's enterprise scaling",
      "Market systems development",
    ],
  },
  {
    i: "4",
    t: "Government / Policy",
    ask: "Programme partnership",
    get: "Model replication at scale · convergence with national schemes · impact documentation for policy",
    focus: [
      "PM-KISAN convergence",
      "State organic mission alignment",
      "Tribal welfare scheme integration",
      "NABARD linkage development",
    ],
  },
] as const;

/* --------------------------------------------------------------- Community */

export const COMMUNITY_STATS = [
  { v: "8,000", k: "Organic cotton farmers in the cluster" },
  { v: "15,000 ha", k: "Under cotton in Alirajpur & Jhabua" },
  { v: "15", k: "FPOs and cooperatives supported" },
  { v: "26", k: "Farmer Groups, ~500 members each" },
] as const;

export const FPO_SERVICES = [
  "FPO governance & management support",
  "Value chain studies",
  "Business planning",
  "Financial literacy",
  "Digital record-keeping",
] as const;

export const WOMEN_STATS = [
  { v: "1.2 lakh L", k: "Organic inputs produced a year" },
  { v: "2", k: "Bio-input centres operational" },
  { v: "130+", k: "Smallholder seed growers" },
] as const;

/* -------------------------------------------------------------- Compliance */

const REPORT_YEARS = [
  { y: "FY 2024–25", n: "Awaiting upload" },
  { y: "FY 2023–24", n: "Awaiting upload" },
  { y: "FY 2022–23", n: "Awaiting upload" },
] as const;

export const COMPLIANCE_GROUPS = [
  {
    id: "annual-reports",
    i: "6.1",
    t: "Annual Reports",
    d: "TCMCF publishes its Annual Report each year, covering programme activities, farmer outcomes, and organisational updates. Reports will be listed here for download once supplied.",
    rows: REPORT_YEARS,
  },
  {
    id: "audit-reports",
    i: "6.2",
    t: "Audit Reports",
    d: "Statutory audit reports will be listed here for download once supplied.",
    rows: REPORT_YEARS,
  },
  {
    id: "fc-annual-reports",
    i: "6.3",
    t: "FC Annual Reports",
    d: "FCRA (Foreign Contribution) annual returns will be listed here for download once supplied.",
    rows: REPORT_YEARS,
  },
] as const;

/* ----------------------------------------------------------------- Contact */

export const CONTACT_DETAILS = [
  {
    k: "Office",
    v: "Flat #2H, Surabhi Life Space, Khajuri Kalan Road, Awadhpuri, Bhopal – 462022, Madhya Pradesh",
  },
  { k: "Phone", v: "+91 95607 19521 · +91 86029 07233" },
  { k: "Email", v: "thechangemakersoc@gmail.com" },
  { k: "Web", v: "www.changemakers.org.in" },
  { k: "Social", v: "LinkedIn · Instagram · Facebook · X (Twitter) · YouTube" },
] as const;
