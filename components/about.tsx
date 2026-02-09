import {
  Briefcase,
  MapPin,
  Lightbulb,
  Building2,
} from "lucide-react";

const careerHighlights = [
  {
    company: "SADA",
    role: "Director of Product Marketing",
    description:
      "Launched AI-driven solutions spanning generative AI, operational databases for AI, and AI agents, driving $3M+ in additional revenue and expanding AI adoption.",
  },
  {
    company: "Exabeam",
    role: "Senior Product Marketing Manager",
    description:
      "Spearheaded channel strategy and sales enablement, resulting in $50M in channel-influenced pipeline and a 44X increase in alliance revenue.",
  },
  {
    company: "Cloudera",
    role: "Product Strategy Lead",
    description:
      "Led a cross-functional team of product managers, defining the long-term Customer Experience and software trial strategy, contributing to $100M+ in annual revenue.",
  },
  {
    company: "Cloudflare",
    role: "Partner Marketing",
    description:
      "Drove $4M in incremental pipeline by optimizing sales enablement, lead-generation programs, and partner marketing initiatives with strategic reseller partners.",
  },
  {
    company: "Intel",
    role: "GTM Strategy Manager",
    description:
      "Managed cross-functional GTM strategy for Lenovo's $1B Server & Workstation business, leading product design, marketing, and partner engagement.",
  },
  {
    company: "Accenture",
    role: "Software Developer",
    description:
      "Developed server-side Java code and validation scripts for California's Child Support Automation System, ensuring accuracy and system efficiency.",
  },
];

const personalDetails = [
  { icon: MapPin, label: "Location", value: "Austin, TX" },
  { icon: Lightbulb, label: "Interests", value: "AI, Marketing, Technology" },
  { icon: Briefcase, label: "Current Role", value: "CEO & Founder RevGen AI" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-4 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Bio column */}
          <div className="lg:w-2/5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Marketing leader with 10+ years of experience scaling SaaS and
              technology businesses at companies like Intel, Cloudflare,
              Cloudera, and Exabeam. With a software engineering background and
              deep expertise in cloud, machine learning, and high-performance
              computing, I bring a unique ability to translate technical
              innovation into market success.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"I'm actively exploring how generative AI is transforming sales and marketing, with a focus on practical frameworks that deliver tangible results. Let's connect and talk about the future of GTM in an AI-driven world."}
            </p>

            {/* Personal details */}
            <div className="mt-8 flex flex-col gap-4">
              {personalDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <detail.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              As a co-founder and CMO at a digital marketing startup, I built
              and led a team of developers and marketers, crafting scalable
              solutions that amplified messaging and drove growth. 3x IPO
              startup experience with two acquisitions.
            </p>
          </div>

          {/* Career highlights column */}
          <div className="lg:w-3/5">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Building2 className="h-5 w-5 text-primary" />
              Career Highlights
            </h3>
            <div className="flex flex-col gap-4">
              {careerHighlights.map((item) => (
                <div
                  key={item.company}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-heading text-base font-bold text-foreground">
                        {item.company}
                      </h4>
                      <p className="text-xs font-medium text-primary">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
