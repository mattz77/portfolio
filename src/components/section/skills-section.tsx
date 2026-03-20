"use client";

import type { ComponentType, SVGProps } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export default function SkillsSection() {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
      {DATA.skills.map((skill, id) => {
        const icons = "icons" in skill && skill.icons ? skill.icons : [];
        const Icon = "icon" in skill ? (skill.icon as SkillIcon) : null;
        return (
          <BlurFade
            key={skill.name}
            delay={BLUR_FADE_DELAY * 6 + id * 0.04}
            className="h-full"
          >
            <div className="flex items-center gap-3 rounded-xl border bg-card/60 px-4 py-3 shadow-sm">
              {icons.length > 0 ? (
                <div className="flex h-8 shrink-0 items-center gap-1.5 [&_svg]:block">
                  {icons.map((SkillMultiIcon, iconIndex) => (
                    <SkillMultiIcon
                      key={`${skill.name}-${iconIndex}`}
                      className="size-8 shrink-0"
                      aria-hidden
                    />
                  ))}
                </div>
              ) : Icon ? (
                <div className="flex h-8 shrink-0 items-center [&_svg]:block">
                  <Icon className="size-8 shrink-0" aria-hidden />
                </div>
              ) : null}
              <span className="whitespace-nowrap font-medium text-sm leading-snug">
                {skill.name}
              </span>
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
