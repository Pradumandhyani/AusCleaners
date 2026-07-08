import { SERVICES } from './constants'
import { Service } from '@/types'

export interface LocalServiceData {
  slug: string
  serviceId: string // references base service in SERVICES
  title: string     // optimized local title
  headline: string  // local heading
  subheadline: string
  primaryKeyword: string
  seoTitle: string
  seoDescription: string
  introText: string
  suburbs: string[]
  faqs: { question: string; answer: string }[]
}

export const LOCALIZED_SERVICES: Record<string, LocalServiceData> = {
  'house-cleaning-brisbane': {
    slug: 'house-cleaning-brisbane',
    serviceId: 'residential',
    title: 'House Cleaning Brisbane',
    headline: 'Professional House Cleaning Brisbane',
    subheadline: 'Brisbane’s Most Trusted Home Cleaning Service',
    primaryKeyword: 'House Cleaning Brisbane',
    seoTitle: 'House Cleaning Brisbane | Professional Home Cleaners Brisbane',
    seoDescription: 'Reliable, professional house cleaning services in Brisbane. Fully insured, police-checked cleaners. Get your free home cleaning quote today!',
    introText: 'Keep your home fresh, clean, and hygienic without lifting a finger. Our experienced home cleaning team serves all Brisbane suburbs, providing tailored cleaning solutions that fit your schedule and lifestyle.',
    suburbs: ['Brisbane CBD', 'Fortitude Valley', 'Paddington', 'New Farm', 'West End', 'Carindale', 'Chermside', 'Indooroopilly'],
    faqs: [
      { question: 'What is included in a house clean?', answer: 'Our standard house clean includes dusting, vacuuming, mopping, bathroom cleaning, kitchen bench cleaning, and wiping down exterior appliances.' },
      { question: 'Do you bring your own cleaning supplies?', answer: 'Yes, our team arrives fully equipped with eco-friendly cleaning solutions and high-quality equipment at no extra charge.' }
    ]
  },
  'office-cleaning-brisbane': {
    slug: 'office-cleaning-brisbane',
    serviceId: 'office',
    title: 'Office Cleaning Brisbane',
    headline: 'Commercial Office Cleaning Brisbane Suburbs',
    subheadline: 'Healthy Workspaces for Productive Brisbane Teams',
    primaryKeyword: 'Office Cleaning Brisbane',
    seoTitle: 'Office Cleaning Brisbane | Commercial Office Cleaners QLD',
    seoDescription: 'Professional office cleaning in Brisbane. Custom commercial cleaning plans, fully insured team, flexible hours. Secure your free walkthrough today.',
    introText: 'Promote employee wellness and leave a stellar impression on clients with our customized office cleaning services. We work around your operational hours to avoid disruption.',
    suburbs: ['Brisbane City', 'South Brisbane', 'Milton', 'Spring Hill', 'Bowen Hills', 'Toowong', 'Eagle Farm', 'Hamilton'],
    faqs: [
      { question: 'Do you clean offices after business hours?', answer: 'Yes, we offer flexible commercial cleaning scheduling, including early mornings, late nights, and weekend hours.' },
      { question: 'Are your commercial cleaners insured?', answer: 'Yes, all our staff are police-checked, fully insured with public liability cover, and strictly trained in workplace health and safety.' }
    ]
  },
  'commercial-cleaning-brisbane': {
    slug: 'commercial-cleaning-brisbane',
    serviceId: 'commercial',
    title: 'Commercial Cleaning Brisbane',
    headline: 'Commercial Cleaning Services Brisbane',
    subheadline: 'Professional Commercial Cleaning for Retail & Showrooms',
    primaryKeyword: 'Commercial Cleaning Brisbane',
    seoTitle: 'Commercial Cleaning Brisbane | Retail & Facility Cleaners',
    seoDescription: 'Expert commercial cleaning services across Brisbane. Showrooms, gyms, medical centers, schools, and offices. Certified eco-friendly cleaning.',
    introText: 'From retail shopfronts and gyms to large medical complexes, our commercial cleaning services keep your facility clean, sanitized, and compliant with Brisbane standards.',
    suburbs: ['Brisbane CBD', 'Fortitude Valley', 'Albion', 'Woolloongabba', 'Kangaroo Point', 'Pinkenba', 'Stafford', 'Coorparoo'],
    faqs: [
      { question: 'What types of commercial spaces do you clean?', answer: 'We service office buildings, retail spaces, fitness centers, community halls, and childcare centers.' },
      { question: 'Do you offer commercial waste management?', answer: 'Yes, we can manage standard office recycling, bin rubbish removal, and sanitary bin replenishment as part of our cleaning contract.' }
    ]
  },
  'bond-cleaning-brisbane': {
    slug: 'bond-cleaning-brisbane',
    serviceId: 'end-of-lease',
    title: 'Bond Cleaning Brisbane',
    headline: 'Expert Bond Cleaning Brisbane',
    subheadline: '100% Bond Back Guarantee Real Estate Cleaning Suburbs',
    primaryKeyword: 'Bond Cleaning Brisbane',
    seoTitle: 'Bond Cleaning Brisbane | 100% Bond Return Guarantee Cleaners',
    seoDescription: 'Brisbane’s premier bond cleaning service. Fully compliant with RTA standards, includes oven and windows. Get your full bond back guaranteed.',
    introText: 'Moving out is stressful enough. Let our bond cleaners handle the heavy lifting. We follow a rigorous RTA-approved checklist to ensure your landlord or agent is fully satisfied.',
    suburbs: ['Paddington', 'New Farm', 'Ascot', 'Sunnybank', 'Mount Gravatt', 'Aspley', 'Nundah', 'Kenmore'],
    faqs: [
      { question: 'What is your bond back guarantee?', answer: 'We offer a 100% bond back guarantee. If your real estate agent raises any issue with our clean, we will return to fix it free of charge within 72 hours.' },
      { question: 'Is oven cleaning included in your bond clean?', answer: 'Yes, deep cleaning of the oven (including racks and trays) is fully included in our end-of-lease cleans.' }
    ]
  },
  'end-of-lease-cleaning-brisbane': {
    slug: 'end-of-lease-cleaning-brisbane',
    serviceId: 'end-of-lease',
    title: 'End of Lease Cleaning Brisbane',
    headline: 'End of Lease Cleaning Brisbane Suburbs',
    subheadline: 'Professional End of Lease Cleaners With RTA Guarantee',
    primaryKeyword: 'End of Lease Cleaning Brisbane',
    seoTitle: 'End of Lease Cleaning Brisbane | Professional Vacate Cleaners',
    seoDescription: 'Professional end of lease cleaning services in Brisbane suburbs. Complete vacate cleans with a 100% satisfaction guarantee. Quick quotes online.',
    introText: 'Prepare your rental property for final inspection with Brisbane’s most trusted vacate cleaning team. We clean ovens, skirting boards, walls, light switches, and more.',
    suburbs: ['St Lucia', 'Taringa', 'Toowong', 'Coops Plains', 'Sunnybank Hills', 'Holland Park', 'Carina', 'Claremont'],
    faqs: [
      { question: 'How long does an end of lease clean take?', answer: 'Depending on the property size and condition, it typically takes between 4 to 8 hours for a crew of 2 or 3 cleaners.' },
      { question: 'Do you clean carpets as part of the vacate clean?', answer: 'Carpet steam cleaning is available as a bundled service. Let us know if you need both and we can provide a combined quote.' }
    ]
  },
  'deep-cleaning-brisbane': {
    slug: 'deep-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Deep Cleaning Brisbane',
    headline: 'Intensive Deep Cleaning Brisbane Suburbs',
    subheadline: 'Detailed Spring & Post-Renovation Deep Cleans',
    primaryKeyword: 'Deep Cleaning Brisbane',
    seoTitle: 'Deep Cleaning Brisbane | Professional Deep Cleaners',
    seoDescription: 'Thorough, top-to-bottom deep cleaning services in Brisbane. Ideal for spring cleans, move-ins, and post-build. Instant free quotes.',
    introText: 'When standard cleaning isn’t enough, our deep cleaning service provides an intensive, comprehensive restore. We clean inside cabinets, scrub grout, wipe light fixtures, and wash baseboards.',
    suburbs: ['Kangaroo Point', 'Newstead', 'Teneriffe', 'Clayfield', 'Bulimba', 'Ashgrove', 'Sherwood', 'Yeronga'],
    faqs: [
      { question: 'What makes a deep clean different from a regular clean?', answer: 'Deep cleaning targets built-up grease, grime, and hard-to-reach areas like inside empty cabinets, oven interior, scrubbing tile grout, and baseboards.' },
      { question: 'How often should I get a deep clean?', answer: 'Most Brisbane households benefit from a deep clean twice a year (e.g. spring clean) or when moving in or out of a property.' }
    ]
  },
  'move-in-cleaning-brisbane': {
    slug: 'move-in-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Move In Cleaning Brisbane',
    headline: 'Move In Cleaning Brisbane Suburbs',
    subheadline: 'Start Fresh in a Sanitized, Spotless Home',
    primaryKeyword: 'Move In Cleaning Brisbane',
    seoTitle: 'Move In Cleaning Brisbane | Pre-Move Sanitisation Cleaners',
    seoDescription: 'Moving to a new home in Brisbane? Get a fresh start with our thorough pre-move cleaning service. Complete sanitisation before your furniture arrives.',
    introText: 'Make sure your new home is perfectly clean and sanitized before you unpack your first box. Our Brisbane move-in cleaners sanitise kitchens, bathrooms, floors, and wardrobes so you can move in with peace of mind.',
    suburbs: ['Bardon', 'Alderley', 'Gordon Park', 'Grange', 'Wilston', 'Hawthorne', 'Morningside', 'Corinda'],
    faqs: [
      { question: 'When is the best time to schedule a move-in clean?', answer: 'We highly recommend scheduling the clean for the day before your moving trucks arrive, while the property is completely empty.' },
      { question: 'Do you clean the inside of cupboards?', answer: 'Yes, all cabinets, drawers, and closets are wiped inside and out during our move-in clean.' }
    ]
  },
  'move-out-cleaning-brisbane': {
    slug: 'move-out-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Move Out Cleaning Brisbane',
    headline: 'Move Out Cleaning Services Brisbane',
    subheadline: 'Leave Your Property Spotless for the Next Occupant',
    primaryKeyword: 'Move Out Cleaning Brisbane',
    seoTitle: 'Move Out Cleaning Brisbane | Tenant Vacate Cleaners Brisbane',
    seoDescription: 'Stress-free move out cleaning in Brisbane suburbs. Deep cleaning for kitchens, bathrooms, windows, and floors. Professional receipt for your agent.',
    introText: 'Ensure you leave your property in perfect condition with our professional move-out clean. Perfect for tenants wanting their bond back, and home owners handing over to new buyers.',
    suburbs: ['Camp Hill', 'Norman Park', 'Cooparoo', 'Seven Hills', 'Tarragindi', 'Yeerongpilly', 'Graceville', 'Chelmer'],
    faqs: [
      { question: 'Do you clean walls during a move-out clean?', answer: 'Yes, we wipe down light switches and spot-clean walls. Full wall washing can be added if needed.' },
      { question: 'Do you provide a receipt for my real estate agent?', answer: 'Yes, we send a formal tax invoice and receipt via email immediately after payment, which serves as proof of professional cleaning.' }
    ]
  },
  'carpet-cleaning-brisbane': {
    slug: 'carpet-cleaning-brisbane',
    serviceId: 'carpet',
    title: 'Carpet Cleaning Brisbane',
    headline: 'Hot Water Extraction Carpet Cleaning Brisbane',
    subheadline: 'Restore, Sanitise, and Deodorise Your Carpets',
    primaryKeyword: 'Carpet Cleaning Brisbane',
    seoTitle: 'Carpet Cleaning Brisbane | Professional Steam Carpet Cleaners',
    seoDescription: 'Expert hot water extraction carpet steam cleaning in Brisbane. Remove stains, dust mites, pet odours, and allergens. Quick-drying results.',
    introText: 'Bring your carpets back to life with our advanced hot water extraction cleaning. We penetrate deep into the fibers to eliminate dirt, dust, and stubborn pet stains.',
    suburbs: ['Highgate Hill', 'Dutton Park', 'Annerley', 'Moorooka', 'Salisbury', 'Upper Mount Gravatt', 'Macgregor', 'Eight Mile Plains'],
    faqs: [
      { question: 'How long do carpets take to dry?', answer: 'With our powerful extraction machines, carpets are usually dry to the touch in 3 to 6 hours depending on ventilation.' },
      { question: 'Can you remove tough stains?', answer: 'We use professional-grade pre-treatment solutions for red wine, coffee, mud, and pet accidents, achieving excellent removal rates.' }
    ]
  }
}
