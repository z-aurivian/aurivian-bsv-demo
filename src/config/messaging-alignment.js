// Messaging alignment pillars — BSV Group demo.
// Per-KOL alignment is computed deterministically in getMessagingAlignment().

export const MESSAGING_PILLARS = [
  { id: 'MP1', label: 'Anti-D Standard of Care',  description: 'Anti-D is the evidence-based standard for Rh isoimmunization prophylaxis; BSV\'s formulation meets international quality standards at an accessible price point for Indian healthcare.' },
  { id: 'MP2', label: 'GnRH Agonist Evidence Depth', description: 'Luprodex and Goserelin have demonstrated equivalent efficacy to imported brands in Indian populations, with individualized dosing protocols supported by real-world data.' },
  { id: 'MP3', label: 'Fertility Portfolio Value', description: 'BSV urinary gonadotropins (HMG, FSH, HCG) deliver equivalent clinical outcomes to recombinant alternatives with significant cost-of-care advantage for patients and IVF centres.' },
  { id: 'MP4', label: 'Scientific Partnership',   description: 'BSV Medical Affairs partners with FOGSI, ISAR, and ESHRE faculty to co-create clinical education, protocol guidance, and real-world evidence that shapes Indian reproductive medicine practice.' },
];

export function getMessagingAlignment(kol) {
  const base = kol.influenceScore;
  const tier  = kol.engagementTier === 'Tier 1' ? 10 : kol.engagementTier === 'Tier 2' ? 4 : 0;
  const hash  = (kol.id || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const clamp = (v) => Math.min(100, Math.max(20, v));

  return MESSAGING_PILLARS.map((p, i) => {
    const jitter = ((hash * (i + 7) * 13) % 25) - 12;
    const score  = clamp(base + tier + jitter);
    const status = score >= 75 ? 'Strong' : score >= 50 ? 'Moderate' : 'Weak';
    return { pillarId: p.id, pillarLabel: p.label, score, status };
  });
}
