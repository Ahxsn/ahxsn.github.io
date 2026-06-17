import project1 from "@/assets/projects/project-1.webp";
import project2 from "@/assets/projects/project-2.webp";
import project3 from "@/assets/projects/project-3.webp";
import project4 from "@/assets/projects/project-4.webp";
import project5 from "@/assets/projects/project-5.webp";
import project6 from "@/assets/projects/project-6.webp";

/**
 * Project gallery. Image-driven content: titles and 25-word descriptions
 * are AI-parsed from the source design language of each uploaded screenshot.
 */
export const PROJECTS = [
  {
    image: project1,
    title: "California Green Roofing",
    category: "Service Business . WordPress",
    desc: "High-conversion WordPress build for a roof repair and installation company featuring testimonials, multi-step quote flow, coupon offers and a streamlined service inquiry pipeline.",
    accent: "#16a34a",
    tag: "WordPress",
  },
  {
    image: project2,
    title: "D&D Home Remodeling",
    category: "Design Build . WordPress",
    desc: "Luxury home remodeling portfolio with editorial gallery, trust badges, service taxonomy, blog architecture and an integrated quote form built for serious lead generation.",
    accent: "#0ea5e9",
    tag: "Elementor Pro",
  },
  {
    image: project3,
    title: "Elite Locksmith 247",
    category: "Emergency Service . WordPress",
    desc: "Conversion-focused locksmith platform with prominent click-to-call, structured service breakdowns, verified reviews, captcha-protected forms and instant 24/7 dispatch architecture.",
    accent: "#3b82f6",
    tag: "Custom Theme",
  },
  {
    image: project4,
    title: "Golden Shore Renovation",
    category: "Luxury Renovation . WordPress",
    desc: "Premium remodeling brand site with cinematic hero, refined services grid, multi-step estimate funnel, testimonials and FAQ designed for high-ticket residential clients.",
    accent: "#b8860b",
    tag: "WordPress",
  },
  {
    image: project5,
    title: "Liberty Laser Eye Center",
    category: "Healthcare . WordPress",
    desc: "Patient-centric medical site featuring procedure pages, doctor credentials, animated process steps, structured FAQ schema and a clean booking funnel for vision correction.",
    accent: "#0d9488",
    tag: "Elementor",
  },
  {
    image: project6,
    title: "AtticAir Duct & Insulation",
    category: "Home Services . WordPress",
    desc: "Multi-service HVAC platform with engaging hero, service modules, partner badges, blog system, embedded video proof and a powerful contact and quote engine.",
    accent: "#10b981",
    tag: "WordPress",
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Figma to WordPress",
    desc: "Pixel-perfect conversion of Figma designs into high-performance WordPress sites with smooth animations and flawless UX.",
    icon: "figma",
  },
  {
    n: "02",
    title: "PSD to WordPress",
    desc: "Converting static PSD designs into dynamic, fully responsive WordPress themes with clean code and cross-browser support.",
    icon: "layers",
  },
  {
    n: "03",
    title: "Advanced Elementor Dev",
    desc: "Custom Elementor layouts, dynamic content and lightweight, manageable sites. Full control without constant dev help.",
    icon: "blocks",
  },
  {
    n: "04",
    title: "Scalable E-commerce",
    desc: "Robust WooCommerce stores optimised for sales. Secure payments, inventory management, built to grow with your business.",
    icon: "shopping",
  },
  {
    n: "05",
    title: "Speed & SEO Optimization",
    desc: "Core Web Vitals in the green, technical SEO, schema markup and asset pipelines tuned for real-world performance.",
    icon: "gauge",
  },
  {
    n: "06",
    title: "Maintenance & Care Plans",
    desc: "Monthly updates, security monitoring, backups and on-demand changes so your site keeps performing for years.",
    icon: "shield",
  },
  {
    n: "07",
    title: "Bricks Builder Dev",
    desc: "High-performance Bricks Builder sites with dynamic data, custom elements and blazing fast render times.",
    icon: "blocks",
  },
  {
    n: "08",
    title: "Custom Theme Development",
    desc: "Hand-coded PHP WordPress themes built from scratch — clean markup, custom blocks, ACF and full editor control for your team.",
    icon: "layers",
  },
  {
    n: "09",
    title: "Custom Plugin Development",
    desc: "Bespoke WordPress plugins in PHP and JavaScript: admin panels, REST endpoints, integrations, and reusable functionality engineered for security and scale.",
    icon: "shield",
  },
];

export const TESTIMONIALS = [
  { name: "Daniel Hofmann", role: "Founder, Northpeak Capital", text: "Ahsan delivered a finance-grade WordPress build that loads instantly and looks world class. Communication was effortless from kickoff to launch." },
  { name: "Emilie Laurent", role: "Creative Director, Atelier Lumiere", text: "He understood our brand on the first call. The WooCommerce experience he built genuinely feels like luxury and our customers tell us." },
  { name: "Marcus Bell", role: "CTO, Aurora Labs", text: "We needed a developer who could think product, design and SEO together. Ahsan is that rare blend. PageSpeed went from 54 to 98." },
  { name: "Hiroshi Tanaka", role: "Product Lead, Kobo", text: "Pixel perfect on every breakpoint, including the awkward ones. Animations feel native, not bolted on. Easy ten out of ten." },
  { name: "Sofia Romero", role: "Marketing Manager, Numa", text: "He rebuilt our Elementor site in two weeks and our bounce rate dropped by thirty one percent. Honest timelines and zero drama." },
  { name: "Liam O'Connor", role: "Owner, Dublin Roastery", text: "Got a beautiful WooCommerce shop with subscription billing wired in. Sales doubled in the first quarter after launch. Highly recommended." },
  { name: "Aisha Khan", role: "Founder, Soko Studio", text: "Ahsan respected our budget and still delivered a premium feel. He even trained our team on managing content afterwards. Five stars." },
  { name: "Mateusz Nowak", role: "Head of Growth, Veloria", text: "Clean code, real performance gains and SEO that actually moved rankings within a month. Already booked him for project two." },
  { name: "Chloe Martin", role: "Brand Lead, Maison Verte", text: "Our agency uses Ahsan whenever a client needs WordPress done properly. He treats every site like it is his own brand." },
  { name: "Ravi Mehta", role: "Co-founder, Lendcraft", text: "Migration from a janky theme to a custom block setup was painless. Editor experience is now genuinely enjoyable for the team." },
  { name: "Anna Petrova", role: "Operations, Helix", text: "He documented everything. Even six months later, onboarding a new editor took ten minutes thanks to his handoff notes and recordings." },
  { name: "Diego Ferreira", role: "Founder, Surfside Co.", text: "Hero animation is the first thing every visitor mentions. Ahsan nailed the brand vibe without overcomplicating things or hurting performance." },
  { name: "Jasmine Carter", role: "Marketing Director, Northwind", text: "Worked across timezones like a true partner. Updates were proactive and the final build was faster than our previous Webflow site." },
  { name: "Yusuf Demir", role: "CEO, Mavi Studio", text: "Custom Elementor widgets that our client team actually uses. Saved us countless hours on every new campaign page we ship." },
  { name: "Linda Svensson", role: "Brand Strategist, Form", text: "Sophisticated typography, restrained motion, real craft. He pushes back when something would hurt UX. Exactly what we wanted from a partner." },
  { name: "Carlos Mendoza", role: "Founder, Hacienda Foods", text: "Bilingual WordPress build with Stripe integration. He handled all the edge cases I did not even know existed in our checkout." },
  { name: "Olivia Wright", role: "Head of Digital, Boldline", text: "Best freelancer experience I have had in a decade. Clear scope, fair pricing, exceptional delivery. The site converts beautifully too." },
  { name: "Ahmed Saleh", role: "Marketing Lead, Falcon Group", text: "RTL layout was flawless, Arabic typography looked native. Cultural attention to detail you rarely get from international freelance developers anywhere." },
  { name: "Nadia Haddad", role: "Founder, Studio Nour", text: "He took our Figma file and gave it back as a faster, sharper, more thoughtful website. Worth every penny we invested." },
  { name: "Pieter de Vries", role: "Product Manager, Kade", text: "Performance budget hit on day one. Lighthouse stays green months later because the foundation was right and well documented from start." },
  { name: "Isabella Rossi", role: "Editor in Chief, Vela Press", text: "Editorial WordPress build with archive layouts I did not think were possible without React. Our writers and editors absolutely love it." },
  { name: "Thomas Schneider", role: "Agency Owner, Helvetic Co.", text: "We outsource our hardest WordPress builds to Ahsan. He treats deadlines like they are sacred. Highly recommended for serious agencies." },
  { name: "Grace Park", role: "Designer, Studio Han", text: "Translated my design system into reusable blocks with zero compromise. The handoff was the cleanest I have ever experienced in years." },
  { name: "Mohammed Al Farsi", role: "Founder, Bayt Digital", text: "He optimised our store and Core Web Vitals turned all green. Conversions followed within weeks. A solid engineer and reliable communicator." },
  { name: "Beatrice Lambert", role: "Marketing Manager, Vox", text: "Set up a multilingual site with WPML and it just works. Editors no longer ping me about broken translations or missing strings." },
  { name: "Andrei Popescu", role: "Founder, Voltura", text: "Saved a project that was going sideways with another developer. Picked it up, audited it and shipped on time without drama." },
  { name: "Sara Lindqvist", role: "Brand Director, Norden", text: "He has taste. That sounds simple but it is rare. Everything he ships looks intentional and considered. A pleasure to work alongside." },
  { name: "Felipe Castro", role: "CTO, Mercadito", text: "WooCommerce with multi currency, custom shipping zones and a checkout we A/B tested into a twenty two percent lift. Absolute professional." },
  { name: "Hana Suzuki", role: "Founder, Wagashi Lab", text: "Quiet, elegant, super reliable. Speaks design and code equally well. Will definitely book again for our next launch and rebrand." },
  { name: "Victor Bjorn", role: "Operations Lead, Atlas", text: "He cleaned up a decade of plugin debt and the site is finally fast again. Maintenance plan has been excellent too. Five stars." },
  { name: "Priya Iyer", role: "Founder, Lotus Studio", text: "Premium output without the premium agency overhead. Ahsan is who I recommend whenever a founder needs WordPress done properly and shipped fast." },
  { name: "Lukas Weber", role: "Head of Web, Kreis", text: "Animations do not slow the site. SEO scores went up. Marketing finally has the landing page builder they had been asking for." },
  { name: "Camille Dubois", role: "Founder, Maison Verte", text: "Elegant, fast, mobile perfect. Customers stay longer and buy more. Hard to ask for more from a complete website rebuild project." },
  { name: "Nathan Brooks", role: "Director, Kowhai Digital", text: "Honest about what plugins to keep and what to kill. The site is leaner, faster and easier to manage than it has ever been." },
];

export const FAQS = [
  { q: "Do you build websites from scratch or use templates?", a: "Both. I lean on custom architecture whenever the brand deserves it. For WordPress, I build custom themes, Elementor and Bricks systems tailored to your content workflows. For React projects, every component is hand-crafted to your design system." },
  { q: "How fast will my website actually be?", a: "I target 95+ on Lighthouse and green Core Web Vitals on real-world devices. Speed is not bolted on at the end. It is planned into the stack, the image pipeline, the hosting and the third-party scripts from day one." },
  { q: "Can you redesign my existing WordPress site without breaking SEO?", a: "Yes. I preserve URL structures, redirect anything that must change with 301s, migrate metadata, and validate schema and indexing before and after launch so rankings stay stable." },
  { q: "Do you handle Elementor, Bricks Builder and custom theme work?", a: "Daily. I build custom Elementor and Bricks widgets, lock down the editor experience for client teams, and convert Figma files into clean, reusable templates that do not bloat your site." },
  { q: "What about responsive design and mobile UX?", a: "Every project is designed mobile-first and reviewed on multiple real devices. Layouts, animations and interactions are tuned per breakpoint, not just scaled down." },
  { q: "Do you provide ongoing maintenance and support?", a: "Yes. I offer monthly care plans covering updates, backups, security monitoring, performance audits and a fixed amount of content or design changes each month." },
  { q: "How do we work together if you are freelance?", a: "Clear scope, weekly check-ins, a shared project board and a Loom-friendly workflow. You always know what is in progress, what is blocked and what ships next." },
  { q: "What is a typical timeline for a WordPress build?", a: "Most marketing sites land in 2 to 4 weeks from approved designs. Larger WooCommerce or custom block builds usually run 4 to 8 weeks depending on integrations and content readiness." },
];

export const STATS = [
  { value: "39+", label: "Projects shipped" },
  { value: "28+", label: "Worldwide clients" },
  { value: "5.0", label: "Avg. rating" },
  { value: "2+", label: "Years experience" },
];

export const REGIONS: string[] = [];