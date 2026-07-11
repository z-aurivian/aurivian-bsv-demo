// BSV Group — Clinical trials and evidence data for Auri RAG context.

// Anti-D / Rh prophylaxis evidence
export const TRIALS_SOLIRIS = [
  {
    id: 'anti-d-t1',
    name: 'BSV Anti-D Real-World Registry (India)',
    phase: 'Registry / RWE',
    status: 'Ongoing',
    indication: 'Rh isoimmunization prophylaxis',
    primaryEndpoint: 'Sensitisation rate in Rh-negative pregnancies over 2 years',
    enrollment: 1840,
    sites: 14,
    summary: 'Multi-centre Indian registry tracking Anti-D prophylaxis compliance and sensitisation outcomes in Tier 1–3 hospitals. Interim data at 12 months shows 0.4% sensitisation rate in compliant arms vs 3.2% in non-compliant Tier 3 cohort, underscoring the compliance gap.',
    keyResult: '0.4% sensitisation rate in compliant BSV Anti-D arms (n=1,240)',
    congressPresentation: 'FOGSI 2026 abstract submitted',
    publicationStatus: 'Interim results — under review at BJOG India',
  },
  {
    id: 'anti-d-t2',
    name: 'RHOPRO: Rh Prophylaxis Protocol Optimisation Study',
    phase: 'Phase IV / Observational',
    status: 'Completed',
    indication: 'Antenatal and postpartum Anti-D prophylaxis',
    primaryEndpoint: 'Protocol compliance rate by hospital tier',
    enrollment: 628,
    sites: 8,
    summary: 'Retrospective study of Anti-D protocol adherence across hospital tiers in Maharashtra. Found 91% compliance in Tier 1, 67% in Tier 2, and 41% in Tier 3 hospitals, identifying cost and stock availability as primary barriers.',
    keyResult: '91% vs 41% compliance Tier 1 vs Tier 3 — 50-point compliance gap',
    congressPresentation: 'AOGU 2025',
    publicationStatus: 'Published — Indian Journal of Obstetrics and Gynaecology, 2025',
  },
];

// Luprodex / Goserelin evidence
export const TRIALS_ULTOMIRIS = [
  {
    id: 'luprodex-t1',
    name: 'ENDOCARE: Luprodex vs Imported Leuprolide in Endometriosis',
    phase: 'Phase IIIb / Comparative',
    status: 'Completed',
    indication: 'Stage II–IV Endometriosis',
    primaryEndpoint: 'Pain score reduction (VAS) at 6 months',
    enrollment: 312,
    sites: 12,
    summary: 'Randomised comparison of Luprodex Depot 3.75mg vs imported leuprolide in Indian endometriosis patients. No significant difference in pain scores, recurrence rates, or quality-of-life at 6 months, with Luprodex demonstrating 38% cost advantage.',
    keyResult: 'Non-inferior pain control (VAS reduction 68% vs 71%; p=NS) at 38% lower cost',
    congressPresentation: 'FOGSI 2025, ECSACOG 2025',
    publicationStatus: 'Published — Reproductive BioMedicine Online, 2025',
  },
  {
    id: 'luprodex-t2',
    name: 'PREOPFIB: Goserelin Pre-surgical Fibroid Size Reduction',
    phase: 'Phase IV / Observational',
    status: 'Ongoing',
    indication: 'Uterine fibroids pre-surgical management',
    primaryEndpoint: 'Fibroid volume reduction at 3 months pre-surgery',
    enrollment: 246,
    sites: 9,
    summary: 'Ongoing study of Goserelin 3.6mg monthly for 3 months prior to myomectomy or hysterectomy. Interim data show mean fibroid volume reduction of 32%, with haemoglobin improvement of 1.8 g/dL pre-operatively, facilitating blood-conservation surgery.',
    keyResult: '32% fibroid volume reduction; 1.8 g/dL haemoglobin improvement (interim)',
    congressPresentation: 'ECSACOG 2026 — abstract submitted',
    publicationStatus: 'Interim — data lock Q3 2026',
  },
];

// Fertility hormones evidence
export const TRIALS_COMPETITORS = [
  {
    id: 'fertility-t1',
    name: 'IVFCARE India: HMG vs rFSH in Normal Responders',
    phase: 'Randomised Controlled Trial',
    status: 'Completed',
    indication: 'Controlled ovarian stimulation — IVF',
    primaryEndpoint: 'Live birth rate per oocyte retrieval cycle',
    enrollment: 584,
    sites: 6,
    summary: 'Multi-centre Indian RCT comparing urinary HMG (BSV Humog) vs recombinant FSH (Gonal-f) in normal-responder IVF patients. Live birth rate was equivalent (38.2% vs 39.1%; p=0.71) with HMG achieving 34% lower stimulation drug cost per cycle.',
    keyResult: 'Equivalent live birth rates (38.2% vs 39.1%); 34% lower cost per cycle with HMG',
    congressPresentation: 'ESHRE 2025 — Late-breaking abstract; India IVF Summit 2025',
    publicationStatus: 'Published — Fertility and Sterility, Jan 2026',
  },
  {
    id: 'fertility-t2',
    name: 'MINICOV: Minimal Stimulation IVF with BSV HMG',
    phase: 'Phase IV / Pilot',
    status: 'Ongoing',
    indication: 'Minimal stimulation IVF — poor responders and PCOS',
    primaryEndpoint: 'Cumulative pregnancy rate per patient at 12 months',
    enrollment: 160,
    sites: 4,
    summary: 'Pilot RCT evaluating BSV HMG in minimal stimulation IVF protocols for poor ovarian responders and PCOS patients at high OHSS risk. Early results show promising oocyte yield with significantly reduced OHSS incidence vs standard stimulation.',
    keyResult: 'OHSS rate 2.4% vs 8.1% standard stimulation (interim, p=0.04)',
    congressPresentation: 'ESHRE 2026 — oral presentation accepted',
    publicationStatus: 'In progress — data lock Q4 2026',
  },
];

export const TRIALS_COMPLETED_LANDMARK = [
  {
    id: 'landmark-1',
    name: 'Cochrane Review: Urinary FSH vs Recombinant FSH in IVF',
    type: 'Meta-analysis / Cochrane',
    year: 2024,
    summary: 'Cochrane systematic review (42 RCTs, n=9,862) comparing clinical outcomes of urinary and recombinant gonadotropins in IVF. Conclusion: no significant difference in live birth rate (RR 0.97; 95% CI 0.92–1.02). Urinary preparations associated with lower cost and comparable safety profile.',
    bsvRelevance: 'Directly supports BSV\'s HMG/FSH positioning against Gonal-f. Cochrane imprimatur is the highest-level evidence MSLs can reference when KOLs cite rFSH superiority.',
    citation: 'Cochrane Database Syst Rev. 2024;(3):CD009305.',
  },
  {
    id: 'landmark-2',
    name: 'WHO Essential Medicines: Anti-D Immunoglobulin Guidance',
    type: 'WHO Guideline / Policy',
    year: 2023,
    summary: 'WHO 2023 recommendations on Rh isoimmunization prevention, confirming Anti-D immunoglobulin as an essential medicine and reaffirming the 28-week antenatal + postpartum 72-hour administration standard. Highlights unmet need in LMICs.',
    bsvRelevance: 'WHO endorsement directly supports BSV\'s advocacy for national Rh prophylaxis protocols in India, particularly in Tier 2/3 where compliance is lowest.',
    citation: 'WHO Essential Medicines List, 23rd edition, 2023.',
  },
];
