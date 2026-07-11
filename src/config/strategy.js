// Strategic framework — BSV Group demo.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Protect and grow Anti-D leadership in Rh isoimmunization',    description: 'Sustain Anti-D as the standard of care in antenatal and postpartum prophylaxis across Tier 1, 2, and 3 hospitals in India.' },
  { id: 'p2', title: 'Advance GnRH agonist use in women\'s health and oncology',    description: 'Strengthen clinical confidence in Luprodex and Goserelin for endometriosis, fibroid management, and hormone-sensitive cancers.' },
  { id: 'p3', title: 'Lead in fertility medicine through portfolio and partnership', description: 'Expand BSV\'s fertility hormone portfolio (HMG/HCG/FSH) in IVF centres; engage ESHRE and FOGSI platforms to shape ART practice.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'Anti-D HCP reach',          description: 'Increase Anti-D prescriber coverage among obstetricians and midwives in Tier 2/3 hospitals where Rh prophylaxis compliance is below target.', ispPillarRef: 'p1' },
  { id: 'MO2', name: 'GnRH agonist confidence',   description: 'Build evidence-based confidence in GnRH agonist protocols for endometriosis and fibroid management among gynaecologists and reproductive endocrinologists.', ispPillarRef: 'p2' },
  { id: 'MO3', name: 'Fertility portfolio depth',  description: 'Expand adoption of BSV fertility hormones (HMG, FSH, HCG) in IVF centres through KOL engagement, protocol education, and congress presence.', ispPillarRef: 'p3' },
  { id: 'MO4', name: 'Oncology hormonal therapy',  description: 'Raise awareness among oncologists and urologists of Luprodex and Goserelin for hormone-sensitive cancers, including breast, prostate, and gynecologic indications.', ispPillarRef: 'p2' },
  { id: 'MO5', name: 'ART outcomes evidence',      description: 'Generate and disseminate real-world evidence on IVF outcomes with BSV fertility hormones to support positioning vs recombinant FSH alternatives.', ispPillarRef: 'p3' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'Anti-D compliance barriers',       moRef: 'MO1', kiq: 'What is preventing consistent Anti-D prophylaxis in Rh-negative patients in Tier 2/3 hospitals?', kits: ['Rh prophylaxis guideline card', 'Patient cost support guide'] },
  { id: 'LP2', name: 'GnRH agonist protocol confidence', moRef: 'MO2', kiq: 'Are gynaecologists confident in 3-month vs 6-month Luprodex Depot protocols for endometriosis?', kits: ['Clinical protocol summary', 'Head-to-head comparison card'] },
  { id: 'LP3', name: 'Fertility stimulation preferences', moRef: 'MO3', kiq: 'How are IVF specialists deciding between urinary and recombinant gonadotropins for controlled ovarian stimulation?', kits: ['HMG vs rFSH evidence card', 'ESHRE guideline summary'] },
  { id: 'LP4', name: 'Oncofertility awareness',           moRef: 'MO4', kiq: 'Are oncologists referring female patients for fertility preservation counselling before starting GnRH agonist therapy?', kits: ['Oncofertility pathway guide', 'KOL advisory panel summary'] },
  { id: 'LP5', name: 'rFSH vs urinary FSH perception',   moRef: 'MO5', kiq: 'Do reproductive endocrinologists perceive urinary FSH as clinically inferior to recombinant FSH for IVF outcomes?', kits: ['RWE outcomes summary', 'Meta-analysis brief'] },
];

export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Sufficient',
  MO4: 'Low',
  MO5: 'Gap',
};
