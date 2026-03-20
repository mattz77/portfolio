"use client";

import { useState } from "react";
import { BrPtFlag } from "@/components/ui/flags/br-pt-flag";
import { UsUkFlag } from "@/components/ui/flags/us-uk-flag";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentFlag = language === "pt-BR" ? (
    <BrPtFlag className="size-full" />
  ) : (
    <UsUkFlag className="size-full" />
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors"
      >
        {currentFlag}
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-card border border-border rounded-lg p-1 shadow-lg">
          <button
            onClick={() => {
              setLanguage("pt-BR");
              setIsOpen(false);
            }}
            className={`p-2 rounded-md hover:bg-muted transition-colors ${
              language === "pt-BR" ? "bg-muted" : ""
            }`}
            title="Português (Brasil)"
          >
            <BrPtFlag className="size-8" />
          </button>
          <button
            onClick={() => {
              setLanguage("en-US");
              setIsOpen(false);
            }}
            className={`p-2 rounded-md hover:bg-muted transition-colors ${
              language === "en-US" ? "bg-muted" : ""
            }`}
            title="English"
          >
            <UsUkFlag className="size-8" />
          </button>
        </div>
      )}
    </div>
  );
}