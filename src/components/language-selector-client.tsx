"use client";

import { BrPtFlag } from "@/components/ui/flags/br-pt-flag";
import { UsUkFlag } from "@/components/ui/flags/us-uk-flag";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSelectorClient() {
  const { language, setLanguage } = useLanguage();

  const currentFlag = language === "pt-BR" ? (
    <BrPtFlag className="size-full" />
  ) : (
    <UsUkFlag className="size-full" />
  );

  const handleLanguageToggle = () => {
    setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors"
      title={language === "pt-BR" ? "Switch to English" : "Mudar para Português"}
    >
      {currentFlag}
    </button>
  );
}