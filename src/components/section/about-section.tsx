"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/contexts/language-context";
import Markdown from "react-markdown";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={0.12}>
          <h2 className="text-xl font-bold">{t("about.title")}</h2>
        </BlurFade>
        <BlurFade delay={0.16}>
          <div className="prose max-w-none prose-foreground text-base font-sans leading-normal">
            <Markdown>
              {t("hero.summary")}
            </Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}