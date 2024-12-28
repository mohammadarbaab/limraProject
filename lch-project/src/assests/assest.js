import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import appointment_img from "./appointment-doc-img.png";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
import header_img from "./doc-header-img.png";
import Gynecologist from "./Gynecologist.svg";
import Dermatologist from "./Dermatologist.svg";
import logo from "./logo.svg";
import profile_pic from "./profile_image.png";
import dropdown_icon from "./dropdow_icon.svg"
import group_profiles from "./group_profiles.png"
import arrow_icon from "./arrow_icon.svg"
export const assets = {
  logo,
  appointment_img,
  header_img,
  group_profiles,

  // chats_icon,
  // verified_icon,
  // info_icon,
  profile_pic,
  arrow_icon,
  // contact_image,
  // about_image,
  // menu_icon,
  // cross_icon,
  dropdown_icon,
  // upload_icon,
  // stripe_logo,
  // razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: doc1,
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard has a strong commitment to delivering comprehensive medical care.",
    fees: 50,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Bangalore, Karnataka",
    },
  },
  {
    id: 2,
    name: "Dr. Emily Rose",
    speciality: "Pediatrician",
    image: doc2,
    degree: "MBBS, MD Pediatrics",
    experience: "6 Years",
    about: "Dr. Emily is passionate about children's health and well-being.",
    fees: 60,
    address: {
      line1: "5th Avenue, New York",
      line2: "New York, USA",
    },
  },
  {
    id: 3,
    name: "Dr. David Smith",
    speciality: "Cardiologist",
    image: doc3,
    degree: "MBBS, DM Cardiology",
    experience: "10 Years",
    about: "Dr. David specializes in heart diseases and their management.",
    fees: 100,
    address: {
      line1: "King Street, London",
      line2: "England, UK",
    },
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    speciality: "Dentist",
    image: doc4,
    degree: "BDS, MDS",
    experience: "8 Years",
    about: "Dr. Sarah provides expert dental care with a gentle touch.",
    fees: 40,
    address: {
      line1: "Palm Grove, Sydney",
      line2: "New South Wales, Australia",
    },
  },
  {
    id: 5,
    name: "Dr. Alan Walker",
    speciality: "Orthopedist",
    image: doc5,
    degree: "MBBS, MS Orthopedics",
    experience: "12 Years",
    about: "Dr. Alan specializes in joint replacement and sports injuries.",
    fees: 90,
    address: {
      line1: "Main Road, Toronto",
      line2: "Ontario, Canada",
    },
  },
  {
    id: 6,
    name: "Dr. Olivia Brown",
    speciality: "Gynecologist",
    image: doc6,
    degree: "MBBS, MD Obstetrics and Gynecology",
    experience: "7 Years",
    about: "Dr. Olivia offers compassionate care in women's health.",
    fees: 80,
    address: {
      line1: "Greenwich Village, London",
      line2: "England, UK",
    },
  },
  {
    id: 7,
    name: "Dr. Michael Clark",
    speciality: "Neurologist",
    image: doc7,
    degree: "MBBS, MD Neurology",
    experience: "9 Years",
    about: "Dr. Michael specializes in treating neurological disorders.",
    fees: 120,
    address: {
      line1: "Oxford Street, London",
      line2: "England, UK",
    },
  },
  {
    id: 8,
    name: "Dr. Natalie White",
    speciality: "Dermatologist",
    image: doc8,
    degree: "MBBS, MD Dermatology",
    experience: "5 Years",
    about:
      "Dr. Natalie treats various skin conditions and offers aesthetic services.",
    fees: 70,
    address: {
      line1: "Baker Street, London",
      line2: "England, UK",
    },
  },
  {
    id: 9,
    name: "Dr. Daniel Harris",
    speciality: "Endocrinologist",
    image: doc9,
    degree: "MBBS, MD Endocrinology",
    experience: "11 Years",
    about:
      "Dr. Daniel specializes in treating hormonal and metabolic disorders.",
    fees: 110,
    address: {
      line1: "Highland Road, Glasgow",
      line2: "Scotland, UK",
    },
  },
  {
    id: 10,
    name: "Dr. Sophia Turner",
    speciality: "Oncologist",
    image: doc10,
    degree: "MBBS, MD Oncology",
    experience: "14 Years",
    about: "Dr. Sophia provides specialized care for cancer patients.",
    fees: 150,
    address: {
      line1: "Park Avenue, New York",
      line2: "New York, USA",
    },
  },
  {
    id: 11,
    name: "Dr. James Lee",
    speciality: "Gastroenterologist",
    image: doc11,
    degree: "MBBS, MD Gastroenterology",
    experience: "6 Years",
    about:
      "Dr. James treats digestive system disorders and provides expert advice.",
    fees: 85,
    address: {
      line1: "Main Street, Chicago",
      line2: "Illinois, USA",
    },
  },
  {
    id: 12,
    name: "Dr. Ava Scott",
    speciality: "Psychiatrist",
    image: doc12,
    degree: "MBBS, MD Psychiatry",
    experience: "10 Years",
    about: "Dr. Ava offers compassionate mental health care and therapy.",
    fees: 75,
    address: {
      line1: "Sunset Boulevard, Los Angeles",
      line2: "California, USA",
    },
  },
  {
    id: 13,
    name: "Dr. Lucas Harris",
    speciality: "Urologist",
    image: doc13,
    degree: "MBBS, MS Urology",
    experience: "7 Years",
    about:
      "Dr. Lucas specializes in treating urinary tract and male reproductive system disorders.",
    fees: 90,
    address: {
      line1: "River Road, Miami",
      line2: "Florida, USA",
    },
  },
  {
    id: 14,
    name: "Dr. Isabella King",
    speciality: "Ophthalmologist",
    image: doc14,
    degree: "MBBS, MD Ophthalmology",
    experience: "15 Years",
    about:
      "Dr. Isabella offers advanced eye care and vision correction treatments.",
    fees: 130,
    address: {
      line1: "Kingston Road, Toronto",
      line2: "Ontario, Canada",
    },
  },
  {
    id: 15,
    name: "Dr. Henry Miller",
    speciality: "Rheumatologist",
    image: doc1,
    degree: "MBBS, MD Rheumatology",
    experience: "8 Years",
    about:
      "Dr. Henry specializes in the diagnosis and treatment of autoimmune diseases.",
    fees: 95,
    address: {
      line1: "Sunset Avenue, San Francisco",
      line2: "California, USA",
    },
  },
];
