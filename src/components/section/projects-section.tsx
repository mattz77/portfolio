"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
      {DATA.projects.map((project, id) => {
        const titleKey = project.title as string;
        return (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={project.href}
              title={
                titleKey === "CordenaAI"
                  ? t("projects.coordenaai.title")
                  : titleKey === "Luma"
                    ? t("projects.luma.title")
                    : titleKey
              }
              description={
                titleKey === "CordenaAI"
                  ? t("projects.coordenaai.description")
                  : titleKey === "Luma"
                    ? t("projects.luma.description")
                    : project.description
              }
              dates={
                titleKey === "CordenaAI"
                  ? t("projects.coordenaai.dates")
                  : titleKey === "Luma"
                    ? t("projects.luma.dates")
                    : project.dates
              }
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        );
      })}
    </div>
  );
}
