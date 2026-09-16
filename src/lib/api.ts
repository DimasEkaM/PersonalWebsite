import { createClient } from "@/lib/supabase";
import type {
  Profile,
  Experience,
  Project,
  SkillCategory,
  Education,
  Certificate,
} from "@/types";

// Fallback data (V1 static) — used when DB tables don't exist yet
const fallbackProfile: Profile = {
  name: "Dimas Eka Mahendra Karsoma",
  title: "Fullstack Engineer",
  shortSummary:
    "Result-driven Fullstack Engineer with 7+ years of experience building scalable web and mobile applications across financial tech, banking, insurance, e-commerce, and enterprise environments.",
  longBio:
    "I am a Fullstack Engineer with 7+ years of experience building scalable web and mobile applications across financial tech, banking, insurance, e-commerce, and enterprise environments. I have contributed to core digital products at PT Asuransi Jiwa Astra (Astra Life) through PT IBM Delivery Indonesia and PT Vajiro Mulia Gemilang.\n\nMy expertise spans React.js, Next.js, Vue.js, AngularJS, and Flutter, paired with a solid foundation in backend integration. I have a proven track record of delivering high-impact features, improving UI/UX performance, and collaborating with cross-functional teams in fast-paced agile projects.",
  location: "Depok, Jawa Barat, Indonesia",
  phone: "+62 857 9366 4802",
  email: "mahendradimas21@gmail.com",
  linkedIn: "https://linkedin.com/in/dimasekam",
  github: "https://github.com/DimasEkaM",
  availability: "open",
  photo: "/images/profile.jpg",
  resumePdf:
    "https://drive.google.com/file/d/1Nj5ZbLl5rWJeYLl-gYRHlB3FLsVqNxbe/view?usp=sharing",
};

const fallbackExperiences: Experience[] = [
  {
    id: "astra-life",
    company: "PT IBM Delivery Indonesia & PT Vajiro Mulia Gemilang",
    companyShort: "PT IBM Delivery Indonesia & PT Vajiro Mulia Gemilang",
    location: "Onsite at PT Asuransi Jiwa Astra",
    role: "Fullstack Developer",
    startDate: "2024-09",
    endDate: "2026-08",
    bullets: [
      "Developed and enhanced key modules for ILoveLife, IProsper, and AstraLifeGO insurance applications.",
      "Improved UI consistency and performance across web and hybrid app platforms.",
      "Worked closely with product owners, backend engineers, and QA to ensure smooth delivery cycles.",
    ],
    tech: ["React.js", "AngularJS", "Flutter", "JavaScript"],
    order: 0,
  },
  {
    id: "briit",
    company: "PT Bringin Inti Teknologi",
    companyShort: "PT Bringin Inti Teknologi",
    location: "Intiland Tower Jakarta Pusat",
    role: "Middle Frontend Engineer",
    startDate: "2022-08",
    endDate: "2024-08",
    bullets: [
      "Built new features for the Homespot.id Mortgage Ecosystem using React and Flutter, supporting BRI's digital mortgage workflow.",
      "Improved app responsiveness and stability, reducing bug reports in key modules.",
      "Collaborated with PM, TL, BE, QA, and UI/UX teams in an agile development environment.",
      "Performed routine maintenance and bug fixing for both web and mobile applications.",
    ],
    tech: ["React.js", "Flutter", "Redux", "Google Maps", "Datadog"],
    order: 1,
  },
  {
    id: "sign-house",
    company: "PT Bisnis Integrasi Global",
    companyShort: "PT Bisnis Integrasi Global",
    location: "Jakarta Selatan",
    role: "Web Developer",
    startDate: "2021-04",
    endDate: "2022-06",
    bullets: [
      "Developed the DNR Plus e-commerce platform frontend using Vue.js, React.js, and Next.js.",
      "Built the DNR Plus Admin CMS, improving product management workflows.",
      "Developed the Omnichannel Marketplace Connector interface using React.js.",
      "Maintained the PCR Express Clinic Test Information System using CodeIgniter.",
    ],
    tech: ["Vue.js", "React.js", "Next.js", "CodeIgniter", "PHP"],
    order: 2,
  },
  {
    id: "atap-teduh",
    company: "PT Atap Teduh Lestari",
    companyShort: "PT Atap Teduh Lestari",
    location: "Jakarta Timur",
    role: "IT Staff",
    startDate: "2017-03",
    endDate: "2020-12",
    bullets: [
      "Developed the company profile website and maintained its data content.",
      "Built a guestbook application for exhibition events.",
      "Created a product requirement calculator to support the sales/marketing field teams.",
      "Troubleshooting device.",
    ],
    tech: ["PHP", "CodeIgniter", "MySQL"],
    order: 3,
  },
];

const fallbackProjects: Project[] = [
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
];

const fallbackSkillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Vue.js", level: 4 },
      { name: "AngularJS", level: 4 },
      { name: "Flutter", level: 4 },
    ],
    order: 0,
  },
  {
    id: "mobile",
    name: "Mobile",
    skills: [
      { name: "Flutter", level: 4 },
      { name: "Apache Cordova", level: 4 },
    ],
    order: 1,
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Laravel", level: 4 },
      { name: "CodeIgniter", level: 4 },
      { name: "Spring Boot Java", level: 4 },
    ],
    order: 2,
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Git", level: 5 },
      { name: "Jira", level: 4 },
      { name: "Spira", level: 4 },
      { name: "Figma", level: 4 },
      { name: "Postman", level: 4 },
      { name: "REST API", level: 4 },
    ],
    order: 3,
  },
  {
    id: "other",
    name: "Other",
    skills: [
      { name: "UI/UX Collaboration", level: 4 },
      { name: "Performance Optimization", level: 4 },
      { name: "Agile/Scrum", level: 4 },
      { name: "Waterfall", level: 4 },
    ],
    order: 4,
  },
];

const fallbackCertificates: Certificate[] = [
  { id: "solids", title: "Belajar Prinsip Pemrograman SOLID", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/EYX4O7E86XDL", category: "Architecture", order: 0 },
  { id: "backend-fundamental", title: "Belajar Fundamental Back-End dengan JavaScript", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/4EXGV7D5EXRL", category: "Backend", order: 1 },
  { id: "backend-beginner", title: "Belajar Back-End Pemula dengan JavaScript", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/KEXLYV87WZG2", category: "Backend", order: 2 },
  { id: "frontend-beginner", title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/0LZ0JDR3QX65", category: "Frontend", order: 3 },
  { id: "aws-cloud", title: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/N9ZOYLRGYPG5", category: "Cloud", order: 4 },
  { id: "js-basic", title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/0LZ04JKDQP65", category: "Frontend", order: 5 },
  { id: "web-basic", title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/KEXLM33JYZG2", category: "Frontend", order: 6 },
  { id: "ai-basic", title: "Belajar Dasar AI", issuer: "Dicoding", url: "https://www.dicoding.com/certificates/81P24JE78ZOY", category: "AI", order: 7 },
];

// ============================================
// Profile (singleton)
// ============================================
export async function getProfile(): Promise<Profile> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", 1)
      .single();

    if (error) return fallbackProfile;

    return {
      name: data.name,
      title: data.title,
      shortSummary: data.short_summary,
      longBio: data.long_bio,
      location: data.location,
      phone: data.phone,
      email: data.email,
      linkedIn: data.linked_in,
      github: data.github,
      website: data.website,
      photo: data.photo_url,
      resumePdf: data.resume_url,
      availability: data.availability,
    };
  } catch {
    return fallbackProfile;
  }
}

// ============================================
// Experience (with bullets)
// ============================================
export async function getExperiences(): Promise<Experience[]> {
  try {
    const supabase = createClient();

    const { data: experiences, error } = await supabase
      .from("experience")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) return fallbackExperiences;

    const result: Experience[] = [];

    for (const exp of experiences) {
      const { data: bullets } = await supabase
        .from("experience_bullet")
        .select("text")
        .eq("experience_id", exp.id)
        .order("order_index", { ascending: true });

      result.push({
        id: exp.id,
        company: exp.company,
        companyShort: exp.company_short,
        location: exp.location,
        role: exp.role,
        startDate: exp.start_date,
        endDate: exp.end_date || "Present",
        currentlyWorking: exp.currently_working,
        summary: exp.summary,
        bullets: bullets?.map((b) => b.text) || [],
        order: exp.order_index,
      });
    }

    return result;
  } catch {
    return fallbackExperiences;
  }
}

// ============================================
// Projects (with technologies)
// ============================================
export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = createClient();

    const { data: projects, error } = await supabase
      .from("project")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) return fallbackProjects;

    const result: Project[] = [];

    for (const proj of projects) {
      const { data: techs } = await supabase
        .from("project_tech")
        .select("technology")
        .eq("project_id", proj.id);

      result.push({
        id: proj.slug,
        title: proj.title,
        description: proj.description,
        longDescription: proj.long_description,
        category: proj.category,
        technologies: techs?.map((t) => t.technology) || [],
        image: proj.image_url,
        demoUrl: proj.demo_url,
        repoUrl: proj.repo_url,
        featured: proj.featured,
        order: proj.order_index,
      });
    }

    return result;
  } catch {
    return fallbackProjects;
  }
}

// ============================================
// Skill Categories (with skills)
// ============================================
export async function getSkillCategories(): Promise<SkillCategory[]> {
  try {
    const supabase = createClient();

    const { data: categories, error } = await supabase
      .from("skill_category")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) return fallbackSkillCategories;

    const result: SkillCategory[] = [];

    for (const cat of categories) {
      const { data: skills } = await supabase
        .from("skill")
        .select("name, level")
        .eq("category_id", cat.id)
        .order("order_index", { ascending: true });

      result.push({
        id: cat.id,
        name: cat.name,
        skills: skills?.map((s) => ({ name: s.name, level: s.level })) || [],
        order: cat.order_index,
      });
    }

    return result;
  } catch {
    return fallbackSkillCategories;
  }
}

// ============================================
// Education
// ============================================
export async function getEducations(): Promise<Education[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("education")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) return [];

    return data.map((edu) => ({
      id: edu.id,
      institution: edu.institution,
      degree: edu.degree,
      field: edu.field,
      startYear: edu.start_year,
      endYear: edu.end_year,
      gpa: edu.gpa,
      achievements: edu.achievements,
      order: edu.order_index,
    }));
  } catch {
    return [];
  }
}

// ============================================
// Certificates
// ============================================
export async function getCertificates(): Promise<Certificate[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("certificate")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) return fallbackCertificates;

    return data.map((cert) => ({
      id: cert.id,
      title: cert.title,
      issuer: cert.issuer,
      url: cert.url,
      category: cert.category,
      order: cert.order_index,
    }));
  } catch {
    return fallbackCertificates;
  }
}
