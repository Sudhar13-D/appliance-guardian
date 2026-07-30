import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Manufacturer, investor, or curious consumer — we'd like to hear from you. We usually
              reply within two working days.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-background text-primary shadow-[var(--shadow-card)]">
                  <Mail className="size-4" />
                </span>
                <a href="mailto:vigise26@gmail.com" className="font-medium text-foreground">
                  vigise26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-background text-primary shadow-[var(--shadow-card)]">
                  <Phone className="size-4" />
                </span>
                <span className="font-medium text-foreground">+91 99443 19337</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-background text-primary shadow-[var(--shadow-card)]">
                  <MapPin className="size-4" />
                </span>
                <span className="font-medium text-foreground">Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] sm:p-8"
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" name="organization" placeholder="Company or institution" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} required placeholder="Tell us what you're building or exploring." />
                </div>
                <Button type="submit" variant="accent" size="xl" className="mt-2 w-full">
                  {sent ? "Thanks — we'll be in touch" : "Send message"}
                </Button>
                {sent && (
                  <p className="text-center text-xs text-muted-foreground">
                    Your message has been recorded locally. Connect a backend to receive submissions
                    by email.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}