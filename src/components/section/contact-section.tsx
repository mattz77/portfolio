"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function ContactSection() {
  const contact = DATA.contact;
  const { t } = useLanguage();

  return (
    <>
      <section id="contact">
        <div className="border rounded-xl p-6 md:p-10 relative bg-card pt-10">
          <div className="flex justify-center -mt-7 mb-1">
            <span className="inline-block border bg-primary rounded-xl px-4 py-1.5 text-primary-foreground text-sm font-medium shadow-sm">
              {t("contact.badge")}
            </span>
          </div>

          <div className="relative flex flex-col gap-8 mt-2">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-primary">
                {t("contact.subtitle")}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Coluna esquerda: informações de contato */}
              <div className="flex flex-col gap-4">
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t("contact.email")}
                      </p>
                      <p className="text-sm font-medium">{contact.email}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t("contact.email")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("contact.comingSoon")}
                      </p>
                    </div>
                  </div>
                )}

                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t("contact.phone")}
                    </p>
                    <p className="text-sm font-medium">{contact.tel}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t("contact.location")}
                    </p>
                    <p className="text-sm font-medium">
                      {contact.location || "São Paulo, SP - Brasil"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna direita: formulário */}
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Placeholder até integrar com backend ou mailto
                  alert(
                    "Formulário em configuração. Use o WhatsApp ou LinkedIn para contato direto."
                  );
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder={t("contact.form.subjectPlaceholder")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={8}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full min-h-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="size-4 mr-2" />
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
