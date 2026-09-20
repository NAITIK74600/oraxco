"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles, Wand2, Layers3, MapPinned } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    label: "Website Design & Frontend Delivery",
    accent: "oklch(65% 0.25 250)",
    headline: "Launch-ready websites for real businesses.",
    desc: "We design and ship responsive marketing sites, brand sites, and storefront experiences with production deployment in mind from day one.",
    pricing: "Custom quote",
    deliverables: ["Site Architecture", "Responsive UI", "Design System", "Next.js Development", "QA & Launch", "Deployment Support"],
    process: ["Scope the launch", "Map the pages", "Design the interface", "Build the frontend", "Ship to production"],
    caseStudy: { title: "Batla Medicos → live production demo", href: "https://batlamedicos.shop/" },
  },
  {
    id: "02",
    label: "Brand Identity",
    accent: "oklch(65% 0.28 290)",
    headline: "Identity systems that make the site feel cohesive.",
    desc: "We shape the visual language around a launch so typography, layout, color, and component styling all feel intentional and consistent.",
    pricing: "Custom quote",
    deliverables: ["Visual Direction", "Logo Refresh", "Color System", "Typography Pairing", "Component Language", "Launch Assets"],
    process: ["Audit the brand", "Set the direction", "Build the system", "Apply it to pages", "Prepare launch assets"],
    caseStudy: { title: "Oraxco launch system → in active use", href: "/" },
  },
  {
    id: "03",
    label: "Motion & Interaction Design",
    accent: "oklch(65% 0.28 330)",
    headline: "Motion with a product purpose.",
    desc: "We add motion where it helps the interface feel polished, guided, and memorable without turning the site into a demo reel.",
    pricing: "Custom quote",
    deliverables: ["Interaction Audit", "Scroll Motion", "Transition Design", "Loader States", "Micro-interactions", "Launch Polish"],
    process: ["Audit interaction needs", "Prototype key moments", "Build performant motion", "Test reduced-motion fallbacks", "Ship final polish"],
    caseStudy: { title: "Batla Medicos → production-ready launch polish", href: "https://batlamedicos.shop/" },
  },
  {
    id: "04",
    label: "SEO, Local Presence & Digital Footprint",
    accent: "oklch(68% 0.24 175)",
    headline: "Be found where local customers are looking.",
    desc: "We connect your website, search visibility, local listings, and business profiles into one clear digital presence that customers can discover and trust.",
    pricing: "Custom quote",
    deliverables: ["SEO Foundations", "Google Business Profile Setup", "Google Maps Presence", "Local Directory Listings", "Review-Request System", "Analytics & Search Console"],
    process: ["Audit your current presence", "Set up business profiles", "Optimize local pages", "Connect tracking", "Launch and monitor"],
    caseStudy: { title: "Shree Laundry — local digital presence", href: "http://shreelaundry.site/" },
  },
];

const faqs = [
  { q: "Are you an established studio or a new startup agency?", a: "Oraxco is a creative studio established in 2026. We prefer stating that clearly rather than inflating experience claims." },
  { q: "What live work can you show right now?", a: "We currently feature five live websites: Muscle Mantra, 3A Creative, Easy Motors Biel, Edufyi Tech Solutions, and Batla Medicos." },
  { q: "Do you only take website work?", a: "No. Alongside websites, we set up SEO foundations, Google Business Profiles, Google Maps visibility, local listings, review flows, and performance tracking." },
  { q: "Can you set up our Google Business Profile and local SEO?", a: "Yes. We can prepare and optimize your profile, align your website with local search terms, connect Maps and directory listings, and establish the tools needed to track visibility." },
  { q: "Can you support deployment?", a: "Yes. We can prepare websites for a reliable production launch and support the handoff to your preferred hosting platform." },
  { q: "How do you handle copy and accuracy?", a: "We avoid invented numbers, fabricated testimonials, and placeholder case studies in production work. If a claim cannot be verified, we write around it honestly." },
  { q: "How do we start?", a: "Share the website scope, launch target, and reference material. We'll shape the page system, build plan, and deployment path from there." },
];

const ease = "easeOut" as const;
const heroBadges = ["Strategy-led", "Design-heavy", "Build-ready", "SEO-ready", "Launch-first"];

function ServicesHero() {
  return (
    <section className="relative pt-36 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, oklch(65% 0.28 290 / 16%) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 45% 35% at 10% 55%, oklch(65% 0.25 250 / 12%) 0%, transparent 65%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 45% 35% at 90% 60%, oklch(65% 0.28 330 / 10%) 0%, transparent 65%)" }} />
      <div className="max-w-6xl mx-auto">
        <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase mb-5 glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: "oklch(65% 0.28 290)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Four Disciplines
        </motion.div>
        <motion.h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black mb-6 leading-[0.98] tracking-tight" style={{ fontFamily: "var(--font-sora-var)" }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          Service architecture<br />
          <span className="text-gradient-pp">for serious launches.</span>
        </motion.h1>
        <motion.p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "oklch(55% 0.01 270)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Oraxco services are designed as one connected system: strategy that sets direction, design that builds trust, and execution that ships in production with confidence.
        </motion.p>

        <motion.div className="flex flex-wrap gap-2.5 mt-7" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {heroBadges.map((badge) => (
            <span key={badge} className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.08em] uppercase" style={{ background: "oklch(13% 0.02 270)", border: "1px solid oklch(24% 0.028 270)", color: "oklch(68% 0.01 270)" }}>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Anchor pills */}
        <motion.div className="flex flex-wrap gap-3 mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {services.map((s) => (
            <a key={s.id} href={`#service-${s.id}`} className="px-4 py-2 rounded-full text-xs font-semibold transition-colors" style={{ background: s.accent.replace(")", " / 12%)"), color: s.accent, border: `1px solid ${s.accent.replace(")", " / 30%)")}` }} data-cursor>
              {s.id} · {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CreativeMoodStrip() {
  const items = [
    { icon: Sparkles, label: "Brand Intelligence" },
    { icon: Layers3, label: "Interface Systems" },
    { icon: Wand2, label: "Motion Storytelling" },
    { icon: MapPinned, label: "Local Search Presence" },
  ];

  return (
    <section className="px-6 md:px-12 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="relative rounded-2xl p-5 overflow-hidden"
              style={{ background: "oklch(12% 0.018 270)", border: "1px solid oklch(20% 0.025 270)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, borderColor: "oklch(65% 0.28 290 / 30%)" }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl" style={{ background: "oklch(65% 0.28 290 / 20%)" }} />
              <div className="relative flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "oklch(65% 0.28 290 / 14%)", color: "oklch(65% 0.28 290)" }}>
                  <Icon size={16} />
                </div>
                <div className="text-sm font-semibold" style={{ color: "oklch(82% 0.01 270)" }}>{item.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ServiceBlock({ service, index }: { service: (typeof services)[number]; index: number }) {
  const [activeStep, setActiveStep] = useState(0);
  const isEven = index % 2 === 0;

  return (
    <section id={`service-${service.id}`} className="px-6 md:px-12 py-20 border-t" style={{ borderColor: "oklch(18% 0.022 270)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start mb-14`}>
          <div className="flex-1">
            <div className="text-xs font-mono mb-3" style={{ color: service.accent }}>{service.id}</div>
            <motion.h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-sora-var)" }} initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
              {service.headline}
            </motion.h2>
            <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: "oklch(55% 0.01 270)" }}>{service.desc}</p>
                <div className="text-lg font-bold" style={{ color: service.accent }}>{service.pricing}</div>
          </div>

          {/* Deliverables grid */}
          <div className="flex-1">
            <div className="text-xs mb-4" style={{ color: "oklch(40% 0.01 270)", letterSpacing: "0.1em" }}>WHAT YOU GET</div>
            <div className="grid grid-cols-2 gap-2">
              {service.deliverables.map((d, i) => (
                <motion.div key={d} className="flex items-center gap-2 text-sm" style={{ color: "oklch(65% 0.01 270)" }} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                  {d}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process tabs + case study */}
        <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
          {/* Process tabs */}
          <div className="flex-1 rounded-2xl p-6" style={{ background: "oklch(12% 0.018 270)", border: "1px solid oklch(20% 0.025 270)" }}>
            <div className="text-xs mb-4" style={{ color: "oklch(40% 0.01 270)", letterSpacing: "0.1em" }}>THE PROCESS</div>
            <div className="space-y-1">
              {service.process.map((step, i) => (
                <button key={step} onClick={() => setActiveStep(i)} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm transition-colors" style={activeStep === i ? { background: service.accent.replace(")", " / 12%)"), color: "oklch(90% 0.01 270)" } : { color: "oklch(48% 0.01 270)" }} data-cursor>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: activeStep === i ? service.accent.replace(")", " / 25%)") : "oklch(18% 0.022 270)", color: activeStep === i ? service.accent : "oklch(38% 0.01 270)" }}>
                    {i + 1}
                  </span>
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Case study callout */}
          <motion.div className="flex-1 rounded-2xl overflow-hidden relative" style={{ background: `linear-gradient(135deg, ${service.accent.replace(")", " / 12%)")}, oklch(10% 0.015 270))`, border: `1px solid ${service.accent.replace(")", " / 25%)")}` }} whileHover={{ borderColor: service.accent.replace(")", " / 50%)") }} transition={{ duration: 0.3 }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -bottom-12 -right-6 text-[8rem] font-black leading-none pointer-events-none" style={{ fontFamily: "var(--font-sora-var)", color: service.accent.replace(")", " / 16%)") }}>
              {service.id}
            </div>
            <div className="relative p-7 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs mb-6" style={{ color: service.accent.replace(")", " / 70%)"), letterSpacing: "0.1em" }}>FEATURED OUTCOME</div>
                <div className="text-lg font-bold leading-snug mb-2" style={{ fontFamily: "var(--font-sora-var)" }}>{service.caseStudy.title}</div>
                <p className="text-sm leading-relaxed mt-3 max-w-sm" style={{ color: "oklch(58% 0.01 270)" }}>
                  We combine planning, execution, and delivery in one flow so quality does not drop between design and final deployment.
                </p>
              </div>
              <a href={service.caseStudy.href} target={service.caseStudy.href.startsWith("http") ? "_blank" : undefined} rel={service.caseStudy.href.startsWith("http") ? "noreferrer" : undefined} data-cursor>
                <motion.span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: service.accent }} whileHover={{ x: 3 }}>
                  View case study <ArrowUpRight size={15} />
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 py-20 border-t" style={{ borderColor: "oklch(18% 0.022 270)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs mb-3 tracking-[0.18em] uppercase" style={{ color: "oklch(65% 0.25 250)" }}>Common Questions</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ fontFamily: "var(--font-sora-var)" }}>Honestly answered.</h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="rounded-xl overflow-hidden" style={{ background: "oklch(12% 0.018 270)", border: "1px solid oklch(20% 0.025 270)" }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <button className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold" onClick={() => setOpen(open === i ? null : i)} data-cursor>
                <span>{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={16} style={{ color: "oklch(45% 0.01 270)" }} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3, ease }}>
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "oklch(52% 0.01 270)" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div className="rounded-3xl relative overflow-hidden p-12 text-center" style={{ background: "linear-gradient(135deg, oklch(65% 0.28 290 / 10%), oklch(65% 0.28 330 / 10%))", border: "1px solid oklch(65% 0.28 290 / 20%)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <p className="text-xs tracking-[0.18em] uppercase mb-3" style={{ color: "oklch(65% 0.28 330)" }}>Ready when you are</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-sora-var)" }}>
              Let&apos;s build something<br className="hidden md:block" /> worth showing off.
            </h2>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "oklch(52% 0.01 270)" }}>
              Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d approach it — no cost, no obligation.
            </p>
            <Link href="/#contact" data-cursor>
              <motion.span className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, oklch(65% 0.28 290), oklch(65% 0.28 330))" }} whileHover={{ scale: 1.04, boxShadow: "0 0 40px oklch(65% 0.28 290 / 50%)" }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                Start the conversation <ArrowUpRight size={16} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <CreativeMoodStrip />

      {/* ── Purple Lamp Divider ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 420, background: "oklch(8% 0.015 270)" }}>
        {/* Lamp beams */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          {/* Left beam */}
          <motion.div
            initial={{ opacity: 0, width: "12rem" }}
            whileInView={{ opacity: 1, width: "28rem" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 right-1/2 h-52 overflow-hidden"
            style={{ backgroundImage: "conic-gradient(from 70deg at center top, oklch(65% 0.28 290), transparent, transparent)" }}
          />

          {/* Right beam */}
          <motion.div
            initial={{ opacity: 0, width: "12rem" }}
            whileInView={{ opacity: 1, width: "28rem" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-1/2 h-52 overflow-hidden"
            style={{ backgroundImage: "conic-gradient(from 290deg at center top, transparent, transparent, oklch(65% 0.28 330))" }}
          />

          {/* Centre glow blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            viewport={{ once: true }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 rounded-full blur-3xl"
            style={{ width: "18rem", height: "10rem", background: "oklch(65% 0.28 290 / 60%)" }}
          />

          {/* Horizontal light line */}
          <motion.div
            initial={{ width: "4rem", opacity: 0 }}
            whileInView={{ width: "22rem", opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute h-[1.5px] top-[6.5rem] left-1/2 -translate-x-1/2"
            style={{ background: "linear-gradient(90deg, transparent, oklch(65% 0.28 290), oklch(65% 0.28 330), transparent)" }}
          />

          {/* Floor cover — keeps bottom clean */}
          <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, oklch(8% 0.015 270) 55%, transparent)" }} />
        </div>

        {/* Content — sits over the beams */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-6">
          <motion.p
            className="text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ color: "oklch(50% 0.01 270)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Built for outcomes
          </motion.p>
          <motion.h2
            className="text-center font-black leading-[1.05] tracking-tight px-6"
            style={{ fontFamily: "var(--font-sora-var)", fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-white">We ship work that is </span>
            <span style={{ color: "oklch(65% 0.28 290)" }}>real,</span>
            <br />
            <span className="text-white">not </span>
            <span
              className="italic"
              style={{ color: "oklch(65% 0.28 330)", fontFamily: "var(--font-dancing-script)", fontSize: "1.2em", lineHeight: 1 }}
            >
              rendered.
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-sm max-w-sm text-center leading-relaxed"
            style={{ color: "oklch(44% 0.01 270)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.78, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Every deliverable below is backed by production-ready code, real deployment, and zero invented metrics.
          </motion.p>
        </div>
      </div>

      {services.map((s, i) => <ServiceBlock key={s.id} service={s} index={i} />)}
      <FaqAccordion />
      <ServicesCTA />
    </>
  );
}
