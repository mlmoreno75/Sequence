import { TrendingUp } from "lucide-react";

const projects = [
  {
    tag: "AI & Product Marketing",
    title: "SADA - AI Solutions Launch",
    description:
      "As Director of Product Marketing, launched AI-driven solutions spanning generative AI, operational databases for AI, and AI agents, driving $3M+ in additional revenue and expanding AI adoption across the organization.",
    result: "$3M+ additional revenue",
  },
  {
    tag: "Channel Strategy",
    title: "Exabeam - Channel & Sales Enablement",
    description:
      "Spearheaded channel strategy and sales enablement as Senior Product Marketing Manager, building partner programs that dramatically scaled revenue through alliance partnerships.",
    result: "$50M pipeline / 44X alliance revenue growth",
  },
  {
    tag: "Product Strategy",
    title: "Cloudera - Customer Experience Strategy",
    description:
      "Led a cross-functional team of product managers to define the long-term Customer Experience and software trial strategy, directly contributing to sustained annual revenue growth.",
    result: "$100M+ annual revenue contribution",
  },
  {
    tag: "Partner Marketing",
    title: "Cloudflare - Sales & Partner Enablement",
    description:
      "Drove incremental pipeline by optimizing sales enablement, lead-generation programs, and partner marketing initiatives with strategic reseller partners.",
    result: "$4M incremental pipeline",
  },
  {
    tag: "GTM Strategy",
    title: "Intel - Lenovo Server & Workstation GTM",
    description:
      "Managed cross-functional GTM strategy for Lenovo's Server & Workstation business, leading product design, marketing, and partner engagement at global scale.",
    result: "$1B business unit",
  },
  {
    tag: "Startup Leadership",
    title: "Startup - Co-Founder & CMO",
    description:
      "Co-founded a digital marketing startup, building and leading a team of developers and marketers to craft scalable solutions that amplified messaging and drove growth. 3x IPO startup experience with two acquisitions.",
    result: "3x IPO / 2 acquisitions",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects & Case Studies
        </h2>
        <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Highlights from a career driving growth through technology and
          marketing
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-block self-start rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {project.tag}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {project.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
