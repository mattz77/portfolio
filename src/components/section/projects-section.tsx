"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const { t } = useLanguage();
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-primary-foreground text-sm font-medium">{t("projects.title")}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("projects.subtitle")}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {t("projects.description")}
                        </p>
                    </div>
                </div>
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
                                key={project.title}
                                title={titleKey === "CordenaAI" ? t("projects.coordenaai.title") : titleKey === "Luma" ? t("projects.luma.title") : titleKey}
                                description={titleKey === "CordenaAI" ? t("projects.coordenaai.description") : titleKey === "Luma" ? t("projects.luma.description") : project.description}
                                dates={titleKey === "CordenaAI" ? t("projects.coordenaai.dates") : titleKey === "Luma" ? t("projects.luma.dates") : project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

