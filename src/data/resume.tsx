import { Icons } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";
import { HomeIcon, Webhook } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { DotNet } from "@/components/ui/svgs/dotnet";
import { Azure } from "@/components/ui/svgs/azure";
import { N8n } from "@/components/ui/svgs/n8n";
import { ClaudeCode } from "@/components/ui/svgs/claude-code";
import { CursorIde } from "@/components/ui/svgs/cursor-ide";
import { GithubCopilot } from "@/components/ui/svgs/github-copilot";

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;
type SkillItem = { name: string } & ({ icon: SkillIcon; icons?: never } | { icons: SkillIcon[]; icon?: never });

export const DATA = {
  name: "Mateus Oliveira",
  initials: "MO",
  url: "https://github.com/mattz77",
  location: "São Paulo, SP",
  locationLink: "https://www.google.com/maps/place/saopaulo",
  description:
    "Desenvolvedor Backend .NET | Automação & Integração de APIs | Azure Cloud | React Native | IA em Desenvolvimento",
  summary:
    "Desenvolvedor backend com 5 anos na área. Tenho experiência em .NET, C# e arquitetura RESTful, com atuação recente em integração de serviços complexos e orquestração de workflows usando n8n e MCP. Domino também automação com VBA e possuo conhecimento prático em Office 365. Busco oportunidades em desenvolvimento full-stack, arquitetura de sistemas e soluções que integrem automação inteligente e IA.",
  avatarUrl: "/me.png",
  skills: [
    { name: "C#", icon: Csharp },
    { name: ".NET", icon: DotNet },
    { name: "n8n", icon: N8n },
    { name: "Azure Cloud", icon: Azure },
    { name: "Integração de APIs", icon: Webhook },
    { name: "React", icon: ReactLight },
    { name: "Supabase/Postgres", icon: Postgresql },
    { name: "TypeScript", icon: Typescript },
    { name: "Docker", icon: Docker },
    { name: "IA em Desenvolvimento", icons: [ClaudeCode, CursorIde, GithubCopilot] },
  ] as SkillItem[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "navbar.home" },
    // Blog removido do dock temporariamente; rota /blog mantida
  ],
  contact: {
    email: "",
    tel: "+55 11 91328-4876",
    whatsapp: "5511913284876",
    location: "São Paulo, SP - Brasil",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mattz77",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mateusoliveira-dev",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "E-mail",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CordenaAI",
      href: "#",
      badges: [],
      location: "Remoto",
      title: "Analista de Sistemas | Backend Developer",
      logoUrl: "/inminds-logo.png",
      start: "Out 2024",
      end: "Out 2025",
      description:
        "Desenvolvimento de APIs backend escaláveis para CordenaAI, plataforma mobile de gerenciamento esportivo. APIs RESTful em .NET 8 com 50+ endpoints (Swagger/OpenAPI). Integrações: Stripe, Evolution API (WhatsApp), Microsoft Teams, Office 365 SMTP, Azure Communication Services. Infraestrutura em Azure (App Service, Blob Storage, Database for MySQL). JWT, CORS, Rate Limiting, MemoryCache (redução de 40% no tempo de resposta). SignalR para real-time. Desenvolvimento com Cursor IDE, testes xUnit e documentação técnica.",
    },
    {
      company: "TECNUN (Cliente: Banco Bradesco)",
      href: "#",
      badges: [],
      location: "Brasil",
      title: "Desenvolvedor / Analista",
      logoUrl: "/logo-tecnun.png",
      start: "Abr 2021",
      end: "Out 2024",
      description:
        "Prestação de serviços especializados para o setor financeiro. Otimização de performance de banco de dados e relatórios gerenciais. Automações com VBA (Excel, Access, Outlook) e integrações com Mainframe/PCOMM para sistemas legados. Documentação de sistemas legados e análise de requisitos com especificações técnicas.",
    },
  ],

  projects: [
    {
      title: "CordenaAI",
      href: "#",
      dates: "Out 2024 - Out 2025",
      active: true,
      description:
        "Plataforma de gerenciamento esportivo completa. Backend em .NET 8 com SignalR para tempo real, gestão de atletas, professores, turmas e horários. Integrações Stripe, WhatsApp (Evolution API), Microsoft Teams. Azure Cloud (Blob Storage, Database for MySQL, App Service). Repository Pattern, testes xUnit e de integração.",
      technologies: [
        ".NET 8",
        "C#",
        "SignalR",
        "Azure",
        "MySQL",
        "Stripe",
        "Docker",
      ],
      links: [],
      image: "/coordenai.png",
      video: "",
    },
    {
      title: "Luma",
      href: "https://github.com/mattz77/Luma-APP",
      dates: "Em desenvolvimento",
      active: true,
      description:
        "Smart Assist para gestão doméstica com suporte futuro a IoT. App mobile React Native + TypeScript + Expo SDK 54. Backend Supabase com PostgreSQL e RLS. Orquestração de IA via n8n com webhooks e integração com APIs de LLMs. Desenvolvimento com MCP Supabase e n8n-tools.",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Supabase",
        "PostgreSQL",
        "n8n",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mattz77/Luma-APP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/luma.png",
      video: "",
    },
  ],
} as const;
