"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt-BR" | "en-US";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  "pt-BR": {
    // Navbar
    "navbar.home": "Início",
    "navbar.theme": "Tema",
    "navbar.language": "Idioma",

    // Projects Section
    "projects.title": "Meus Projetos",
    "projects.subtitle": "Projetos em destaque",
    "projects.description": "Trabalhei em projetos de backend, integrações e aplicações mobile. Aqui estão alguns em destaque.",

    // Work Section
    "work.title": "Experiência Profissional",
    "work.subtitle": "Minha trajetória",
    "work.description": "Minha jornada e experiências profissionais.",

    // Work Descriptions
    "work.coordenaai.description": "Desenvolvimento de APIs backend escaláveis para CordenaAI, plataforma mobile de gerenciamento esportivo. APIs RESTful em .NET 8 com 50+ endpoints (Swagger/OpenAPI). Integrações: Stripe, Evolution API (WhatsApp), Microsoft Teams, Office 365 SMTP, Azure Communication Services. Infraestrutura em Azure (App Service, Blob Storage, Database for MySQL). JWT, CORS, Rate Limiting, MemoryCache (redução de 40% no tempo de resposta). SignalR para real-time. Desenvolvimento com Cursor IDE, testes xUnit e documentação técnica.",
    "work.tecnun.description": "Prestação de serviços especializados para o setor financeiro. Otimização de performance de banco de dados e relatórios gerenciais. Automações com VBA (Excel, Access, Outlook) e integrações com Mainframe/PCOMM para sistemas legados. Documentação de sistemas legados e análise de requisitos com especificações técnicas.",

    // Project Descriptions
    "projects.coordenaai.description": "Plataforma de gerenciamento esportivo completa. Backend em .NET 8 com SignalR para tempo real, gestão de atletas, professores, turmas e horários. Integrações Stripe, WhatsApp (Evolution API), Microsoft Teams. Azure Cloud (Blob Storage, Database for MySQL, App Service). Repository Pattern, testes xUnit e de integração.",
    "projects.luma.description": "Smart Assist para gestão doméstica com suporte futuro a IoT. App mobile React Native + TypeScript + Expo SDK 54. Backend Supabase com PostgreSQL e RLS. Orquestração de IA via n8n com webhooks e integração com APIs de LLMs. Desenvolvimento com MCP Supabase e n8n-tools.",

    // Project Names and Dates
    "projects.coordenaai.title": "CordenaAI",
    "projects.coordenaai.dates": "Out 2024 - Out 2025",
    "projects.luma.title": "Luma",
    "projects.luma.dates": "Em desenvolvimento",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar",
    "contact.description": "Estou sempre aberto a novas oportunidades e conexões.",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",

    // Hero Section
    "hero.greeting": "Olá, sou",
    "hero.role": "Desenvolvedor Backend .NET | Automação & Integração de APIs | Azure Cloud | React Native | IA em Desenvolvimento",
    "hero.summary": "Desenvolvedor backend com 5 anos na área. Tenho experiência em .NET, C# e arquitetura RESTful, com atuação recente em integração de serviços complexos e orquestração de workflows usando n8n e MCP. Domino também automação com VBA e possuo conhecimento prático em Office 365. Busco oportunidades em desenvolvimento full-stack, arquitetura de sistemas e soluções que integrem automação inteligente e IA.",
    "hero.downloadCV": "Baixar CV",
    "hero.contact": "Entre em Contato",

    // Skills
    "skills.title": "Habilidades",

    // About
    "about.title": "Sobre",

    // Social
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "E-mail",

    // Contact form
    "contact.badge": "Contato",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.namePlaceholder": "Seu nome completo",
    "contact.form.emailPlaceholder": "seu@email.com",
    "contact.form.subjectPlaceholder": "Como posso ajudar?",
    "contact.form.messagePlaceholder": "Descreva seu projeto ou necessidade...",
    "contact.form.submit": "Enviar mensagem",
    "contact.comingSoon": "Em breve",
  },
  "en-US": {
    // Navbar
    "navbar.home": "Home",
    "navbar.theme": "Theme",
    "navbar.language": "Language",

    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle": "Featured Projects",
    "projects.description": "I've worked on backend, integration, and mobile applications. Here are some highlights.",

    // Work Section
    "work.title": "Work Experience",
    "work.subtitle": "My Journey",
    "work.description": "My professional journey and experiences.",

    // Work Descriptions
    "work.coordenaai.description": "Development of scalable backend APIs for CordenaAI, a mobile sports management platform. RESTful APIs in .NET 8 with 50+ endpoints (Swagger/OpenAPI). Integrations: Stripe, Evolution API (WhatsApp), Microsoft Teams, Office 365 SMTP, Azure Communication Services. Infrastructure on Azure (App Service, Blob Storage, Database for MySQL). JWT, CORS, Rate Limiting, MemoryCache (40% response time reduction). SignalR for real-time. Development with Cursor IDE, xUnit tests and technical documentation.",
    "work.tecnun.description": "Specialized services for the financial sector. Database performance optimization and management reports. Automations with VBA (Excel, Access, Outlook) and integrations with Mainframe/PCOMM for legacy systems. Legacy systems documentation and requirements analysis with technical specifications.",

    // Project Descriptions
    "projects.coordenaai.description": "Complete sports management platform. Backend in .NET 8 with SignalR for real-time, management of athletes, teachers, classes and schedules. Integrations Stripe, WhatsApp (Evolution API), Microsoft Teams. Azure Cloud (Blob Storage, Database for MySQL, App Service). Repository Pattern, xUnit and integration tests.",
    "projects.luma.description": "Smart Assist for home management with future IoT support. Mobile app React Native + TypeScript + Expo SDK 54. Supabase backend with PostgreSQL and RLS. AI orchestration via n8n with webhooks and integration with LLM APIs. Development with MCP Supabase and n8n-tools.",

    // Project Names and Dates
    "projects.coordenaai.title": "CordenaAI",
    "projects.coordenaai.dates": "Oct 2024 - Oct 2025",
    "projects.luma.title": "Luma",
    "projects.luma.dates": "In development",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's Talk",
    "contact.description": "I'm always open to new opportunities and connections.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.role": "Backend .NET Developer | API Automation & Integration | Azure Cloud | React Native | AI in Development",
    "hero.summary": "Backend developer with 5 years of experience. I have expertise in .NET, C# and RESTful architecture, with recent work in complex service integration and workflow orchestration using n8n and MCP. I also have VBA automation skills and practical knowledge of Office 365. Seeking opportunities in full-stack development, system architecture, and solutions that integrate intelligent automation and AI.",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Contact Me",

    // Skills
    "skills.title": "Skills",

    // About
    "about.title": "About",

    // Social
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "Email",

    // Contact form
    "contact.badge": "Contact",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subjectPlaceholder": "How can I help?",
    "contact.form.messagePlaceholder": "Describe your project or need...",
    "contact.form.submit": "Send message",
    "contact.comingSoon": "Coming soon",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = (key: string): string => {
    const translation = translations[language]?.[key];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}