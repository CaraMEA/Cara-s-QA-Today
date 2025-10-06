import React, { useState } from "react";

/**
 * Cara's QA — React + Tailwind (surgical tweaks)
 * - EXACT structure preserved from your blueprint
 * - Gray maze background overlay (under everything)
 * - CCQA logo in hero (optional — one line)
 * - Canva links switched to /view
 * - About remains at the end
 */

const siteData = {
  title: "Cara'sQAway",
  subtitle: "The basic info about QA Assurance in a tech aspect",
  description:
    "A welcoming guide to Quality Assurance in tech — simple, clear, and inspiring.",
  heroCTA: "Explore QA",
  profile: {
    name: "Cara",
    role: "QA Engineer",
    bio:
      "I’m Cara, a QA Engineer who took the scenic route into tech. From years of landscaping to leading test automation, I turned grit into growth. Through persistence and curiosity, I transitioned careers and now uplift others — especially women and career-changers — who are rewriting their stories in technology.",
    photoUrl: "/images/hero-tech-2.png",
    socials: [],
  },
  techBarImages: [
    "/images/hero-tech-1.png",
    "/images/hero-tech-2.png",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
  ],
  aboutGallery: [
    "/images/hero-tech-1.png",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
    "/images/hero-tech-2.png",
  ],
  sections: [
    {
      id: "aboutqa",
      title: "QA, briefly",
      content:
        "Quality Assurance builds trust in software. It prevents bugs, checks systems, and keeps technology reliable for everyone.",
      bullets: [
        { title: "Shift-left testing", definition: "Plan and write tests early so issues are caught before merge.", icon: "🕒" },
        { title: "Automation pyramid", definition: "Lots of unit tests, some integration, a few E2E for balance.", icon: "🔺" },
        { title: "Exploratory testing", definition: "Hands-on discovery to find issues scripts miss.", icon: "🔍" },
        { title: "CI quality gates", definition: "Automated checks block unstable code from shipping.", icon: "🚧" },
      ],
    },
    {
      id: "principles",
      title: "Principles I follow",
      content: "Tap a principle to reveal its core idea.",
      bullets: [
        { title: "Test like a user; think like a system", definition: "View flows as a person would while keeping system states in mind." },
        { title: "Deterministic small tests", definition: "Prefer quick, reliable checks instead of long, flaky ones." },
        { title: "Data setup as a feature", definition: "Good fixtures/seeds make tests repeatable and readable." },
        { title: "Observability everywhere", definition: "Logs, traces, metrics = faster, clearer debugging." },
      ],
    },
    {
      id: "types",
      title: "30 Common Testing Types",
      content: "A compact list of testing approaches with one-line explanations.",
      bullets: [
        { title: "Unit", definition: "Test a single function or class in isolation." },
        { title: "Integration", definition: "Verify components work together." },
        { title: "System", definition: "Test the whole application as one unit." },
        { title: "Acceptance (UAT)", definition: "Validate user/business needs." },
        { title: "Smoke", definition: "Basic build health checks." },
        { title: "Sanity", definition: "Quick checks after small changes." },
        { title: "Regression", definition: "Ensure old features still work." },
        { title: "Performance", definition: "Speed, responsiveness, stability." },
        { title: "Load", definition: "Behavior under expected traffic." },
        { title: "Stress", definition: "Behavior under extreme traffic." },
        { title: "Soak", definition: "Long-duration stability under load." },
        { title: "Security", definition: "Find and prevent vulnerabilities." },
        { title: "Penetration", definition: "Ethical hacking to exploit weaknesses." },
        { title: "Fuzz", definition: "Random inputs to trigger crashes." },
        { title: "Usability", definition: "Ease and delight of use." },
        { title: "Accessibility", definition: "Inclusive for people with disabilities." },
        { title: "Compatibility", definition: "Works across devices/browsers." },
        { title: "API", definition: "Endpoints follow spec and handle errors." },
        { title: "Contract", definition: "Consumer/provider agree on API behavior." },
        { title: "Visual Regression", definition: "UI screenshots haven’t changed unexpectedly." },
        { title: "Localization (L10n)", definition: "Content adapted to locale/language." },
        { title: "Internationalization (i18n)", definition: "Product can be localized later." },
        { title: "Upgrade/Migration", definition: "Version changes preserve data." },
        { title: "Backup/Restore", definition: "Data can be saved and recovered." },
        { title: "Chaos Engineering", definition: "Inject failures to test resilience." },
        { title: "Mutation", definition: "Tests catch intentionally injected bugs." },
        { title: "Boundary", definition: "Behavior at input limits." },
        { title: "Pairwise", definition: "All pairs of input combinations." },
        { title: "Mobile", definition: "Behavior on phone/tablet OSs." },
        { title: "Compliance", definition: "Meets standards and regulations." },
      ],
    },
    {
      id: "externship",
      title: "TripleTen Externship",
      content:
        "I completed my first automation project during a 7-week externship with TripleTen, collaborating with Runestone Academy. Real-world QA, real deadlines, real growth.",
      link: "https://www.canva.com/design/DAGik9LQEKo/lcMBQhDx3G3UECV2iG_Xow/view",
    },
  ],
  bugJams: [
    { id: "bugjam1", title: "Tripleten Bug Jam 1", url: "https://www.canva.com/design/DAGl-VYjmPM/46R3ON1tysZpQhudPAnkdg/view", thumbnail: "/images/bugjam-1.png", definition: "Collaborative bug hunt and learn." },
    { id: "bugjam2", title: "Tripleten Bug Jam 2", url: "https://www.canva.com/design/DAGt1vci334/b5NN8kkXHdwoxupY-stklQ/view", thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop", definition: "Iteration on issues and patterns." },
    { id: "bugjam3", title: "Tripleten Bug Jam 3", url: "https://www.canva.com/design/DAGfyM17el4/eXWwu09anyB0mfto7kEqmQ/view", thumbnail: "/images/bugjam-3.png", definition: "Deeper dives and teamwork." },
    { id: "bugjam4", title: "Tripleten Bug Jam 4", url: "https://www.canva.com/design/DAGjD4GkKWs/3RaQCWsAUkUAKALTND0ttg/view", thumbnail: "/images/bugjam-4.png", definition: "Complex issues and tracking." },
    { id: "bugjam5", title: "Tripleten Bug Jam 5", url: "https://www.canva.com/design/DAGtMNG9OfU/RcZMaikR8y0fjAAtoihpYA/view", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop", definition: "Sharpen QA strategy in practice." },
    { id: "bugjam6", title: "Tripleten Bug Jam 6", url: "https://www.canva.com/design/DAGik9LQEKo/lcMBQhDx3G3UECV2iG_Xow/view", thumbnail: "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=1200&q=80&auto=format&fit=crop", definition: "Showcase growth in detection." },
  ],
  footerNote:
    "© " + new Date().getFullYear() + " Cara — Built with quality in mind.",
};

const theme = {
  baseBg: "bg-blue-50",
  bgGradient: "bg-gradient-to-br from-rose-50 via-slate-50 to-blue-50",
  card: "rounded-2xl shadow-lg border border-slate-200/60 backdrop-blur bg-white/90",
  accentBtn: "bg-rose-500 text-white hover:bg-rose-600",
};

const DEFAULT_TECH_THUMB =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80&auto=format&fit=crop";

function PatternOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-25 mix-blend-multiply"
      style={{
        backgroundImage: "url('/images/patterns/maze.svg')",
        backgroundSize: "800px auto",
        backgroundRepeat: "repeat",
        zIndex: 0,
      }}
    />
  );
}

function ImgSafe({ src, alt, className }) {
  const [s, setS] = useState(src);
  return (
    <img
      src={s}
      alt={alt}
      className={className}
      onError={() => setS(DEFAULT_TECH_THUMB)}
    />
  );
}

function TechBar({ images }) {
  const list = Array.isArray(images) ? images : [];
  if (!list.length) return null;
  return (
    <div className="grid grid-cols-3 gap-2 my-6">
      {list.map((src, i) => (
        <ImgSafe key={i} src={src} alt="tech" className="w-full h-28 object-cover rounded-xl shadow" />
      ))}
    </div>
  );
}

function Section({ id, title, content, bullets, link }) {
  const [open, setOpen] = useState(null);
  const items = Array.isArray(bullets) ? bullets : [];
  return (
    <section id={id} className="scroll-mt-28 relative" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-6 py-10 md:pr-44">
        <div className={`${theme.card} p-6`}>
          <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
          {content && <p className="text-black">{content}</p>}
          {link && (
            <p className="mt-3">
              <a href={link} target="_blank" rel="noreferrer" className="underline text-rose-600 hover:text-rose-700">
                View Externship ↗
              </a>
            </p>
          )}
          {!!items.length && (
            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
              {items.map((b, i) => (
                <li
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 hover:bg-rose-50/40 cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <p className="font-semibold text-black flex items-center gap-2">
                    {b.icon && <span aria-hidden>{b.icon}</span>}
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm text-black">
                    {open === i ? b.definition : b.definition ? "Tap to see definition" : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function BugJamGrid({ items }) {
  const safe = Array.isArray(items) ? items : [];
  if (!safe.length) return null;
  return (
    <section id="bugjam" className="scroll-mt-28 relative" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-6 py-10 md:pr-44">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-black">Tripleten Bug Jams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safe.map((v) => (
              <article key={v.id} className={`${theme.card} p-3`}>
                <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                  <ImgSafe src={v.thumbnail || DEFAULT_TECH_THUMB} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mt-3 text-black">{v.title}</h3>
                {v.definition && <p className="text-sm mt-1 text-black">{v.definition}</p>}
                <a href={v.url} target="_blank" rel="noreferrer" className={`mt-3 inline-block px-4 py-2 rounded-xl ${theme.accentBtn}`}>
                  Open link ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMe({ profile, gallery }) {
  const pics = Array.isArray(gallery) ? gallery : [];
  return (
    <section id="about" className="scroll-mt-28 relative" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-6 py-10 md:pr-44">
        <div className={`${theme.card} p-6`}>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <ImgSafe src={profile.photoUrl} alt="Tech" className="w-32 h-32 rounded-2xl shadow-md" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-black">About Me</h2>
              <p className="text-black">{profile.bio}</p>
            </div>
          </div>
          {!!pics.length && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {pics.map((src, i) => (
                <ImgSafe key={i} src={src} alt="about" className="w-full h-28 object-cover rounded-xl" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function JumpButtons({ ids }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const list = Array.isArray(ids) ? ids : [];
  if (!list.length) return null;
  return (
    <div className="fixed bottom-6 right-6 sm:right-10 md:right-16 lg:right-24 xl:right-32 z-50 flex flex-col gap-2 pointer-events-none">
      {list.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`px-3 py-1.5 rounded-xl shadow text-xs md:text-sm ${theme.accentBtn} pointer-events-auto`}
        >
          {id}
        </button>
      ))}
    </div>
  );
}

export default function CarasQASite({ data = siteData }) {
  const d = data;
  const ids = [...d.sections.map((s) => s.id), "bugjam", "about"];
  return (
    <div className={`${theme.baseBg} min-h-screen font-sans relative`}>
      <PatternOverlay />

      <header className={`py-10 text-center ${theme.bgGradient} relative`} style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 md:pr-44">
          {/* CCQA logo in hero (remove this <img> if you want title-only) */}
          <div className="flex justify-center mb-4">
            <img src="/images/logo-ccqa.png" alt="CCQA logo" className="h-11" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-black">{d.title}</h1>
          <p className="mb-4 text-black">{d.subtitle}</p>
          <TechBar images={d.techBarImages} />
          <button
            className={`mt-4 px-5 py-3 rounded-2xl font-semibold ${theme.accentBtn}`}
            onClick={() => document.getElementById("aboutqa")?.scrollIntoView({ behavior: "smooth" })}
          >
            {d.heroCTA}
          </button>
        </div>
      </header>

      {d.sections.map((s) => (
        <Section key={s.id} {...s} />
      ))}

      <BugJamGrid items={d.bugJams} />
      <AboutMe profile={d.profile} gallery={d.aboutGallery} />

      <footer className="text-center py-6 text-sm text-black relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 md:pr-44">{d.footerNote}</div>
      </footer>

      <JumpButtons ids={ids} />
    </div>
  );
}
