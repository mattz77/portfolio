"use client";

/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { useLanguage } from "@/contexts/language-context";
import ContactWrapper from "@/components/section/contact-wrapper";
import ProjectsWrapper from "@/components/section/projects-wrapper";
import SkillsWrapper from "@/components/section/skills-wrapper";
import WorkWrapper from "@/components/section/work-wrapper";

const BLUR_FADE_DELAY = 0.04;

export default function MainContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`${t("hero.greeting")} ${DATA.name}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={t("hero.role")}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Button asChild size="sm" className="w-fit mt-2">
                  <a href="#contact">{t("hero.contact")}</a>
                </Button>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t("about.title")}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-none prose-foreground text-base font-sans leading-normal">
              <Markdown>
                {t("hero.summary")}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <WorkWrapper />
      <SkillsWrapper />
      <ProjectsWrapper />
      <ContactWrapper />
    </main>
  );
}