

//-----------------------------------
// GENERAL ASSETS
//-----------------------------------
import heroimage from './heroimage.png'
import logo from './logo2.png' // you had logo2.png in your folder list

//-----------------------------------
// FARMER WELFARE ASSETS
//-----------------------------------
import farmer_working_in_field from './farmer_welf/farmer_working_in_field.jpg'
import kisan_Credit_Card from './farmer_welf/kisan_Credit_Card.jpg'
import pm_Kisan_Samman from './farmer_welf/pm_Kisan_Samman.jpg'
import PMKSY from './farmer_welf/PMKSY.jpg'
import pradhan_Mantri_Fasal from './farmer_welf/pradhan_Mantri_Fasal.jpg'

//-----------------------------------
// HIGHER EDUCATION ASSETS
//-----------------------------------
import PDS from './higher_Edu/PDS.png'
import PJVNB from './higher_Edu/PJVNB.jpg'
import POST from './higher_Edu/POST.jpg'
import RSMS from './higher_Edu/RSMS.png'
import TF from './higher_Edu/TF.jpg'

//-----------------------------------
// SECONDARY EDUCATION
//-----------------------------------
import NMMS from './secondary_Edu/NMMS.jpg'
import RMSA from './secondary_Edu/RMSA.jpg'
import SSA from './secondary_Edu/SSA.jpg'
import vocational from './secondary_Edu/vocational.jpg'

//-----------------------------------
// WOMEN WELFARE
//-----------------------------------
import beti_Bachao from './women_welf/beti_Bachao.jpg'
import ladki_bahin from './women_welf/ladki_bahin.jpg'
import swadhar_grih from './women_welf/swadhar_grih.jpg'
import women_emp from './women_welf/women-emp.webp'

//-----------------------------------
// EXPORTING ALL AS A SINGLE OBJECT
//-----------------------------------
export const assets = {
  heroimage,
  logo,

  // Farmer Welfare
  farmer_working_in_field,
  kisan_Credit_Card,
  pm_Kisan_Samman,
  PMKSY,
  pradhan_Mantri_Fasal,

  // Higher Education
  PDS,
  PJVNB,
  POST,
  RSMS,
  TF,

  // Secondary Education
  NMMS,
  RMSA,
  SSA,
  vocational,

  // Women Welfare
  beti_Bachao,
  ladki_bahin,
  swadhar_grih,
  women_emp,
}

//-----------------------------------
// CATEGORY-LIST EXPORTS (for UI)
//-----------------------------------
export const farmer_welfare_list = [
  { title: 'Farmer Working in Field', image: farmer_working_in_field },
  { title: 'Kisan Credit Card', image: kisan_Credit_Card },
  { title: 'PM Kisan Samman', image: pm_Kisan_Samman },
  { title: 'PMKSY', image: PMKSY },
  { title: 'Pradhan Mantri Fasal', image: pradhan_Mantri_Fasal },
]

export const higher_education_list = [
  { title: 'PDS', image: PDS },
  { title: 'PJVNB', image: PJVNB },
  { title: 'POST', image: POST },
  { title: 'RSMS', image: RSMS },
  { title: 'TF', image: TF },
]

export const secondary_education_list = [
  { title: 'NMMS', image: NMMS },
  { title: 'RMSA', image: RMSA },
  { title: 'SSA', image: SSA },
  { title: 'Vocational', image: vocational },
]
  

export const women_welfare_list = [
  { title: 'Beti Bachao', image: beti_Bachao },
  { title: 'Ladki Bahin', image: ladki_bahin },
  { title: 'Swadhar Grih', image: swadhar_grih },
  { title: 'Women Empowerment', image: women_emp },
]
