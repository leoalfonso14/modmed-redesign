export interface SuccessStory {
  id: string;
  practiceName: string;
  specialty: string;
  location: string;
  result: string;
  quote: string;
  author: string;
  authorTitle: string;
  kpis: { label: string; value: string }[];
  imageDesc: string;
}

export const STORIES_DATA: SuccessStory[] = [
  {
    id: 'mid-state-ortho',
    practiceName: 'Mid State Orthopaedic',
    specialty: 'Orthopedics',
    location: 'Alexandria, LA',
    result: 'Reclaimed significant staff time and improved patient communication via the portal.',
    quote: 'When a company is this thoughtful about the workflow, it shows they really care about the doctor’s experience.',
    author: 'Keith Hollingsworth',
    authorTitle: 'Practice Administrator',
    kpis: [
      { label: 'Staff Efficiency', value: '+40%' },
      { label: 'Portal Adoption', value: 'High' }
    ],
    imageDesc: 'A modern orthopedic clinic with active staff using tablets.'
  },
  {
    id: 'laser-vision-nj',
    practiceName: 'Laser Vision Correction Center of NJ',
    specialty: 'Ophthalmology',
    location: 'West Orange, NJ',
    result: 'Achieved faster charting, more accurate coding, and superior patient engagement.',
    quote: 'We were not maximizing efficiency or billing with our previous EHR... after implementation, the practice experienced faster charting.',
    author: 'Dr. John Doe',
    authorTitle: 'Medical Director',
    kpis: [
      { label: 'Charting Speed', value: '2x Faster' },
      { label: 'Billing Accuracy', value: '99%' }
    ],
    imageDesc: 'Ophthalmologist examining a patient with advanced eye-tracking technology.'
  },
  {
    id: 'ozark-derm',
    practiceName: 'Ozark Dermatology',
    specialty: 'Dermatology',
    location: 'Fayetteville, AR',
    result: 'Significant boost in revenue and collections; high staff satisfaction.',
    quote: 'Our most skeptical providers are now singing ModMed’s praises, and our staff finally feels successful.',
    author: 'Gheorghe Pusta',
    authorTitle: 'CEO',
    kpis: [
      { label: 'Revenue Growth', value: '+25%' },
      { label: 'Staff Satisfaction', value: '98%' }
    ],
    imageDesc: 'Dermatology office with a clean, clinical aesthetic and smiling staff.'
  }
];
