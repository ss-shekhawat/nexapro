// This file contains all the content for Nexapro Technologies website
// Organizing content like this makes it easy to update without touching components

export const companyInfo = {
  name: "Nexapro Technologies",
  tagline: "We code for your success.",
  subtitle: "Bridging Legacy Systems with Modern Innovation",
  email: "nexaprotechnology@gmail.com",
  phone: "+91-6350282519",
  location: "India",
  description: "Nexapro Technologies is a specialized technology solutions provider focused on Legacy Systems modernization and enterprise IT services. We help organizations maintain, optimize, and transform mission-critical systems while enabling seamless integration with modern digital platforms.",
};

export const heroData = {
  title: "Enterprise IT Solutions | Legacy Modernization | Cloud & Digital Transformation",
  description: "Nexapro Technologies is a specialized technology solutions provider focused on Legacy Systems modernization and enterprise IT services. We help organizations maintain, optimize, and transform mission-critical systems while enabling seamless integration with modern digital platforms.",
  expertise: "With deep expertise in AS/400 (IBM iSeries), IBM Mainframes, and enterprise technologies, we ensure business continuity while accelerating digital transformation.",
  cta: "Modernize with Confidence. Transform with Nexapro.",
};

export const whyChooseUs = [
  "10+ Years of Collective Legacy Expertise",
  "AS/400 & IBM Mainframe Specialists",
  "Seamless Cloud & API Integration",
  "Modern Technology Enablement",
  "24x7 Enterprise Support",
  "End-to-End Modernization Services",
];

export const aboutData = {
  description: "Nexapro Technologies is an enterprise IT services company specializing in legacy platform modernization and digital transformation. Our team brings decades of experience in maintaining and enhancing mission-critical enterprise systems.",
  philosophy: "We understand the stability, performance, and reliability legacy systems offer — and we bridge them with modern technologies to unlock new business value.",
  mission: "To bridge legacy with the future — enabling businesses to maximize existing IT investments while accelerating digital transformation.",
  vision: "To be a trusted global partner in Legacy-to-Modern technology transformation.",
  expertise: [
    "AS/400 (IBM iSeries)",
    "IBM Mainframe (z/OS)",
    "COBOL, RPG, CL, JCL",
    "DB2, VSAM, IMS, CICS",
  ],
  strengths: [
    "Deep Legacy System Knowledge",
    "Strong Modern Technology Capabilities",
    "Cost-Effective Transformation Strategies",
    "Reliable Enterprise-Grade Support",
    "Seamless Migration & Integration Approach",
  ],
};

export const servicesData = [
  {
    id: 1,
    title: "Legacy Systems Services",
    icon: "FaServer",
    services: [
      "AS/400 (IBM iSeries) Development & Support",
      "IBM Mainframe Application Development",
      "COBOL, ASSEMBLER, PL/I & RPG Application Enhancements",
      "JCL Batch Processing & Optimization",
      "DB2 Performance Tuning & Database Management",
      "Production Support & System Maintenance",
    ],
  },
  {
    id: 2,
    title: "Legacy Modernization & Integration",
    icon: "FaCloud",
    services: [
      "Legacy to Cloud Migration (AWS, Azure, GCP)",
      "Application Re-platforming",
      "Code Conversion & Refactoring",
      "API Enablement for Legacy Applications",
      "Microservices Integration",
      "System Modernization Strategy & Execution",
    ],
  },
  {
    id: 3,
    title: "Modern Technology Solutions",
    icon: "FaCode",
    services: [
      "Java & .NET Application Development",
      "Python-Based Automation Solutions",
      "DevOps & CI/CD Implementation",
      "AI/ML Integration",
      "Data Engineering & Analytics",
      "Cloud-Native Application Development",
    ],
  },
  {
    id: 4,
    title: "Consulting & Support",
    icon: "FaHeadset",
    services: [
      "Application Maintenance & Enhancement",
      "Performance Optimization",
      "24×7 Production Support",
      "IT Infrastructure & System Assessment",
      "Digital Transformation Roadmap Planning",
      "Training on Legacy Systems",
      "Technical Interview Support for Hiring",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

export const contactFormFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "service", label: "Service Required", type: "select", required: true, options: [
    "Legacy Systems Services",
    "Legacy Modernization & Integration",
    "Modern Technology Solutions",
    "Consulting & Support",
  ]},
  { name: "message", label: "Message", type: "textarea", required: true },
];
