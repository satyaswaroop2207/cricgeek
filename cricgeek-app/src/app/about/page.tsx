import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CricGeek",
  description:
    "Learn about CricGeek Network LLP, our vision for cricket content, creators, insights, data, and technology, and our mission to build a creator-driven cricket ecosystem.",
  keywords: ["CricGeek", "about CricGeek", "cricket platform", "cricket creators", "cricket ecosystem"],
};

/* ─── Subtle decorative SVG accent for the hero ─────────────────────────── */
function HeroDecor() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Faint grid lines */}
      <defs>
        <pattern
          id="cg-about-grid"
          x="0"
          y="0"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M48 0H0V48"
            fill="none"
            stroke="rgba(34,197,94,0.045)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cg-about-grid)" />

      {/* Accent arc — cricket-ball trajectory suggestion */}
      <path
        d="M -60 320 Q 480 -40 960 200"
        fill="none"
        stroke="rgba(34,197,94,0.10)"
        strokeWidth="1.5"
        strokeDasharray="6 10"
      />

      {/* Corner accent line — top left */}
      <line
        x1="0"
        y1="0"
        x2="180"
        y2="0"
        stroke="rgba(34,197,94,0.18)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="80"
        stroke="rgba(34,197,94,0.18)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ─── Small accent line used as a section divider / left-bar ─────────────── */
function AccentRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px bg-gradient-to-r from-cg-green/50 via-cg-green/20 to-transparent ${className}`}
    />
  );
}

/* ─── Eyebrow label ───────────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-cg-green/10 text-cg-green text-xs font-bold px-3 py-1 rounded-full border border-cg-green/20 uppercase tracking-widest">
      {children}
    </span>
  );
}

/* ─── Section heading with left accent bar ───────────────────────────────── */
function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="mt-1.5 h-5 w-0.5 shrink-0 rounded-full bg-cg-green" />
      <h2 className="text-xl sm:text-2xl font-bold text-white">{children}</h2>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-cg-dark text-white">

      {/* ── LAUNCH-SOON BANNER ──────────────────────────────────────────────── */}
      <div
        role="banner"
        aria-label="Website launch announcement"
        className="relative overflow-hidden border-b border-cg-green/25 bg-gradient-to-r from-[#0b1f13] via-[#0d2416] to-[#0b1f13]"
      >
        {/* Subtle side glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,197,94,0.07),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-center gap-3">
          {/* Pulsing green dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cg-green opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cg-green" />
          </span>
          <p className="text-sm sm:text-base font-medium text-cg-gray-200 tracking-wide">
            Our website will be launched soon...
          </p>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-gray-800"
        aria-label="About CricGeek hero"
      >
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(34,197,94,0.09),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(34,197,94,0.05),transparent_45%)]" />

        <HeroDecor />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">

            {/* ── LEFT: About content ─────────────────────────────────────── */}
            <div className="lg:flex-1 min-w-0">
              <Eyebrow>About Us</Eyebrow>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Cricket,{" "}
                <span className="text-cg-green">Beyond the Scorecard.</span>
              </h1>

              <AccentRule className="mt-8 max-w-xs" />

              <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                CricGeek Network LLP is a fan-first cricket platform built for
                people who see cricket as more than just a game.
              </p>

              <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                We bring together cricket content, insights, analysis, data,
                technology, and creator opportunities to create a richer
                experience for fans and a meaningful platform for cricket
                enthusiasts and creators.
              </p>
            </div>

            {/* ── RIGHT: Contact card ─────────────────────────────────────── */}
            <aside
              aria-label="Contact information"
              className="mt-10 lg:mt-6 lg:translate-x-4 lg:w-72 xl:w-80 shrink-0"
            >
              <div className="relative rounded-2xl border border-gray-800 bg-cg-dark-2 overflow-hidden">
                {/* Top green accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cg-green/70 via-cg-green/30 to-transparent" />
                {/* Faint left glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_40%,rgba(34,197,94,0.07),transparent_60%)]" />

                <div className="relative px-6 py-8">
                  {/* Heading */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="h-5 w-0.5 rounded-full bg-cg-green shrink-0" />
                    <h2
                      id="contact-heading"
                      className="text-lg font-black text-white tracking-tight"
                    >
                      Contact Us
                    </h2>
                  </div>

                  {/* Divider */}
                  <AccentRule className="mb-6" />

                  {/* Mail icon and email */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cg-green/25 bg-cg-green/10">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-cg-green"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <a
                      href="mailto:cricgeek18@gmail.com"
                      id="contact-email-link"
                      className="group min-w-0 whitespace-nowrap text-sm sm:text-base font-bold tracking-tight text-cg-green leading-snug hover:underline underline-offset-4 decoration-cg-green/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cg-green focus-visible:ring-offset-2 focus-visible:ring-offset-cg-dark-2 rounded"
                      aria-label="Send email to cricgeek18@gmail.com"
                    >
                      cricgeek18@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── WHAT WE BELIEVE ──────────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20 border-b border-gray-800/60"
          aria-labelledby="what-we-believe-heading"
        >
          <SectionHeading>
            <span id="what-we-believe-heading">What We Believe</span>
          </SectionHeading>

          <div className="mt-6 max-w-3xl space-y-5">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Cricket generates countless opinions, stories, debates, and
              perspectives every day. We believe these voices deserve a platform
              where they can be discovered, expressed, and valued.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              At CricGeek, our focus is on making cricket content more
              informative, engaging, credible, and accessible while giving
              passionate creators an opportunity to showcase what they know and
              build their presence within the cricket community.
            </p>
          </div>
        </section>

        {/* ── FOR FANS / FOR CREATORS ──────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20 border-b border-gray-800/60"
          aria-label="For fans and creators"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For Fans */}
            <article
              className="bg-cg-dark-2 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-cg-green/30 transition-colors"
              aria-labelledby="for-fans-heading"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-cg-green/10 flex items-center justify-center shrink-0 border border-cg-green/20">
                  {/* Cricket bat icon */}
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-cg-green"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                  </svg>
                </div>
                <h2
                  id="for-fans-heading"
                  className="text-white font-bold text-lg"
                >
                  For Fans
                </h2>
              </div>

              <AccentRule className="mb-5" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                We aim to help cricket fans go beyond simply knowing the score.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                From stories and opinions to statistics, analysis, and different
                perspectives on the game, CricGeek is designed to help fans
                discover, understand, discuss, and enjoy cricket in greater
                depth.
              </p>
            </article>

            {/* For Creators */}
            <article
              className="bg-cg-dark-2 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-cg-green/30 transition-colors"
              aria-labelledby="for-creators-heading"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-cg-green/10 flex items-center justify-center shrink-0 border border-cg-green/20">
                  {/* Pen icon */}
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-cg-green"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </div>
                <h2
                  id="for-creators-heading"
                  className="text-white font-bold text-lg"
                >
                  For Creators
                </h2>
              </div>

              <AccentRule className="mb-5" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                CricGeek is also a platform for people who are passionate about
                cricket.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Whether you&apos;re a fan with a unique perspective, an analyst
                who enjoys breaking down the numbers, a debater who loves
                discussing the game, or a storyteller who brings cricket moments
                to life, CricGeek aims to provide opportunities to express your
                ideas, build credibility, and grow as a creator.
              </p>
            </article>
          </div>
        </section>

        {/* ── TECHNOLOGY MEETS CRICKET ─────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20 border-b border-gray-800/60"
          aria-labelledby="technology-heading"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:flex-1 max-w-2xl">
              <SectionHeading>
                <span id="technology-heading">Technology Meets Cricket</span>
              </SectionHeading>

              <div className="mt-6 space-y-5">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Technology is an important part of how we build CricGeek.
                </p>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  We explore data, artificial intelligence, automation, and
                  other technologies to improve the way cricket information and
                  content are created, evaluated, presented, and experienced.
                </p>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Our goal is not to replace the human side of cricket, but to
                  use technology to make cricket content smarter, more reliable,
                  and more engaging.
                </p>
              </div>
            </div>

            {/* Technology visual: data-style pill tags */}
            <aside
              aria-hidden="true"
              className="md:w-56 shrink-0 flex flex-row md:flex-col flex-wrap gap-2 md:gap-3 md:pt-12"
            >
              {[
                "Data Analysis",
                "Artificial Intelligence",
                "Automation",
                "Content Quality",
                "Real-time Scoring",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-cg-dark-2 border border-gray-800 rounded-lg px-3 py-2 text-xs font-medium text-gray-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cg-green shrink-0" />
                  {tag}
                </div>
              ))}
            </aside>
          </div>
        </section>

        {/* ── BUILDING A CRICKET ECOSYSTEM ─────────────────────────────────── */}
        <section
          className="py-16 sm:py-20 border-b border-gray-800/60"
          aria-labelledby="ecosystem-heading"
        >
          {/* Wider treatment with subtle background */}
          <div className="relative rounded-2xl bg-gradient-to-br from-cg-green/5 via-transparent to-transparent border border-cg-green/10 px-6 sm:px-10 py-10 sm:py-12">
            {/* Corner accent */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-transparent via-cg-green/30 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-transparent via-cg-green/30 to-transparent"
            />

            <SectionHeading>
              <span id="ecosystem-heading">
                Building a Cricket Ecosystem
              </span>
            </SectionHeading>

            <div className="mt-6 max-w-3xl space-y-5">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                CricGeek is being built with a broader vision: to create an
                ecosystem connecting fans, creators, insights, technology, and
                opportunities around the sport we love.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                We are continuously working towards new ways to make cricket
                content more meaningful for fans and create greater
                opportunities for the people who contribute to the cricket
                community.
              </p>
            </div>

            {/* Ecosystem nodes visual */}
            <div
              aria-hidden="true"
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Fans", "Creators", "Insights", "Technology", "Opportunities"].map(
                (node, i) => (
                  <span
                    key={node}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-cg-dark px-3 py-1 text-xs font-medium text-gray-400"
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{
                        background: `rgba(34,197,94,${0.4 + i * 0.12})`,
                      }}
                    />
                    {node}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── OUR VISION / OUR MISSION ─────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20 border-b border-gray-800/60"
          aria-label="Our vision and mission"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <article
              className="relative bg-cg-dark-2 border border-gray-800 rounded-xl p-6 sm:p-8 overflow-hidden"
              aria-labelledby="vision-heading"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cg-green/60 via-cg-green/20 to-transparent" />

              <div className="mb-4">
                <Eyebrow>Our Vision</Eyebrow>
              </div>

              <h2
                id="vision-heading"
                className="sr-only"
              >
                Our Vision
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To build a trusted and creator-driven cricket ecosystem where
                fans discover better insights and passionate cricket enthusiasts
                find opportunities to make their voice count.
              </p>
            </article>

            {/* Mission */}
            <article
              className="relative bg-cg-dark-2 border border-gray-800 rounded-xl p-6 sm:p-8 overflow-hidden"
              aria-labelledby="mission-heading"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cg-green/60 via-cg-green/20 to-transparent" />

              <div className="mb-4">
                <Eyebrow>Our Mission</Eyebrow>
              </div>

              <h2
                id="mission-heading"
                className="sr-only"
              >
                Our Mission
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To combine cricket, creativity, data, and technology to deliver
                meaningful experiences for fans while helping cricket creators
                build recognition, credibility, and opportunities.
              </p>
            </article>
          </div>
        </section>



        {/* ── CLOSING SECTION ──────────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-24"
          aria-label="CricGeek closing statement"
        >
          <div className="relative text-center">
            {/* Horizontal rule before */}
            <div
              aria-hidden="true"
              className="mb-12 flex items-center gap-4 justify-center"
            >
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-cg-green/40" />
              <div className="h-2 w-2 rounded-full bg-cg-green/60" />
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-cg-green/40" />
            </div>

            {/* CricGeek logo mark */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-cg-green rounded-xl flex items-center justify-center shadow-[0_0_24px_rgba(34,197,94,0.20)]">
                <span className="text-black font-black text-2xl">CG</span>
              </div>
            </div>

            <p className="text-2xl sm:text-3xl font-black text-white mb-4">
              CricGeek
            </p>

            <p className="text-cg-green text-base sm:text-lg font-semibold tracking-wide">
              For the Fans. For the Game. For the People Who Love Cricket.
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}
