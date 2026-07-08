export interface LocalServiceTestimonial {
  name: string
  suburb: string
  rating: number
  text: string
}

export interface LocalServiceBenefit {
  title: string
  description: string
  icon: string
}

export interface LocalServiceStep {
  step: string
  title: string
  detail: string
}

export interface LocalServiceRelated {
  slug: string
  title: string
}

export interface LocalServiceData {
  slug: string
  serviceId: string
  title: string
  headline: string
  subheadline: string
  primaryKeyword: string
  seoTitle: string
  seoDescription: string
  introText: string
  longDescription: string[]
  whyChooseUs: string[]
  benefits: LocalServiceBenefit[]
  processSteps: LocalServiceStep[]
  testimonials: LocalServiceTestimonial[]
  relatedServices: LocalServiceRelated[]
  suburbs: string[]
  faqs: { question: string; answer: string }[]
}

export const LOCALIZED_SERVICES: Record<string, LocalServiceData> = {

  'house-cleaning-brisbane': {
    slug: 'house-cleaning-brisbane',
    serviceId: 'residential',
    title: 'House Cleaning Brisbane',
    headline: 'Professional House Cleaning Brisbane',
    subheadline: 'Brisbane\'s Most Trusted Home Cleaning Service — Tailored, Insured, and Guaranteed',
    primaryKeyword: 'House Cleaning Brisbane',
    seoTitle: 'House Cleaning Brisbane | Professional Home Cleaners | Auswide Cleaners',
    seoDescription: 'Reliable, professional house cleaning services across Brisbane. Fully insured, police-checked cleaners. Eco-friendly products. Free quote in under 2 hours.',
    introText: 'Keep your Brisbane home fresh, clean, and hygienic without lifting a finger. Our experienced residential cleaning team serves all Brisbane suburbs, delivering tailored solutions that fit your schedule and lifestyle.',
    longDescription: [
      'Maintaining a clean home in Brisbane is more than just aesthetics — it directly impacts your family\'s health, comfort, and mental wellbeing. At Auswide Cleaners, we understand that Brisbane homeowners lead busy lives, juggling work, family, and social commitments. That\'s why we offer flexible, reliable house cleaning services that slot seamlessly into your schedule, whether you need a weekly refresh, a fortnightly deep tidy, or a one-off seasonal clean.',
      'Our professional residential cleaners are carefully vetted, police-checked, and trained to deliver consistent, high-quality results on every visit. We use only eco-friendly, hospital-grade cleaning products that are safe for children, pets, and allergy sufferers — while remaining tough on grease, grime, and bacteria. From Brisbane\'s inner suburbs like Paddington and New Farm to outer areas like Carindale and Chermside, our team brings the same five-star standard to every home.',
      'What sets Auswide Cleaners apart from other house cleaning services in Brisbane is our attention to detail and commitment to communication. Before your first clean, we discuss your specific priorities and any areas that need special attention. Our cleaners follow a thorough room-by-room checklist that covers every surface, corner, and fixture — leaving your home spotless from the ceiling fans to the skirting boards.',
      'Whether you\'re preparing for guests, recovering from a busy week, or simply want to reclaim your time, our Brisbane house cleaning service delivers peace of mind with every visit. We are fully insured with public liability cover, and we back every clean with our 100% satisfaction guarantee — if you\'re not happy, we come back and make it right at no extra cost.',
    ],
    whyChooseUs: [
      'All cleaners are police-checked and fully insured with $20M public liability cover',
      'Eco-friendly, non-toxic cleaning products safe for children and pets',
      '100% satisfaction guarantee — we return free of charge if you\'re not happy',
      'Flexible scheduling including weekends and same-day bookings available',
    ],
    benefits: [
      { title: 'Flexible Scheduling', description: 'Choose weekly, fortnightly, monthly, or one-off cleans. We work around your calendar, including weekends and early mornings.', icon: 'Calendar' },
      { title: 'Eco-Friendly Products', description: 'All our cleaning solutions are biodegradable and non-toxic, safe for children, pets, and sensitive Brisbane households.', icon: 'Leaf' },
      { title: 'Fully Insured Team', description: 'Every cleaner carries $20M public liability insurance. Your property, belongings, and family are always protected.', icon: 'Shield' },
      { title: 'Police-Checked Staff', description: 'We conduct thorough background checks on all our cleaners before they enter any Brisbane home. Your safety is our priority.', icon: 'UserCheck' },
      { title: 'Satisfaction Guarantee', description: 'Not happy with your clean? We return within 24 hours and re-clean the affected areas completely free of charge.', icon: 'Star' },
      { title: 'Professional Equipment', description: 'We bring commercial-grade vacuums, microfibre cloths, steam mops, and specialty tools — no shortcuts, no substandard results.', icon: 'Sparkles' },
    ],
    processSteps: [
      { step: '01', title: 'Book Online or Call', detail: 'Fill in our quick online enquiry form or call us directly. Tell us your home size, frequency, and any priority areas. We\'ll send you a transparent, no-obligation quote within 2 hours.' },
      { step: '02', title: 'Confirm Your Clean', detail: 'Once you\'re happy with the quote, confirm your preferred date and time. We\'ll send a booking confirmation and a reminder SMS the day before your clean.' },
      { step: '03', title: 'We Clean Your Home', detail: 'Our professional team arrives on time with all equipment and supplies. We follow a comprehensive room-by-room checklist tailored to your home\'s specific needs.' },
      { step: '04', title: 'Quality Check & Sign-Off', detail: 'After the clean, our team leader does a walkthrough to ensure every area meets our high standards. We contact you after the visit to confirm your satisfaction.' },
    ],
    testimonials: [
      { name: 'Sarah M.', suburb: 'New Farm', rating: 5, text: 'I\'ve tried four different cleaning companies in Brisbane and Auswide Cleaners is by far the best. They\'re thorough, punctual, and so easy to communicate with. My house has never looked so good!' },
      { name: 'James & Priya T.', suburb: 'Paddington', rating: 5, text: 'We use Auswide for fortnightly cleans and we couldn\'t be happier. The team is consistent, professional, and always goes above and beyond. Highly recommended for Brisbane families.' },
      { name: 'Rebecca L.', suburb: 'Indooroopilly', rating: 5, text: 'Booked a one-off clean before hosting a dinner party. The results were incredible — my bathroom tiles were gleaming. Will definitely book regular cleans going forward.' },
    ],
    relatedServices: [
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
      { slug: 'office-cleaning-brisbane', title: 'Office Cleaning Brisbane' },
    ],
    suburbs: ['Brisbane CBD', 'Fortitude Valley', 'Paddington', 'New Farm', 'West End', 'Carindale', 'Chermside', 'Indooroopilly', 'Toowong', 'Taringa', 'Ashgrove', 'Kelvin Grove', 'Red Hill', 'Bardon', 'Auchenflower', 'Milton'],
    faqs: [
      { question: 'What is included in a standard house clean in Brisbane?', answer: 'Our standard residential clean covers all living areas, bedrooms, bathrooms, kitchen bench tops and appliance exteriors, vacuuming all carpeted areas, mopping hard floors, dusting surfaces, wiping light switches, and cleaning mirrors. We provide a full checklist on request.' },
      { question: 'Do your Brisbane cleaners bring their own equipment and products?', answer: 'Yes, our team arrives fully equipped with commercial-grade vacuums, microfibre cloths, steam mops, eco-friendly cleaning solutions, and all necessary tools. You don\'t need to provide anything.' },
      { question: 'Are your house cleaners police-checked?', answer: 'Absolutely. All Auswide Cleaners staff undergo a thorough National Police Check before employment. We also conduct regular reference checks and in-house training to ensure our standards remain high.' },
      { question: 'Do I need to be home during the clean?', answer: 'Not at all. Many of our Brisbane clients provide a key or code for secure entry. Our cleaners are fully trusted and insured. You can stay or leave — the choice is entirely yours.' },
      { question: 'How much does house cleaning cost in Brisbane?', answer: 'Our pricing is based on home size, frequency, and specific requirements. We offer free, no-obligation quotes within 2 hours of your enquiry. Regular clients typically receive discounted rates for ongoing bookings.' },
      { question: 'What happens if I\'m not happy with the clean?', answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy with any aspect of your clean, contact us within 24 hours and we\'ll return to rectify the issue at no extra cost.' },
      { question: 'Can I book a one-off house clean or only regular service?', answer: 'We offer both! Whether you need a single spring clean, pre-sale clean, post-renovation clean, or a regular weekly/fortnightly service, we have you covered. One-off bookings are always welcome.' },
      { question: 'Do you offer same-day house cleaning in Brisbane?', answer: 'Yes, subject to availability, we do offer same-day cleaning for urgent requests. Contact us early in the day and we\'ll do our best to accommodate you across all Brisbane suburbs.' },
    ],
  },

  'office-cleaning-brisbane': {
    slug: 'office-cleaning-brisbane',
    serviceId: 'office',
    title: 'Office Cleaning Brisbane',
    headline: 'Professional Office Cleaning Brisbane',
    subheadline: 'Healthier Workspaces, Happier Teams — Brisbane\'s Leading Office Cleaners',
    primaryKeyword: 'Office Cleaning Brisbane',
    seoTitle: 'Office Cleaning Brisbane | Professional Commercial Office Cleaners',
    seoDescription: 'Expert office cleaning services across Brisbane CBD and suburbs. Custom plans, fully insured team, flexible after-hours scheduling. Free quote today.',
    introText: 'A clean, organized workspace improves employee productivity, reduces sick days, and makes a powerful first impression on clients. Auswide Cleaners provides professional, discreet, and reliable office cleaning services across all Brisbane business districts.',
    longDescription: [
      'The cleanliness of your Brisbane office is a direct reflection of your business. Whether you run a boutique consultancy in Spring Hill, a busy legal firm in the Brisbane CBD, or a growing tech startup in South Brisbane, the standard of your workspace affects employee morale, client perception, and business outcomes. Auswide Cleaners delivers consistently exceptional office cleaning that works around your business hours — not the other way around.',
      'Our dedicated commercial cleaning teams are trained specifically for office environments. We understand the sensitivity of working in occupied spaces — the need for minimal disruption, the importance of document confidentiality, and the care required around expensive IT equipment. Our cleaners use HEPA-filter vacuums and electrostatic equipment to reduce airborne allergens, and we apply hospital-grade disinfectants to all high-touch surfaces including phones, keyboards, light switches, and door handles.',
      'Every Brisbane business is unique. That\'s why we never take a one-size-fits-all approach. We begin every new office cleaning contract with a free on-site assessment, where we map out your layout, understand your priorities, and develop a custom cleaning schedule. Whether you need daily cleaning for a 200-person office or a weekly service for a small team of 10, we tailor our service precisely to your requirements and budget.',
      'With growing awareness of workplace health and hygiene in Brisbane following COVID-19, maintaining a clean office is no longer optional — it\'s a business necessity. Our team uses certified disinfection products and follows strict hygiene protocols to ensure your office meets modern workplace health standards. We also offer optional deep sanitation services for flu season, post-illness cleanups, and before/after large meetings or events.',
    ],
    whyChooseUs: [
      'Flexible scheduling — before hours, after hours, weekends, and public holidays',
      'Security-screened cleaners trusted by Brisbane\'s top professional firms',
      'HEPA-filter vacuums and hospital-grade disinfectants as standard',
      'Dedicated account manager and monthly quality reviews included',
    ],
    benefits: [
      { title: 'After-Hours Service', description: 'We clean when your team has gone home — no disruption, no distractions, just a spotless office ready for the next business day.', icon: 'Moon' },
      { title: 'Custom Cleaning Plans', description: 'Every office has unique needs. We build a cleaning schedule around your layout, headcount, and budget — then stick to it consistently.', icon: 'ClipboardList' },
      { title: 'Reduce Staff Sick Days', description: 'Proper disinfection of shared surfaces, kitchens, and bathrooms reduces the spread of illness and can meaningfully lower staff absenteeism.', icon: 'Heart' },
      { title: 'Impress Clients', description: 'A spotless reception, gleaming boardroom, and fresh-smelling workspace tells clients you mean business before you\'ve said a word.', icon: 'Star' },
      { title: 'Fully Insured & Trusted', description: 'All our commercial cleaners are background-checked, insured, and vetted for working in sensitive business environments.', icon: 'Shield' },
      { title: 'Dedicated Account Manager', description: 'You\'ll have a single point of contact who knows your office and ensures your standards are always met. No call centres, no runarounds.', icon: 'UserCheck' },
    ],
    processSteps: [
      { step: '01', title: 'Free Site Assessment', detail: 'We visit your Brisbane office, map your floor plan, understand your priorities, and discuss any sensitive areas or access requirements.' },
      { step: '02', title: 'Custom Quote & Plan', detail: 'We prepare a detailed, transparent cleaning proposal tailored to your office size, frequency, and specific requirements — with no hidden fees.' },
      { step: '03', title: 'Service Begins', detail: 'Our trained commercial cleaning team arrives at the agreed time, equipped with all supplies. We follow your custom checklist on every visit.' },
      { step: '04', title: 'Ongoing Quality Checks', detail: 'Your dedicated account manager conducts regular site reviews and checks in with you monthly to ensure standards remain exactly where you need them.' },
    ],
    testimonials: [
      { name: 'Daniel K.', suburb: 'Brisbane CBD', rating: 5, text: 'We\'ve had Auswide Cleaners servicing our 3-floor office building for over two years. Absolutely faultless — reliable, professional, and always responsive. Our staff and clients constantly comment on how clean the office is.' },
      { name: 'Amanda W.', suburb: 'South Brisbane', rating: 5, text: 'Switched from our previous cleaner to Auswide and the difference was immediate. They actually follow the checklist every single time. Our account manager is fantastic — always available and on top of things.' },
      { name: 'Michael O.', suburb: 'Fortitude Valley', rating: 5, text: 'As a medical practice, hygiene is critical for us. Auswide\'s team understands this completely — their disinfection protocols are thorough and we\'ve had zero complaints from staff or patients.' },
    ],
    relatedServices: [
      { slug: 'commercial-cleaning-brisbane', title: 'Commercial Cleaning Brisbane' },
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
      { slug: 'house-cleaning-brisbane', title: 'House Cleaning Brisbane' },
    ],
    suburbs: ['Brisbane CBD', 'South Brisbane', 'Milton', 'Spring Hill', 'Bowen Hills', 'Toowong', 'Eagle Farm', 'Hamilton', 'Fortitude Valley', 'Newstead', 'Teneriffe', 'Kelvin Grove', 'Herston', 'Greenslopes', 'Kangaroo Point', 'Woolloongabba'],
    faqs: [
      { question: 'What hours do you offer office cleaning in Brisbane?', answer: 'We offer fully flexible scheduling for Brisbane offices — including early morning starts from 5am, after-hours cleaning from 6pm, weekends, and public holidays. We work around your business, not the other way around.' },
      { question: 'How do you handle security and access to our office?', answer: 'We have strict key management protocols, access code confidentiality agreements, and all our staff sign NDA-equivalent workplace confidentiality forms. Your office\'s security is never compromised.' },
      { question: 'Do you bring your own office cleaning supplies?', answer: 'Yes. We supply all commercial-grade cleaning equipment and products including HEPA vacuums, microfibre cloths, hospital-grade disinfectants, and eco-friendly floor cleaning solutions at no additional cost.' },
      { question: 'Can you provide COVID-safe cleaning and disinfection?', answer: 'Yes, we offer certified surface disinfection services using TGA-approved products. This can be added to any regular office cleaning plan or booked as a standalone service for post-illness or high-traffic periods.' },
      { question: 'Do we need to sign a long-term contract?', answer: 'No lock-in contracts are required. We offer month-to-month arrangements and believe our service quality speaks for itself. Most of our Brisbane office clients stay with us for years.' },
      { question: 'How do you ensure consistency across every clean?', answer: 'Each client has a dedicated account manager and custom cleaning checklist. We conduct regular site quality audits and follow up after every service to ensure standards are always met.' },
      { question: 'Can you clean IT equipment and computer workstations?', answer: 'Yes. We use anti-static cloths and specialist screen-cleaning solutions for monitors, keyboards, and IT equipment. We follow your specific instructions for any sensitive equipment areas.' },
      { question: 'What is the minimum office size you clean?', answer: 'We service offices of all sizes — from small teams of 5 in a single-room setup to multi-floor corporate buildings. Get in touch for a tailored quote regardless of your office size.' },
    ],
  },

  'commercial-cleaning-brisbane': {
    slug: 'commercial-cleaning-brisbane',
    serviceId: 'commercial',
    title: 'Commercial Cleaning Brisbane',
    headline: 'Commercial Cleaning Services Brisbane',
    subheadline: 'Professional Commercial Cleaners for Retail, Hospitality & Facilities Across Brisbane',
    primaryKeyword: 'Commercial Cleaning Brisbane',
    seoTitle: 'Commercial Cleaning Brisbane | Retail, Gym & Facility Cleaners QLD',
    seoDescription: 'Expert commercial cleaning across Brisbane for retail stores, restaurants, gyms, schools, and warehouses. Eco-certified, insured, and available 24/7.',
    introText: 'From retail showrooms and restaurants to gyms and industrial facilities, Auswide Cleaners delivers professional commercial cleaning across all Brisbane industries. We keep your business spotless, sanitized, and compliant.',
    longDescription: [
      'Commercial cleaning in Brisbane demands a higher level of expertise, specialization, and reliability than standard residential services. Every industry has unique hygiene requirements, safety standards, and operational constraints. Auswide Cleaners has built deep experience across Brisbane\'s most demanding commercial sectors — including retail, hospitality, fitness, healthcare, education, and warehousing — delivering tailored cleaning programs that meet your specific industry standards.',
      'Our commercial cleaning division operates around the clock to minimize disruption to your business operations. Whether you need a retail store cleaned after close, a restaurant sanitized between breakfast and lunch service, or a gym disinfected overnight, our flexible scheduling adapts to your operational timetable. We deploy experienced crews trained specifically for each industry, equipped with the right tools, chemicals, and techniques for your environment.',
      'In Brisbane\'s competitive commercial landscape, the cleanliness of your facility directly impacts customer perception, staff retention, and regulatory compliance. Health inspectors, council auditors, and industry bodies take a dim view of inadequate hygiene — the consequences of non-compliance can range from fines to forced closures. Auswide Cleaners helps Brisbane businesses stay ahead of compliance requirements with documented cleaning programs and detailed service records.',
      'Our commitment to sustainability sets us apart. We use only eco-certified cleaning products that are effective against pathogens while reducing environmental impact. We follow waste minimization protocols, use concentrated cleaning solutions to reduce plastic waste, and are continuously expanding our green cleaning product range. For Brisbane businesses with sustainability targets or ESG commitments, partnering with Auswide Cleaners is a measurable step in the right direction.',
    ],
    whyChooseUs: [
      'Industry-specific cleaning protocols for retail, hospitality, healthcare, and education',
      '24/7 availability for emergency cleans and out-of-hours service across Brisbane',
      'Eco-certified cleaning products and documented waste management programs',
      'Comprehensive service records and compliance documentation provided',
    ],
    benefits: [
      { title: 'Industry-Specific Expertise', description: 'We have dedicated teams trained for retail, restaurant, gym, medical, and warehouse cleaning — each with the right tools and protocols for the job.', icon: 'Briefcase' },
      { title: '24/7 Availability', description: 'Commercial cleaning doesn\'t follow a 9-to-5 schedule. We\'re available around the clock, 365 days a year, to keep your Brisbane business spotless.', icon: 'Clock' },
      { title: 'Regulatory Compliance', description: 'We help Brisbane businesses meet health department, council, and industry hygiene standards with documented cleaning records and compliant procedures.', icon: 'FileCheck' },
      { title: 'Eco-Certified Products', description: 'Our cleaning products are environmentally certified, biodegradable, and safe for customers, staff, and the Brisbane environment.', icon: 'Leaf' },
      { title: 'Scalable Service', description: 'Whether you operate one Brisbane store or a network of facilities across QLD, we scale our service to match your growth seamlessly.', icon: 'TrendingUp' },
      { title: 'Waste Management', description: 'We include standard rubbish removal, recycling management, and sanitary bin servicing as part of our comprehensive commercial cleaning contracts.', icon: 'Recycle' },
    ],
    processSteps: [
      { step: '01', title: 'Discovery & Site Walkthrough', detail: 'We tour your Brisbane facility, understand your business type, operational hours, and compliance requirements. We identify all critical cleaning zones.' },
      { step: '02', title: 'Tailored Proposal', detail: 'Within 24 hours, we deliver a detailed cleaning proposal with a custom schedule, crew size, product list, and transparent pricing. No hidden costs.' },
      { step: '03', title: 'Cleaning Program Begins', detail: 'Our trained commercial crew starts your program on the agreed date. We follow your custom checklist and adapt as your business needs evolve.' },
      { step: '04', title: 'Performance Reviews', detail: 'We provide monthly cleaning logs, conduct regular site quality checks, and hold quarterly performance reviews to ensure standards are continuously maintained.' },
    ],
    testimonials: [
      { name: 'Tony R.', suburb: 'Fortitude Valley', rating: 5, text: 'Running three restaurants in Brisbane, hygiene is non-negotiable. Auswide has been our commercial cleaning partner for three years — their kitchen sanitation is world-class and they never miss a session.' },
      { name: 'Melissa G.', suburb: 'Newstead', rating: 5, text: 'We operate a busy retail showroom and Auswide keeps it looking impeccable every single day. The level of professionalism is outstanding and their eco-friendly products align with our brand values perfectly.' },
      { name: 'Chris B.', suburb: 'Albion', rating: 5, text: 'Managing a gym means cleaning is a constant battle. Auswide\'s team understands this completely — they disinfect equipment properly, deal with the locker rooms thoroughly, and always turn up on time.' },
    ],
    relatedServices: [
      { slug: 'office-cleaning-brisbane', title: 'Office Cleaning Brisbane' },
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
    ],
    suburbs: ['Fortitude Valley', 'Newstead', 'Albion', 'Woolloongabba', 'Kangaroo Point', 'Pinkenba', 'Stafford', 'Coorparoo', 'Murarrie', 'Hendra', 'Virginia', 'Northgate', 'Eagle Farm', 'Wacol', 'Rocklea', 'Coopers Plains'],
    faqs: [
      { question: 'What types of commercial businesses do you clean in Brisbane?', answer: 'We clean retail stores, restaurants and cafes, gyms and fitness centres, medical centres, childcare facilities, schools, warehouses, showrooms, and community buildings across the greater Brisbane area.' },
      { question: 'Do you clean Brisbane businesses outside of trading hours?', answer: 'Yes. Most of our commercial clients prefer cleaning outside business hours — we offer early morning starts, late night cleans, and weekend services to suit all operational schedules.' },
      { question: 'Can you provide cleaning compliance documentation?', answer: 'Yes. We maintain detailed cleaning logs for every visit, which are available on request. Many Brisbane businesses use these records for council inspections, health audits, and internal compliance purposes.' },
      { question: 'Do you offer commercial deep cleaning services?', answer: 'Absolutely. In addition to regular maintenance cleaning, we offer periodic deep cleaning programs for commercial kitchens, cool rooms, washrooms, and high-traffic areas that require more intensive treatment.' },
      { question: 'Are your commercial cleaners trained for specific industries?', answer: 'Yes. We train separate crews for hospitality, retail, healthcare, and industrial sectors. Each team uses industry-appropriate chemicals, equipment, and procedures.' },
      { question: 'What\'s included in a standard commercial cleaning service?', answer: 'Our standard commercial clean includes floor mopping and vacuuming, waste removal, bathroom sanitisation, kitchen and break room cleaning, surface dusting and disinfection, and glass cleaning. Custom add-ons are available.' },
      { question: 'How quickly can you start a commercial cleaning contract?', answer: 'For most Brisbane businesses, we can begin service within 3–5 business days of signing a contract, subject to crew availability. Urgent starts can sometimes be arranged within 24 hours.' },
      { question: 'Do you supply all cleaning products and equipment?', answer: 'Yes, all cleaning products, equipment, and consumables (toilet paper, hand soap, bin liners) can be fully supplied by us as part of your contract — eliminating the need for your business to manage cleaning supplies.' },
    ],
  },

  'bond-cleaning-brisbane': {
    slug: 'bond-cleaning-brisbane',
    serviceId: 'end-of-lease',
    title: 'Bond Cleaning Brisbane',
    headline: 'Expert Bond Cleaning Brisbane',
    subheadline: '100% Bond Back Guarantee — Brisbane\'s Most Trusted Vacate Cleaners',
    primaryKeyword: 'Bond Cleaning Brisbane',
    seoTitle: 'Bond Cleaning Brisbane | 100% Bond Back Guarantee | Auswide Cleaners',
    seoDescription: 'Brisbane\'s premier bond cleaning service. RTA-compliant checklists, oven and window cleaning included. 100% bond back guarantee. Book today.',
    introText: 'Moving out is stressful enough. Our professional bond cleaners follow a rigorous RTA-approved checklist ensuring your Brisbane property passes inspection first time — and your full bond is returned.',
    longDescription: [
      'Getting your bond back in full is every Brisbane tenant\'s goal when moving out. But achieving that perfect exit clean that satisfies even the most demanding real estate agent requires expert knowledge of RTA requirements, professional-grade equipment, and meticulous attention to detail. Auswide Cleaners specializes in bond cleaning throughout Brisbane, and we\'ve helped thousands of Queensland tenants get their full bond returned without stress or dispute.',
      'Our bond cleaning service goes far beyond what a regular clean covers. We follow a comprehensive REIQ-standard checklist that addresses every area an agent will inspect — including oven and grill cleaning, range hood degreasing, window cleaning (inside and outside tracks), blind dusting, skirting board washing, light switch and power point polishing, grout scrubbing, and thorough bathroom descaling. No area is overlooked, no corner is cut.',
      'One of the biggest pain points tenants experience is being called back after a bond clean because an agent raises an issue. Our 100% bond back guarantee means that if your real estate agent or property manager raises any cleaning concern after our service, we return within 48 hours and re-clean the affected areas completely free of charge. We stand behind our work completely.',
      'We also understand that bond cleans in Brisbane are often time-sensitive — coordinating with vacate dates, incoming tenants, and agent final inspections requires flexibility. We offer same-week, weekend, and even next-day bond cleaning services. Our teams are experienced in cleaning properties of all sizes and conditions across Brisbane, from compact inner-city apartments to large family homes in the outer suburbs.',
    ],
    whyChooseUs: [
      '100% bond back guarantee — we return free within 48 hours if the agent raises any issue',
      'Full REIQ and RTA-compliant cleaning checklist covering every inspectable area',
      'Same-week and next-day bond cleaning available across all Brisbane suburbs',
      'Trusted by hundreds of Brisbane real estate agencies and property managers',
    ],
    benefits: [
      { title: 'Bond Back Guarantee', description: 'If your agent raises a cleaning issue, we return within 48 hours and fix it at no cost. Our track record of successful bond returns speaks for itself.', icon: 'Shield' },
      { title: 'RTA-Compliant Checklist', description: 'We follow the REIQ residential tenancy exit cleaning standard — the same checklist real estate agents use for final property inspections.', icon: 'FileCheck' },
      { title: 'Oven & Appliances Deep Clean', description: 'Oven, grill, range hood, dishwasher, and all appliance interiors are thoroughly degreased and cleaned as standard — no extra charges.', icon: 'Flame' },
      { title: 'Window & Track Cleaning', description: 'All windows are cleaned inside and out, with tracks, frames, and sills wiped down to spotless condition — often the area agents inspect most closely.', icon: 'Square' },
      { title: 'Carpet Steam Cleaning', description: 'Optional carpet steam cleaning available as a bundle with your bond clean at a reduced rate — ensuring carpets pass professional inspection.', icon: 'Layers' },
      { title: 'Flexible Timing', description: 'We work around your moving schedule, offering same-week, weekend, and early-morning bond clean slots across all Brisbane suburbs.', icon: 'Calendar' },
    ],
    processSteps: [
      { step: '01', title: 'Book & Confirm', detail: 'Contact us with your property address, size, and desired date. We\'ll confirm availability and send a detailed quote within 2 hours.' },
      { step: '02', title: 'Preparation', detail: 'On the day, ensure the property is empty and power is connected. Our team arrives fully equipped to begin the comprehensive bond clean.' },
      { step: '03', title: 'Full Bond Clean', detail: 'We work systematically through every room using the REIQ exit cleaning checklist — from ceilings to floors, inside every cupboard, and all appliances.' },
      { step: '04', title: 'Inspection-Ready Sign-Off', detail: 'After completion, we provide a tax invoice and cleaning receipt for your agent. If they raise any issue within 72 hours, we return free of charge.' },
    ],
    testimonials: [
      { name: 'Lucy F.', suburb: 'Paddington', rating: 5, text: 'I was terrified about losing my bond — my apartment was in rough shape. Auswide Cleaners made it look brand new. The agent said it was the cleanest vacate she\'d ever inspected. Full bond returned within a week.' },
      { name: 'Sam & Kate H.', suburb: 'Toowong', rating: 5, text: 'Phenomenal service. They cleaned our 4-bedroom family home top to bottom including oven, windows, and carpets. Bond fully returned with not a single query from our property manager.' },
      { name: 'Zara M.', suburb: 'West End', rating: 5, text: 'Last-minute booking and they fit us in within 24 hours. Incredible work — the bathroom tiles and kitchen were transformed. Bond back in full, no arguments. Cannot recommend highly enough.' },
    ],
    relatedServices: [
      { slug: 'end-of-lease-cleaning-brisbane', title: 'End of Lease Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
    ],
    suburbs: ['Paddington', 'New Farm', 'Ascot', 'Sunnybank', 'Mount Gravatt', 'Aspley', 'Nundah', 'Kenmore', 'Bulimba', 'Hawthorne', 'Morningside', 'Camp Hill', 'Norman Park', 'Seven Hills', 'Chelmer', 'Graceville'],
    faqs: [
      { question: 'What does your Brisbane bond cleaning service include?', answer: 'Our bond clean covers the full REIQ exit standard: all rooms, kitchen including oven interior, range hood and dishwasher, bathroom descaling, window cleaning inside and out, tracks and frames, skirting boards, light switches, ceiling fans, wardrobe interiors, and removal of all cobwebs.' },
      { question: 'What is your bond back guarantee?', answer: 'If your real estate agent or property manager raises any cleaning issue within 72 hours of our clean, we return to the property and re-clean the affected areas completely free of charge. We aim for first-pass success every time.' },
      { question: 'Do you clean carpets as part of the bond clean?', answer: 'Professional carpet steam cleaning can be added to your bond clean at a bundled discount. Many landlords and agents require professional carpet cleaning upon vacate — we can provide a combined service for convenience.' },
      { question: 'How long does a bond clean take in Brisbane?', answer: 'This depends on the property size and condition. A 2-bedroom unit typically takes 4–6 hours, while a 4-bedroom family home may take 7–10 hours. We always send the right crew size to complete the job properly.' },
      { question: 'Do I need to be present during the bond clean?', answer: 'No. Most tenants hand over their keys or provide access codes and vacate the property. You can return for a walkthrough once we\'ve finished, or trust our sign-off process and inspection receipt.' },
      { question: 'Do you provide an invoice for my property manager?', answer: 'Yes. We provide a dated, detailed tax invoice and service receipt after every bond clean. Many Brisbane real estate agents and property managers require this as proof of professional cleaning.' },
      { question: 'Can you clean both inside and outside windows?', answer: 'Yes, standard window cleaning (inside only) is included. External window cleaning is available as an add-on, and we can also clean windows up to two storeys with appropriate equipment.' },
      { question: 'What if the property has a lot of built-up grime?', answer: 'No problem. We carry specialist degreasers, grout cleaners, descalers, and heavy-duty scrubbing equipment for challenging properties. We quote appropriately for heavily soiled properties after a brief description or photos.' },
    ],
  },

  'end-of-lease-cleaning-brisbane': {
    slug: 'end-of-lease-cleaning-brisbane',
    serviceId: 'end-of-lease',
    title: 'End of Lease Cleaning Brisbane',
    headline: 'End of Lease Cleaning Brisbane Suburbs',
    subheadline: 'Professional Vacate Cleaners — RTA Compliant, Satisfaction Guaranteed',
    primaryKeyword: 'End of Lease Cleaning Brisbane',
    seoTitle: 'End of Lease Cleaning Brisbane | Professional Vacate Cleaners QLD',
    seoDescription: 'Professional end of lease cleaning services across Brisbane. Complete vacate cleans with RTA-compliant checklists and 100% satisfaction guarantee. Fast quotes.',
    introText: 'End your tenancy on the right foot. Our experienced Brisbane vacate cleaners deliver thorough, inspection-ready cleans that satisfy real estate agents and property managers — giving you the best chance of a full bond return.',
    longDescription: [
      'End of lease cleaning in Brisbane is one of the most important cleans a tenant will ever arrange. The stakes are high — a failed exit inspection means costly re-cleans, delayed bond returns, and unnecessary stress during an already demanding moving period. Auswide Cleaners takes this responsibility seriously, deploying expert vacate cleaning teams who know exactly what Brisbane real estate agents look for and how to meet that standard every single time.',
      'Our end of lease cleaning service is built around Queensland\'s Residential Tenancies Authority (RTA) exit condition requirements. We use a comprehensive, multi-page cleaning checklist that mirrors the Exit Condition Report agents complete at the end of every tenancy. From the tops of door frames to the inside of oven drawers, from grout lines in the shower to the insides of kitchen cupboard shelves, we leave nothing to chance.',
      'Brisbane\'s rental market is competitive, and property managers have high expectations for end-of-lease presentation. We work with tenants across every Brisbane suburb — from inner-city apartments in Kangaroo Point to large family homes in Calamvale and everywhere in between. Our teams are experienced in properties of all ages, sizes, and conditions, including properties that require significant restoration work to reach inspection standard.',
      'One common concern among Brisbane tenants is the timing of end of lease cleans relative to the property handover. We offer flexible scheduling including same-week bookings, weekend availability, and early morning slots to fit around your moving timeline. We also coordinate directly with property managers when required, making the entire vacate process smoother for all parties.',
    ],
    whyChooseUs: [
      'RTA-compliant checklist reviewed against current Queensland tenancy exit standards',
      'Free re-clean within 72 hours if any agent inspection item is raised',
      'Experienced with all Brisbane property types from studio apartments to large homes',
      'Coordinating directly with property managers available on request',
    ],
    benefits: [
      { title: 'RTA-Compliant Standard', description: 'Our checklist mirrors the Queensland RTA Exit Condition Report — ensuring every area an agent inspects meets or exceeds the required standard.', icon: 'FileCheck' },
      { title: 'Free Re-Clean Promise', description: 'If your property manager raises any issue, we return within 72 hours and address it at zero cost. Your bond return is our shared goal.', icon: 'Shield' },
      { title: 'All Property Types', description: 'We clean studio apartments, townhouses, family homes, and everything in between. Experience with properties from Paddington to Calamvale and beyond.', icon: 'Home' },
      { title: 'Flexible Timing', description: 'Weekend, weekday, same-week, and early morning appointments available. We work around your moving schedule — not the other way around.', icon: 'Calendar' },
      { title: 'Detailed Invoice', description: 'We provide a professional tax invoice that many Brisbane property managers and real estate agencies accept as proof of professional vacate cleaning.', icon: 'Receipt' },
      { title: 'Optional Add-Ons', description: 'Bundle carpet steam cleaning, professional window cleaning, and pest control with your vacate clean for a completely move-out-ready property.', icon: 'Plus' },
    ],
    processSteps: [
      { step: '01', title: 'Quick Quote', detail: 'Tell us your property size, suburb, and vacate date. We\'ll reply within 2 hours with a fixed-price quote covering the full REIQ exit standard.' },
      { step: '02', title: 'Schedule Your Clean', detail: 'We confirm your preferred date and time. We\'ll send a reminder the day before and confirm access arrangements with you directly.' },
      { step: '03', title: 'Thorough Vacate Clean', detail: 'Our team works through your property room by room following the complete RTA exit checklist. We document our work and flag any pre-existing damage we find.' },
      { step: '04', title: 'Invoice & Guarantee', detail: 'We issue a detailed tax invoice immediately after the clean. If your agent raises anything within 72 hours, we\'re back the same day to rectify it at no charge.' },
    ],
    testimonials: [
      { name: 'Claire T.', suburb: 'St Lucia', rating: 5, text: 'Moved out of a townhouse I\'d lived in for 5 years. Auswide cleaned it so thoroughly that my property manager said it looked better than when I moved in. Full bond refunded within 3 days.' },
      { name: 'Nathan B.', suburb: 'Coorparoo', rating: 5, text: 'Used Auswide for end of lease cleaning on a tight timeline. They turned up on time, worked efficiently, and left the place spotless. Property manager was extremely happy. Highly recommend.' },
      { name: 'Tiffany & Marc L.', suburb: 'Holland Park', rating: 5, text: 'They cleaned our family home including all carpets. The before and after was unbelievable. Our property manager required zero re-cleaning and processed our bond the following week. 10/10.' },
    ],
    relatedServices: [
      { slug: 'bond-cleaning-brisbane', title: 'Bond Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
      { slug: 'move-out-cleaning-brisbane', title: 'Move Out Cleaning Brisbane' },
    ],
    suburbs: ['St Lucia', 'Taringa', 'Toowong', 'Coopers Plains', 'Sunnybank Hills', 'Holland Park', 'Carina', 'Claremont', 'Calamvale', 'Runcorn', 'Rochedale', 'Eight Mile Plains', 'Wishart', 'Mansfield', 'Macgregor', 'Robertson'],
    faqs: [
      { question: 'What\'s the difference between end of lease cleaning and bond cleaning?', answer: 'They are essentially the same service, referred to differently. "End of lease" or "vacate" cleaning describes the comprehensive clean performed when a tenant moves out. "Bond cleaning" emphasizes the goal of securing a full bond return.' },
      { question: 'How far in advance should I book end of lease cleaning?', answer: 'We recommend booking at least 5–7 days before your vacate date. However, we frequently accommodate last-minute bookings — contact us and we\'ll do our best to fit you in, even within 24–48 hours.' },
      { question: 'Does your end of lease clean include the oven?', answer: 'Yes. Oven cleaning — including interior walls, oven racks, the grill, and range hood — is fully included in our standard vacate clean at no extra cost. This is one of the most commonly failed inspection points.' },
      { question: 'Will you clean windows as part of the vacate clean?', answer: 'Yes, interior window cleaning is included as standard. Exterior window cleaning and window tracks are also available. All window sills and frames are cleaned and polished.' },
      { question: 'Do you offer carpet cleaning with end of lease cleaning?', answer: 'Yes, we offer professional steam carpet cleaning as an add-on to your end of lease clean at a bundled rate. Many Brisbane leases require professional carpet cleaning upon vacating.' },
      { question: 'What if I haven\'t fully moved out yet when you arrive?', answer: 'For best results and efficiency, the property should be empty when we clean. If this isn\'t possible, let us know in advance and we\'ll work around remaining furniture as best we can.' },
      { question: 'Do you clean walls and mark removal?', answer: 'We wipe down all light switches, power points, and visible wall marks. Full wall washing is available as an optional extra for properties with significant scuff marks or crayon-style markings.' },
      { question: 'Do you service properties in outer Brisbane suburbs?', answer: 'Yes, we service all Brisbane suburbs from the CBD to outer areas including Calamvale, Rochedale, Eight Mile Plains, Wishart, Mansfield, and beyond. Contact us with your address and we\'ll confirm availability.' },
    ],
  },

  'deep-cleaning-brisbane': {
    slug: 'deep-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Deep Cleaning Brisbane',
    headline: 'Intensive Deep Cleaning Brisbane Suburbs',
    subheadline: 'Top-to-Bottom Restoration Cleans for Brisbane Homes & Properties',
    primaryKeyword: 'Deep Cleaning Brisbane',
    seoTitle: 'Deep Cleaning Brisbane | Professional Intensive Spring Cleaners QLD',
    seoDescription: 'Thorough deep cleaning services across Brisbane. Spring cleans, post-renovation, move-in restoration, and intensive property cleans. Free quotes.',
    introText: 'When standard cleaning isn\'t enough, our intensive deep cleaning service provides a comprehensive, top-to-bottom restoration. Perfect for Brisbane spring cleans, move-ins, post-renovations, and properties that need more than a surface refresh.',
    longDescription: [
      'There\'s a significant difference between a routine maintenance clean and a true deep clean. While regular cleaning maintains the surface appearance of your Brisbane home or property, deep cleaning targets the built-up grime, bacteria, and residue that accumulates in places standard cleaning never reaches. Over time, this hidden build-up affects indoor air quality, contributes to the deterioration of surfaces and fixtures, and creates an environment that\'s less hygienic than it appears.',
      'Auswide Cleaners\' deep cleaning service is designed for Brisbane properties that need a fresh start. Whether you\'ve just moved into a home that wasn\'t properly cleaned by the previous occupants, you\'re preparing a property for sale and want it in show-home condition, you\'ve completed a renovation and need to clear the construction dust, or you simply want a thorough seasonal clean that leaves every surface gleaming — our deep clean delivers results you can see and feel.',
      'Our deep cleaning crews work systematically through every area of your Brisbane property, focusing on the details that regular cleaners skip. We clean inside all cabinets and drawers, degrease the interior walls of ovens and refrigerators, scrub tile grout until it\'s restored, descale shower screens and bathroom surfaces, clean light fittings and ceiling fan blades, wash skirting boards and door frames, and reach every corner, crevice, and ledge that collects hidden grime.',
      'The deep cleaning process is time-intensive and requires specialist products and equipment. Our crews use commercial-grade degreasers, steam cleaners, grout brushes, microfibre cloths, and HEPA-filter vacuums to achieve results that aren\'t possible with household cleaning products. The difference a professional deep clean makes to a Brisbane property is remarkable — many of our clients describe it as feeling like moving into a brand new home.',
    ],
    whyChooseUs: [
      'Specialist deep clean crews with dedicated degreasing and restoration equipment',
      'Inside cupboards, appliances, grout lines, and hard-to-reach areas included as standard',
      'Transparent fixed pricing based on property size — no surprise charges after the job',
      'Ideal for spring cleans, pre-sale preparation, post-renovation, and move-in refreshes',
    ],
    benefits: [
      { title: 'Inside Cabinets & Drawers', description: 'All kitchen and bathroom cabinets are cleaned inside and out — surfaces wiped, shelves cleared, and drawer runners cleaned properly.', icon: 'Package' },
      { title: 'Appliance Deep Clean', description: 'Oven interior, fridge walls, microwave, and dishwasher filter — all degreased and sanitised using specialist commercial cleaners.', icon: 'Flame' },
      { title: 'Grout & Tile Restoration', description: 'Shower grout, bathroom tiles, and kitchen splashbacks are scrubbed with specialist grout cleaners to remove discolouration and mould.', icon: 'Grid' },
      { title: 'Light Fixtures & Fans', description: 'Ceiling fan blades, light shades, and downlight covers are dusted, wiped, and polished — often a dramatically visible improvement.', icon: 'Lightbulb' },
      { title: 'Behind & Under Furniture', description: 'We pull out appliances and furniture to clean the floors and surfaces behind them — removing years of hidden dust and debris.', icon: 'MoveRight' },
      { title: 'Full Sanitisation', description: 'Hospital-grade disinfectants are applied to all high-touch surfaces, bathrooms, kitchens, and any areas with visible mould or bacteria.', icon: 'Sparkles' },
    ],
    processSteps: [
      { step: '01', title: 'Property Assessment', detail: 'We assess your Brisbane property\'s condition, size, and specific deep clean requirements to provide an accurate, fixed-price quote with no hidden extras.' },
      { step: '02', title: 'Preparation & Scheduling', detail: 'We confirm your preferred date. For large properties, we may allocate a full day or more. We recommend the property is accessible and as empty as possible for best results.' },
      { step: '03', title: 'Top-to-Bottom Deep Clean', detail: 'Our crew works methodically from ceiling to floor, inside every cabinet, behind every appliance, and into every corner. We use specialist products for each surface type.' },
      { step: '04', title: 'Final Walkthrough', detail: 'After the deep clean, we do a thorough inspection walkthrough with you (or on your behalf). Everything is signed off and any final touches are completed before we leave.' },
    ],
    testimonials: [
      { name: 'Karen O.', suburb: 'Kangaroo Point', rating: 5, text: 'I bought a property that hadn\'t been properly cleaned in years. Auswide\'s deep clean was transformative — the difference was genuinely shocking. The grout, the oven, the windows — everything looked brand new.' },
      { name: 'Steven P.', suburb: 'Newstead', rating: 5, text: 'Booked a deep clean before listing my apartment for sale. My real estate agent was amazed — said it would definitely help achieve a better sale price. Professional, thorough, and absolutely worth it.' },
      { name: 'Emma R.', suburb: 'Ashgrove', rating: 5, text: 'Used Auswide for an annual deep clean on our family home. The team cleaned places I didn\'t even know needed cleaning. My house feels completely fresh and I\'m now booking quarterly deep cleans.' },
    ],
    relatedServices: [
      { slug: 'house-cleaning-brisbane', title: 'House Cleaning Brisbane' },
      { slug: 'move-in-cleaning-brisbane', title: 'Move In Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
    ],
    suburbs: ['Kangaroo Point', 'Newstead', 'Teneriffe', 'Clayfield', 'Bulimba', 'Ashgrove', 'Sherwood', 'Yeronga', 'Annerley', 'Woolloongabba', 'South Brisbane', 'West End', 'Highgate Hill', 'Dutton Park', 'Greenslopes', 'Coorparoo'],
    faqs: [
      { question: 'What makes a deep clean different from a regular house clean?', answer: 'A deep clean targets built-up grime, grease, and bacteria in areas a regular clean doesn\'t cover — including inside cabinets, oven interiors, grout lines, behind appliances, light fixtures, skirting boards, and all hard-to-reach surfaces.' },
      { question: 'How long does a deep clean take in Brisbane?', answer: 'A deep clean takes significantly longer than a regular clean. A 2-bedroom apartment typically takes 6–8 hours, while a large family home may take a full day with a crew of 2–3 people. We\'ll give you a time estimate with your quote.' },
      { question: 'When should I get a deep clean?', answer: 'Deep cleans are ideal for: moving into a new home, spring cleaning, preparing a property for sale or rental, post-renovation cleanup, returning from an extended absence, or when a property needs a comprehensive reset after years of standard maintenance cleaning.' },
      { question: 'Is deep cleaning the same as bond or vacate cleaning?', answer: 'They share similarities but serve different purposes. Bond cleaning follows a specific RTA checklist for rental properties. Deep cleaning is broader and more intensive, focusing on overall restoration rather than meeting a specific tenancy standard.' },
      { question: 'Do I need to supply anything for a deep clean?', answer: 'No. Our team brings all commercial-grade equipment, specialist cleaning products, and tools. We have everything required for a thorough deep clean of any Brisbane property.' },
      { question: 'Can you deep clean just specific rooms or areas?', answer: 'Yes, we offer partial deep cleans targeting specific areas like kitchens, bathrooms, or one floor of a home. Contact us with your requirements and we\'ll put together a custom quote.' },
      { question: 'Do you remove mould during a deep clean?', answer: 'Yes. We treat visible mould with specialist mould-killing products on tiles, grout, ceilings, and other surfaces. For extensive mould problems, we may recommend specialist mould remediation services.' },
      { question: 'How often should I deep clean my Brisbane home?', answer: 'Most Brisbane homeowners benefit from a deep clean twice a year — typically in spring and autumn. High-traffic family homes or those with pets may benefit from quarterly deep cleans alongside regular maintenance cleaning.' },
    ],
  },

  'move-in-cleaning-brisbane': {
    slug: 'move-in-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Move In Cleaning Brisbane',
    headline: 'Move In Cleaning Brisbane Suburbs',
    subheadline: 'Start Fresh in a Sanitised, Spotless Home — Ready Before Your First Box Arrives',
    primaryKeyword: 'Move In Cleaning Brisbane',
    seoTitle: 'Move In Cleaning Brisbane | Pre-Move Sanitisation Cleaners | Auswide',
    seoDescription: 'Professional move in cleaning across Brisbane. Deep sanitisation of every room before you unpack. Eco-friendly, insured, police-checked cleaners. Book today.',
    introText: 'Start your life in your new Brisbane home the right way — completely clean, sanitised, and fresh. Our move-in cleaning service ensures every surface is spotless before your first box arrives, giving you and your family a healthy, hygienic foundation.',
    longDescription: [
      'Moving into a new home in Brisbane is an exciting milestone, but it\'s hard to feel truly settled knowing the previous occupants left invisible traces throughout the property. Even when a landlord has arranged a basic clean, the reality often falls short of what you\'d want for your family. Auswide Cleaners\' move-in cleaning service gives you complete confidence that every inch of your new home is sanitised, fresh, and genuinely clean before you unpack a single item.',
      'Our pre-move-in cleaning goes far deeper than a standard clean. We systematically work through every room, cleaning inside all cupboards and wardrobes, sanitising bathrooms and kitchens with hospital-grade products, washing windows from the inside out, cleaning under and behind any remaining appliances, and addressing every surface from ceiling cornices to floor edges. We use eco-friendly, fragrance-conscious products that leave your home clean without any chemical residue or overpowering smells.',
      'The ideal time to book a move-in clean is before your furniture and belongings arrive — when the property is completely empty, every surface is accessible, and our team can work at maximum efficiency. We coordinate closely with your move-in timeline, offering early morning starts and weekend slots across all Brisbane suburbs to fit around removalist schedules and settlement dates.',
      'For Brisbane families with young children or allergy sufferers, a move-in clean is particularly valuable. We pay special attention to areas that harbour dust mites, mould spores, and bacteria — mattress supports, cabinet interiors, bathroom surfaces, and grout lines. Our HEPA-filter vacuums capture fine dust particles that regular vacuums miss, creating a healthier indoor environment from day one.',
    ],
    whyChooseUs: [
      'Full property sanitisation before you unpack — not just a surface wipe',
      'Best performed with empty property for maximum access and efficiency',
      'Eco-friendly, fragrance-conscious products — safe for children and sensitive households',
      'Early morning and weekend slots available to align with your settlement and moving schedule',
    ],
    benefits: [
      { title: 'Sanitised From Day One', description: 'We apply hospital-grade disinfectants to all bathrooms, kitchens, and high-touch surfaces — ensuring your new home is hygienically clean before you arrive.', icon: 'Sparkles' },
      { title: 'Inside All Cupboards', description: 'Every kitchen cabinet, pantry shelf, bathroom vanity, and wardrobe is wiped inside and out — removing dust, residue, and any previous-occupant traces.', icon: 'Package' },
      { title: 'Window & Sill Cleaning', description: 'All windows are cleaned inside and tracks, frames, and sills are washed — so you move in with clear views and no mould in window seals.', icon: 'Square' },
      { title: 'Safe for Children & Pets', description: 'Our eco-friendly cleaning products are non-toxic and biodegradable — ideal for Brisbane families with babies, young children, and pets moving into a new home.', icon: 'Heart' },
      { title: 'HEPA Vacuum Cleaning', description: 'We use commercial HEPA-filter vacuums to remove fine dust particles, allergens, and pet dander left by previous occupants — critical for asthma and allergy sufferers.', icon: 'Wind' },
      { title: 'Flexible Move-In Timing', description: 'We align our cleaning schedule with your settlement date, removalist booking, and move-in timeline — including same-day and early-morning options.', icon: 'Calendar' },
    ],
    processSteps: [
      { step: '01', title: 'Book Around Settlement', detail: 'Contact us with your settlement or key handover date. We\'ll schedule the clean ideally for the day before or morning of your move to ensure the property is ready before your belongings arrive.' },
      { step: '02', title: 'Access & Preparation', detail: 'Arrange key or code access for our team. Best results are achieved in an empty property. Let us know about any specific concerns or areas you want prioritised.' },
      { step: '03', title: 'Complete Move-In Clean', detail: 'We work through every room systematically — all surfaces, inside all storage, windows, floors, bathrooms, and kitchen. Every area is cleaned to the standard you\'d set yourself.' },
      { step: '04', title: 'Ready for Your Arrival', detail: 'We complete a final walkthrough to ensure everything meets our quality standard, then send you a confirmation. Arrive at your new Brisbane home to a fresh, clean, welcoming space.' },
    ],
    testimonials: [
      { name: 'Jenny & Paul M.', suburb: 'Bardon', rating: 5, text: 'Moved into our first home and had Auswide clean it before we moved anything in. The inside of the kitchen cupboards was remarkable — the previous owners clearly hadn\'t cleaned them in years. Auswide made it perfect.' },
      { name: 'Rachel S.', suburb: 'Grange', rating: 5, text: 'As someone with allergies, I was nervous about the previous owner\'s pet hair. Auswide\'s move-in clean was thorough beyond belief — within days my symptoms completely settled. I cannot thank them enough.' },
      { name: 'Thomas W.', suburb: 'Gordon Park', rating: 5, text: 'Our new apartment needed a complete sanitation before we moved in. Auswide cleaned every corner, cupboard, and surface. Moved in the next day and it felt like a hotel — immaculate.' },
    ],
    relatedServices: [
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
      { slug: 'house-cleaning-brisbane', title: 'House Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
    ],
    suburbs: ['Bardon', 'Alderley', 'Gordon Park', 'Grange', 'Wilston', 'Hawthorne', 'Morningside', 'Corinda', 'Sherwood', 'Graceville', 'Chelmer', 'Taringa', 'Toowong', 'Milton', 'Auchenflower', 'Paddington'],
    faqs: [
      { question: 'When is the best time to book a move-in clean in Brisbane?', answer: 'The ideal time is the day before your moving truck arrives, while the property is completely empty. This gives our team full access to every surface, inside every cupboard, and under all appliances without navigating around your belongings.' },
      { question: 'What does a move-in clean include?', answer: 'Our move-in clean covers all rooms thoroughly — inside all cupboards and wardrobes, bathroom sanitisation, kitchen deep clean including appliance exteriors, window cleaning from inside, floor vacuuming and mopping, and disinfection of all high-touch surfaces.' },
      { question: 'Is a move-in clean the same as a deep clean?', answer: 'They are very similar — both are thorough, comprehensive cleans targeting all areas including inside storage. A move-in clean is specifically timed and tailored for an empty property before occupation, while a deep clean can be performed on occupied or vacant properties.' },
      { question: 'What if the previous owner has pets?', answer: 'We take extra care in homes with previous pet occupants, using specialist pet dander treatment products and HEPA vacuums. We also address any pet odour sources including carpet areas, skirting boards, and air return vents.' },
      { question: 'Do you clean inside kitchen appliances during a move-in clean?', answer: 'Yes, we clean the interior of ovens, microwaves, and dishwashers that are left in the property. Fridge interiors can also be cleaned. Just let us know which appliances are being left and we\'ll include them.' },
      { question: 'Can you clean a new-build property for move-in?', answer: 'Absolutely. New builds often have significant construction dust, paint residue, grout haze, and other post-build residue. We have specialist new-build cleaning protocols and experience with Brisbane\'s construction companies.' },
      { question: 'How quickly can I book a move-in clean in Brisbane?', answer: 'We typically have availability within 3–5 days, and can often accommodate urgent requests within 24–48 hours. Contact us as early as possible once you have your settlement or key handover date confirmed.' },
      { question: 'What\'s the cost of a move-in clean in Brisbane?', answer: 'Our move-in cleaning is priced based on property size and condition. We provide free, no-obligation fixed-price quotes. Contact us with your property address and size for an accurate estimate within 2 hours.' },
    ],
  },

  'move-out-cleaning-brisbane': {
    slug: 'move-out-cleaning-brisbane',
    serviceId: 'deep-cleaning',
    title: 'Move Out Cleaning Brisbane',
    headline: 'Move Out Cleaning Services Brisbane',
    subheadline: 'Leave Your Brisbane Property Spotless for the Next Occupant',
    primaryKeyword: 'Move Out Cleaning Brisbane',
    seoTitle: 'Move Out Cleaning Brisbane | Tenant Vacate Cleaners | Auswide Cleaners',
    seoDescription: 'Professional move out cleaning across Brisbane. Complete property cleans for owner-occupiers, tenants, and landlords. Professional receipt included. Book today.',
    introText: 'Moving out of your Brisbane home? Leave it in immaculate condition with our professional move-out cleaning service. Perfect for tenants seeking a bond refund, owner-occupiers selling, and landlords preparing between tenancies.',
    longDescription: [
      'Whether you\'re a tenant wanting your full bond back, a homeowner handing over to buyers after settlement, or a landlord preparing your property for new tenants, a professional move-out clean from Auswide Cleaners ensures your Brisbane property makes the best possible final impression. Our experienced vacate cleaning teams understand exactly what\'s required for each scenario and deliver results that consistently exceed expectations.',
      'For tenants, our move-out clean follows the Queensland RTA exit condition standard — the same framework property managers use when completing exit inspection reports. We cover every item on the standard checklist, including oven interior, range hood degreasing, bathroom descaling, blind dusting, skirting board washing, and window cleaning. We provide a professional tax invoice that most Brisbane property managers and real estate agents accept as proof of professional cleaning.',
      'For homeowners selling their Brisbane property, presentation at settlement or during the pre-settlement inspection is critical. A gleaming clean property reflects well on the vendor, reduces the risk of settlement disputes over property condition, and can influence the buyer\'s final impression of their purchase. Our move-out clean for selling properties focuses on the visible areas buyers notice first — kitchens, bathrooms, floors, windows, and outdoor areas.',
      'For Brisbane landlords and property investors, a thorough clean between tenancies protects your asset, helps you attract quality tenants quickly, and reduces the risk of maintenance issues going unnoticed. We often work with property managers to coordinate access and cleaning between tenancy handovers, minimising vacancy periods and ensuring the property is rental-ready as quickly as possible.',
    ],
    whyChooseUs: [
      'Suitable for tenants, owner-occupiers selling, and landlords preparing between tenancies',
      'Professional tax invoice accepted by most Brisbane real estate agents and property managers',
      'Experienced with all Brisbane property types, ages, and conditions',
      'Free re-clean within 72 hours if any inspection concern is raised',
    ],
    benefits: [
      { title: 'Tenant Bond Return', description: 'We follow the RTA exit checklist precisely, giving you the best possible chance of a full bond refund with no disputes or re-cleaning requests.', icon: 'Shield' },
      { title: 'Seller Pre-Settlement', description: 'Leave your Brisbane property in show-home condition for settlement day — making the right final impression on buyers and avoiding condition disputes.', icon: 'Home' },
      { title: 'Landlord Tenant-Ready', description: 'Get your investment property clean and rental-ready between tenancies quickly — minimising vacancy time and ensuring new tenants move in to a pristine property.', icon: 'Building2' },
      { title: 'Professional Receipt', description: 'We provide a dated tax invoice immediately after the clean — required documentation for bond refund processes and agent handovers.', icon: 'Receipt' },
      { title: 'Flexible Access', description: 'We work with your moving schedule, settlement dates, and agent access requirements — including same-week, weekend, and early-morning slots.', icon: 'Calendar' },
      { title: 'Complete Exterior Option', description: 'Add external window cleaning, garage floor washing, driveway cleaning, and balcony scrubbing for a complete move-out presentation package.', icon: 'Sun' },
    ],
    processSteps: [
      { step: '01', title: 'Tell Us Your Situation', detail: 'Let us know whether you\'re a tenant, owner-seller, or landlord. Each has slightly different cleaning priorities. We\'ll quote accordingly with a clear scope of work.' },
      { step: '02', title: 'Confirm Date & Access', detail: 'We schedule around your moving timeline, settlement date, or tenancy handover. We can coordinate access directly with your property manager or agent if needed.' },
      { step: '03', title: 'Comprehensive Move-Out Clean', detail: 'Our team works through every room with the thoroughness that a final property clean requires — every surface, inside all storage, all appliances, and all fixtures.' },
      { step: '04', title: 'Receipt & Handover-Ready', detail: 'We provide your tax invoice immediately on completion. The property is handed over clean, documented, and ready for inspection, settlement, or new occupancy.' },
    ],
    testimonials: [
      { name: 'Isabella C.', suburb: 'Camp Hill', rating: 5, text: 'Sold my home of 12 years and needed it to look perfect for the pre-settlement inspection. Auswide exceeded every expectation — the buyers were delighted and settlement proceeded without a single issue.' },
      { name: 'Andrew & Lisa P.', suburb: 'Norman Park', rating: 5, text: 'Used Auswide to clean our rental property between tenants. Turnaround was incredible — they had it spotless within 24 hours of the old tenants leaving. New tenants moved in two days later and were blown away.' },
      { name: 'Grace F.', suburb: 'Morningside', rating: 5, text: 'As a departing tenant, I needed my bond back urgently. Auswide\'s move-out clean was thorough, professional, and on time. Full bond refunded within 5 business days. Exceptional service.' },
    ],
    relatedServices: [
      { slug: 'bond-cleaning-brisbane', title: 'Bond Cleaning Brisbane' },
      { slug: 'end-of-lease-cleaning-brisbane', title: 'End of Lease Cleaning Brisbane' },
      { slug: 'carpet-cleaning-brisbane', title: 'Carpet Cleaning Brisbane' },
    ],
    suburbs: ['Camp Hill', 'Norman Park', 'Coorparoo', 'Seven Hills', 'Tarragindi', 'Yeerongpilly', 'Graceville', 'Chelmer', 'Corinda', 'Sherwood', 'Inala', 'Oxley', 'Darra', 'Wacol', 'Richlands', 'Rocklea'],
    faqs: [
      { question: 'What is the difference between move out cleaning and bond cleaning?', answer: 'In practice, they are very similar services. "Bond cleaning" specifically emphasizes the goal of satisfying a landlord or property manager for a bond return. "Move out cleaning" is a broader term that applies to tenants, owner-sellers, and landlords — all of whom need a property thoroughly cleaned at the end of occupancy.' },
      { question: 'Do you clean walls and remove marks?', answer: 'We wipe down all light switches, power points, and visible wall marks. Full wall washing is available as an optional extra for properties with significant scuffs, crayon marks, or grime on painted walls.' },
      { question: 'Do you provide an invoice for the real estate agent?', answer: 'Yes. We issue a formal tax invoice and service receipt via email immediately after payment. This document is accepted by the vast majority of Brisbane real estate agencies and property managers as proof of professional cleaning.' },
      { question: 'Can you clean before or after settlement day?', answer: 'Yes. We regularly coordinate with Brisbane conveyancers and real estate agents to schedule cleaning around settlement dates — either before the final inspection or immediately after handover to new owners.' },
      { question: 'How should I prepare the property for a move-out clean?', answer: 'The property should be empty of all personal belongings, furniture, and rubbish. Power should be connected. The cleaner access point should be arranged in advance. The more empty the property, the better the results.' },
      { question: 'Do you clean garages and outdoor areas?', answer: 'Yes, we can include garage floors, driveways, balconies, and outdoor entertainment areas as add-ons to your move-out clean. These exterior areas are particularly important for owner-sellers and landlord handovers.' },
      { question: 'What happens if the buyers or property manager finds something after we\'ve left?', answer: 'We offer a 72-hour free re-clean guarantee. If any party raises a cleaning concern within that window, we return to the property and rectify the issue at no charge.' },
      { question: 'Can you accommodate urgent move-out cleans in Brisbane?', answer: 'Yes, we frequently handle urgent bookings within 24–48 hours. Contact us as early as possible with your property details and we\'ll confirm availability across all Brisbane suburbs.' },
    ],
  },

  'carpet-cleaning-brisbane': {
    slug: 'carpet-cleaning-brisbane',
    serviceId: 'carpet',
    title: 'Carpet Cleaning Brisbane',
    headline: 'Professional Carpet Cleaning Brisbane',
    subheadline: 'Hot Water Extraction — Restore, Sanitise & Deodorise Your Brisbane Carpets',
    primaryKeyword: 'Carpet Cleaning Brisbane',
    seoTitle: 'Carpet Cleaning Brisbane | Professional Steam Carpet Cleaners QLD',
    seoDescription: 'Expert hot water extraction carpet steam cleaning in Brisbane. Remove stains, dust mites, pet odours, and allergens. Quick-dry results. Free quotes.',
    introText: 'Restore the beauty and hygiene of your Brisbane carpets with our professional hot water extraction cleaning. We remove deep-seated dirt, stubborn stains, pet odours, dust mites, and allergens — leaving your carpets fresh, sanitised, and looking like new.',
    longDescription: [
      'Brisbane\'s subtropical climate creates the perfect conditions for dust mites, mould spores, and bacteria to thrive in carpets. Every day, your carpets accumulate dirt tracked in from outside, fine dust particles, pet dander, food residue, and thousands of microscopic organisms that regular vacuuming simply cannot remove. Professional carpet cleaning is not just about appearance — it\'s about the health of your home and everyone in it.',
      'Auswide Cleaners uses the gold-standard hot water extraction method — also known as steam cleaning — to penetrate deep into carpet fibres and flush out contaminants that have been accumulating for months or years. Our commercial-grade extraction machines apply hot water and eco-friendly cleaning solution at high pressure, then immediately extract the water along with dissolved dirt, bacteria, allergens, and stain residue. The result is a carpet that is not just clean on the surface, but genuinely decontaminated throughout its depth.',
      'Before any cleaning begins, our certified carpet technicians assess your carpet\'s fibre type, pile height, and current condition. This allows us to select the appropriate water temperature, cleaning solution, and extraction method for your specific carpet — preventing shrinkage, colour bleeding, or pile distortion that can occur when inappropriate techniques are applied. We pre-treat all stain areas with specialist solutions appropriate for the stain type before extraction begins.',
      'Beyond standard carpet cleaning, we offer specialist treatments that address the most challenging carpet problems in Brisbane homes. Our pet odour and urine treatment uses enzyme-based solutions that break down odour-causing proteins at the molecular level — not just masking the smell, but permanently neutralising it. Our anti-allergen treatment applies a residual solution after cleaning that continues to inhibit dust mite and allergen activity for up to 12 months after treatment.',
    ],
    whyChooseUs: [
      'Certified carpet technicians trained in hot water extraction and fibre-specific techniques',
      'Quick-dry results — most carpets dry in 3–6 hours with our powerful extraction systems',
      'Specialist pet urine enzyme treatment that permanently neutralises odours',
      'Pre-inspection and stain pre-treatment included as standard — no hidden extras',
    ],
    benefits: [
      { title: 'Hot Water Extraction', description: 'The most effective carpet cleaning method — deep penetration of hot water and solution followed by powerful suction extracts dirt, bacteria, and allergens from deep within the fibre.', icon: 'Droplets' },
      { title: 'Stain Pre-Treatment', description: 'All visible stains are pre-treated with targeted solutions before extraction — red wine, coffee, mud, and pet accidents all respond to our specialist pre-treatment range.', icon: 'Sparkles' },
      { title: 'Pet Odour Elimination', description: 'Enzyme-based pet urine treatment permanently neutralises odour-causing proteins at the source — not just masking the smell with fragrance.', icon: 'Heart' },
      { title: 'Allergen Reduction', description: 'Our HEPA extraction and specialist anti-allergen treatment significantly reduces dust mite populations and allergen levels — important for Brisbane families with asthma or allergies.', icon: 'Wind' },
      { title: 'Quick-Dry Results', description: 'Our powerful truck-mounted and portable extraction machines remove maximum moisture — carpets are typically ready for light foot traffic within 3–6 hours.', icon: 'Clock' },
      { title: 'Upholstery Cleaning', description: 'We also clean fabric sofas, armchairs, dining chairs, and mattresses using the same extraction method — often bundled with carpet cleaning at a reduced rate.', icon: 'Sofa' },
    ],
    processSteps: [
      { step: '01', title: 'Carpet Assessment', detail: 'Our technician inspects your carpets, identifies fibre type, notes stained or heavily soiled areas, and selects the appropriate cleaning method and solutions.' },
      { step: '02', title: 'Pre-Vacuum & Pre-Treat', detail: 'We thoroughly vacuum carpets to remove loose soil before wet cleaning. All stained areas receive targeted pre-treatment with appropriate specialist solutions.' },
      { step: '03', title: 'Hot Water Extraction', detail: 'Commercial-grade extraction equipment applies hot water and cleaning solution at pressure, then immediately suctions out dissolved dirt, bacteria, and solution residue from deep in the carpet.' },
      { step: '04', title: 'Grooming & Drying', detail: 'We groom the carpet pile to promote even drying, apply a deodoriser or anti-allergen treatment as requested, and advise on drying times and re-use of the area.' },
    ],
    testimonials: [
      { name: 'Olivia J.', suburb: 'Highgate Hill', rating: 5, text: 'Three large dogs meant our carpets were in a really bad state. Auswide\'s pet treatment was incredible — all the pet odour is completely gone and the carpets look like they did when we moved in. Amazing result.' },
      { name: 'Marcus T.', suburb: 'Dutton Park', rating: 5, text: 'Used Auswide for our end of lease carpet steam clean. The results were remarkable — what I thought were permanent stains completely lifted. Tenancy bond fully returned with no carpet-related disputes.' },
      { name: 'Sandra W.', suburb: 'Eight Mile Plains', rating: 5, text: 'Annual carpet clean for our family home — they do an incredible job every time. My son has asthma and we genuinely notice the difference in air quality after Auswide does our carpets. Worth every cent.' },
    ],
    relatedServices: [
      { slug: 'deep-cleaning-brisbane', title: 'Deep Cleaning Brisbane' },
      { slug: 'end-of-lease-cleaning-brisbane', title: 'End of Lease Cleaning Brisbane' },
      { slug: 'house-cleaning-brisbane', title: 'House Cleaning Brisbane' },
    ],
    suburbs: ['Highgate Hill', 'Dutton Park', 'Annerley', 'Moorooka', 'Salisbury', 'Upper Mount Gravatt', 'Macgregor', 'Eight Mile Plains', 'Sunnybank', 'Runcorn', 'Acacia Ridge', 'Coopers Plains', 'Yeronga', 'Greenslopes', 'Camp Hill', 'Carina'],
    faqs: [
      { question: 'What carpet cleaning method do you use in Brisbane?', answer: 'We use the hot water extraction method (commonly called steam cleaning), widely recognised as the most effective carpet cleaning technique. It penetrates deep into carpet fibres to remove dirt, bacteria, allergens, and stain residue that surface cleaning cannot reach.' },
      { question: 'How long do carpets take to dry after professional cleaning in Brisbane?', answer: 'With our powerful extraction equipment, carpets are typically dry to light foot traffic within 3–6 hours. Brisbane\'s warm climate and good ventilation significantly speed drying times. Avoid heavy foot traffic and replace furniture only when fully dry.' },
      { question: 'Can you remove tough stains like red wine, coffee, and pet urine?', answer: 'We have specialist pre-treatment solutions for a wide range of stain types including red wine, coffee, grease, mud, blood, and pet urine. While we cannot guarantee 100% removal of every stain (particularly very old or heat-set stains), our results are excellent and our clients are frequently surprised by how much lifts.' },
      { question: 'Do you treat pet odours in Brisbane carpets?', answer: 'Yes. We use enzyme-based pet urine treatment that breaks down the odour-causing proteins at a molecular level, permanently neutralising the smell rather than masking it with fragrance. This treatment is particularly effective when applied to the affected fibres and subfloor area.' },
      { question: 'Is carpet steam cleaning safe for children and pets?', answer: 'Yes. All our carpet cleaning solutions are biodegradable and non-toxic. We recommend keeping children and pets off the carpet while it is wet and drying, but once dry it is completely safe for the whole family.' },
      { question: 'How often should I have my Brisbane carpets professionally cleaned?', answer: 'The Carpet Institute of Australia recommends professional hot water extraction cleaning every 12–18 months for residential carpets. Homes with pets, children, high foot traffic, or allergy sufferers benefit from cleaning every 6–12 months.' },
      { question: 'Do you clean rugs and upholstery as well as carpets?', answer: 'Yes. We clean all types of rugs (including wool, synthetic, and Oriental rugs), fabric sofas, armchairs, dining chairs, and mattresses using appropriate techniques for each material. We often bundle these with carpet cleaning at a discounted rate.' },
      { question: 'Do I need to move furniture before the carpet clean?', answer: 'For best results, we recommend moving smaller furniture items (chairs, side tables, lamps) before we arrive. Our team can assist with moving heavier items like sofas and beds, though we ask you to move delicate, fragile, or very heavy items in advance. We clean under light furniture that remains.' },
    ],
  },

}
