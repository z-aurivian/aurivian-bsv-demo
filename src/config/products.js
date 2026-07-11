// Portfolio — Demo Brief §2.
// Products surface in the header selector and scope most agent views.
// Optional: platformLens for customers that track a cross-indication
// platform/mechanism (e.g. Dyne FORCE™).

export const PRODUCT_OPTIONS = [
  { id: 'anti-d',    name: 'Anti-D',    generic: 'anti-Rho(D) immunoglobulin', indications: ['Rh isoimmunization prophylaxis', 'Postpartum Rh prevention', 'Antenatal prophylaxis'] },
  { id: 'luprodex',  name: 'Luprodex',  generic: 'leuprolide',                 indications: ['Endometriosis', 'Uterine fibroids', 'Prostate cancer', 'Precocious puberty'] },
  { id: 'goserelin', name: 'Goserelin', generic: 'goserelin acetate',          indications: ['Endometriosis', 'Breast cancer', 'Prostate cancer'] },
  { id: 'fertility', name: 'Fertility Portfolio', generic: 'HMG / HCG / FSH', indications: ['IVF / ART', 'Ovulation induction', 'Controlled ovarian stimulation'] },
];

export const PLATFORM_LENS = null;
