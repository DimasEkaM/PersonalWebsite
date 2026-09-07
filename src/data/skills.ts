import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
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
    order: 4,
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