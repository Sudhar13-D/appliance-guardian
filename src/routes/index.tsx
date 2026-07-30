import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Mail,
  BellRing,
  BrainCircuit,
  Cpu,
  Linkedin,
  ShieldAlert,
  TrendingUp,
  Wallet,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { ContactSection } from "@/components/site/ContactSection";
import heroImage from "@/assets/hero-appliances.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigise — Give Every Appliance a Health Report Card" },
      {
        name: "description",
        content:
          "Vigise embeds AI fault detection and predictive maintenance into India's mass-market home appliances, in partnership with manufacturers.",
      },
      { property: "og:title", content: "Vigise — Give Every Appliance a Health Report Card" },
      {
        property: "og:description",
        content:
          "AI-powered fault detection and predictive maintenance for India's next generation of smart appliances.",
      },
    ],
  }),
  component: Index,
});

const problems = [
  {
    icon: Activity,
    stat: "~8–10%",
    title: "Smart appliance penetration",
    body: "The overwhelming majority of appliances sold in India ship with no sensing or diagnostic intelligence at all.",
  },
  {
    icon: ShieldAlert,
    stat: "Zero",
    title: "Early warning signals",
    body: "No alert before breakdown, electric shock, or fire risk — failure is the first thing the user notices.",
  },
  {
    icon: Wallet,
    stat: "₹ Millions",
    title: "Avoidable costs each year",
    body: "Repairs and premature replacements that timely fault localization could have prevented.",
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "Sense",
    body: "Real-time voltage, temperature, and current logging at each internal module.",
  },
  {
    icon: BrainCircuit,
    title: "Diagnose",
    body: "AI models compare live data against safe operating baselines to localize faults.",
  },
  {
    icon: BellRing,
    title: "Alert",
    body: "Instant, plain-language health reports sent straight to the user's phone.",
  },
];

const phases = [
  {
    tag: "Phase 1",
    title: "Bench-level proof of concept",
    body: "Fault logging and module-level localization validated on real appliance hardware.",
  },
  {
    tag: "Phase 2",
    title: "Manufacturer pilot integration",
    body: "Embedding our sensing stack and diagnostic logic into partner product lines.",
  },
  {
    tag: "Phase 3",
    title: "Scale across categories",
    body: "From fans and irons to full appliance ranges — and on to larger industrial machines.",
  },
];

const team = [
  {
    name: "Sudharsan D",
    role: "Founder",
    bio: "Leads partnerships and product direction, with a background in embedded systems and appliance electronics.",
    linkedin: "https://www.linkedin.com/in/sudharsan-d-30bb79364",
  },
  {
    name: "Chandru P",
    role: "Founder",
    bio: "Builds the diagnostic models and sensing firmware behind Vigise's health reports.",
    linkedin: "https://www.linkedin.com/in/chandru-p-13bb99333/",
  },
  {
    name: "Prabu Kumar S P",
    role: "Founder",
    bio: "Drives hardware integration and bench validation across appliance modules.",
    linkedin: "https://www.linkedin.com/in/prabu-kumar-s-p-79998326a/",
  },
  {
    name: "Nelopher Arulsamy",
    role: "Hardware Advisor",
    bio: "Advises on appliance manufacturing, quality engineering, and service operations.",
    linkedin: "https://www.linkedin.com/in/nelopher-arulsamy-645b48330/",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] size-[38rem] rounded-full"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-accent" />
              Embedded appliance diagnostics
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Give Every Appliance a Health Report Card
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AI-powered fault detection and predictive maintenance — built for India's next
              generation of smart appliances.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <a href="#contact">Partner With Us</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#solution">See How It Works</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={140} className="relative">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full animate-scan"
              style={{ background: "var(--gradient-glow)" }}
            />
            <img
              src={heroImage}
              width={1200}
              height={912}
              alt="Home appliances with an AI health scan overlay showing module-level diagnostics"
              className="relative w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="scroll-mt-20 border-y border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The problem</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              90% of Indian Appliances Are Still "Blind"
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <article className="h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
                  <p.icon className="size-6 text-accent" />
                  <p className="mt-6 font-display text-3xl font-bold text-primary">{p.stat}</p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our solution</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Module-Level Diagnostics, Built Into the Appliance
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We work with appliance manufacturers to embed sensor logging and AI diagnostics
              directly into new product lines — tracking voltage, temperature, and current at each
              internal module (power supply, heating coil, motor) to detect and localize faults
              before they cause failure.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div
              className="overflow-hidden rounded-3xl px-7 py-14 text-primary-foreground sm:px-14"
              style={{ background: "var(--gradient-navy)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why now</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A ₹350B+ Market With Massive Room to Grow
              </h2>
              <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                  India's smart appliance market is projected to grow from ₹223B to ₹353B by FY2029 —
                  yet most mass-market brands still have zero diagnostic intelligence.
                </p>
                <div className="flex shrink-0 items-center gap-3 rounded-xl bg-primary-foreground/10 px-5 py-4">
                  <TrendingUp className="size-6 text-accent" />
                  <div>
                    <p className="font-display text-2xl font-bold">₹223B → ₹353B</p>
                    <p className="text-xs text-primary-foreground/70">Projected by FY2029</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-sm text-primary-foreground/70">
                We're bringing embedded AI diagnostics to the appliance brands and price segments
                that global players ignore.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Manufacturers */}
      <section id="manufacturers" className="scroll-mt-20 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              For manufacturers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Partner With Us to Build Smarter Appliances
            </h2>
            <p className="mt-5 text-muted-foreground">
              Samsung/LG-grade diagnostics, engineered for the cost and volume realities of India's
              mass-market product lines.
            </p>
            <Button variant="accent" size="xl" className="mt-8" asChild>
              <a href="#contact">Schedule a Pilot Discussion</a>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4">
              {[
                "Faster fault localization reduces warranty and service costs",
                'New "self-diagnosing" feature for product differentiation',
                "Proven bench-level diagnostic logic ready for pilot integration",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-card)]"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-y border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Roadmap</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              From bench to every appliance category
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-4 hidden h-px bg-border md:block"
            />
            {phases.map((p, i) => (
              <Reveal key={p.tag} delay={i * 130} className="relative">
                <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Team</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Builders at the intersection of hardware and AI
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.role} delay={i * 110}>
                <article className="h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
                  <div className="flex size-14 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-primary">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary">{m.name}</h3>
                  <p className="text-sm font-medium text-accent-foreground/70">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-5 inline-flex size-9 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-secondary"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="text-primary-foreground" style={{ background: "var(--gradient-navy)" }}>
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 font-display text-lg font-bold">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Activity className="size-4 text-accent" />
                </span>
                Vigise
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70">
                A health report card for every appliance — embedded AI diagnostics for India's
                manufacturers.
              </p>
            </div>
            <div className="flex gap-14">
              <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
                {[
                  { href: "#top", label: "Home" },
                  { href: "#problem", label: "Problem" },
                  { href: "#solution", label: "Solution" },
                  { href: "#team", label: "Team" },
                  { href: "#contact", label: "Contact" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="hover:text-primary-foreground">
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="flex h-fit gap-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Vigise on LinkedIn"
                  className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="mailto:vigise26@gmail.com"
                  aria-label="Email Vigise"
                  className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Vigise. Coimbatore, Tamil Nadu, India.
          </p>
        </div>
      </footer>
    </div>
  );
}
