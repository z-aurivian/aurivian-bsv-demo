// VEGA — Strategic Analytics — BSV Group demo.

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '34% of target OBGYNs and IVF specialists achieving sustained practice change vs 19% industry average for women\'s health portfolios — +79% outperformance. Slowest conversion: Knowledgeable → Intent (61%, avg 52 days). Primary blocker: cost-of-care discussions and rFSH competitive messaging. Recommended action: deploy HMG cost-equivalence toolkit to MSLs before next IVF congress cycle.',
  stages: [
    { stage: 'Sustained practice change', hcps: 412,  pctTotal: 34, vsQ4: '+9%'  },
    { stage: 'Actively changing practice', hcps: 534,  pctTotal: 44, vsQ4: '+7%'  },
    { stage: 'Intent to change',           hcps: 738,  pctTotal: 61, vsQ4: '+6%'  },
    { stage: 'Knowledgeable',              hcps: 1084, pctTotal: 89, vsQ4: '+3%'  },
    { stage: 'Aware only',                 hcps: 286,  pctTotal: 24, vsQ4: '-11%' },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Dr. Rahul Mehta shows high interaction volume but low insight rate — likely spending visit time on product features rather than scientific exchange on KIQs. Recommended: coaching on LP1 (Anti-D compliance barriers) and LP3 (fertility stimulation preferences). Dr. Priya Shenoy shows quality-volume gap — regional manager support needed before NABICON 2026.',
  rows: [
    { msl: 'Dr. Divya Ramachandran',  region: 'West (Mumbai/Pune)',  interactions: 51, vsTarget: '+4%',  quality: 8.8, insightRate: 84, overall: 'Excellent' },
    { msl: 'Dr. Rahul Mehta',         region: 'North (Delhi/Agra)',  interactions: 58, vsTarget: '+18%', quality: 6.0, insightRate: 41, overall: 'Quality gap' },
    { msl: 'Dr. Anita Krishnaswamy',  region: 'South (Bangalore)',   interactions: 42, vsTarget: '+5%',  quality: 9.2, insightRate: 88, overall: 'Excellent' },
    { msl: 'Dr. Suresh Pillai',       region: 'East (Kolkata)',      interactions: 36, vsTarget: '-10%', quality: 8.1, insightRate: 74, overall: 'Volume gap' },
    { msl: 'Dr. Priya Shenoy',        region: 'South (Chennai)',     interactions: 27, vsTarget: '-33%', quality: 5.4, insightRate: 33, overall: 'Needs support' },
    { msl: 'Dr. Vikram Nair',         region: 'North (Lucknow)',     interactions: 45, vsTarget: '+2%',  quality: 8.4, insightRate: 76, overall: 'On track' },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. S. Meenakshi Sundaram', tier: 'Tier 2', lastContact: '2026-04-02', gap: '14 weeks', action: 'URGENT — divergence alert, schedule immediately' },
  { kol: 'Dr. Shakuntala Chhabra',    tier: 'Tier 2', lastContact: '2026-04-28', gap: '10 weeks', action: 'Re-engage before NABICON 2026' },
  { kol: 'Dr. Nutan Agarwal',         tier: 'Tier 2', lastContact: '2026-04-15', gap: '12 weeks', action: 'Oncofertility briefing — schedule soon' },
  { kol: 'Dr. Rohit Gutgutia',        tier: 'Tier 2', lastContact: '2026-05-14', gap: '8 weeks',  action: 'Plan HMG protocol interaction' },
  { kol: 'Dr. Kamini Rao',            tier: 'Tier 1', lastContact: '2026-07-01', gap: '1 week',   action: 'On track — ESHRE post-congress debrief booked' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Share of voice at ESHRE 2026 declined (-4pts) as Merck and Organon ran large-scale IVF symposia. BSV had no satellite symposium at ESHRE 2026. Recommend securing ESHRE 2027 satellite slot immediately and increasing KOL-authored abstract submissions.',
  rows: [
    { source: 'Congress abstracts (FOGSI 2026)',    us: '31%', compA: '24%', compB: '29%', compC: '16%', trend: 'flat' },
    { source: 'Peer-reviewed publications (12m)',   us: '28%', compA: '34%', compB: '22%', compC: '16%', trend: 'down' },
    { source: 'KOL active endorsements',            us: '38%', compA: '27%', compB: '24%', compC: '11%', trend: 'up'   },
    { source: 'ESHRE 2026 session share',           us: '12%', compA: '38%', compB: '31%', compC: '19%', trend: 'down' },
    { source: 'Indian social/digital mentions',     us: '26%', compA: '21%', compB: '31%', compC: '22%', trend: 'flat' },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Dr. Kamini Rao',            score: 82, change30d: '+3.8', velocity: '+1.2 ↑↑', interpretation: 'Strong positive acceleration — co-authorship conversation ready' },
  { kol: 'Dr. S. Meenakshi Sundaram', score: 52, change30d: '-9.4', velocity: '-3.1 ↓↓', interpretation: 'Rapid decline — competitor advisory board impact — urgent intervention' },
  { kol: 'Dr. Rishma Dhillon Pai',    score: 76, change30d: '+2.1', velocity: '+0.7 ↑',  interpretation: 'Steady positive post-ESHRE 2026 engagement' },
  { kol: 'Dr. Nandita Palshetkar',    score: 74, change30d: '+0.4', velocity: '-0.2 ⚠',  interpretation: 'Momentum slowing — still positive but needs refresh' },
  { kol: 'Dr. Narendra Malhotra',     score: 84, change30d: '+1.8', velocity: '+0.6 ↑',  interpretation: 'Stable positive — anchor KOL performing well' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Anti-D prophylaxis at 28 weeks',   linkedMO: 'MO1', baseline: '41%',     current: '58% (+17pts)',  patientsImpacted: '2,840 additional Rh-negative patients protected' },
  { gap: 'IVF stimulation protocol adoption', linkedMO: 'MO3', baseline: '19% BSV', current: '27% BSV (+8pts)', patientsImpacted: '1,220 additional IVF cycles using BSV hormones' },
  { gap: 'Endometriosis GnRH agonist use',   linkedMO: 'MO2', baseline: '54%',     current: '62% (+8pts)',   patientsImpacted: '780 additional endometriosis patients on protocol' },
];

export const VEGA_ROMI = {
  netValueCreated: '$2.2M',
  roiPct: '162%',
  returnPerPound: '$2.62 per $1 invested',
  rows: [
    { category: 'Prescription growth attributed to MA', value: '$1.7M', methodology: 'HCPs with high MA engagement show 1.9× higher BSV prescribing — difference-in-difference vs control group' },
    { category: 'Anti-D compliance programme — avoided complications', value: '$385K', methodology: 'Prevented Rh sensitisation cases × avoided haemolytic disease management cost' },
    { category: 'Competitive revenue protection', value: '$577K', methodology: 'Estimated prescribing prevented from shifting to rFSH or imported GnRH analogues' },
    { category: 'Total MA investment', value: '-$1.65M', methodology: 'Full Medical Affairs budget — MSL field team, advisory boards, congress, CME content' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 78,
  vsQ4: '+6',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',      score: 83, commentary: 'Field interaction volume on target; quality gap flagged in North and South regions' },
    { dim: 'External ecosystem impact',  score: 79, commentary: 'KOL network engagement strong; ESHRE share-of-voice gap needs 2027 satellite symposium' },
    { dim: 'HCP practice change',       score: 81, commentary: '34% sustained change vs 19% women\'s health industry average — strong outperformance' },
    { dim: 'Patient care gap closure',  score: 76, commentary: 'Anti-D compliance +17pts, IVF protocol adoption +8pts — below MO1 year-end target' },
    { dim: 'Internal ecosystem impact', score: 72, commentary: 'Cross-functional alignment with marketing on rFSH rebuttal strategy needs acceleration' },
  ],
};
