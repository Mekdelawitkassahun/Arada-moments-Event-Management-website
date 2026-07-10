// Arada Moment Events Management - Main Client Application Logic

// ==========================================
// 1. DATABASE ENGINE & DATA SEEDING
// ==========================================

const DEFAULT_SERVICES = [
  {
    id: "events-managing",
    title: "Events Organizing & Managing",
    licenseActivity: "Events Organizing & Managing",
    icon: "fa-building",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    overview: "End-to-end planning, coordination, and execution for corporate conferences, exhibitions, and brand launches across Dubai.",
    description: "As a DET-licensed event management company, Arada Moment provides comprehensive organization from concept to completion. We manage venue coordination, vendor sourcing, guest logistics, stage design, audio-visual setup, and on-site operations for business summits, seminars, product launches, and award ceremonies.",
    subServices: [
      "Corporate Conferences & Seminars",
      "Product Launch Exhibitions",
      "Award Ceremonies & Galas",
      "Government & Institutional Events",
      "Full Event Project Management"
    ],
    process: [
      "Initial consultation and event brief development",
      "Venue sourcing, negotiation, and layout planning",
      "Vendor coordination, AV, and staging production",
      "Live event management and guest experience oversight"
    ],
    packages: [
      { name: "Executive Seminar", price: "AED 25,000", desc: "Up to 80 attendees. Includes staging, AV, registration desk, and event filming." },
      { name: "Premium Summit", price: "AED 55,000", desc: "Up to 250 attendees. Full LED staging, registration support, corporate gifts, and media coverage." }
    ],
    faqs: [
      { q: "Do you handle government event permissions?", a: "Yes, we coordinate all DET and local municipality permits required for hosting events in Dubai." },
      { q: "Can you manage the entire event from start to finish?", a: "Absolutely. Our licensed activity covers full event organizing and managing — from planning through breakdown." }
    ]
  },
  {
    id: "weddings",
    title: "Wedding Parties Organizing",
    licenseActivity: "Wedding Parties Organizing",
    icon: "fa-ring",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    overview: "Complete wedding planning, floral design, reception staging, and day-of coordination for luxury ceremonies in Dubai.",
    description: "We specialize in creating breathtaking wedding experiences — from moodboard design and vendor booking to floral installations, bridal entrance coordination, catering management, and guest seating. Every detail is crafted to reflect your vision with elegance and precision.",
    subServices: [
      "Full Wedding Planning & Timelines",
      "Florals & Luxury Table Settings",
      "Reception Stage Construction",
      "Bridal Entrance Design",
      "Guest Seating & RSVP Management"
    ],
    process: [
      "Moodboard conceptualization and color palette selection",
      "Budget analysis and vendor/catering bookings",
      "Detailed run-sheets and rehearsal coordination",
      "On-site wedding coordinator on your special day"
    ],
    packages: [
      { name: "Elegant Reception", price: "AED 35,000", desc: "Traditional decor, stage setup, standard lighting, and coordinator support." },
      { name: "Imperial Luxury", price: "AED 85,000", desc: "Custom flower cascades, luxury bridal path, 3D stage mapping, VIP guest seating." }
    ],
    faqs: [
      { q: "How early should we book wedding services?", a: "We recommend booking at least 3 to 6 months in advance to secure prime venues and vendors in Dubai." },
      { q: "Can we hire you for coordination only?", a: "Yes, we offer day-of coordination packages where we manage existing vendors in the weeks leading up to your event." }
    ]
  },
  {
    id: "parties-entertainment",
    title: "Parties & Entertainment Services",
    licenseActivity: "Parties & Entertainments Services",
    icon: "fa-birthday-cake",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    overview: "Themed birthdays, anniversaries, surprise proposals, and private celebration events tailored to your vision.",
    description: "Make life's milestones unforgettable. From customized children's birthday themes to golden wedding anniversaries and intimate surprise proposals, we design bespoke decorations, book performers, coordinate catering, and manage every logistical detail.",
    subServices: [
      "Themed Birthday Parties",
      "Anniversary Celebrations",
      "Surprise Proposal Planning",
      "Baby Shower Events",
      "Family Reunions & Private Gatherings"
    ],
    process: [
      "Theme selection and guest count planning",
      "Custom backdrop, balloon, and floral decorations",
      "Entertainment, hosts, and catering coordination",
      "On-site setup monitoring and event handoff"
    ],
    packages: [
      { name: "Classic Celebration", price: "AED 12,000", desc: "Themed backdrop, table styling, balloon arch, and standard sound." },
      { name: "Exclusive Themed Gala", price: "AED 28,000", desc: "Custom backdrop, live host/DJ, themed cake, and professional event filming." }
    ],
    faqs: [
      { q: "Do you plan outdoor desert celebrations?", a: "Yes, we plan luxury desert camp anniversaries, proposals, and themed outdoor parties across the UAE." }
    ]
  },
  {
    id: "performing-arts",
    title: "Performing Arts & Music Festivals",
    licenseActivity: "Performing Arts & Music Festivals",
    icon: "fa-guitar",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    overview: "Concert production, live music festivals, and cultural performance events with full stage and sound engineering.",
    description: "We bring high-energy production to live stages across Dubai. Our team handles artist coordination, stage structural safety, sound engineering, lighting design, ticketing support, and security layout — turning venues into thrilling festival arenas.",
    subServices: [
      "Concert Production & Artist Coordination",
      "Live Musical & Dance Performances",
      "Cultural & Fashion Shows",
      "Local & International Festivals",
      "Ticketing & Crowd Management Support"
    ],
    process: [
      "Artist liaison and technical requirements review",
      "Structural stage blueprints and safety sign-offs",
      "Ticketing systems and security briefings",
      "Live show cues and crowd management"
    ],
    packages: [
      { name: "Acoustic / Small Show", price: "AED 40,000", desc: "Standard stage, 15kW sound, artist greenroom, and basic ticketing support." },
      { name: "Grand Concert Arena", price: "AED 120,000", desc: "Large concert truss, 100kW sound array, VIP lounges, and full production crew." }
    ],
    faqs: [
      { q: "Do you handle security and crowd management?", a: "Yes, we coordinate with registered Dubai security firms and local authorities for all required permits." }
    ]
  },
  {
    id: "theatrical-shows",
    title: "Live Theatrical Show Production",
    licenseActivity: "Live Theatrical Show Production",
    icon: "fa-theater-masks",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80",
    overview: "Professional theatrical productions, live stage shows, and artistic performance events across Dubai venues.",
    description: "From intimate theatre performances to large-scale live shows, we manage stage construction, lighting rigs, sound design, performer coordination, and audience experience. Our licensed theatrical production capability ensures every performance meets professional standards.",
    subServices: [
      "Theatrical Stage Design & Construction",
      "Live Performance Coordination",
      "Stage Lighting & Sound Engineering",
      "Performer & Crew Management",
      "Audience Seating & Venue Layout"
    ],
    process: [
      "Creative brief and production design",
      "Stage build, lighting, and sound setup",
      "Performer rehearsals and technical runs",
      "Live show direction and audience management"
    ],
    packages: [
      { name: "Intimate Theatre Show", price: "AED 35,000", desc: "Stage setup, basic lighting, sound system, and coordinator for up to 200 guests." },
      { name: "Grand Stage Production", price: "AED 90,000", desc: "Full theatrical rigging, advanced lighting, multi-performer coordination, and filming." }
    ],
    faqs: [
      { q: "Can you produce shows at external venues?", a: "Yes, we coordinate theatrical productions at hotels, auditoriums, and outdoor venues across Dubai." }
    ]
  },
  {
    id: "events-filming",
    title: "Parties & Events Filming",
    licenseActivity: "Parties & Events Filming",
    icon: "fa-video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    overview: "Professional photography, videography, drone filming, and post-production for events, weddings, and celebrations.",
    description: "Our licensed filming division captures every moment with cinema-grade cameras, professional lighting, and licensed drone operators. We deliver edited highlight reels, cinematic films, social media content packs, and professionally retouched photo galleries.",
    subServices: [
      "Event & Wedding Photography",
      "Cinematic Videography & Highlight Reels",
      "Licensed Aerial Drone Filming",
      "Photo & Video Post-Production Editing",
      "Social Media Content Packages"
    ],
    process: [
      "Shot-list discussion and creative brief",
      "On-site filming with professional crew",
      "Color grading, audio sync, and editing",
      "Final review and secure cloud delivery"
    ],
    packages: [
      { name: "Standard Media Capture", price: "AED 5,000", desc: "1 photographer, 1 videographer, 5 hours. 100 photos and 3-min highlight reel." },
      { name: "Cinematic Production", price: "AED 14,000", desc: "2 camera operators, 1 drone pilot. 300 photos, 5-min cinema film, and social clips." }
    ],
    faqs: [
      { q: "Is your drone pilot licensed in Dubai?", a: "Yes, our drone operators hold valid DCAA permits for legal aerial filming across approved Dubai fly zones." },
      { q: "Do you provide photo and video editing?", a: "Yes, post-production editing is included in our filming packages under our licensed activity." }
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality Services",
    licenseActivity: "Hospitality Services",
    icon: "fa-concierge-bell",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    overview: "Guest hospitality, catering coordination, VIP hosting, and premium guest experience management for all event types.",
    description: "Exceptional hospitality defines memorable events. We coordinate catering menus, guest welcome services, VIP lounge management, registration desks, ushers, and on-site hospitality teams to ensure every guest feels valued from arrival to departure.",
    subServices: [
      "Catering Menu Coordination & Management",
      "VIP Guest Hosting & Lounge Services",
      "Registration Desk & Guest Welcome",
      "Ushers & On-Site Hospitality Staff",
      "Gift Bags & Guest Amenities"
    ],
    process: [
      "Guest experience planning and menu selection",
      "Catering vendor sourcing and contract management",
      "Hospitality team briefing and uniform coordination",
      "On-site guest services and quality oversight"
    ],
    packages: [
      { name: "Essential Hospitality", price: "AED 8,000", desc: "Registration desk, 4 ushers, basic catering coordination for up to 100 guests." },
      { name: "Premium Guest Experience", price: "AED 22,000", desc: "VIP lounge, full catering management, gift bags, and dedicated hospitality team." }
    ],
    faqs: [
      { q: "Can you coordinate dietary requirements?", a: "Yes, we work with caterers to accommodate halal, vegetarian, vegan, and allergy-specific menus." }
    ]
  },
  {
    id: "social-hall",
    title: "Hall Social Events",
    licenseActivity: "Hall social events",
    icon: "fa-door-open",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    overview: "Social event hall setup, venue styling, and social gathering coordination for community and private functions.",
    description: "We transform event halls and social venues into beautifully styled spaces for community gatherings, social clubs, networking events, and private functions. Our licensed hall social events capability covers venue preparation, decor, seating layout, and full event coordination.",
    subServices: [
      "Social Hall Venue Styling & Setup",
      "Community & Networking Events",
      "Social Club Gatherings",
      "Private Hall Bookings & Coordination",
      "Hall Decor, Lighting & Seating Layout"
    ],
    process: [
      "Venue assessment and layout design",
      "Hall decoration and furniture arrangement",
      "Audio-visual and lighting installation",
      "Event day coordination and guest management"
    ],
    packages: [
      { name: "Hall Setup Package", price: "AED 15,000", desc: "Hall styling, basic decor, seating for 150 guests, and on-site coordinator." },
      { name: "Full Social Event", price: "AED 35,000", desc: "Complete hall transformation, premium decor, catering coordination, and filming." }
    ],
    faqs: [
      { q: "Do you provide the venue or coordinate external halls?", a: "We coordinate and style external social halls and event venues across Dubai on your behalf." }
    ]
  }
];

const DEFAULT_PORTFOLIO = [
  {
    id: "port-1",
    title: "Corporate Conference Styling",
    category: "corporate",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    desc: "Professional conference hall setups with branded staging, LED panels, and structured guest seating — ideal for business summits and seminars in Dubai.",
    highlights: "Events Organizing & Managing — full AV setup, registration desks, and hospitality coordination."
  },
  {
    id: "port-2",
    title: "Luxury Wedding Reception",
    category: "weddings",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    desc: "Elegant outdoor and ballroom wedding styling with custom floral arches, candlelit pathways, and bespoke reception staging.",
    highlights: "Wedding Parties Organizing — floral design, stage installation, and event filming."
  },
  {
    id: "port-3",
    title: "Live Music Festival Production",
    category: "entertainment",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    desc: "High-energy festival staging with professional sound systems, stage trussing, and crowd-ready venue layouts across Dubai.",
    highlights: "Performing Arts & Music Festivals — sound engineering, artist coordination, and security logistics."
  },
  {
    id: "port-4",
    title: "Premium Celebration Decor",
    category: "celebrations",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    desc: "Themed birthday and anniversary celebrations with custom backdrops, balloon installations, and elegant table styling.",
    highlights: "Parties & Entertainments Services — themed decor, entertainment booking, and catering coordination."
  },
  {
    id: "port-5",
    title: "Theatrical Stage Production",
    category: "entertainment",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80",
    desc: "Professional theatrical stage builds with advanced lighting rigs, sound design, and performer-ready venue configurations.",
    highlights: "Live Theatrical Show Production — stage construction, lighting, and live performance coordination."
  },
  {
    id: "port-7",
    title: "Premium Hospitality Experience",
    category: "hospitality",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    desc: "Elegant banquet service, VIP guest hosting, and refined table settings for corporate galas and wedding receptions.",
    highlights: "Hospitality Services — catering coordination, guest welcome, and VIP lounge management."
  },
  {
    id: "port-8",
    title: "Social Hall Event Styling",
    category: "social-hall",
    client: "Style Inspiration",
    image: "https://images.unsplash.com/photo-1505232458627-a720f795f28f?auto=format&fit=crop&w=800&q=80",
    desc: "Beautifully styled social event halls for community gatherings, networking events, and private functions across Dubai.",
    highlights: "Hall Social Events — venue styling, seating layout, decor, and full event coordination."
  }
];

const IMAGE_FALLBACK = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80";

const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "corporate", label: "Corporate" },
  { id: "weddings", label: "Weddings" },
  { id: "celebrations", label: "Celebrations" },
  { id: "entertainment", label: "Entertainment" },
  { id: "media", label: "Filming & Media" },
  { id: "hospitality", label: "Hospitality" },
  { id: "social-hall", label: "Social Halls" }
];

const DEFAULT_SITE_SETTINGS = {
  heroBadge: "Arada Moment Events Management L.L.C",
  heroTitle: "Professional Event Management & Unforgettable Moments",
  heroSubtitle: "Dubai's newly licensed event management company — planning, coordinating, and executing weddings, concerts, corporate events, and celebrations with elegance and precision.",
  introTitle: "About Arada Moment Events Management L.L.C",
  introP1: "Arada Moment Events Management L.L.C is a newly established, DET-licensed event management company based in Deira, Dubai. Founded in June 2026, we are dedicated to transforming corporate objectives and personal celebrations into spectacular realities — from high-level conferences and luxury weddings to live music festivals and intimate celebrations.",
  introP2: "Led by Managing Director Aycheshe Teshome Hailu, our team handles full event logistics, vendor coordination, hospitality services, and professional event filming with absolute refinement and regulatory compliance.",
  mission: "To deliver seamless, memorable, and world-class event experiences in Dubai by combining creative design, structured management, licensed hospitality services, and professional event filming that exceed client expectations and foster lasting partnerships.",
  vision: "To become Dubai's most trusted, creative, and customer-focused event management brand — known for excellence in corporate hosting, wedding organization, live entertainment production, and creative media integration across the UAE and GCC region.",
  promise: "As a newly licensed Dubai company, we commit to transparent pricing, regulatory compliance, and premium execution on every project — whether it is an intimate celebration, a grand wedding, or a large-scale music festival.",
  stats: {
    activities: "8",
    activitiesLabel: "Licensed Activities",
    compliant: "100%",
    compliantLabel: "DET Compliant",
    established: "2026",
    establishedLabel: "Established in Dubai",
    legalType: "L.L.C",
    legalTypeLabel: "Single Owner Company"
  }
};

const DEFAULT_GALLERY = [
  { id: "gal-1", type: "photo", category: "corporate", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", title: "Corporate Conference Hall Setup", featured: true },
  { id: "gal-2", type: "photo", category: "weddings", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", title: "Floral Gazebo Wedding Detail", featured: true },
  { id: "gal-3", type: "photo", category: "celebrations", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", title: "Golden Birthday Celebration" },
  { id: "gal-4", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80", title: "Event Lighting & Stage Design" },
  { id: "gal-5", type: "photo", category: "hospitality", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", title: "Premium Event Hospitality" },
  { id: "gal-6", type: "photo", category: "media", url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80", title: "Professional Event Filming Crew" },
  { id: "gal-7", type: "photo", category: "media", url: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80", title: "Licensed Drone Aerial Setup" },
  { id: "gal-8", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", title: "Live Concert Stage Production" },
  { id: "gal-9", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", title: "Music Festival Crowd Energy" },
  { id: "gal-10", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80", title: "Concert Stage & Laser Lights", featured: true },
  { id: "gal-11", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80", title: "Outdoor Music Festival Area" },
  { id: "gal-12", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", title: "Concert Truss & Beam Systems" },
  { id: "gal-13", type: "photo", category: "entertainment", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80", title: "Stage Lighting Engineering" },
  { id: "gal-14", type: "photo", category: "media", url: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=800&q=80", title: "Live Performance Microphone Detail" },
  { id: "gal-15", type: "photo", category: "corporate", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", title: "Corporate Exhibition Pavilion" },
  { id: "gal-16", type: "photo", category: "social-hall", url: "https://images.unsplash.com/photo-1505232458627-a720f795f28f?auto=format&fit=crop&w=800&q=80", title: "Social Hall Venue Styling" },
  { id: "gal-17", type: "photo", category: "social-hall", url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80", title: "Theatrical Hall Event Setup" },
  { id: "gal-18", type: "photo", category: "hospitality", url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80", title: "Elegant Banquet Table Setting" }
];

const DEFAULT_BLOGS = [
  {
    id: "blog-1",
    title: "Planning Your First Corporate Event in Dubai: A Licensed Company's Guide",
    date: "2026-07-02",
    category: "Corporate",
    author: "Aycheshe Teshome",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    content: "As a newly licensed DET event management company, Arada Moment understands the importance of proper planning for corporate events in Dubai. Key steps include selecting a DTCM-approved venue, ensuring your event management company holds valid DET licensing for the activities being delivered, coordinating audio-visual setups, and securing all required municipality permits. Our licensed Events Organizing & Managing activity covers full coordination from venue sourcing to on-site management..."
  },
  {
    id: "blog-2",
    title: "What to Expect When Booking a Licensed Wedding Planner in Dubai",
    date: "2026-07-05",
    category: "Weddings",
    author: "Event Design Team",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    content: "Choosing a DET-licensed wedding organizer ensures your celebration is managed by a legally registered company. Under our Wedding Parties Organizing license, Arada Moment handles moodboard design, floral installations, catering coordination, bridal entrance staging, and professional event filming. Dubai weddings are trending toward elegant outdoor celebrations with LED pathway lighting and bespoke floral arches..."
  },
  {
    id: "blog-3",
    title: "Understanding DET Licensed Event Activities in the UAE",
    date: "2026-07-08",
    category: "Company News",
    author: "Arada Moment Team",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    content: "When hiring an event company in Dubai, always verify their DET trade license and registered activities. Arada Moment Events Management L.L.C (License No. 1632192) is registered for eight activities: Events Organizing & Managing, Wedding Parties Organizing, Parties & Entertainment Services, Performing Arts & Music Festivals, Live Theatrical Show Production, Parties & Events Filming, Hospitality Services, and Hall Social Events. Hiring a fully licensed company protects your investment and ensures regulatory compliance..."
  }
];

const MOCK_BOOKINGS = [];
const MOCK_QUOTES = [];
const MOCK_NEWSLETTERS = [];

// Initialize Storage
function initDatabase() {
  const dbVersion = "7"; // Gallery fix + scalable CMS panels
  if (localStorage.getItem("arada_db_version") !== dbVersion) {
    localStorage.setItem("arada_services", JSON.stringify(DEFAULT_SERVICES));
    localStorage.setItem("arada_portfolio", JSON.stringify(DEFAULT_PORTFOLIO));
    localStorage.setItem("arada_gallery", JSON.stringify(DEFAULT_GALLERY));
    localStorage.setItem("arada_blogs", JSON.stringify(DEFAULT_BLOGS));
    localStorage.setItem("arada_bookings", JSON.stringify(MOCK_BOOKINGS));
    localStorage.setItem("arada_quotes", JSON.stringify(MOCK_QUOTES));
    localStorage.setItem("arada_newsletters", JSON.stringify(MOCK_NEWSLETTERS));
    localStorage.setItem("arada_settings", JSON.stringify(DEFAULT_SITE_SETTINGS));
    localStorage.setItem("arada_db_version", dbVersion);
  }
  if (!localStorage.getItem("arada_settings")) {
    localStorage.setItem("arada_settings", JSON.stringify(DEFAULT_SITE_SETTINGS));
  }
}

initDatabase();

// Load local database data into memory variables
let dbServices = JSON.parse(localStorage.getItem("arada_services"));
let dbPortfolio = JSON.parse(localStorage.getItem("arada_portfolio"));
let dbGallery = JSON.parse(localStorage.getItem("arada_gallery"));
let dbBlogs = JSON.parse(localStorage.getItem("arada_blogs"));
let dbBookings = JSON.parse(localStorage.getItem("arada_bookings"));
let dbQuotes = JSON.parse(localStorage.getItem("arada_quotes"));
let dbNewsletters = JSON.parse(localStorage.getItem("arada_newsletters"));
let dbSettings = JSON.parse(localStorage.getItem("arada_settings")) || DEFAULT_SITE_SETTINGS;

// Utility helpers
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeImageUrl(url) {
  return escapeHtml(url || IMAGE_FALLBACK);
}

function getCategoryLabel(categoryId) {
  const cat = GALLERY_CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.label : categoryId;
}

// Save functions
function saveBookings() { localStorage.setItem("arada_bookings", JSON.stringify(dbBookings)); }
function saveQuotes() { localStorage.setItem("arada_quotes", JSON.stringify(dbQuotes)); }
function savePortfolio() { localStorage.setItem("arada_portfolio", JSON.stringify(dbPortfolio)); }
function saveBlogs() { localStorage.setItem("arada_blogs", JSON.stringify(dbBlogs)); }
function saveNewsletters() { localStorage.setItem("arada_newsletters", JSON.stringify(dbNewsletters)); }
function saveGallery() { localStorage.setItem("arada_gallery", JSON.stringify(dbGallery)); }
function saveServices() { localStorage.setItem("arada_services", JSON.stringify(dbServices)); }
function saveSettings() { localStorage.setItem("arada_settings", JSON.stringify(dbSettings)); }

function exportAllData() {
  return {
    version: localStorage.getItem("arada_db_version"),
    exportedAt: new Date().toISOString(),
    services: dbServices,
    portfolio: dbPortfolio,
    gallery: dbGallery,
    blogs: dbBlogs,
    bookings: dbBookings,
    quotes: dbQuotes,
    newsletters: dbNewsletters,
    settings: dbSettings
  };
}

function importAllData(data) {
  if (!data || !data.services) throw new Error("Invalid backup file");
  dbServices = data.services;
  dbPortfolio = data.portfolio || [];
  dbGallery = data.gallery || [];
  dbBlogs = data.blogs || [];
  dbBookings = data.bookings || [];
  dbQuotes = data.quotes || [];
  dbNewsletters = data.newsletters || [];
  dbSettings = data.settings || DEFAULT_SITE_SETTINGS;
  saveServices();
  savePortfolio();
  saveGallery();
  saveBlogs();
  saveBookings();
  saveQuotes();
  saveNewsletters();
  saveSettings();
}

// ==========================================
// 2. SPA ROUTER & NAVIGATION SYSTEM
// ==========================================

function handleNavigation() {
  const hash = window.location.hash || "#/home";
  const targetPageId = "page-" + hash.replace("#/", "");
  
  const pageViews = document.querySelectorAll(".page-view");
  let found = false;
  
  pageViews.forEach(page => {
    if (page.id === targetPageId) {
      page.classList.add("active-page");
      found = true;
    } else {
      page.classList.remove("active-page");
    }
  });
  
  if (!found && pageViews.length > 0) {
    document.getElementById("page-home").classList.add("active-page");
  }
  
  // Update header nav active link
  const pageName = hash.replace("#/", "");
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach(li => {
    if (li.getAttribute("data-page") === pageName) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });

  // Shrink header on scroll behavior
  const header = document.getElementById("site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Auto close mobile menu on page switch
  document.getElementById("nav-menu").classList.remove("open");
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Page Specific Trigger renderers
  if (pageName === "services") {
    renderServicesPage();
  } else if (pageName === "portfolio") {
    renderPortfolioPage();
  } else if (pageName === "gallery") {
    renderGalleryPage();
  } else if (pageName === "blog") {
    renderBlogPage();
  } else if (pageName === "admin") {
    checkAdminAuth();
  }
}

// Window event listeners for hash changes
window.addEventListener("hashchange", handleNavigation);
window.addEventListener("load", () => {
  handleNavigation();
  renderSiteContent();
  renderFeaturedServices();
  renderHomePortfolio();
  renderTestimonials();
});
window.addEventListener("scroll", () => {
  const header = document.getElementById("site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile navigation toggle
document.getElementById("menu-toggle-btn").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("open");
});

// ==========================================
// 3. PAGE RENDERERS (HOME & MAIN SECTIONS)
// ==========================================

// Render featured services inside homepage slider
function renderFeaturedServices() {
  const container = document.getElementById("featured-services-container");
  if (!container) return;
  
  container.innerHTML = dbServices.slice(0, 6).map(service => `
    <div class="service-card">
      <div class="service-card-img">
        <img src="${service.image}" alt="${service.title}">
        <div class="service-card-icon"><i class="fas ${service.icon}"></i></div>
      </div>
      <div class="service-card-content">
        <h3>${service.title}</h3>
        <p>${service.overview}</p>
        <a href="#/services" onclick="window.location.hash='#/services?id=${service.id}'" class="service-card-link">Explore Details <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

// Render portfolio previews on homepage
function renderHomePortfolio() {
  const container = document.getElementById("home-portfolio-container");
  if (!container) return;
  
  container.innerHTML = dbPortfolio.slice(0, 3).map(project => `
    <div class="portfolio-item" onclick="openPortfolioDetail('${project.id}')">
      <img src="${project.image}" alt="${project.title}">
      <div class="portfolio-overlay">
        <span class="portfolio-category">${project.category}</span>
        <h3 class="portfolio-title">${project.title}</h3>
        <div class="portfolio-btn">View Event Story <i class="fas fa-chevron-right"></i></div>
      </div>
    </div>
  `).join('');
}

const COMMITMENT_ITEMS = [
  {
    icon: "fa-certificate",
    tag: "Regulatory Trust",
    title: "DET Licensed & Compliant",
    text: "Every service we offer is backed by our official Dubai Department of Economy and Tourism trade license (No. 1632192), issued June 2026."
  },
  {
    icon: "fa-handshake",
    tag: "Honest Partnership",
    title: "Transparent Partnerships",
    text: "Honest pricing, clear contracts, and reliable timelines. We build trust through integrity — from your first inquiry to the final highlight reel."
  },
  {
    icon: "fa-star",
    tag: "Premium Delivery",
    title: "Premium Execution Standards",
    text: "As a newly established Dubai company, we bring fresh creative energy and international expertise to every wedding, concert, and corporate event we manage."
  }
];

let commitmentActiveIndex = 0;
let commitmentTimer = null;

function renderCommitmentShowcase() {
  const container = document.getElementById("commitment-showcase");
  if (!container) return;

  container.className = "commitment-showcase";
  container.innerHTML = `
    ${COMMITMENT_ITEMS.map((item, idx) => `
      <div class="commitment-card ${idx === commitmentActiveIndex ? 'active' : ''}" data-commitment-index="${idx}">
        <span class="commitment-card-tag">${escapeHtml(item.tag)}</span>
        <div class="commitment-card-icon"><i class="fas ${item.icon}"></i></div>
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join('')}
    <div class="commitment-dots" style="grid-column: 1 / -1;">
      ${COMMITMENT_ITEMS.map((_, idx) => `
        <button class="commitment-dot ${idx === commitmentActiveIndex ? 'active' : ''}" data-commitment-index="${idx}" type="button" aria-label="Commitment ${idx + 1}"></button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll("[data-commitment-index]").forEach(el => {
    el.addEventListener("click", () => {
      setCommitmentActive(parseInt(el.getAttribute("data-commitment-index"), 10));
    });
    el.addEventListener("mouseenter", () => {
      if (el.classList.contains("commitment-card")) {
        stopCommitmentAutoRotate();
        setCommitmentActive(parseInt(el.getAttribute("data-commitment-index"), 10), false);
      }
    });
  });

  container.addEventListener("mouseleave", startCommitmentAutoRotate);

  if (!container.dataset.observer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.classList.add("commitment-revealed");
          startCommitmentAutoRotate();
        } else {
          stopCommitmentAutoRotate();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(container);
    container.dataset.observer = "true";
  }
}

function setCommitmentActive(index, restartTimer = true) {
  commitmentActiveIndex = ((index % COMMITMENT_ITEMS.length) + COMMITMENT_ITEMS.length) % COMMITMENT_ITEMS.length;
  document.querySelectorAll(".commitment-card").forEach((card, i) => {
    card.classList.toggle("active", i === commitmentActiveIndex);
  });
  document.querySelectorAll(".commitment-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === commitmentActiveIndex);
  });
  if (restartTimer) {
    stopCommitmentAutoRotate();
    const showcase = document.getElementById("commitment-showcase");
    if (showcase && showcase.classList.contains("commitment-revealed")) {
      startCommitmentAutoRotate();
    }
  }
}

function startCommitmentAutoRotate() {
  stopCommitmentAutoRotate();
  commitmentTimer = setInterval(() => {
    setCommitmentActive((commitmentActiveIndex + 1) % COMMITMENT_ITEMS.length, false);
  }, 4500);
}

function stopCommitmentAutoRotate() {
  if (commitmentTimer) {
    clearInterval(commitmentTimer);
    commitmentTimer = null;
  }
}

// Legacy alias for load handler
function renderTestimonials() {
  renderCommitmentShowcase();
}

// Render dynamic Services tab layout
function renderServicesPage() {
  const tabsNav = document.getElementById("services-tabs-nav-id");
  const tabsContent = document.getElementById("services-tabs-content-id");
  if (!tabsNav || !tabsContent) return;
  
  // Render Left Tabs
  tabsNav.innerHTML = dbServices.map((service, idx) => `
    <button class="service-tab-btn ${idx === 0 ? 'active' : ''}" data-service-id="${service.id}">
      <span><i class="fas ${service.icon}" style="margin-right: 12px; color: var(--accent);"></i> ${service.title}</span>
      <i class="fas fa-chevron-right arrow"></i>
    </button>
  `).join('');
  
  // Render Right Content Pane
  tabsContent.innerHTML = dbServices.map((service, idx) => `
    <div class="service-tab-content ${idx === 0 ? 'active' : ''}" id="srv-pane-${service.id}">
      <div class="service-content-banner">
        <img src="${service.image}" alt="${service.title}">
      </div>
      <div class="service-details">
        <span class="hero-badge" style="margin-bottom:15px;">DET Licensed Activity</span>
        <h2>${service.title}</h2>
        <p class="overview">${service.overview}</p>
        <p class="description">${service.description}</p>
        
        <h3 style="margin-bottom: 20px; font-family: var(--font-heading); color: var(--accent);">Our Specializations</h3>
        <div class="service-sub-grid">
          <ul class="service-sub-list">
            ${service.subServices.slice(0, 3).map(sub => `<li>${sub}</li>`).join('')}
          </ul>
          <ul class="service-sub-list">
            ${service.subServices.slice(3).map(sub => `<li>${sub}</li>`).join('')}
          </ul>
        </div>
        
        <div class="service-process">
          <h3>The Planning Process</h3>
          <div class="process-steps">
            ${service.process.map((step, sIdx) => `
              <div class="process-step">
                <div class="process-step-num">${sIdx + 1}</div>
                <div class="process-step-text">
                  <p>${step}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        ${service.packages ? `
          <div class="service-pricing-faq">
            <h3 style="margin-top: 40px; margin-bottom: 20px; font-family: var(--font-heading); color: var(--accent);">Flexible Pricing Packages</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
              ${service.packages.map(pkg => `
                <div style="background: var(--primary-light); border: 1px solid var(--glass-border); padding: 25px; border-radius: 6px;">
                  <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 5px;">${pkg.name}</h4>
                  <div style="color: var(--accent); font-weight: 700; font-size: 1.3rem; margin-bottom: 10px;">${pkg.price}</div>
                  <p style="font-size: 0.85rem; color: var(--text-muted);">${pkg.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${service.faqs ? `
          <div class="service-pricing-faq" style="margin-top: 40px;">
            <h3 style="margin-bottom: 20px; font-family: var(--font-heading); color: var(--accent);">Frequently Asked Questions</h3>
            <div class="accordion-wrapper">
              ${service.faqs.map((faq, fIdx) => `
                <div class="accordion-item" onclick="toggleAccordion(this)">
                  <div class="accordion-header">
                    <h4>${faq.q}</h4>
                    <i class="fas fa-chevron-down accordion-icon"></i>
                  </div>
                  <div class="accordion-content">
                    <div class="accordion-content-inner">
                      <p>${faq.a}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div style="margin-top: 50px; display: flex; gap: 20px;">
          <a href="#/booking" class="btn btn-primary" onclick="setBookingCategory('${service.title}')">Book Now</a>
          <a href="#/quote" class="btn btn-gold-outline" onclick="setQuotationCategory('${service.id}')">Request Quote</a>
        </div>
      </div>
    </div>
  `).join('');
  
  // Wire tab switches
  const tabButtons = tabsNav.querySelectorAll(".service-tab-btn");
  const panes = tabsContent.querySelectorAll(".service-tab-content");
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const serviceId = btn.getAttribute("data-service-id");
      tabsContent.querySelector("#srv-pane-" + serviceId).classList.add("active");
    });
  });

  // Query parameter check for specific initial tab selection (e.g. from homepage cards)
  const urlParams = new URLSearchParams(window.location.search || window.location.hash.split("?")[1]);
  const initialTabId = urlParams.get("id");
  if (initialTabId) {
    const targetBtn = tabsNav.querySelector(`[data-service-id="${initialTabId}"]`);
    if (targetBtn) targetBtn.click();
  }
}

// Render dynamic filterable Portfolio Page
function renderPortfolioPage() {
  const container = document.getElementById("portfolio-items-grid");
  if (!container) return;
  
  function buildGrid(filter = "all") {
    const items = filter === "all" ? dbPortfolio : dbPortfolio.filter(p => p.category === filter);
    if (items.length === 0) {
      container.innerHTML = `<div style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 50px 0;">No portfolio events found in this category.</div>`;
      return;
    }
    
    container.innerHTML = items.map(project => `
      <div class="portfolio-item" onclick="openPortfolioDetail('${project.id}')">
        <img src="${project.image}" alt="${project.title}">
        <div class="portfolio-overlay">
          <span class="portfolio-category">${project.category}</span>
          <h3 class="portfolio-title">${project.title}</h3>
          <div class="portfolio-btn">View Event Story <i class="fas fa-chevron-right"></i></div>
        </div>
      </div>
    `).join('');
  }

  buildGrid();

  // Wire filters tags click events
  const filterBtns = document.querySelectorAll("#portfolio-filter-tags .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      buildGrid(btn.getAttribute("data-filter"));
    });
  });
}

const MV_SHOWCASE_ITEMS = [
  {
    id: "mission",
    icon: "fa-bullseye",
    title: "Our Mission",
    tag: "What We Do",
    textKey: "mission",
    highlights: ["World-class event experiences", "Creative design & management", "Licensed hospitality & filming", "Long-term client partnerships"]
  },
  {
    id: "vision",
    icon: "fa-eye",
    title: "Our Vision",
    tag: "Where We're Headed",
    textKey: "vision",
    highlights: ["Dubai's most trusted event brand", "Excellence in corporate hosting", "Leading wedding & entertainment", "GCC-wide creative integration"]
  },
  {
    id: "promise",
    icon: "fa-gem",
    title: "Our Promise",
    tag: "Our Commitment",
    textKey: "promise",
    highlights: ["Transparent honest pricing", "Full DET regulatory compliance", "Premium execution standards", "Every event treated uniquely"]
  }
];

let mvActiveIndex = 0;
let mvAutoTimer = null;
let mvProgressTimer = null;
let mvProgressElapsed = 0;
const MV_ROTATE_MS = 6000;

function getMvItems() {
  return MV_SHOWCASE_ITEMS.map(item => ({
    ...item,
    text: dbSettings[item.textKey] || ""
  }));
}

function renderMissionVisionShowcase() {
  const container = document.getElementById("mv-showcase");
  if (!container) return;

  const items = getMvItems();

  container.innerHTML = `
    <div class="mv-showcase-tabs" id="mv-showcase-tabs">
      ${items.map((item, idx) => `
        <button class="mv-tab ${idx === mvActiveIndex ? 'active' : ''}" data-mv-index="${idx}" type="button">
          <div class="mv-tab-icon"><i class="fas ${item.icon}"></i></div>
          <div class="mv-tab-label">
            <h4>${escapeHtml(item.title)}</h4>
            <span>${escapeHtml(item.tag)}</span>
          </div>
        </button>
      `).join('')}
    </div>
    <div class="mv-showcase-panel" id="mv-showcase-panel"></div>
    <div class="mv-showcase-footer">
      <button class="mv-nav-btn" id="mv-prev-btn" type="button" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
      <div class="mv-dot-nav" id="mv-dot-nav">
        ${items.map((_, idx) => `<button class="mv-dot ${idx === mvActiveIndex ? 'active' : ''}" data-mv-index="${idx}" type="button" aria-label="Go to slide ${idx + 1}"></button>`).join('')}
      </div>
      <div class="mv-progress-track"><div class="mv-progress-fill" id="mv-progress-fill"></div></div>
      <button class="mv-nav-btn" id="mv-next-btn" type="button" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;

  renderMvPanel(mvActiveIndex);

  container.querySelectorAll(".mv-tab, .mv-dot").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-mv-index"), 10);
      setMvActive(idx);
    });
  });

  document.getElementById("mv-prev-btn").addEventListener("click", () => {
    setMvActive((mvActiveIndex - 1 + items.length) % items.length);
  });
  document.getElementById("mv-next-btn").addEventListener("click", () => {
    setMvActive((mvActiveIndex + 1) % items.length);
  });

  if (!container.dataset.mvWired) {
    container.addEventListener("mouseenter", stopMvAutoRotate);
    container.addEventListener("mouseleave", startMvAutoRotate);
    container.dataset.mvWired = "true";
  }

  if (!container.dataset.observer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.classList.add("mv-revealed");
          startMvAutoRotate();
        } else {
          stopMvAutoRotate();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(container);
    container.dataset.observer = "true";
  }
}

function renderMvPanel(index) {
  const panel = document.getElementById("mv-showcase-panel");
  if (!panel) return;
  const item = getMvItems()[index];
  if (!item) return;

  panel.innerHTML = `
    <div class="mv-panel-slide">
      <div class="mv-panel-header">
        <div class="mv-panel-icon-ring"><i class="fas ${item.icon}"></i></div>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <span class="mv-panel-tag">${escapeHtml(item.tag)}</span>
        </div>
      </div>
      <p class="mv-panel-text">${escapeHtml(item.text)}</p>
      <ul class="mv-panel-highlights">
        ${item.highlights.map(h => `<li><i class="fas fa-check-circle"></i>${escapeHtml(h)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function setMvActive(index) {
  const items = getMvItems();
  mvActiveIndex = ((index % items.length) + items.length) % items.length;
  mvProgressElapsed = 0;

  document.querySelectorAll(".mv-tab").forEach((tab, i) => {
    tab.classList.toggle("active", i === mvActiveIndex);
  });
  document.querySelectorAll(".mv-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === mvActiveIndex);
  });

  renderMvPanel(mvActiveIndex);
  resetMvProgress();
  stopMvAutoRotate();
  const showcase = document.getElementById("mv-showcase");
  if (showcase && showcase.classList.contains("mv-revealed")) {
    startMvAutoRotate();
  }
}

function startMvAutoRotate() {
  stopMvAutoRotate();
  resetMvProgress();
  mvAutoTimer = setInterval(() => {
    const items = getMvItems();
    setMvActive((mvActiveIndex + 1) % items.length);
  }, MV_ROTATE_MS);

  mvProgressTimer = setInterval(() => {
    mvProgressElapsed += 50;
    const pct = Math.min((mvProgressElapsed / MV_ROTATE_MS) * 100, 100);
    const fill = document.getElementById("mv-progress-fill");
    if (fill) fill.style.width = pct + "%";
  }, 50);
}

function stopMvAutoRotate() {
  if (mvAutoTimer) { clearInterval(mvAutoTimer); mvAutoTimer = null; }
  if (mvProgressTimer) { clearInterval(mvProgressTimer); mvProgressTimer = null; }
}

function resetMvProgress() {
  mvProgressElapsed = 0;
  const fill = document.getElementById("mv-progress-fill");
  if (fill) fill.style.width = "0%";
}

// Apply editable site content from CMS settings
function renderSiteContent() {
  const s = dbSettings;
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
  };

  setText("hero-badge-text", s.heroBadge);
  const heroTitleEl = document.getElementById("hero-title-text");
  if (heroTitleEl && s.heroTitle) {
    const parts = s.heroTitle.split(" & ");
    if (parts.length >= 2) {
      heroTitleEl.innerHTML = `${escapeHtml(parts[0])} &amp; <span class="neon-word gold-gradient-text">${escapeHtml(parts.slice(1).join(" & "))}</span>`;
    } else {
      heroTitleEl.textContent = s.heroTitle;
    }
  }
  setText("hero-subtitle-text", s.heroSubtitle);
  setText("intro-title-text", s.introTitle);
  setText("intro-p1-text", s.introP1);
  setText("intro-p2-text", s.introP2);
  setText("about-mission-text", s.mission);
  setText("about-vision-text", s.vision);
  renderMissionVisionShowcase();

  if (s.stats) {
    setText("stat-events", s.stats.activities);
    setText("stat-satisfaction", s.stats.compliant);
    setText("stat-partners", s.stats.established);
    setText("stat-experience", s.stats.legalType);
    setText("stat-events-label", s.stats.activitiesLabel);
    setText("stat-satisfaction-label", s.stats.compliantLabel);
    setText("stat-partners-label", s.stats.establishedLabel);
    setText("stat-experience-label", s.stats.legalTypeLabel);
  }
}

// Render photo gallery with category filters
function renderGalleryPage() {
  const container = document.getElementById("gallery-items-grid");
  const filterBar = document.getElementById("gallery-filter-tags");
  if (!container) return;

  function buildGrid(filter = "all") {
    const items = filter === "all"
      ? dbGallery.filter(g => g.type === "photo")
      : dbGallery.filter(g => g.type === "photo" && g.category === filter);

    if (items.length === 0) {
      container.innerHTML = `<div class="gallery-empty-state"><i class="fas fa-images"></i><p>No photos in this category yet. Check back soon or contact us.</p></div>`;
      return;
    }

    container.innerHTML = items.map((item, idx) => `
      <div class="gallery-item ${item.featured ? 'gallery-item-featured' : ''}" style="animation-delay: ${idx * 0.05}s" onclick="openGalleryLightbox('${item.id}')">
        <img src="${safeImageUrl(item.url)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'">
        <div class="gallery-item-caption">
          <span class="gallery-category-badge">${escapeHtml(getCategoryLabel(item.category))}</span>
          <h4>${escapeHtml(item.title)}</h4>
        </div>
        <div class="gallery-item-hover">
          <i class="fas fa-search-plus"></i>
        </div>
      </div>
    `).join('');
  }

  if (filterBar && !filterBar.dataset.wired) {
    filterBar.innerHTML = GALLERY_CATEGORIES.map((cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">${cat.label}</button>
    `).join('');

    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        buildGrid(btn.getAttribute("data-filter"));
      });
    });
    filterBar.dataset.wired = "true";
  }

  buildGrid("all");
}

// Render searchable Blog Grid
function renderBlogPage() {
  const container = document.getElementById("blog-articles-grid");
  if (!container) return;
  
  function buildGrid(searchQuery = "") {
    let articles = dbBlogs;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      articles = dbBlogs.filter(b => b.title.toLowerCase().includes(q) || b.content.toLowerCase().includes(q) || b.category.toLowerCase().includes(q));
    }
    
    if (articles.length === 0) {
      container.innerHTML = `<div style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 50px 0;">No matching articles found. Try searching for 'drone' or 'theme'.</div>`;
      return;
    }
    
    container.innerHTML = articles.map(blog => `
      <div class="blog-card">
        <div class="blog-card-img">
          <img src="${blog.image}" alt="${blog.title}">
        </div>
        <div class="blog-card-content">
          <div class="blog-meta">
            <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
            <span><i class="far fa-folder"></i> ${blog.category}</span>
          </div>
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
          <button class="btn btn-gold-outline btn-sm" onclick="openBlogReader('${blog.id}')" style="margin-top: 15px;">Read Full Guide</button>
        </div>
      </div>
    `).join('');
  }

  buildGrid();

  // Search input listeners
  document.getElementById("blog-search-btn").addEventListener("click", () => {
    buildGrid(document.getElementById("blog-search-input").value);
  });
  document.getElementById("blog-search-input").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      buildGrid(e.target.value);
    }
  });
}

// Toggles for Accordions
function toggleAccordion(element) {
  const wrapper = element.parentElement;
  const activeItems = wrapper.querySelectorAll(".accordion-item.active");
  activeItems.forEach(item => {
    if (item !== element) item.classList.remove("active");
  });
  element.classList.toggle("active");
}

// Helpers to pass context from service page direct links
function setBookingCategory(categoryName) {
  setTimeout(() => {
    const select = document.getElementById("book-service");
    if (select) select.value = categoryName;
  }, 100);
}
function setQuotationCategory(categoryId) {
  setTimeout(() => {
    const select = document.getElementById("quote-type");
    if (select) select.value = categoryId;
  }, 100);
}

// ==========================================
// 4. INTERACTIVE FORMS & WIZARDS
// ==========================================

// Global Toast element toggle
function showToast(title, desc, iconClass = "fa-check-circle") {
  const toast = document.getElementById("toast-notif-element");
  document.getElementById("toast-title").innerText = title;
  document.getElementById("toast-desc").innerText = desc;
  document.getElementById("toast-icon").className = "fas " + iconClass;
  
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Booking Wizard Form
const bookingForm = document.getElementById("booking-wizard-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newBooking = {
      id: "bk-" + Date.now(),
      name: document.getElementById("book-name").value,
      email: document.getElementById("book-email").value,
      phone: document.getElementById("book-phone").value,
      service: document.getElementById("book-service").value,
      date: document.getElementById("book-date").value,
      location: document.getElementById("book-location").value,
      guests: document.getElementById("book-guests").value,
      package: document.getElementById("book-package").value,
      requirements: document.getElementById("book-requirements").value,
      status: "pending"
    };
    
    dbBookings.push(newBooking);
    saveBookings();
    
    showToast("Booking Registered", "An event engineer will contact you on " + newBooking.phone + " shortly.");
    bookingForm.reset();
    document.getElementById("booking-file-name").style.display = "none";
  });
  
  // Simple drag/drop visual effect
  const dropzone = document.getElementById("booking-dropzone");
  const fileInput = document.getElementById("book-file");
  
  dropzone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      const fileNameLabel = document.getElementById("booking-file-name");
      fileNameLabel.innerText = "Selected: " + e.target.files[0].name;
      fileNameLabel.style.display = "block";
    }
  });
}

// Quotation Request Form
const quoteForm = document.getElementById("quote-request-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const checklistItems = [];
    if (document.getElementById("srv-consultation").checked) checklistItems.push("Consultation");
    if (document.getElementById("srv-venue").checked) checklistItems.push("Venue Coordination");
    if (document.getElementById("srv-decor").checked) checklistItems.push("Decor");
    if (document.getElementById("srv-catering").checked) checklistItems.push("Catering");
    if (document.getElementById("srv-media").checked) checklistItems.push("Media Coverage");
    if (document.getElementById("srv-sound").checked) checklistItems.push("Sound & Lighting");

    const newQuote = {
      id: "qt-" + Date.now(),
      name: document.getElementById("quote-name").value,
      contact: document.getElementById("quote-contact").value,
      type: document.getElementById("quote-type").value,
      date: document.getElementById("quote-date").value,
      venue: document.getElementById("quote-venue").value,
      budget: document.getElementById("quote-budget").value,
      checklist: checklistItems,
      notes: document.getElementById("quote-notes").value,
      status: "pending"
    };
    
    dbQuotes.push(newQuote);
    saveQuotes();
    
    showToast("Quotation Inquiry Sent", "We have generated a ticket. Detailed quote breakdown sent via email.");
    quoteForm.reset();
  });
}

// Newsletter subscription Form
const newsForm = document.getElementById("newsletter-form-id");
if (newsForm) {
  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsForm.querySelector("input").value;
    
    if (!dbNewsletters.some(n => n.email === email)) {
      dbNewsletters.push({ email: email, date: new Date().toISOString().split('T')[0] });
      saveNewsletters();
    }
    
    showToast("Successfully Subscribed!", "Thank you for joining the Arada Moment newsletter circle.");
    newsForm.reset();
  });
}

// Contact Direct Message Form
const contactForm = document.getElementById("contact-direct-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    showToast("Message Transmitted", "Thank you, " + name + ". Our Naif Deira desk will email you shortly.");
    contactForm.reset();
  });
}

// ==========================================
// 5. LIVE PRICING ALGORITHMIC ESTIMATOR
// ==========================================

const sliderGuests = document.getElementById("calc-guests");
const sliderHours = document.getElementById("calc-hours");
const sliderDecor = document.getElementById("calc-decor-lvl");

function runPriceCalculation() {
  if (!sliderGuests || !sliderHours || !sliderDecor) return;
  
  const guests = parseInt(sliderGuests.value);
  const hours = parseInt(sliderHours.value);
  const decorLvl = parseInt(sliderDecor.value);
  
  document.getElementById("calc-guests-val").innerText = guests;
  document.getElementById("calc-hours-val").innerText = hours;
  
  let decorText = "Standard";
  let decorFactor = 1.0;
  if (decorLvl === 2) {
    decorText = "Premium Luxury";
    decorFactor = 1.5;
  } else if (decorLvl === 3) {
    decorText = "Gold VIP Exclusive";
    decorFactor = 2.4;
  }
  document.getElementById("calc-decor-val").innerText = decorText;
  
  // Calculation variables
  const baseCost = 5000;
  const cateringCost = guests * 120; // 120 AED per head
  const decorCost = guests * 80 * decorFactor; // Decors complexity per guest
  const mediaRate = 800 * hours; // hourly rate for crew capture
  
  const totalRaw = (baseCost + cateringCost + decorCost + mediaRate) * 1.05; // plus 5% VAT
  
  document.getElementById("estimate-output").innerText = "AED " + Math.round(totalRaw).toLocaleString();
}

if (sliderGuests) {
  sliderGuests.addEventListener("input", runPriceCalculation);
  sliderHours.addEventListener("input", runPriceCalculation);
  sliderDecor.addEventListener("input", runPriceCalculation);
  runPriceCalculation(); // initial setup run
}

// ==========================================
// 6. POPUPS & LIGHTBOX MODAL TRIGGERS
// ==========================================

const detailModal = document.getElementById("detail-modal-overlay");
const lightboxModal = document.getElementById("lightbox-modal-overlay");
const cmsModal = document.getElementById("cms-modal-overlay");

function showModal(modal) {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideModal(modal) {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close listeners
document.getElementById("btn-close-detail-modal").addEventListener("click", () => hideModal(detailModal));
document.getElementById("btn-close-lightbox-modal").addEventListener("click", () => hideModal(lightboxModal));
document.getElementById("btn-close-cms-modal").addEventListener("click", () => hideModal(cmsModal));

// Overlay background clicks close modals
window.addEventListener("click", (e) => {
  if (e.target === detailModal) hideModal(detailModal);
  if (e.target === lightboxModal) hideModal(lightboxModal);
  if (e.target === cmsModal) hideModal(cmsModal);
});

// Case Study details
function openPortfolioDetail(id) {
  const project = dbPortfolio.find(p => p.id === id);
  if (!project) return;
  
  document.getElementById("detail-modal-title").innerText = project.title;
  document.getElementById("detail-modal-body-content").innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="${project.image}" alt="${project.title}" style="max-width: 100%; border-radius: 6px; border: 1px solid var(--glass-border);">
    </div>
    <div style="font-size: 0.9rem; color: var(--accent); text-transform: uppercase; margin-bottom: 5px; font-weight: 700;">Client: ${project.client}</div>
    <p style="color: #fff; font-size: 1.05rem; line-height: 1.6; margin-bottom: 15px;">${project.desc}</p>
    <div style="background: var(--primary); padding: 20px; border-radius: 6px; border: 1px dashed var(--accent);">
      <h4 style="color: var(--accent); margin-bottom: 5px;"><i class="fas fa-star-of-life"></i> Key Highlights</h4>
      <p style="font-size: 0.9rem; color: var(--text-gold); margin-bottom: 0;">${project.highlights}</p>
    </div>
    <div style="margin-top: 30px; text-align: right;">
      <a href="#/booking" onclick="hideModal(detailModal)" class="btn btn-primary">Inquire Similar Event</a>
    </div>
  `;
  showModal(detailModal);
}

// Blog reader details
function openBlogReader(id) {
  const blog = dbBlogs.find(b => b.id === id);
  if (!blog) return;
  
  document.getElementById("detail-modal-title").innerText = blog.title;
  document.getElementById("detail-modal-body-content").innerHTML = `
    <div style="margin-bottom: 20px;">
      <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 6px; border: 1px solid var(--glass-border);">
    </div>
    <div style="display: flex; gap: 20px; font-size: 0.8rem; color: var(--accent); text-transform: uppercase; margin-bottom: 15px;">
      <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
      <span><i class="far fa-user"></i> By ${blog.author}</span>
      <span><i class="far fa-folder"></i> ${blog.category}</span>
    </div>
    <div style="color: var(--text-light); font-size: 0.98rem; line-height: 1.75; white-space: pre-line;">
      ${blog.content}
    </div>
    <div style="margin-top: 35px; border-top: 1px solid var(--glass-border); padding-top: 20px; text-align: center;">
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">Need professional guidance executing these strategies?</p>
      <a href="#/contact" onclick="hideModal(detailModal)" class="btn btn-gold-outline">Speak with an Event Consultant</a>
    </div>
  `;
  showModal(detailModal);
}

// Lightbox for photos
function openImageLightbox(url, title) {
  document.getElementById("lightbox-modal-title").innerText = title || "Gallery Image";
  document.getElementById("lightbox-modal-body-content").innerHTML = `
    <div class="lightbox-content">
      <img src="${url}" alt="${escapeHtml(title)}" onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'">
    </div>
  `;
  showModal(lightboxModal);
}

function openGalleryLightbox(id) {
  const item = dbGallery.find(g => g.id === id);
  if (!item) return;
  openImageLightbox(item.url, item.title);
}

window.openGalleryLightbox = openGalleryLightbox;

// Lightbox for videos
function openVideoLightbox(url, title) {
  document.getElementById("lightbox-modal-title").innerText = title || "Event Video Highlight";
  document.getElementById("lightbox-modal-body-content").innerHTML = `
    <div class="lightbox-video">
      <video controls autoplay style="width:100%; max-height: 60vh;">
        <source src="${url}" type="video/mp4">
        Your browser does not support local video playback.
      </video>
    </div>
  `;
  showModal(lightboxModal);
}

// ==========================================
// 7. SECURE ADMIN PORTAL & CMS CONTROLLER
// ==========================================

function checkAdminAuth() {
  const isAuth = sessionStorage.getItem("arada_admin_logged");
  const loginPanel = document.getElementById("admin-login-panel");
  const consolePanel = document.getElementById("admin-console-panel");
  
  if (isAuth === "true") {
    loginPanel.style.display = "none";
    consolePanel.style.display = "block";
    populateSiteSettingsForm();
    renderAdminTables();
  } else {
    loginPanel.style.display = "block";
    consolePanel.style.display = "none";
  }
}

// Admin login authorization submission
const adminLoginForm = document.getElementById("admin-auth-form");
if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("admin-username").value;
    const pass = document.getElementById("admin-password").value;
    
    // Standard secure-looking mock credentials
    if (user === "admin" && pass === "arada2026") {
      sessionStorage.setItem("arada_admin_logged", "true");
      checkAdminAuth();
      showToast("Access Authorized", "Welcome back, administrator.", "fa-lock-open");
      adminLoginForm.reset();
    } else {
      showToast("Access Denied", "Incorrect administrator credentials.", "fa-exclamation-triangle");
    }
  });
}

// Admin Logout
const logoutBtn = document.getElementById("admin-logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("arada_admin_logged");
    checkAdminAuth();
    showToast("Session Terminated", "Logged out of portal.", "fa-lock");
  });
}

// Sidebar sub-navigation toggle within the dashboard
const adminSidebarBtns = document.querySelectorAll(".admin-sidebar-btn[data-panel]");
adminSidebarBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    adminSidebarBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const panelName = btn.getAttribute("data-panel");
    const views = document.querySelectorAll(".admin-view");
    
    views.forEach(v => {
      if (v.id === "admin-panel-" + panelName.replace("admin-", "")) {
        v.classList.add("active-panel");
      } else {
        v.classList.remove("active-panel");
      }
    });
  });
});

// Render CMS records tables
function renderAdminTables() {
  const bookingsBody = document.getElementById("admin-bookings-table-body");
  const quotesBody = document.getElementById("admin-quotes-table-body");
  const portfolioBody = document.getElementById("admin-portfolio-table-body");
  const blogBody = document.getElementById("admin-blog-table-body");
  const newsletterBody = document.getElementById("admin-newsletters-table-body");
  
  // Aggregate Stats count
  document.getElementById("adm-stat-inquiries").innerText = dbBookings.length + dbQuotes.length;
  document.getElementById("adm-stat-approved").innerText = dbBookings.filter(b => b.status === "approved").length;
  document.getElementById("adm-stat-leads").innerText = dbNewsletters.length;

  // Bookings list
  if (bookingsBody) {
    if (dbBookings.length === 0) {
      bookingsBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No bookings recorded.</td></tr>`;
    } else {
      bookingsBody.innerHTML = dbBookings.map(b => `
        <tr>
          <td>
            <strong>${b.name}</strong><br>
            <span style="font-size:0.75rem; color:var(--text-muted);">${b.email} | ${b.phone}</span>
          </td>
          <td>${b.service}<br><span style="font-size:0.75rem; color:var(--accent);">${b.package}</span></td>
          <td>${b.date}<br><span style="font-size:0.75rem; color:var(--text-muted);">${b.location}</span></td>
          <td>${b.guests}</td>
          <td><span class="badge badge-${b.status}">${b.status}</span></td>
          <td class="admin-actions">
            ${b.status === "pending" ? `<button class="admin-action-btn check" onclick="approveBooking('${b.id}')" title="Approve Reservation"><i class="fas fa-check"></i></button>` : ''}
            <button class="admin-action-btn view" onclick="viewBookingDetails('${b.id}')" title="View details"><i class="fas fa-eye"></i></button>
            <button class="admin-action-btn trash" onclick="deleteBooking('${b.id}')" title="Delete record"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Quotes list
  if (quotesBody) {
    if (dbQuotes.length === 0) {
      quotesBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No quotations requests.</td></tr>`;
    } else {
      quotesBody.innerHTML = dbQuotes.map(q => `
        <tr>
          <td><strong>${q.name}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${q.contact}</span></td>
          <td>${q.type.toUpperCase()}</td>
          <td>${q.date}<br><span style="font-size:0.75rem; color:var(--text-muted);">${q.venue || 'No Venue Specified'}</span></td>
          <td>AED ${q.budget}</td>
          <td><span class="badge badge-${q.status}">${q.status}</span></td>
          <td class="admin-actions">
            ${q.status === "pending" ? `<button class="admin-action-btn check" onclick="contactQuote('${q.id}')" title="Mark as Contacted"><i class="fas fa-envelope"></i></button>` : ''}
            <button class="admin-action-btn view" onclick="viewQuoteDetails('${q.id}')" title="View checklist options"><i class="fas fa-eye"></i></button>
            <button class="admin-action-btn trash" onclick="deleteQuote('${q.id}')" title="Delete request"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Gallery CMS
  const galleryBody = document.getElementById("admin-gallery-table-body");
  if (galleryBody) {
    if (dbGallery.length === 0) {
      galleryBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No gallery images yet.</td></tr>`;
    } else {
      galleryBody.innerHTML = dbGallery.map(g => `
        <tr>
          <td><img src="${safeImageUrl(g.url)}" style="width:50px;height:50px;object-fit:cover;border-radius:4px;border:1px solid var(--accent);" onerror="this.src='${IMAGE_FALLBACK}'"></td>
          <td><strong>${escapeHtml(g.title)}</strong></td>
          <td>${escapeHtml(getCategoryLabel(g.category))}</td>
          <td>${g.featured ? '<span class="badge badge-approved">Featured</span>' : '—'}</td>
          <td class="admin-actions">
            <button class="admin-action-btn view" onclick="editGalleryItem('${g.id}')" title="Edit"><i class="fas fa-edit"></i></button>
            <button class="admin-action-btn trash" onclick="deleteGalleryItem('${g.id}')" title="Delete"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Portfolio itemsCMS
  if (portfolioBody) {
    portfolioBody.innerHTML = dbPortfolio.map(p => `
      <tr>
        <td><img src="${p.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; border:1px solid var(--accent);"></td>
        <td><strong>${p.title}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">Client: ${p.client}</span></td>
        <td>${p.category.toUpperCase()}</td>
        <td><span style="font-family:monospace; font-size:0.8rem;">${p.id}</span></td>
        <td>
          <button class="admin-action-btn trash" onclick="deletePortfolioItem('${p.id}')" title="Remove showcase item"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    `).join('');
  }

  // Blog articles CMS
  if (blogBody) {
    blogBody.innerHTML = dbBlogs.map(b => `
      <tr>
        <td><img src="${b.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
        <td><strong>${b.title}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">By ${b.author}</span></td>
        <td>${b.date}</td>
        <td>${b.category}</td>
        <td>
          <button class="admin-action-btn trash" onclick="deleteBlogItem('${b.id}')" title="Delete post"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    `).join('');
  }

  // Newsletter list
  if (newsletterBody) {
    newsletterBody.innerHTML = dbNewsletters.map(n => `
      <tr>
        <td><strong>${n.email}</strong></td>
        <td>${n.date}</td>
        <td>
          <button class="admin-action-btn trash" onclick="deleteNewsletterSub('${n.email}')" title="Remove subscriber"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    `).join('');
  }
}

// Admin Actions bookings
window.approveBooking = function(id) {
  const b = dbBookings.find(x => x.id === id);
  if (b) {
    b.status = "approved";
    saveBookings();
    renderAdminTables();
    showToast("Booking Approved", "Status updated successfully.");
  }
};

window.viewBookingDetails = function(id) {
  const b = dbBookings.find(x => x.id === id);
  if (b) {
    document.getElementById("detail-modal-title").innerText = "Booking Sheet: " + b.id;
    document.getElementById("detail-modal-body-content").innerHTML = `
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Client Information</h4>
      <p style="margin-bottom:15px;"><strong>Name:</strong> ${b.name}<br><strong>Email:</strong> ${b.email}<br><strong>Phone:</strong> ${b.phone}</p>
      
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Event Specifications</h4>
      <p style="margin-bottom:15px;">
        <strong>Service Category:</strong> ${b.service}<br>
        <strong>Package Preferred:</strong> ${b.package}<br>
        <strong>Guest Count:</strong> ${b.guests} guests<br>
        <strong>Reservation Date:</strong> ${b.date}<br>
        <strong>Venue/Address:</strong> ${b.location}
      </p>
      
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Special Requirements</h4>
      <p style="color:var(--text-gold); white-space:pre-line;">${b.requirements || 'No special requirements detailed.'}</p>
    `;
    showModal(detailModal);
  }
};

window.deleteBooking = function(id) {
  if (confirm("Are you sure you want to delete booking " + id + "?")) {
    dbBookings = dbBookings.filter(x => x.id !== id);
    saveBookings();
    renderAdminTables();
    showToast("Record Removed", "Booking deleted from database.");
  }
};

// Admin Actions Quotes
window.contactQuote = function(id) {
  const q = dbQuotes.find(x => x.id === id);
  if (q) {
    q.status = "contacted";
    saveQuotes();
    renderAdminTables();
    showToast("Quote Marked Contacted", "Client marked as reviewed.");
  }
};

window.viewQuoteDetails = function(id) {
  const q = dbQuotes.find(x => x.id === id);
  if (q) {
    document.getElementById("detail-modal-title").innerText = "Quote Request Detail: " + q.id;
    document.getElementById("detail-modal-body-content").innerHTML = `
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Inquirer Info</h4>
      <p style="margin-bottom:15px;"><strong>Client:</strong> ${q.name}<br><strong>Contact Desk:</strong> ${q.contact}</p>
      
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Estimation Settings</h4>
      <p style="margin-bottom:15px;">
        <strong>Event Type:</strong> ${q.type.toUpperCase()}<br>
        <strong>Planned Event Date:</strong> ${q.date}<br>
        <strong>Target Budget Area:</strong> AED ${q.budget}<br>
        <strong>Venue Target:</strong> ${q.venue || 'Not specified'}
      </p>
      
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Required Checklists Selected</h4>
      <ul style="margin-bottom:15px; padding-left:20px;">
        ${q.checklist.map(i => `<li style="color:var(--text-gold);">${i}</li>`).join('')}
      </ul>
      
      <h4 style="color:var(--accent); border-bottom:1px solid var(--glass-border); padding-bottom:5px;">Additional Context Notes</h4>
      <p style="color:var(--text-gold); white-space:pre-line;">${q.notes || 'No extra notes.'}</p>
    `;
    showModal(detailModal);
  }
};

window.deleteQuote = function(id) {
  if (confirm("Delete quote request " + id + "?")) {
    dbQuotes = dbQuotes.filter(x => x.id !== id);
    saveQuotes();
    renderAdminTables();
    showToast("Record Removed", "Quotation request deleted.");
  }
};

// Admin Actions portfolio CMS
window.deletePortfolioItem = function(id) {
  if (confirm("Delete showcase item " + id + "?")) {
    dbPortfolio = dbPortfolio.filter(x => x.id !== id);
    savePortfolio();
    renderAdminTables();
    showToast("Item Deleted", "Showcase item removed from portfolio.");
  }
};

// Admin Actions blog CMS
window.deleteBlogItem = function(id) {
  if (confirm("Delete blog article " + id + "?")) {
    dbBlogs = dbBlogs.filter(x => x.id !== id);
    saveBlogs();
    renderAdminTables();
    showToast("Article Deleted", "Article removed from blog registry.");
  }
};

// Admin Actions Newsletters
window.deleteNewsletterSub = function(email) {
  if (confirm("Delete subscriber " + email + "?")) {
    dbNewsletters = dbNewsletters.filter(x => x.email !== email);
    saveNewsletters();
    renderAdminTables();
    showToast("Subscriber Removed", "Email unsubscribed.");
  }
};

// Admin Actions Gallery CMS
window.deleteGalleryItem = function(id) {
  if (confirm("Delete gallery image " + id + "?")) {
    dbGallery = dbGallery.filter(x => x.id !== id);
    saveGallery();
    renderAdminTables();
    showToast("Image Removed", "Gallery item deleted.");
  }
};

window.editGalleryItem = function(id) {
  const item = dbGallery.find(g => g.id === id);
  if (!item) return;
  openGalleryForm(item);
};

function openGalleryForm(existingItem = null) {
  const isEdit = !!existingItem;
  document.getElementById("cms-modal-title").innerText = isEdit ? "Edit Gallery Image" : "Add Gallery Image";
  document.getElementById("cms-modal-body-content").innerHTML = `
    <form id="cms-gallery-form">
      <div class="form-group">
        <label for="cms-gal-title">Image Title *</label>
        <input type="text" id="cms-gal-title" class="form-control" value="${isEdit ? escapeHtml(existingItem.title) : ''}" placeholder="e.g. Luxury Wedding Reception" required>
      </div>
      <div class="form-group">
        <label for="cms-gal-category">Category *</label>
        <select id="cms-gal-category" class="form-control" required>
          ${GALLERY_CATEGORIES.filter(c => c.id !== 'all').map(c => `
            <option value="${c.id}" ${isEdit && existingItem.category === c.id ? 'selected' : ''}>${c.label}</option>
          `).join('')}
        </select>
      </div>
      <div class="form-group">
        <label for="cms-gal-url">Image URL (Unsplash recommended) *</label>
        <input type="url" id="cms-gal-url" class="form-control" value="${isEdit ? escapeHtml(existingItem.url) : ''}" placeholder="https://images.unsplash.com/photo-..." required>
        <small style="color:var(--text-muted);font-size:0.75rem;">Use images from unsplash.com to avoid copyright issues.</small>
      </div>
      <div class="form-group">
        <label style="display:flex;align-items:center;gap:8px;font-weight:400;cursor:pointer;">
          <input type="checkbox" id="cms-gal-featured" ${isEdit && existingItem.featured ? 'checked' : ''}> Mark as featured (larger display)
        </label>
      </div>
      <div id="cms-gal-preview" style="margin-bottom:15px;display:none;">
        <img id="cms-gal-preview-img" style="width:100%;max-height:180px;object-fit:cover;border-radius:6px;border:1px solid var(--glass-border);">
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%;">${isEdit ? 'Save Changes' : 'Add to Gallery'}</button>
    </form>
  `;

  const urlInput = document.getElementById("cms-gal-url");
  const preview = document.getElementById("cms-gal-preview");
  const previewImg = document.getElementById("cms-gal-preview-img");

  function updatePreview() {
    if (urlInput.value.trim()) {
      preview.style.display = "block";
      previewImg.src = urlInput.value.trim();
      previewImg.onerror = () => { previewImg.src = IMAGE_FALLBACK; };
    }
  }
  urlInput.addEventListener("input", updatePreview);
  if (isEdit) updatePreview();

  document.getElementById("cms-gallery-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
      title: document.getElementById("cms-gal-title").value.trim(),
      category: document.getElementById("cms-gal-category").value,
      url: document.getElementById("cms-gal-url").value.trim(),
      type: "photo",
      featured: document.getElementById("cms-gal-featured").checked
    };

    if (isEdit) {
      const idx = dbGallery.findIndex(g => g.id === existingItem.id);
      if (idx !== -1) dbGallery[idx] = { ...dbGallery[idx], ...payload };
    } else {
      dbGallery.push({ id: "gal-" + Date.now(), ...payload });
    }

    saveGallery();
    renderAdminTables();
    hideModal(cmsModal);
    showToast(isEdit ? "Image Updated" : "Image Added", "Gallery updated successfully.");
  });

  showModal(cmsModal);
}

const addGalleryBtn = document.getElementById("btn-open-gallery-add-modal");
if (addGalleryBtn) {
  addGalleryBtn.addEventListener("click", () => openGalleryForm());
}

// Site Content CMS
const saveSettingsBtn = document.getElementById("btn-save-site-settings");
if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener("click", () => {
    dbSettings = {
      heroBadge: document.getElementById("cms-set-hero-badge").value.trim(),
      heroTitle: document.getElementById("cms-set-hero-title").value.trim(),
      heroSubtitle: document.getElementById("cms-set-hero-subtitle").value.trim(),
      introTitle: document.getElementById("cms-set-intro-title").value.trim(),
      introP1: document.getElementById("cms-set-intro-p1").value.trim(),
      introP2: document.getElementById("cms-set-intro-p2").value.trim(),
      mission: document.getElementById("cms-set-mission").value.trim(),
      vision: document.getElementById("cms-set-vision").value.trim(),
      promise: document.getElementById("cms-set-promise").value.trim(),
      stats: {
        activities: document.getElementById("cms-set-stat-1-val").value.trim(),
        activitiesLabel: document.getElementById("cms-set-stat-1-lbl").value.trim(),
        compliant: document.getElementById("cms-set-stat-2-val").value.trim(),
        compliantLabel: document.getElementById("cms-set-stat-2-lbl").value.trim(),
        established: document.getElementById("cms-set-stat-3-val").value.trim(),
        establishedLabel: document.getElementById("cms-set-stat-3-lbl").value.trim(),
        legalType: document.getElementById("cms-set-stat-4-val").value.trim(),
        legalTypeLabel: document.getElementById("cms-set-stat-4-lbl").value.trim()
      }
    };
    saveSettings();
    renderSiteContent();
    showToast("Content Saved", "Website text updated across all pages.");
  });
}

function populateSiteSettingsForm() {
  const s = dbSettings;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };
  setVal("cms-set-hero-badge", s.heroBadge);
  setVal("cms-set-hero-title", s.heroTitle);
  setVal("cms-set-hero-subtitle", s.heroSubtitle);
  setVal("cms-set-intro-title", s.introTitle);
  setVal("cms-set-intro-p1", s.introP1);
  setVal("cms-set-intro-p2", s.introP2);
  setVal("cms-set-mission", s.mission);
  setVal("cms-set-vision", s.vision);
  setVal("cms-set-promise", s.promise);
  if (s.stats) {
    setVal("cms-set-stat-1-val", s.stats.activities);
    setVal("cms-set-stat-1-lbl", s.stats.activitiesLabel);
    setVal("cms-set-stat-2-val", s.stats.compliant);
    setVal("cms-set-stat-2-lbl", s.stats.compliantLabel);
    setVal("cms-set-stat-3-val", s.stats.established);
    setVal("cms-set-stat-3-lbl", s.stats.establishedLabel);
    setVal("cms-set-stat-4-val", s.stats.legalType);
    setVal("cms-set-stat-4-lbl", s.stats.legalTypeLabel);
  }
}

// Data backup export/import
const exportDataBtn = document.getElementById("btn-export-data");
if (exportDataBtn) {
  exportDataBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(exportAllData(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "arada-moment-backup-" + new Date().toISOString().split("T")[0] + ".json";
    a.click();
    showToast("Backup Exported", "JSON file downloaded successfully.");
  });
}

const importDataBtn = document.getElementById("btn-import-data");
const importDataFile = document.getElementById("import-data-file");
if (importDataBtn && importDataFile) {
  importDataBtn.addEventListener("click", () => importDataFile.click());
  importDataFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!confirm("Import backup? This will replace all current website content.")) return;
        importAllData(data);
        renderAdminTables();
        renderSiteContent();
        showToast("Backup Imported", "All content restored from backup file.");
      } catch (err) {
        showToast("Import Failed", "Invalid backup file format.", "fa-exclamation-triangle");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });
}

// Add Portfolio Modal Form CMS
const addPortfolioBtn = document.getElementById("btn-open-portfolio-add-modal");
if (addPortfolioBtn) {
  addPortfolioBtn.addEventListener("click", () => {
    document.getElementById("cms-modal-title").innerText = "Add Showcase Event Portfolio";
    document.getElementById("cms-modal-body-content").innerHTML = `
      <form id="cms-add-portfolio-form">
        <div class="form-group">
          <label for="cms-port-title">Event Title *</label>
          <input type="text" id="cms-port-title" class="form-control" placeholder="e.g. Dubai Opera Gala Night" required>
        </div>
        <div class="form-group">
          <label for="cms-port-client">Client / Sponsor Name *</label>
          <input type="text" id="cms-port-client" class="form-control" placeholder="e.g. Al-Futtaim Luxury" required>
        </div>
        <div class="form-group">
          <label for="cms-port-cat">Category *</label>
          <select id="cms-port-cat" class="form-control" required>
            <option value="corporate">Corporate Event</option>
            <option value="weddings">Wedding Ceremony</option>
            <option value="celebrations">Celebration (Birthday/Party)</option>
            <option value="entertainment">Entertainment / Live Show</option>
            <option value="media">Creative Media Services</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cms-port-image">Unsplash Image URL *</label>
          <input type="url" id="cms-port-image" class="form-control" placeholder="https://images.unsplash.com/photo-..." required>
        </div>
        <div class="form-group">
          <label for="cms-port-desc">Brief Story Description *</label>
          <textarea id="cms-port-desc" class="form-control" placeholder="Describe the layout, venue, goals, and guest responses." required></textarea>
        </div>
        <div class="form-group">
          <label for="cms-port-highlights">Key Setup Highlights *</label>
          <input type="text" id="cms-port-highlights" class="form-control" placeholder="e.g. 50kW array, pyrotechnics, custom gold prints" required>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Publish Showcase Item</button>
      </form>
    `;
    
    // Bind form submit
    const form = document.getElementById("cms-add-portfolio-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newItem = {
        id: "port-" + Date.now(),
        title: document.getElementById("cms-port-title").value,
        client: document.getElementById("cms-port-client").value,
        category: document.getElementById("cms-port-cat").value,
        image: document.getElementById("cms-port-image").value,
        desc: document.getElementById("cms-port-desc").value,
        highlights: document.getElementById("cms-port-highlights").value
      };
      
      dbPortfolio.push(newItem);
      savePortfolio();
      renderAdminTables();
      hideModal(cmsModal);
      showToast("Showcase Published", "New portfolio item is now live.");
    });
    
    showModal(cmsModal);
  });
}

// Write Blog Modal Form CMS
const addBlogBtn = document.getElementById("btn-open-blog-add-modal");
if (addBlogBtn) {
  addBlogBtn.addEventListener("click", () => {
    document.getElementById("cms-modal-title").innerText = "Write Planning Guide / Article";
    document.getElementById("cms-modal-body-content").innerHTML = `
      <form id="cms-add-blog-form">
        <div class="form-group">
          <label for="cms-blog-title">Article Title *</label>
          <input type="text" id="cms-blog-title" class="form-control" placeholder="e.g. Choosing the Perfect Ballroom in Dubai" required>
        </div>
        <div class="form-group">
          <label for="cms-blog-author">Author Name *</label>
          <input type="text" id="cms-blog-author" class="form-control" value="Aycheshe Teshome" required>
        </div>
        <div class="form-group">
          <label for="cms-blog-cat">Category *</label>
          <input type="text" id="cms-blog-cat" class="form-control" placeholder="e.g. Weddings, Corporate, Planning Guide" required>
        </div>
        <div class="form-group">
          <label for="cms-blog-image">Unsplash Image URL *</label>
          <input type="url" id="cms-blog-image" class="form-control" placeholder="https://images.unsplash.com/photo-..." required>
        </div>
        <div class="form-group">
          <label for="cms-blog-content">Article Content (Markdown supported) *</label>
          <textarea id="cms-blog-content" class="form-control" placeholder="Write the main text body here. Give clear event advice..." required style="min-height: 200px;"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Publish Article</button>
      </form>
    `;
    
    // Bind form submit
    const form = document.getElementById("cms-add-blog-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newBlog = {
        id: "blog-" + Date.now(),
        title: document.getElementById("cms-blog-title").value,
        author: document.getElementById("cms-blog-author").value,
        category: document.getElementById("cms-blog-cat").value,
        image: document.getElementById("cms-blog-image").value,
        content: document.getElementById("cms-blog-content").value,
        date: new Date().toISOString().split('T')[0]
      };
      
      dbBlogs.push(newBlog);
      saveBlogs();
      renderAdminTables();
      hideModal(cmsModal);
      showToast("Article Published", "New guide added to the blog section.");
    });
    
    showModal(cmsModal);
  });
}
