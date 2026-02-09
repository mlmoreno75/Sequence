import Image from "next/image";

export function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-20 lg:flex-row lg:gap-16">
        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            CEO & Founder, RevGen AI
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hello, I'm "}
            <span className="text-primary">Mike Moreno</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Advancing AI in Marketing & Go-To-Market Strategy. 10+ years
            scaling SaaS and technology businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-border shadow-2xl shadow-primary/5">
              <Image
                src="/images/dashboard-hero.jpg"
                alt="Marketing campaign dashboard showing integrated campaign management with budget tracking and approval workflows"
                width={1200}
                height={960}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
