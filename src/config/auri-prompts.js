// Auri suggested prompts — BSV Group demo.

export const AURI_PROMPTS = [
  { id: 'ap1', label: 'ESHRE rFSH rebuttal', prompt: 'Summarise the clinical evidence supporting BSV urinary gonadotropins vs recombinant FSH for IVF — pull the IVFCARE India RCT and Cochrane data.' },
  { id: 'ap2', label: 'Anti-D compliance gap', prompt: 'What are the main barriers to Anti-D prophylaxis compliance in Tier 2 and Tier 3 hospitals, and what actions has NOVA proposed?' },
  { id: 'ap3', label: 'Dr. Meenakshi Sundaram alert', prompt: 'Give me the full picture on Dr. Meenakshi Sundaram — her alignment trend, what shifted, and the recommended MSL action.' },
  { id: 'ap4', label: 'FOGSI 2026 top themes', prompt: 'What were the most strategically relevant themes and sessions at FOGSI 2026 for BSV, and how do they map to our medical objectives?' },
  { id: 'ap5', label: 'Oncofertility opportunity', prompt: 'Summarise the oncofertility engagement opportunity for Luprodex — which KOLs are asking, which oncology centres should be prioritised, and what MSL material is needed?' },
  { id: 'ap6', label: 'Priyanka & Dr. Pradeep prep', prompt: 'Help me prepare for the follow-up call with Dr. Priyanka Joshi and Dr. Pradeep — what should we highlight from NOVA and LUCA that speaks directly to their pain points?' },
];

export const SUGGESTED_PROMPTS = AURI_PROMPTS.map(p => p.prompt);
