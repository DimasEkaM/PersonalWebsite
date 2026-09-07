import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "homespot-web",
    title: "Homespot Website",
    description:
      "BRI digital mortgage ecosystem website built with ReactJS, connecting mortgage, insurance, and property auction systems.",
    category: "web",
    technologies: ["React.js", "Redux", "Atomic Design", "Datadog"],
    highlights: [
      "Implemented BRI Core integration for mortgage (KPR) and BRI Insurance / BRI Life products.",
      "Integrated BRI Property auction systems.",
      "Used Atomic Design methodology and Redux for state management.",
      "Monitored with Datadog for application performance and error tracking.",
    ],
    featured: true,
    order: 0,
  },
  {
    id: "homespot-mobile",
    title: "Homespot Mobile",
    description:
      "Mobile mortgage ecosystem application built from scratch with Flutter, published on Google Play Store and Apple App Store.",
    category: "mobile",
    technologies: ["Flutter", "BLoC", "Google Maps"],
    highlights: [
      "Built from scratch and published on both Google Play Store and Apple App Store.",
      "Implemented features using BLoC state management.",
      "Integrated Google Maps and other supporting libraries.",
    ],
    featured: true,
    order: 1,
  },
  {
    id: "haistok",
    title: "Haistok",
    description:
      "Web-based marketplace platform with integrated CMS built with React.js and TypeScript for managing marketplace content and data.",
    category: "fullstack",
    technologies: ["React.js", "TypeScript", "Sentry"],
    highlights: [
      "E-commerce frontend for customers and a CMS for administrators.",
      "Monitored with Sentry for application performance and error monitoring.",
    ],
    featured: false,
    order: 2,
  },
  {
    id: "astralife-go",
    title: "Astra Life GO",
    description:
      "Mobile insurance application built with AngularJS and Cordova, featuring new insurance product implementations.",
    category: "mobile",
    technologies: ["AngularJS", "Apache Cordova"],
    highlights: [
      "Implemented the new AVA iPro Terjamin insurance product.",
      "Updated product descriptions and policies to comply with POJK regulations.",
      "Managed multiple application versions for PermataBank, Bank Jasa Jakarta, and iOS.",
    ],
    featured: false,
    order: 3,
  },
  {
    id: "iprosper",
    title: "iProsper",
    description:
      "Mobile insurance application focused on implementing new insurance products and regulatory compliance.",
    category: "mobile",
    technologies: ["AngularJS", "Apache Cordova"],
    highlights: [
      "Implemented AVA Proteksi Penyakit Kritis and AVA Infinite Prestige products.",
      "Updated product descriptions and policy documents to comply with PADK regulations.",
    ],
    featured: false,
    order: 4,
  },
  {
    id: "ilovelife",
    title: "ilovelife.co.id",
    description:
      "Insurance product website integrating the Flexi Life Plus insurance product, including product features and user flows.",
    category: "web",
    technologies: ["JavaScript", "Web"],
    highlights: [
      "Integrated the Flexi Life Plus insurance product on the website.",
      "Maintained and improved other existing insurance products.",
    ],
    featured: false,
    order: 5,
  },
  {
    id: "dnr-plus",
    title: "DNR Plus",
    description:
      "E-commerce application frontend built with Vue.js using Axios to consume APIs.",
    category: "web",
    technologies: ["Vue.js", "Axios", "REST API"],
    highlights: [
      "Product browsing, product details, cart management, and checkout flow.",
    ],
    featured: false,
    order: 6,
  },
  {
    id: "pcr-express-clinic",
    title: "PCR Express Clinic System",
    description:
      "Web-based PCR, antigen, and antibody test management system for Express Clinic with WhatsApp result delivery.",
    category: "fullstack",
    technologies: ["CodeIgniter", "PHP", "WhatsApp"],
    highlights: [
      "Patient registration, test result uploads, and payments.",
      "Delivered test results directly to patient WhatsApp using third-party libraries.",
    ],
    featured: false,
    order: 7,
  },
  {
    id: "atap-teduh-site",
    title: "PT Atap Teduh Lestari Website",
    description:
      "Multilingual company profile website with product catalogs, project galleries, documents, and live chat.",
    category: "web",
    technologies: ["PHP", "CodeIgniter"],
    highlights: [
      "Featured product catalogs, project galleries, product documents, company info, and live chat.",
      "Separate admin panel for managing website content.",
    ],
    featured: false,
    order: 8,
  },
];