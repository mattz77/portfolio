"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/contexts/language-context";
import SkillsSection from "./skills-section";

export default function SkillsWrapper() {
  const { t } = useLanguage();
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-primary-foreground text-sm font-medium">
                {t("skills.title")}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("skills.subtitle")}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
              {t("skills.description")}
            </p>
          </div>
        </div>
        <BlurFade delay={0.22}>
          <SkillsSection />
        </BlurFade>
      </div>
    </section>
  );
}
