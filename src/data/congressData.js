// ============================================================================
// BSV Group — Congress Intelligence Data for ARIA surface
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const productNames = PRODUCT_OPTIONS.map(p => p.name);

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-FOGSI 2025', 'Q1 2026', 'Q2 2026', 'ESHRE 2026', 'Post-ESHRE 2026'],
  scientific: [
    { period: 'Post-FOGSI 2025', [productNames[0]]: 66, [productNames[1]]: 62, [productNames[2]]: 60, 'rFSH (Gonal-f)': 54, Other: 48 },
    { period: 'Q1 2026',         [productNames[0]]: 68, [productNames[1]]: 64, [productNames[2]]: 63, 'rFSH (Gonal-f)': 57, Other: 50 },
    { period: 'Q2 2026',         [productNames[0]]: 70, [productNames[1]]: 61, [productNames[2]]: 65, 'rFSH (Gonal-f)': 62, Other: 52 },
    { period: 'ESHRE 2026',      [productNames[0]]: 68, [productNames[1]]: 59, [productNames[2]]: 62, 'rFSH (Gonal-f)': 71, Other: 55 },
    { period: 'Post-ESHRE 2026', [productNames[0]]: 67, [productNames[1]]: 57, [productNames[2]]: 60, 'rFSH (Gonal-f)': 73, Other: 56 },
  ],
  social: [
    { period: 'Post-FOGSI 2025', [productNames[0]]: 62, [productNames[1]]: 58, [productNames[2]]: 57, 'rFSH (Gonal-f)': 50, Other: 44 },
    { period: 'Q1 2026',         [productNames[0]]: 64, [productNames[1]]: 60, [productNames[2]]: 58, 'rFSH (Gonal-f)': 54, Other: 46 },
    { period: 'Q2 2026',         [productNames[0]]: 65, [productNames[1]]: 57, [productNames[2]]: 61, 'rFSH (Gonal-f)': 59, Other: 48 },
    { period: 'ESHRE 2026',      [productNames[0]]: 63, [productNames[1]]: 55, [productNames[2]]: 59, 'rFSH (Gonal-f)': 68, Other: 51 },
    { period: 'Post-ESHRE 2026', [productNames[0]]: 62, [productNames[1]]: 52, [productNames[2]]: 57, 'rFSH (Gonal-f)': 70, Other: 52 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'IVFCARE India: HMG vs rFSH live birth rates in normal responders', journalOrCongress: 'Fertility and Sterility', date: '2026-01', product: productNames[3], sentiment: 'positive' },
  { title: 'Luprodex Depot 3-month vs 6-month protocol in endometriosis pain scores', journalOrCongress: 'FOGSI 2026 Abstract', date: '2026-01', product: productNames[1], sentiment: 'positive' },
  { title: 'MINICOV: Minimal stimulation IVF with urinary HMG — interim OHSS data', journalOrCongress: 'ESHRE 2026 Oral', date: '2026-07', product: productNames[3], sentiment: 'positive' },
  { title: 'Rh prophylaxis compliance in Tier 2/3 Indian hospitals: a registry analysis', journalOrCongress: 'Indian J Obstet Gynaecol', date: '2026-03', product: productNames[0], sentiment: 'neutral' },
  { title: 'Recombinant vs urinary gonadotropins in IVF: updated Cochrane meta-analysis', journalOrCongress: 'Cochrane Database Syst Rev', date: '2024-03', product: productNames[3], sentiment: 'positive' },
  { title: 'GnRH agonist for ovarian protection in pre-chemotherapy oncofertility', journalOrCongress: 'Reprod BioMed Online', date: '2026-05', product: productNames[1], sentiment: 'positive' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'Twitter/X', author: 'Dr. Kamini Rao', topic: 'ESHRE 2026 — urinary vs recombinant FSH debate', date: '2026-07', product: productNames[3], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. Narendra Malhotra', topic: 'Minimal stimulation IVF — Indian perspective', date: '2026-06', product: productNames[3], sentiment: 'positive' },
  { platform: 'Twitter/X', author: 'FOGSI Official', topic: 'Anti-D prophylaxis — guideline update 2026', date: '2026-01', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'IVF specialist network', topic: 'Oncofertility protocols — GnRH agonist use', date: '2026-05', product: productNames[1], sentiment: 'positive' },
  { platform: 'Twitter/X', author: 'ESHRE Faculty', topic: 'rFSH superiority messaging at satellite symposia', date: '2026-07', product: 'rFSH (Gonal-f)', sentiment: 'competitive' },
];

export const MOCK_INGESTION = {
  agendas: 16,
  abstracts: 1842,
  posters: 612,
  speakers: 487,
  publicationsLinked: 2341,
  sessions: [
    { title: 'Gonadotropin Selection in Controlled Ovarian Stimulation: Evidence and Practice', track: 'ART/IVF', products: [productNames[3], 'rFSH (Gonal-f)', 'Puregon'] },
    { title: 'Endometriosis: Medical Management and GnRH Agonist Protocols', track: 'Gynaecology', products: [productNames[1], productNames[2]] },
    { title: 'Oncofertility: Fertility Preservation in the Era of Cancer Therapy', track: 'Oncofertility', products: [productNames[1]] },
    { title: 'Minimal Stimulation IVF: Outcomes, Safety, and Patient Selection', track: 'ART/IVF', products: [productNames[3]] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'eshre-2026': {
    agendas: 16,
    abstracts: 1842,
    posters: 612,
    speakers: 487,
    publicationsLinked: 2341,
    sessions: [
      { title: 'Gonadotropin Selection in Controlled Ovarian Stimulation: Evidence and Practice', track: 'ART/IVF', products: [productNames[3], 'rFSH (Gonal-f)'] },
      { title: 'Minimal Stimulation IVF: Outcomes, Safety, and Patient Selection', track: 'ART/IVF', products: [productNames[3]] },
      { title: 'Oncofertility: Fertility Preservation in the Era of Cancer Therapy', track: 'Oncofertility', products: [productNames[1]] },
      { title: 'Endometriosis Management: GnRH Agonists and Add-Back Therapy', track: 'Gynaecology', products: [productNames[1], productNames[2]] },
    ],
  },
  'fogsi-2026': {
    agendas: 11,
    abstracts: 968,
    posters: 342,
    speakers: 274,
    publicationsLinked: 1127,
    sessions: [
      { title: 'Anti-D Prophylaxis in Pregnancy: Current Guidelines and Compliance Challenges', track: 'Obstetrics', products: [productNames[0]] },
      { title: 'GnRH Agonists in Endometriosis: Protocol Individualization', track: 'Gynaecology', products: [productNames[1], productNames[2]] },
      { title: 'IVF in India 2026: Protocol Innovations and Outcome Benchmarks', track: 'ART/IVF', products: [productNames[3]] },
      { title: 'Safe Motherhood Initiative: Maternal Mortality and Rh Disease Prevention', track: 'Maternal Health', products: [productNames[0]] },
    ],
  },
  'trend-2025-2026': {
    agendas: 0,
    abstracts: 0,
    posters: 0,
    speakers: 0,
    publicationsLinked: 0,
    sessions: [],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'rFSH vs urinary gonadotropin clinical debate',
    momentum: 96,
    mentions: 61,
    summary: 'ESHRE 2026 reignited the recombinant vs urinary FSH debate. Merck and Organon ran large-scale symposia reaching 2,400+ IVF specialists. Sentiment toward urinary preparations declined 12pts among younger IVF specialists in the last 30 days.',
    action: 'Deploy HMG vs rFSH clinical equivalence one-pager to all MSLs. Engage Cochrane meta-analysis and IVFCARE India data proactively in all IVF KOL interactions before prescribing inertia solidifies.',
  },
  {
    theme: 'Anti-D prophylaxis compliance in Tier 2/3',
    momentum: 89,
    mentions: 48,
    summary: 'Rising MSL field signal on Anti-D compliance failures in secondary and tertiary hospitals. Out-of-pocket cost and stock interruptions are the primary barriers. Three sensitisation cases confirmed in Q2 2026.',
    action: 'Fast-track institutional bulk-supply programme for Tier 2/3 hospitals. Engage Dr. Chhabra (Wardha) as rural obstetrics champion.',
  },
  {
    theme: 'Oncofertility — GnRH agonist ovarian protection',
    momentum: 83,
    mentions: 34,
    summary: 'Gynecologic oncologists are increasingly asking about GnRH agonist use for ovarian protection before chemotherapy. BSV\'s Luprodex is scientifically positioned for this indication but lacks dedicated MSL materials for the oncology audience.',
    action: 'Develop oncofertility MSL briefing kit. Identify 5 gynecologic oncology centres for targeted engagement. Schedule advisory board with Dr. Vidya Bhat (Bangalore) and Dr. Nutan Agarwal (Delhi).',
  },
  {
    theme: 'Minimal stimulation IVF growing in Indian market',
    momentum: 77,
    mentions: 29,
    summary: 'Cost-driven minimal stimulation IVF protocols are gaining academic and clinical interest. PCOS and poor responders are the primary candidates. BSV HMG is the natural product for mild stimulation, but no focused messaging exists.',
    action: 'Leverage MINICOV interim data (OHSS 2.4% vs 8.1%) in MSL conversations. Submit full MINICOV results to India IVF Summit 2026 and ESHRE 2027.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (BSV)`,    share: 27, mentions: 88 },
  { product: `${productNames[3]} (BSV)`,    share: 22, mentions: 71 },
  { product: 'Gonal-f (Merck KGaA)',        share: 27, mentions: 86 },
  { product: 'Puregon (Organon)',            share: 18, mentions: 57 },
  { product: 'Other',                        share: 6,  mentions: 21 },
];

export const MOCK_TRIALS = {
  total: 38,
  linkedToKOLs: 24,
  byIndication: { 'IVF/ART': 18, 'Endometriosis': 10, 'Anti-D': 6, 'Oncology': 4 },
  sample: [
    { nctId: 'NCT05412847', title: 'IVFCARE India: Urinary HMG vs Recombinant FSH in Normal Responders', phase: 'Phase IV', sponsor: 'BSV Group', product: productNames[3], indication: 'IVF', status: 'Completed', sites: 6 },
    { nctId: 'NCT05189673', title: 'MINICOV: Minimal Stimulation IVF with Urinary HMG in PCOS and Poor Responders', phase: 'Phase IV', sponsor: 'BSV Group', product: productNames[3], indication: 'IVF', status: 'Active', sites: 4 },
    { nctId: 'NCT04832156', title: 'ENDOCARE: Luprodex 3-month vs 6-month Protocol in Stage II–IV Endometriosis', phase: 'Phase IIIb', sponsor: 'BSV Group', product: productNames[1], indication: 'Endometriosis', status: 'Completed', sites: 12 },
    { nctId: 'NCT05621034', title: 'RHOPRO: Anti-D Prophylaxis Protocol Optimisation by Hospital Tier', phase: 'Observational', sponsor: 'BSV Group', product: productNames[0], indication: 'Rh prophylaxis', status: 'Completed', sites: 8 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3142,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X',             mentions: 984,  kolsTracked: 74 },
    { platform: 'LinkedIn',                 mentions: 748,  kolsTracked: 96 },
    { platform: 'PubMed / alerts',          mentions: 512,  kolsTracked: 214 },
    { platform: 'Conference backchannels',  mentions: 898,  kolsTracked: 108 },
  ],
  sample: [
    { platform: 'Twitter', author: 'Dr. Kamini Rao', topic: 'ESHRE 2026 — urinary vs recombinant FSH outcomes', sentiment: 'positive', date: '2026-07-02' },
    { platform: 'LinkedIn', author: 'FOGSI Official', topic: 'Anti-D prophylaxis guideline 2026 update', sentiment: 'positive', date: '2026-01-18' },
    { platform: 'PubMed alert', author: 'Multiple', topic: 'Cochrane review urinary vs recombinant gonadotropins', sentiment: 'positive', date: '2024-03-15' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText',     status: 'connected', description: 'Agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials',   label: 'Clinical Trials',         iconId: 'Activity',     status: 'available', description: 'Trial sponsorship, sites, outcomes by product' },
  { id: 'social',   label: 'Social & Digital',         iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint signals' },
];

export const getDemoContext = (congressId) => {
  const ingestion = INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
  return {
    ingestion,
    sentimentTrend: MOCK_TREND_SENTIMENT,
    articles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrends: MOCK_SOCIAL_TREND_SOURCES,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
  };
};
