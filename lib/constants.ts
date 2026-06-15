// =============================================================================
// Luv Kush Vatika — Single Source of Truth
// All brand facts from the verified brief. Import from here — never hardcode.
// =============================================================================

export const VENUE = {
  name: "Luv Kush Vatika",
  nameAlt: "Lav Kush Vatika",
  nameDevanagari: "लव कुश वाटिका",
  tagline: "A luxurious wedding venue with elegant décor — something every guest and relative will remember.",
  heroSubtitle: "Where every celebration becomes a memory worth keeping.",
  category: "Resort + Multi-Lawn Wedding & Banquet Venue",
  positioning:
    "Spacious, scenic, grand-scale celebrations with elegant décor and warm hospitality; a picturesque backdrop for photography & videography.",
  establishedYear: "[Established Year — confirm with owner]",
} as const;

export const CONTACT = {
  phone: "+919935422678",
  phoneDisplay: "099354 22678",
  phoneTel: "tel:+919935422678",
  whatsappBase: "https://wa.me/919935422678",
  email: "[Email Address — confirm with owner]",
  instagram: "https://www.instagram.com/lavkushvatika/",
  instagramHandle: "@lavkushvatika",
  youtube: "https://www.youtube.com/@kulmeetsinghchhabra1984",
  youtubeHandle: "@kulmeetsinghchhabra1984",
} as const;

export const LOCATION = {
  address: "H796+9WW, Resort Rd, New Kanpur City, Uttar Pradesh 209217",
  shortAddress: "Resort Road, New Kanpur City, UP 209217",
  city: "Kanpur",
  state: "Uttar Pradesh",
  pincode: "209217",
  googleMapsUrl: "https://maps.app.goo.gl/SXVVsfSmwqNK8SG36",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.123!2d80.25!3d26.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuv+Kush+Vatika!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  travelContext: "~30 minutes from Kanpur Railway Station",
  nearbyLandmark: "Near Bithoor Road (heritage/pilgrimage town on the Ganga)",
  nearby: [
    "Bithoor (heritage town on the Ganga)",
    "Blue World Theme Park",
    "JK Temple",
    "Kanpur Zoo",
    "Moti Jheel",
  ],
  distances: [
    { label: "Kanpur Central Railway Station", distance: "[~X km]", time: "~30 min" },
    { label: "Kanpur Airport (Chakeri)", distance: "[~X km]", time: "[~X min]" },
    { label: "Lucknow Airport", distance: "[~X km]", time: "[~X hr]" },
    { label: "Bithoor", distance: "[~X km]", time: "[~X min]" },
  ],
} as const;

export interface EventSpace {
  name: string;
  slug: string;
  shortDescription: string;
  capacity: string;
  type: "lawn" | "indoor" | "lounge" | "terrace";
  suited: string[];
  image: string;
}

export const EVENT_SPACES: EventSpace[] = [
  {
    name: "Swimming Pool Lawn",
    slug: "pool-lawn",
    shortDescription: "Celebrate poolside under the stars — ideal for sangeet, cocktails, and intimate gatherings.",
    capacity: "Up to [X] guests",
    type: "lawn",
    suited: ["Sangeet", "Cocktail Party", "Pre-wedding", "Birthday"],
    image: "/images/poolside-haldi-setup.webp",
  },
  {
    name: "The Lawn",
    slug: "the-lawn",
    shortDescription: "The signature lawn — expansive, green, and ready for grand weddings with a full baraat entry.",
    capacity: "Up to [X] guests",
    type: "lawn",
    suited: ["Wedding", "Reception", "Engagement", "Corporate Event"],
    image: "/images/lawn-pink-canopy.webp",
  },
  {
    name: "Grand Banquet Hall",
    slug: "grand-ballroom",
    shortDescription: "Our air-conditioned ballroom — grand, elegant, and designed for celebrations up to 1000 guests.",
    capacity: "Up to ~1000 guests",
    type: "indoor",
    suited: ["Wedding", "Reception", "Corporate Event", "Birthday", "Cultural Programme"],
    image: "/images/grand-ballroom-setup.webp",
  },
  {
    name: "Pre-function Lounge",
    slug: "pre-function-lounge",
    shortDescription: "A welcoming gathering space where guests arrive, mingle, and the anticipation builds.",
    capacity: "Up to [X] guests",
    type: "lounge",
    suited: ["Guest Welcome", "Cocktail Hour", "Registration"],
    image: "/images/arched-pathway.webp",
  },
];

export const CAPACITY_LADDER = [
  { tier: "Intimate", range: "60–150 guests", icon: "intimate" },
  { tier: "Signature", range: "150–450 guests", icon: "signature" },
  { tier: "Grand", range: "450–1000+ guests", icon: "grand" },
] as const;

export const ACCOMMODATION = {
  totalRooms: "~60",
  description: "Guest rooms & cottages for outstation wedding parties",
  types: [
    { name: "AC Rooms", description: "Air-conditioned rooms with modern amenities" },
    { name: "Non-AC Rooms", description: "Comfortable rooms with natural ventilation" },
    { name: "Cottages", description: "Private cottages for families and VIP guests" },
  ],
} as const;

export const CATERING = {
  type: "In-house multi-cuisine kitchen",
  dietary: "Veg & vegan-friendly",
  customizable: true,
  byob: true,
  note: "Bring-your-own-bar permitted. Menu and pricing are quote-based — we'll create a custom package for your celebration.",
} as const;

export const AMENITIES = [
  { label: "Multiple Lush Lawns", icon: "lawn" },
  { label: "Grand Banquet Hall (AC)", icon: "banquet" },
  { label: "Swimming Pool & Poolside", icon: "pool" },
  { label: "Pre-function Lounge", icon: "lounge" },
  { label: "Bridal & Changing Rooms", icon: "bridal" },
  { label: "In-house Catering", icon: "catering" },
  { label: "Décor & Design Crew", icon: "decor" },
  { label: "Stage & Lighting", icon: "stage" },
  { label: "PA / Sound System", icon: "sound" },
  { label: "Power Backup", icon: "power" },
  { label: "Valet Parking", icon: "valet" },
  { label: "On-site Guest Rooms", icon: "rooms" },
  { label: "Wheelchair Accessible", icon: "accessible" },
  { label: "Digital Payments", icon: "payment" },
] as const;

export const OCCASIONS = [
  { name: "Weddings", slug: "hindu", icon: "wedding", description: "Grand ceremonies across faith traditions", image: "/images/indoor-ceremony.webp" },
  { name: "Receptions", slug: "hindu", icon: "reception", description: "Elegant post-ceremony celebrations", image: "/images/golden-stage-night.webp" },
  { name: "Sangeet · Mehndi · Haldi", slug: "sangeet-mehndi-haldi", icon: "sangeet", description: "Colourful, joyful pre-wedding festivities", image: "/images/poolside-haldi-setup.webp" },
  { name: "Engagement", slug: "hindu", icon: "engagement", description: "Mark the beginning with grace", image: "/images/pastel-mandap.webp" },
  { name: "Corporate & Social", slug: "corporate", icon: "corporate", description: "Conferences, parties, and milestone events", image: "/images/grand-ballroom-setup.webp" },
  { name: "Birthdays & Celebrations", slug: "corporate", icon: "birthday", description: "Intimate to grand — every age, every style", image: "/images/lawn-pink-canopy.webp" },
] as const;

export interface WeddingType {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  ritualNotes: string[];
  spaces: string[];
  image: string;
}

export const WEDDING_TYPES: WeddingType[] = [
  {
    name: "Hindu Wedding",
    slug: "hindu",
    subtitle: "Sacred ceremonies in a setting worthy of the occasion",
    description:
      "From the baraat procession across our grand lawns to the pheras under a beautifully dressed mandap, every ritual finds its perfect space at Luv Kush Vatika. Our team understands the flow of a Hindu wedding — the timing, the transitions, the need for both grandeur and reverence.",
    ritualNotes: [
      "Baraat entry with ample lawn space for the procession",
      "Mandap setup on your choice of lawn or in the ballroom",
      "Dedicated spaces for Haldi, Mehndi, and Sangeet",
      "Vidaai arrangements with a private, dignified setting",
    ],
    spaces: ["The Lawn", "Grand Banquet Hall"],
    image: "/images/indoor-ceremony.webp",
  },
  {
    name: "Muslim Wedding",
    slug: "muslim",
    subtitle: "Graceful Nikah ceremonies with warmth and dignity",
    description:
      "Our spaces adapt seamlessly for a traditional Nikah — whether you envision a garden ceremony under open skies or a climate-controlled ballroom gathering. From the Mehfil to the Walima, we provide settings that honour the solemnity and celebration of the occasion.",
    ritualNotes: [
      "Nikah ceremony setup with separate seating arrangements",
      "Mehfil-e-Milad and Mehndi spaces",
      "Walima reception in the Grand Banquet Hall",
      "Quiet spaces for prayers and preparation",
    ],
    spaces: ["Grand Banquet Hall", "The Lawn", "Pre-function Lounge"],
    image: "/images/pastel-mandap.webp",
  },
  {
    name: "Sikh & Punjabi Wedding",
    slug: "sikh-punjabi",
    subtitle: "Anand Karaj with the grandeur your family deserves",
    description:
      "The energy of a Punjabi wedding needs space — for the Anand Karaj, for the dancing, for the langar. Luv Kush Vatika's expansive lawns and grand ballroom give you room for every tradition, from the morning ceremony to the late-night celebrations.",
    ritualNotes: [
      "Anand Karaj setup with proper sanctity and seating",
      "Spacious lawns for Jago, Giddha, and Bhangra",
      "Langar arrangements with in-house catering support",
      "DJ and music stage setup on the lawns",
    ],
    spaces: ["The Lawn", "Grand Banquet Hall", "Swimming Pool Lawn"],
    image: "/images/lawn-patterned-canopy.webp",
  },
  {
    name: "Sangeet · Mehndi · Haldi",
    slug: "sangeet-mehndi-haldi",
    subtitle: "The celebrations before the celebration",
    description:
      "Some of a wedding's most cherished memories happen before the ceremony itself. Our poolside lawn, intimate garden spaces, and open-air settings are made for the colour of Haldi, the artistry of Mehndi, and the music of Sangeet nights.",
    ritualNotes: [
      "Poolside Sangeet with stage, lights, and sound",
      "Garden Mehndi setup with seating and shade",
      "Haldi ceremony in an intimate lawn setting",
      "Photography-ready décor and backdrops",
    ],
    spaces: ["Swimming Pool Lawn", "The Lawn"],
    image: "/images/mehndi-decor-ring.webp",
  },
  {
    name: "Corporate & Social Events",
    slug: "corporate",
    subtitle: "Professional settings with a personal touch",
    description:
      "Beyond weddings, Luv Kush Vatika hosts corporate conferences, team off-sites, award nights, product launches, and milestone celebrations. Our air-conditioned ballroom and versatile lawn spaces accommodate groups from 60 to over 1000.",
    ritualNotes: [
      "Conference-style seating in the AC ballroom",
      "Outdoor team events and networking on the lawns",
      "Stage, AV, and sound system included",
      "Accommodation for multi-day corporate retreats",
    ],
    spaces: ["Grand Banquet Hall", "The Lawn", "Pre-function Lounge"],
    image: "/images/tree-lights-seating.webp",
  },
];

// Trust stats for the ribbon
export const TRUST_STATS = [
  { label: "on Google", value: "[Live Google Rating]", suffix: "★", isPlaceholder: true },
  { label: "guest capacity", value: "1000", suffix: "+", isPlaceholder: false },
  { label: "lush lawns + grand ballroom", value: "2", suffix: "", extra: "+ 1", isPlaceholder: false },
  { label: "on-site rooms", value: "60", suffix: "", isPlaceholder: false },
  { label: "weddings hosted", value: "[X]", suffix: "+", isPlaceholder: true },
] as const;

// Navigation structure
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Venues", href: "/venues" },
  { label: "Weddings", href: "/weddings" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

// Gallery categories
export const GALLERY_CATEGORIES = [
  "All",
  "Lawns",
  "Ballroom",
  "Décor",
  "Couples",
  "Pool",
] as const;

// SEO
export const SEO = {
  siteName: "Luv Kush Vatika",
  titleTemplate: "%s | Luv Kush Vatika — Luxury Wedding Venue in Kanpur",
  defaultTitle: "Luv Kush Vatika — Luxury Wedding Venue & Resort in Kanpur",
  defaultDescription:
    "Luv Kush Vatika is a premier wedding venue and resort on Bithoor Road, Kanpur. Five lush lawns, a grand banquet hall seating 1000+, 60 guest rooms, in-house catering, and a dedicated décor team — everything for the celebration of a lifetime.",
  url: "https://lavkushvatika.com",
  locale: "en_IN",
} as const;
