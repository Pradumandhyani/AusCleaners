import { Service, Testimonial, FAQItem } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description:
      'Professional home cleaning tailored to your lifestyle. We keep your living space spotless, hygienic, and refreshed every visit.',
    icon: 'Home',
    features: [
      'Bedrooms & living areas',
      'Kitchen & bathrooms',
      'Dusting & vacuuming',
      'Mopping all floors',
      'Window sills & skirting boards',
      'Flexible scheduling',
    ],
    price: 'From $120',
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description:
      'Comprehensive cleaning solutions for retail, hospitality, and commercial spaces that make a lasting impression on your customers.',
    icon: 'Building2',
    features: [
      'Retail & showroom cleaning',
      'Restaurant & café cleaning',
      'Gym & fitness centre cleaning',
      'After-hours service available',
      'Waste management',
      'Eco-friendly products',
    ],
    price: 'From $200',
  },
  {
    id: 'office',
    title: 'Office Cleaning',
    description:
      'Create a productive, healthy work environment with our professional office cleaning services designed for modern workplaces.',
    icon: 'Briefcase',
    features: [
      'Workstations & desks',
      'Meeting rooms & boardrooms',
      'Kitchen & break rooms',
      'Toilets & bathrooms',
      'Reception areas',
      'Daily or weekly service',
    ],
    price: 'From $150',
  },
  {
    id: 'end-of-lease',
    title: 'End of Lease Cleaning',
    description:
      'Get your full bond back guaranteed. Our thorough end-of-lease clean covers every inch of your property to meet real estate standards.',
    icon: 'KeyRound',
    features: [
      'Full property deep clean',
      'Oven & appliance cleaning',
      'Carpet steam cleaning',
      'Window cleaning',
      'Bond back guarantee',
      'Same-day service available',
    ],
    price: 'From $280',
  },
  {
    id: 'carpet',
    title: 'Carpet Cleaning',
    description:
      'Professional hot water extraction carpet cleaning to remove deep-seated dirt, allergens, stains, and odours from all carpet types.',
    icon: 'Layers',
    features: [
      'Hot water extraction method',
      'Pre-treatment for stains',
      'Pet odour treatment',
      'Deodorising & sanitising',
      'Rugs & upholstery',
      'Quick dry time',
    ],
    price: 'From $80/room',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description:
      'A thorough, top-to-bottom intensive clean for when your property needs extra attention — perfect for move-ins, spring cleaning, or post-renovation.',
    icon: 'Sparkles',
    features: [
      'Inside cupboards & drawers',
      'Appliance deep clean',
      'Grout & tile scrubbing',
      'Light fixtures & fans',
      'Behind & under furniture',
      'Full sanitisation',
    ],
    price: 'From $350',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Homeowner, Brisbane',
    content:
      'Auswide Cleaning transformed my home! The team was punctual, professional, and incredibly thorough. My house has never looked this clean. I\'ve been using them monthly for 2 years now.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Thornton',
    role: 'Office Manager, Brisbane CBD',
    content:
      'We switched our office cleaning to Auswide Cleaning 18 months ago and the difference is night and day. Our staff love coming to work in a clean, fresh environment. Highly recommend!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Property Manager, Brisbane',
    content:
      'I manage 12 rental properties and Auswide Cleaning handles all my end-of-lease cleans. They\'ve saved me so many headaches with tenants and the bond-back guarantee is a lifesaver.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Chen',
    role: 'Restaurant Owner, Brisbane',
    content:
      'Running a restaurant means cleanliness is non-negotiable. Auswide Cleaning\'s commercial team is reliable, detail-oriented, and always available when I need them. Outstanding service!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Kowalski',
    role: 'Busy Parent, Brisbane',
    content:
      'As a mum of three with a full-time job, Auswide Cleaning is an absolute lifesaver. They\'re trustworthy, flexible, and the results are consistently amazing. Worth every penny!',
    rating: 5,
  },
  {
    id: '6',
    name: 'Mark O\'Brien',
    role: 'Real Estate Agent, Brisbane',
    content:
      'I refer Auswide Cleaning to all my landlord clients. Their end-of-lease cleans are the best in the business — properties always look presentation-ready and bonds are returned without dispute.',
    rating: 5,
  },
]

export const FAQS: FAQItem[] = [
  {
    question: 'How do I get a quote?',
    answer:
      'Getting a quote is easy! Simply fill out our contact form, call us, or send us an email. We\'ll get back to you within 2 hours during business hours with a detailed, no-obligation quote tailored to your needs.',
    category: 'General',
  },
  {
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer:
      'Yes! Our professional cleaners arrive fully equipped with all necessary cleaning products, tools, and equipment. We use eco-friendly, hospital-grade disinfectants that are safe for children, pets, and the environment.',
    category: 'General',
  },
  {
    question: 'Are your cleaners insured and police checked?',
    answer:
      'Absolutely. All our cleaning staff are fully police-checked, insured, and undergo comprehensive training before joining our team. Your safety and the security of your property are our top priorities.',
    category: 'General',
  },
  {
    question: 'Do I need to be home during the clean?',
    answer:
      'No, you don\'t need to be present. Many of our clients provide us with a key or access code. We operate with the highest level of integrity and discretion. All cleaners are vetted and trusted professionals.',
    category: 'General',
  },
  {
    question: 'What is your bond-back guarantee for end-of-lease cleaning?',
    answer:
      'We guarantee that our end-of-lease cleaning will meet your property manager\'s standards. If for any reason your property manager is not satisfied, we will return to re-clean the specified areas free of charge within 72 hours.',
    category: 'Services',
  },
  {
    question: 'How often should I schedule professional cleaning?',
    answer:
      'For residential cleaning, we recommend fortnightly visits for average-sized homes. Weekly service is ideal for larger homes or busy families. Commercial properties often benefit from daily or several-times-per-week cleaning.',
    category: 'Services',
  },
  {
    question: 'Can I reschedule or cancel my booking?',
    answer:
      'We understand plans change. You can reschedule or cancel your booking with at least 24 hours notice at no charge. Cancellations made with less than 24 hours notice may incur a small fee.',
    category: 'Booking',
  },
  {
    question: 'Do you offer same-day or emergency cleaning?',
    answer:
      'Yes! We offer same-day and emergency cleaning services subject to availability. Please call us directly for urgent requests, and we\'ll do our best to accommodate you as quickly as possible.',
    category: 'Booking',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We service all metropolitan areas and many surrounding suburbs. Enter your address in our contact form or give us a call to confirm if we cover your area. We\'re expanding our service zones regularly.',
    category: 'General',
  },
  {
    question: 'How do you ensure quality and consistency?',
    answer:
      'We use comprehensive cleaning checklists for every service, conduct regular quality inspections, and follow up with clients after each clean. We also have a client satisfaction guarantee — if you\'re not happy, we\'ll make it right.',
    category: 'Quality',
  },
]

export const COMPANY = {
  name: 'Auswide Cleaning',
  tagline: 'Your Trusted Cleaning Experts',
  phone: '+61 452 419 301',
  email: 'auswide71@gmail.com',
  address: 'Brisbane',
  hours: 'Mon–Sat: 7am – 7pm',
  abn: '12 345 678 901',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
}

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Request a Quote',
    description:
      'Fill in our simple online form or give us a call. We\'ll provide a detailed, transparent quote within 2 hours — no hidden fees.',
  },
  {
    step: '02',
    title: 'Confirm Your Booking',
    description:
      'Choose a date and time that suits you. We\'ll confirm your booking instantly and send a reminder the day before.',
  },
  {
    step: '03',
    title: 'We Clean, You Relax',
    description:
      'Our professional team arrives on time, fully equipped. You can stay or leave — your choice. We treat your property with the utmost care.',
  },
  {
    step: '04',
    title: 'Enjoy the Shine',
    description:
      'Walk into a sparkling clean space. We follow up to ensure you\'re 100% satisfied. Recurring bookings are managed automatically.',
  },
]
