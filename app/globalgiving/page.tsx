import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support Our Work Through GlobalGiving - Direct Impact Empowerment Foundation",
  description:
    "Direct Impact Empowerment Foundation is independently vetted through GlobalGiving, the world's largest crowdfunding community for nonprofits.",
};

const projects = [
  {
    id: "76936",
    tag: "Active Project",
    title: "Sponsor 10 Nigerian Women into a Tech Career",
    description:
      "Fund hands-on IAM and GRC training for women in Nigeria, giving them the skills and certification path to move into real tech careers and achieve lasting financial independence.",
    image: "/project-76936.jpeg",
    link: "https://www.globalgiving.org/projects/76936",
    stats: [
      { num: "300+", label: "People Reached" },
      { num: "2023", label: "Since Founding" },
    ],
  },
  {
    id: "christmas-lifeline",
    tag: "Seasonal Relief",
    title: "A Christmas Lifeline for 220 Nigerian Families",
    description:
      "Provide essential food supplies, holiday support, and immediate relief packages to 220 vulnerable families in Nigeria during the festive season to ensure no family goes hungry.",
    image: "/christmas-lifeline.jpeg",
    link: "https://www.globalgiving.org/projects/a-christmas-lifeline-for-220-nigerian-families/",
    stats: [
      { num: "220", label: "Families Supported" },
      { num: "Direct", label: "Food & Aid" },
    ],
  },
];

export default function GlobalGivingPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] font-serif text-[#1a1a1a] antialiased">
      {/* HERO SECTION */}
      <section className="bg-[#7B1E1E] px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            Our Partnership With GlobalGiving
          </p>

          <div className="mb-4 flex flex-col items-center justify-center gap-3 md:flex-row">
            <h1 className="text-3xl font-normal leading-tight md:text-4xl">
              Verified, Vetted, and Accountable
            </h1>
          </div>

          <p className="mx-auto mb-8 max-w-2xl text-base text-white/90">
            Direct Impact Empowerment Foundation is independently vetted through GlobalGiving, 
            the world&apos;s largest crowdfunding community for nonprofits. Here&apos;s what that 
            means and what&apos;s currently active.
          </p>

          {/* Header Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative h-[60px] w-[140px] overflow-hidden rounded-md bg-white/10 p-1 backdrop-blur-sm">
              <Image
                src="/vetted.jpeg"
                alt="GlobalGiving Vetted Organisation"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[60px] w-[140px] overflow-hidden rounded-md bg-white/10 p-1 backdrop-blur-sm">
              <Image
                src="/top-rank.jpeg"
                alt="GlobalGiving Top-Ranked Organisation"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[60px] w-[140px] overflow-hidden rounded-md bg-white/10 p-1 backdrop-blur-sm">
              <Image
                src="/effective.jpeg"
                alt="GlobalGiving Effective Organisation 2026"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE PROJECTS SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#7B1E1E]">
          Currently Open
        </p>
        <h2 className="mb-2 text-2xl font-normal text-[#1a3a5c] md:text-3xl">
          Active Projects on GlobalGiving
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-[#555]">
          Explore our live campaigns currently receiving funding through GlobalGiving.
        </p>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-[#ddd] border-t-4 border-t-[#7B1E1E] bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Project Card Image */}
              <div className="relative h-52 w-full bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 font-sans text-[10px] font-bold uppercase tracking-widest text-[#7B1E1E]">
                  {project.tag}
                </span>

                <h3 className="mb-3 text-xl font-normal text-[#1a3a5c]">
                  {project.title}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-[#555]">
                  {project.description}
                </p>

                {/* Stats Row */}
                <div className="mb-6 flex gap-6 font-sans border-t border-gray-100 pt-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx}>
                      <span className="block text-lg font-bold text-[#1a3a5c]">
                        {stat.num}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#555]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-md bg-[#7B1E1E] px-5 py-3 text-center font-sans text-sm font-semibold text-white transition-colors hover:bg-[#5a1515]"
                >
                  Support This Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#7B1E1E] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#5a1515]"
          >
            View All Active Projects on GlobalGiving
          </a>
        </div>
      </section>

      {/* HOW GIVING HELPS */}
      <section className="bg-[#1a3a5c] px-6 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-normal">What your donation supports</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base">
                🏠
              </div>
              <div>
                <strong className="block font-sans text-xs font-semibold uppercase tracking-wider text-white">
                  Crisis Response
                </strong>
                <span className="font-sans text-xs text-white/70">
                  Immediate relief for families in emergency
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base">
                🏥
              </div>
              <div>
                <strong className="block font-sans text-xs font-semibold uppercase tracking-wider text-white">
                  Stabilisation
                </strong>
                <span className="font-sans text-xs text-white/70">
                  Basic needs and access to medical care
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base">
                📚
              </div>
              <div>
                <strong className="block font-sans text-xs font-semibold uppercase tracking-wider text-white">
                  Economic Restart
                </strong>
                <span className="font-sans text-xs text-white/70">
                  Vocational and digital skills training
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base">
                🌱
              </div>
              <div>
                <strong className="block font-sans text-xs font-semibold uppercase tracking-wider text-white">
                  Sustained Independence
                </strong>
                <span className="font-sans text-xs text-white/70">
                  Lasting income, without ongoing aid
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAX NOTE FOR US DONORS */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="rounded-lg border border-[#e8d5a3] bg-[#fdf6e8] p-7 shadow-sm">
          <p className="mb-2 font-sans text-xs font-bold uppercase tracking-widest text-[#C8972A]">
            For US-Based Donors
          </p>
          <h3 className="mb-3 text-xl font-normal text-[#5a1515]">
            Your donation may also be tax deductible
          </h3>
          <p className="text-sm leading-relaxed text-[#3a3020]">
            Donations made through GlobalGiving are tax deductible for US taxpayers, since GlobalGiving is a registered 501(c)(3) nonprofit. When you give, your donation goes directly to real families in Nigeria moving from crisis to independence.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3a3020]">
            If you file taxes in the US and itemize your deductions, you may also see a benefit on your own return. GlobalGiving provides a donation receipt for your records at the time of giving.
          </p>
        </div>
      </section>

      {/* GLOBALGIVING BADGES ROW */}
      <section className="flex flex-wrap items-center justify-center gap-8 px-6 py-10">
        <div className="text-center">
          <div className="relative mx-auto mb-2 h-20 w-32">
            <Image
              src="/vetted.jpeg"
              alt="GlobalGiving Vetted Organisation"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1a3a5c]">
            Vetted
          </span>
        </div>

        <div className="text-center">
          <div className="relative mx-auto mb-2 h-20 w-32">
            <Image
              src="/top-rank.jpeg"
              alt="GlobalGiving Top-Ranked Organisation"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1a3a5c]">
            Top-Ranked
          </span>
        </div>

        <div className="text-center">
          <div className="relative mx-auto mb-2 h-20 w-32">
            <Image
              src="/effective.jpeg"
              alt="GlobalGiving Effective Organisation 2026"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1a3a5c]">
            Effective
          </span>
        </div>
      </section>
    </main>
  );
}