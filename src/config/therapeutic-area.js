// Therapeutic area — Demo Brief §3.
// Default fill reflects Alexion (rare hematology/neurology).

export const THERAPEUTIC_AREA = {
  name: 'Women\'s Health, Fertility & Oncology',
  subIndications: ['Rh isoimmunization', 'Endometriosis', 'Uterine fibroids', 'IVF/ART', 'Gynecologic oncology', 'Prostate cancer', 'Critical care'],
  competitors: [
    { name: 'Bharat Serums', company: 'Bharat Biotech', moA: 'Anti-D immunoglobulin (plasma-derived)', posture: 'Primary Anti-D competitor in India' },
    { name: 'Winrho SDF',    company: 'Salix/Bausch',   moA: 'Anti-Rho(D) immunoglobulin IV',          posture: 'Premium international brand, limited India penetration' },
    { name: 'Zoladex',       company: 'AstraZeneca',    moA: 'Goserelin GnRH agonist',                 posture: 'Originator brand for goserelin' },
    { name: 'Lupron Depot',  company: 'AbbVie/Takeda',  moA: 'Leuprolide GnRH agonist',               posture: 'Imported premium competitor to Luprodex' },
    { name: 'Gonal-f',       company: 'Merck KGaA',     moA: 'Recombinant FSH (follitropin alfa)',     posture: 'Key IVF competitor; physicians debate rFSH vs urinary FSH' },
  ],
  advocacyOrgs: ['FOGSI', 'ISAR', 'Indian Menopause Society', 'Indian Society of Oncology'],
};
