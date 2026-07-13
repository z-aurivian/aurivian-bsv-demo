// Messaging alignment pillars — BSV Group demo.
// Per-KOL alignment is computed deterministically in getMessagingAlignment().

export const MESSAGING_PILLARS = [
  { id: 'MP1', name: 'Anti-D Standard of Care',  short: 'Anti-D SoC',  description: 'Anti-D is the evidence-based standard for Rh isoimmunization prophylaxis; BSV\'s formulation meets international quality standards at an accessible price point for Indian healthcare.' },
  { id: 'MP2', name: 'GnRH Agonist Evidence Depth', short: 'GnRH evidence', description: 'Luprodex and Goserelin have demonstrated equivalent efficacy to imported brands in Indian populations, with individualized dosing protocols supported by real-world data.' },
  { id: 'MP3', name: 'Fertility Portfolio Value', short: 'Fertility value', description: 'BSV urinary gonadotropins (HMG, FSH, HCG) deliver equivalent clinical outcomes to recombinant alternatives with significant cost-of-care advantage for patients and IVF centres.' },
  { id: 'MP4', name: 'Scientific Partnership',   short: 'Sci. partnership', description: 'BSV Medical Affairs partners with FOGSI, ISAR, and ESHRE faculty to co-create clinical education, protocol guidance, and real-world evidence that shapes Indian reproductive medicine practice.' },
];

const TIER_BASELINE = { 'Tier 1': 78, 'Tier 2': 64, 'Tier 3': 50 };

export function getMessagingAlignment(kol) {
  if (!kol) return null;
  const baseline = TIER_BASELINE[kol.engagementTier] ?? 60;
  const influenceLift = Math.round((kol.influenceScore - 70) / 4);
  const hash = (kol.id || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  const pillars = MESSAGING_PILLARS.map((p, i) => {
    const offset = ((hash * (i + 7) * 13) % 31) - 15;
    const score = Math.max(20, Math.min(98, baseline + influenceLift + offset));
    return { ...p, score };
  });

  const gap = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0]);
  const strongest = pillars.reduce((max, p) => (p.score > max.score ? p : max), pillars[0]);
  const avgScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  let recommendation;
  if (gap.score >= 75) {
    recommendation = `Strong alignment across all messaging pillars (avg ${avgScore}%). Maintain current cadence — consider advisory board invitation, particularly on ${strongest.short}.`;
  } else if (gap.score >= 55) {
    recommendation = `Average alignment ${avgScore}%. Largest gap is ${gap.name} (${gap.score}%). Recommended: targeted scientific exchange focused on this pillar; bring updated evidence pack.`;
  } else {
    recommendation = `Below-target alignment on ${gap.name} (${gap.score}%). Suggest urgent re-engagement and 1:1 advisory; risk of competitor capture if not addressed within 6 weeks.`;
  }

  return { pillars, avgScore, gap, strongest, recommendation };
}
