import type { ReactNode } from "react";

export interface PortfolioProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}

/** Item de `DATA.projects`. Opcional `slug` → chaves i18n `projects.{slug}.*`. */
export interface PortfolioProject {
  slug?: string;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly PortfolioProjectLink[];
  image: string;
  video: string;
}
