import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
});

const coursesData = [
  {
    id: 'iam-analyst',
    isOpen: true,
    title: 'Identity and Access Management (IAM)',
    description:
      'A complete foundation in IAM covering concepts, tools, and real-world application. Leads to employability in one of the fastest-growing areas of cybersecurity.',
    features: [
      'Full curriculum access included',
      'Fortnightly live support sessions',
      'CV rewritten by hand',
      'Unlimited mock interviews until first job secured',
      'Market value: over $1,300',
    ],
  },
  {
    id: 'iam-engineering',
    isOpen: true,
    title: 'Identity and Access Management (IAM) Engineering',
    description:
      'A hands-on build, not theory and portal clicks. You engineer a live identity estate in Microsoft Entra ID and Okta: the directory, authentication protocols, Conditional Access, privileged access, entitlements, and the automation layer that ties it together. By the capstone, these labs add up to a portfolio project you can show an employer.',
    features: [
      'Full curriculum access included',
      'Fortnightly live support sessions',
      'CV rewritten by hand',
      'Unlimited mock interviews until first job secured',
      'Market value: over $1,300',
    ],
  },
  {
    id: 'grc',
    isOpen: true,
    title: 'Governance, Risk and Compliance (GRC)',
    description:
      'A structured GRC programme covering frameworks, risk assessment, and compliance operations. Prepares you for roles in risk management and organisational governance.',
    features: [
      'Full curriculum access included',
      'Fortnightly live support sessions',
      'CV rewritten by hand',
      'Unlimited mock interviews until first job secured',
      'Market value: over $1,300',
    ],
  },
  {
    id: 'full-stack',
    isOpen: false,
    title: 'Full Stack Engineering',
    description:
      'End-to-end web development. Applications will open once funding is secured for this track.',
  },
];

export default function CoursesSection() {
  return (
    <section
      className={`${sourceSans.className} ${playfair.variable} bg-[#f7f6f4] px-6 py-16 md:pb-20`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#7a1f1f]">
          Available Courses
        </div>
        <h2 className="mb-5 font-serif text-[34px] font-bold text-[#1e3a5f]">
          Three sponsored pathways currently open
        </h2>
        <p className="mb-10 max-w-[780px] text-[17px] leading-[1.6] text-[#333]">
          Self-paced online, delivered by Betapersin, DIEF&apos;s sister commercial
          training partner, led by a CISSP and Microsoft Identity and Access
          Administrator{' '}
          <span className="whitespace-nowrap">(SC-300)</span> certified
          instructor with fifteen years in identity and security.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`flex flex-col rounded-[6px] border border-[#e5e2dc] bg-white p-[28px_26px_30px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                course.isOpen
                  ? 'border-t-4 border-t-[#7a1f1f]'
                  : 'border-t-4 border-t-[#c7c2b8]'
              }`}
            >
              <div
                className={`mb-2.5 text-[12px] font-bold uppercase tracking-[0.06em] ${
                  course.isOpen ? 'text-[#7a1f1f]' : 'text-[#9a968c]'
                }`}
              >
                {course.isOpen ? 'Now Open' : 'Coming Soon'}
              </div>

              <h3
                className={`mb-3.5 font-serif text-[22px] font-bold leading-[1.3] ${
                  course.isOpen ? 'text-[#1e3a5f]' : 'text-[#8a97a8]'
                }`}
              >
                {course.title}
              </h3>

              <p
                className={`mb-[18px] text-[15px] leading-[1.6] ${
                  course.isOpen ? 'text-[#444]' : 'text-[#9a968c]'
                }`}
              >
                {course.description}
              </p>

              {course.isOpen ? (
                <div className="mt-auto">
                  <ul className="mb-[20px] p-0">
                    {course.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="mb-2.5 flex items-start gap-2.5 text-[14.5px] leading-[1.4] text-[#333]"
                      >
                        <span className="mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#f3e6e0] text-[11px] text-[#7a1f1f]">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block rounded-full bg-[#e3f3ea] px-4 py-2 text-[13px] font-bold text-[#1f7a4d]">
                    ✓ Fully Funded by DIEF
                  </span>
                </div>
              ) : (
                <div className="mt-auto flex items-center gap-2 text-[14px] text-[#9a968c]">
                  🔒 Applications not yet open
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}