import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import quorbitLogo from "@/assets/quorbit-logo.jpg";
import {
  Bot,
  Sparkles,
  Layers,
  ShieldCheck,
  Globe2,
  Gauge,
  ArrowRight,
  Zap,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Send,
  Activity,
  ExternalLink,
} from "lucide-react";


export const Route = createFileRoute("/")({
  component: QuorbitLanding,
  head: () => ({
    meta: [
      { title: "Quorbit Labs — Intelligent AI. Autonomous Modules." },
      {
        name: "description",
        content:
          "Quorbit Labs unifies conversational AI, business intelligence and autonomous modules into one premium enterprise platform.",
      },
    ],
  }),
});

const CYAN = "#00F0FF";
const CORAL = "#FF5A36";

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const links = ["Platform", "Solutions", "Projects", "Company"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[88%] max-w-5xl" : "w-[94%] max-w-6xl"
      }`}
    >
      <div
        className={`flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur-md transition-all duration-500 ${
          scrolled ? "py-2 shadow-[0_10px_40px_-10px_rgba(0,240,255,0.25)]" : "py-3"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <motion.div
            className="relative h-9 w-9"
            animate={{ rotate: [0, 0] }}
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${CYAN}80, transparent 70%)`,
                filter: "blur(8px)",
              }}
            />
            <img
              src={quorbitLogo}
              alt="Quorbit Labs"
              className="relative h-9 w-9 rounded-md object-cover"
            />
          </motion.div>
          <span className="text-sm font-bold tracking-[0.2em] text-white">
            QUORBIT<span style={{ color: CYAN }}>·</span>LABS
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onMouseEnter={() => setHovered(l)}
              className="relative rounded-lg px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              {hovered === l && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-lg bg-white/10"
                />
              )}
              <span className="relative">{l}</span>
            </a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-[#030712]"
          style={{ backgroundColor: CYAN }}
        >
          <motion.span
            className="absolute inset-0"
            animate={{ boxShadow: [`0 0 0 0 ${CYAN}80`, `0 0 0 12px ${CYAN}00`] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="relative">Request Demo</span>
        </motion.button>
      </div>
    </motion.header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 18 } },
  };

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      {/* Orbits */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/5"
            style={{
              width: `${300 + i * 220}px`,
              height: `${300 + i * 220}px`,
              x: "-50%",
              y: "-50%",
              borderColor: i % 2 === 0 ? `${CYAN}15` : `${CORAL}12`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute h-2 w-2 rounded-full"
              style={{
                top: "-4px",
                left: "50%",
                background: i % 2 === 0 ? CYAN : CORAL,
                boxShadow: `0 0 16px ${i % 2 === 0 ? CYAN : CORAL}`,
              }}
            />
          </motion.div>
        ))}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${CYAN}30, transparent 60%)` }}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" style={{ color: CYAN }} />
          Now in private beta — Q2 2026
        </motion.div>

        <motion.h1 variants={item} className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Intelligent AI.{" "}
          <span style={{ background: `linear-gradient(135deg, ${CYAN}, #7dd3fc)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Autonomous Modules.
          </span>
          <br />
          One Unified Platform.
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/60">
          Quorbit Labs fuses conversational AI, autonomous business modules and intelligent
          automation into a single enterprise operating system.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: `0 0 40px ${CYAN}80` }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-[#030712]"
            style={{ backgroundColor: CYAN, boxShadow: `0 0 24px ${CYAN}50` }}
          >
            Explore AI Suites
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, borderColor: CORAL, boxShadow: `0 0 30px ${CORAL}60` }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: CORAL }} />
          </motion.button>
        </motion.div>

        <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {[
            { v: "99.99%", l: "Uptime SLA" },
            { v: "120ms", l: "Avg AI Latency" },
            { v: "ISO 27001", l: "Certified" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/40">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------- PRODUCT SUITE + FLOATING DASHBOARD -------------------- */
function ProductSuite() {
  const accent = CYAN;

  const aiCards = [
    {
      icon: Bot,
      title: "Conversational AI Chatbots",
      desc: "Enterprise-grade multilingual agents trained on your data with sub-second responses.",
    },
    {
      icon: Layers,
      title: "AIMS Business Modules",
      desc: "Autonomous Intelligence Management — finance, ops, HR, all orchestrated by AI.",
    },
    {
      icon: Gauge,
      title: "Real-time Insights Engine",
      desc: "Live KPIs, anomaly detection and predictive scoring across every workflow.",
    },
  ];

  return (
    <section id="platform" style={{ scrollMarginTop: "6rem" }} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            The Core Engine
          </motion.h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            One AI-native control plane orchestrating every module of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-5">
            {aiCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 110, damping: 18 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: accent }}
                />
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${accent}20`, color: accent }}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/60">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Floating Dashboard */}
          <FloatingDashboard />
        </div>
      </div>
    </section>
  );
}

/* -------------------- FLOATING DASHBOARD ANIMATION -------------------- */
function FloatingDashboard() {
  const [activeChat, setActiveChat] = useState(0);
  const messages = [
    { q: "How many quizzes were auto-graded today?", a: "1,284 quizzes scored in 42s" },
    { q: "Forecast Q3 revenue for EMEA.", a: "€14.2M projected · 94% confidence" },
    { q: "Top risk in operations today?", a: "Inventory drift in 3 warehouses" },
  ];

  useEffect(() => {
    const i = setInterval(() => setActiveChat((v) => (v + 1) % messages.length), 4200);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative h-[520px] w-full" style={{ perspective: "1400px" }}>
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${CYAN}40, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Floating active students card (top-left) */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 90 }}
        className="absolute left-0 top-12 z-20"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
          style={{ boxShadow: `0 20px 60px -20px ${CYAN}50` }}
        >
          <div className="text-[10px] uppercase tracking-wider text-white/50">Active Users</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">12,480</span>
            <span className="text-xs font-semibold" style={{ color: CYAN }}>+18.2%</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating engagement card (top-right) */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 90 }}
        className="absolute right-0 top-4 z-20"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
          style={{ boxShadow: `0 20px 60px -20px ${CYAN}50` }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: `${CYAN}25` }}
          >
            <Activity className="h-4 w-4" style={{ color: CYAN }} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/50">Engagement</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-white">94.6%</span>
              <span className="text-[10px] font-semibold" style={{ color: CYAN }}>+4.1%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Tilted tablet dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 50 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 42 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[480px] -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: "preserve-3d", rotateZ: "-8deg" } as React.CSSProperties}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0a1628] to-[#04080f] p-4"
          style={{
            boxShadow: `0 0 60px ${CYAN}40, 0 0 120px ${CYAN}20, inset 0 0 30px rgba(0,0,0,0.6)`,
          }}
        >
          {/* Dashboard grid mini-charts */}
          <div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
                style={{ gridColumn: i === 0 ? "span 2" : "span 1", gridRow: i === 0 ? "span 1" : "span 1" }}
              >
                <div className="mb-1 h-1 w-8 rounded-full bg-white/10" />
                <MiniChart seed={i} />
              </motion.div>
            ))}
            <div className="col-span-3 row-span-1 flex items-center justify-around rounded-lg border border-white/5 bg-white/[0.03] px-3">
              {[0.5, 0.8, 0.3, 0.9, 0.6, 0.7, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-2 rounded-sm"
                  style={{ background: `linear-gradient(180deg, ${CYAN}, ${CYAN}40)` }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* Edge glow */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-[32px]"
            style={{
              background: `linear-gradient(135deg, ${CYAN}30, transparent 40%, transparent 60%, ${CYAN}30)`,
              filter: "blur(20px)",
              opacity: 0.6,
              zIndex: -1,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating AI assistant chat (bottom-right) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring", stiffness: 90 }}
        className="absolute bottom-2 right-0 z-30 w-[260px]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="rounded-2xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl"
          style={{ boxShadow: `0 20px 60px -20px ${CYAN}60` }}
        >
          <div className="mb-2 flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: `${CYAN}30` }}
            >
              <Bot className="h-3.5 w-3.5" style={{ color: CYAN }} />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Quorbit Assistant</div>
              <div className="flex items-center gap-1 text-[9px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: CYAN, boxShadow: `0 0 6px ${CYAN}` }} />
                Online · AI
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChat}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-white/[0.04] px-2.5 py-2 text-[11px] text-white/80">
                {messages[activeChat].q}
              </div>
              <div
                className="mt-1.5 rounded-lg px-2.5 py-2 text-[11px] font-medium"
                style={{ background: `${CYAN}18`, color: CYAN }}
              >
                {messages[activeChat].a}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MiniChart({ seed }: { seed: number }) {
  const points = Array.from({ length: 12 }).map((_, i) => {
    const v = 50 + Math.sin((i + seed) * 0.9) * 22 + Math.cos(i * 0.4 + seed) * 10;
    return `${(i / 11) * 100},${100 - v}`;
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[calc(100%-8px)] w-full">
      <defs>
        <linearGradient id={`mg-${seed}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={CYAN} stopOpacity="0.5" />
          <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={points.join(" ")}
        fill="none"
        stroke={CYAN}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 + seed * 0.1 }}
      />
      <polygon
        points={`0,100 ${points.join(" ")} 100,100`}
        fill={`url(#mg-${seed})`}
        opacity="0.7"
      />
    </svg>
  );
}



/* -------------------- PROJECTS -------------------- */
type ProjectTier = {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  features: string[];
  highlight?: boolean;
};

type Project = {
  title: string;
  category: string;
  desc: string;
  stack: string[];
  metrics: string[];
  image: string;
  featured?: boolean;
  tone: string;
  client?: string;
  year?: string;
  challenge?: string;
  outcome?: string;
  tiers?: ProjectTier[];
};


const PROJECTS: Project[] = [
  {
    title: "EduFlow — AI-Powered LMS & School Management",
    category: "LMS / Education",
    desc: "End-to-end cloud school management and learning platform — from admin operations to AI-graded assignments, plagiarism detection, and auto-generated lesson slides. Built on Next.js for speed, SEO, and scale.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Tailwind"],
    metrics: ["Unlimited students", "AI grading", "Multi-portal"],
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    tone: CYAN,
    client: "K-12 & Higher-Ed Institutions",
    year: "2025",
    challenge:
      "Schools were juggling 6+ disconnected tools — attendance, fees, gradebooks, LMS, comms — with zero AI assistance for teachers drowning in lesson prep, grading, and plagiarism review.",
    outcome:
      "Shipped EduFlow as a modular Next.js platform with five tiered packages, role-based portals for admin, teachers, parents and students, and an optional AI layer that auto-generates slides, quizzes, and grades submissions with plagiarism checks.",
    tiers: [
      {
        name: "Basic",
        tagline: "Cloud school management essentials",
        setup: "PKR 50,000 setup",
        monthly: "PKR 10,000 / month",
        features: [
          "Cloud-based school management",
          "Admin dashboard & user roles",
          "Attendance, classes & timetables",
          "Fees & basic reporting",
          "Email + standard support",
        ],
      },
      {
        name: "Standard",
        tagline: "Adds student portal, unlimited scale",
        setup: "PKR 80,000 setup",
        monthly: "PKR 20,000 / month",
        features: [
          "Everything in Basic",
          "Dedicated student portal",
          "Unlimited students & staff",
          "Announcements & messaging",
          "Advanced reporting (no AI)",
        ],
      },
      {
        name: "Elite",
        tagline: "Full LMS + all role portals",
        setup: "PKR 150,000 setup",
        monthly: "PKR 70,000 / month",
        features: [
          "Admin, teacher, parent & student portals",
          "Full CRUD across every module",
          "Assignments, quizzes & submissions",
          "Manual grading & gradebook",
          "Course content & resources",
        ],
        highlight: true,
      },
      {
        name: "Premium AI",
        tagline: "Elite + full AI teaching layer",
        setup: "PKR 220,000 setup",
        monthly: "PKR 100,000 / month",
        features: [
          "Everything in Elite",
          "AI plagiarism detection",
          "AI quiz & assignment generation",
          "AI auto-grading with feedback",
          "AI slide generator for any topic",
        ],
      },
      {
        name: "Custom White-Label",
        tagline: "Your brand, your AI LMS",
        setup: "PKR 400,000 setup",
        monthly: "PKR 100,000 / month",
        features: [
          "Fully custom AI-powered LMS",
          "Your logo, name & domain",
          "Tailored modules & workflows",
          "Priority roadmap & SLA",
          "Dedicated success engineer",
        ],
      },
    ],
  },
  {
    title: "KMC Karachi — Citizen Services Portal",

    category: "Web Development",
    desc: "Full-stack MERN portal digitizing public services and administrative workflows for the Karachi Metropolitan Corporation.",
    stack: ["React", "Node.js", "MongoDB", "D3.js"],
    metrics: ["+40% engagement", "60% faster data", "99.9% uptime"],
    image: "https://m4softwares.com/14.jpg",
    featured: true,
    tone: CYAN,
    client: "Karachi Metropolitan Corporation",
    year: "2024",
    challenge:
      "Replace fragmented paper-based municipal workflows with a unified digital portal handling millions of citizen requests across 18 districts.",
    outcome:
      "Shipped a role-based dashboard with realtime D3 analytics, reducing average request resolution from 11 days to 4 and lifting citizen engagement by 40%.",
  },
  {
    title: "Healthcare Telemedicine App",
    category: "Mobile Apps",
    desc: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers seamlessly.",
    stack: ["React Native", "Firebase", "WebRTC", "Stripe"],
    metrics: ["10K+ users", "4.8★ rating", "−50% wait time"],
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    tone: CORAL,
    client: "Private Healthcare Network",
    year: "2024",
    challenge:
      "Build a secure cross-platform consultation app with low-latency video, encrypted records, and integrated billing under strict HIPAA constraints.",
    outcome:
      "Launched on iOS + Android with end-to-end encrypted WebRTC, scaling to 10K+ active patients in the first quarter and a 4.8★ store rating.",
  },
  {
    title: "ImmortalBoost — Gaming Services",
    category: "Web Development",
    desc: "High-converting platform for a professional gaming boost service with tiered offerings and secure global checkout.",
    stack: ["React", "PHP", "JavaScript"],
    metrics: ["Global checkout", "Tiered pricing", "Trust-first UX"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: CYAN,
    client: "ImmortalBoost",
    year: "2023",
    challenge: "Convert a niche gaming-services audience with a checkout flow that builds trust across regions and currencies.",
    outcome: "Rebuilt the storefront with a tiered pricing engine and Stripe-backed global checkout, doubling conversion within 8 weeks.",
  },
  {
    title: "AI Conversational Chatbot",
    category: "AI / ML",
    desc: "NLP-driven chatbot automating customer support and handling complex queries with sub-second responses.",
    stack: ["Python", "TensorFlow", "OpenAI API"],
    metrics: ["24/7 support", "Multi-intent", "Continuous learning"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    tone: CORAL,
    client: "SaaS Customer-Success Team",
    year: "2024",
    challenge: "Cut a growing ticket backlog without sacrificing the empathetic tone of the in-house support team.",
    outcome: "Deployed a multi-intent assistant that auto-resolves 62% of tickets and hands warm context to humans for the rest.",
  },
  {
    title: "Cloud Infrastructure Automation",
    category: "Cloud Solutions",
    desc: "Secure, highly-available AWS architecture with automated scaling, failover and real-time alerting.",
    stack: ["EC2", "RDS", "VPC", "Auto Scaling", "Route 53"],
    metrics: ["Zero-downtime", "Auto-scale", "IaC"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: CYAN,
    client: "Fintech Platform",
    year: "2023",
    challenge: "Migrate a monolithic stack to a fault-tolerant cloud topology without a single second of customer downtime.",
    outcome: "Codified the entire stack as IaC with blue-green deploys, achieving zero-downtime cutover and 4× faster release cadence.",
  },
  {
    title: "Crypto Analytics Dashboard",
    category: "UI / UX Design",
    desc: "Intuitive dashboard letting traders monitor portfolios, track trends and execute trades seamlessly.",
    stack: ["Figma", "Data Viz", "Sass"],
    metrics: ["Realtime feed", "Custom widgets", "Dark-first"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tone: CORAL,
    client: "Crypto Trading Startup",
    year: "2024",
    challenge: "Surface dense market data without overwhelming retail traders — fast scanning, calm hierarchy, custom layouts.",
    outcome: "Designed a dark-first dashboard with composable widgets that lifted DAU 35% and shortened time-to-decision by 22%.",
  },
];

const PROJECT_FILTERS = ["All", "LMS / Education", "Web Development", "Mobile Apps", "AI / ML", "UI / UX Design", "Cloud Solutions"];

/* -------------------- PROJECT MODAL -------------------- */
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B132B]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            <div className="relative h-56 shrink-0 overflow-hidden sm:h-72">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur transition hover:bg-black/70 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#030712]"
                  style={{ backgroundColor: project.tone }}
                >
                  {project.category}
                </span>
                {project.year && (
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                    {project.year}
                  </span>
                )}
                {project.client && (
                  <span className="text-[11px] text-white/70">· {project.client}</span>
                )}
              </div>
            </div>

            <motion.div
              className="flex-1 overflow-y-auto p-6 sm:p-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
            >
              {[
                <h3 key="t" className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>,
                <p key="d" className="mt-3 text-sm leading-relaxed text-white/70">
                  {project.desc}
                </p>,
                <div key="cha" className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: project.tone }}>
                      The Challenge
                    </div>
                    <p className="text-sm text-white/75">{project.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: project.tone }}>
                      The Outcome
                    </div>
                    <p className="text-sm text-white/75">{project.outcome}</p>
                  </div>
                </div>,
                <div key="m" className="mt-6 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                      <div className="text-sm font-bold text-white">{m}</div>
                    </div>
                  ))}
                </div>,
                <div key="s" className="mt-6">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/50">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>,
                ...(project.tiers
                  ? [
                      <div key="tiers" className="mt-8">
                        <div className="mb-3 flex items-baseline justify-between">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Packages
                          </div>
                          <div className="text-[10px] text-white/40">Pick the right fit for your school</div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {project.tiers.map((t) => (
                            <motion.div
                              key={t.name}
                              whileHover={{ y: -3 }}
                              transition={{ type: "spring", stiffness: 280, damping: 22 }}
                              className={`relative rounded-2xl border p-4 ${
                                t.highlight
                                  ? "border-transparent bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                              style={
                                t.highlight
                                  ? { boxShadow: `0 0 0 1px ${project.tone}55, 0 18px 50px -20px ${project.tone}66` }
                                  : undefined
                              }
                            >
                              {t.highlight && (
                                <span
                                  className="absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#030712]"
                                  style={{ backgroundColor: project.tone }}
                                >
                                  Most Popular
                                </span>
                              )}
                              <div className="text-sm font-bold text-white">{t.name}</div>
                              <div className="mt-0.5 text-[11px] text-white/55">{t.tagline}</div>
                              <div className="mt-3 space-y-0.5">
                                <div className="text-[13px] font-semibold text-white">{t.setup}</div>
                                <div className="text-[11px] text-white/60">{t.monthly} maintenance</div>
                              </div>
                              <ul className="mt-3 space-y-1.5">
                                {t.features.map((f) => (
                                  <li key={f} className="flex gap-2 text-[11px] leading-relaxed text-white/70">
                                    <span style={{ color: project.tone }}>✓</span>
                                    <span>{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>,
                    ]
                  : []),

              ].map((node, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 22 } },
                  }}
                >
                  {node}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const counts: Record<string, number> = { All: PROJECTS.length };
  PROJECT_FILTERS.slice(1).forEach((f) => {
    counts[f] = PROJECTS.filter((p) => p.category === f).length;
  });

  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <Sparkles className="h-3 w-3" style={{ color: CYAN }} /> Featured Work
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Projects we've shipped
            </h2>
            <p className="mt-3 max-w-xl text-white/60">
              From civic platforms to AI chatbots — 10+ projects delivered across industries with a 98% success rate.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 md:flex md:gap-8">
            {[
              { v: "10+", l: "Projects" },
              { v: "9+", l: "Clients" },
              { v: "300%", l: "Avg ROI" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-white">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileTap={{ scale: 0.94 }}
                className="relative rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${CYAN}, ${CORAL})`,
                      boxShadow: `0 8px 24px -8px ${CYAN}66`,
                    }}
                  />
                )}
                <span
                  className="relative inline-flex items-center gap-1.5"
                  style={{ color: isActive ? "#030712" : undefined }}
                >
                  {f}
                  <span
                    className={`rounded-full px-1.5 py-px text-[9px] font-bold ${
                      isActive ? "bg-[#030712]/15 text-[#030712]" : "bg-white/10 text-white/50"
                    }`}
                  >
                    {counts[f]}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/50"
              >
                No projects in this category yet.
              </motion.div>
            )}
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 120, damping: 18 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(p)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    {p.featured && (
                      <span
                        className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#030712]"
                        style={{ backgroundColor: p.tone }}
                      >
                        Featured
                      </span>
                    )}
                    <span className="rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                    {p.metrics.map((m) => (
                      <div key={m} className="text-center">
                        <div className="text-[10px] font-medium text-white/70">{m}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(p);
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: p.tone }}
                  >
                    View case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: p.tone }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}


/* -------------------- WHY US -------------------- */
function WhyUs() {

  const items = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      desc: "Enterprise SLAs, redundant infrastructure across 12 regions, zero-trust security.",
      tone: CYAN,
      span: "md:col-span-1 md:row-span-2",
    },
    {
      icon: Gauge,
      title: "Algorithmic Scale",
      desc: "Process billions of geometric operations and tokens per day without breaking a sweat.",
      tone: CORAL,
      span: "md:col-span-2",
    },
    {
      icon: Globe2,
      title: "Global Standards",
      desc: "ISO 27001, SOC 2 Type II, GDPR — every layer audited.",
      tone: CYAN,
      span: "md:col-span-1",
    },
    {
      icon: Sparkles,
      title: "Composable by Design",
      desc: "Mix AI, data and automation modules through a single API surface. Build once, run anywhere.",
      tone: CORAL,
      span: "md:col-span-1",
    },
  ];

  return (
    <section id="solutions" style={{scrollMarginTop:"6rem"}} className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Why teams choose Quorbit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Built for enterprises that refuse to compromise between intelligence and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 110, damping: 18 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm ${it.span}`}
            >
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50"
                style={{ background: it.tone }}
              />
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${it.tone}20`, color: it.tone }}
              >
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT + FOOTER -------------------- */
function ContactFooter() {
  const [focus, setFocus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", msg: "" });
  const [sent, setSent] = useState(false);

  const fields: { key: keyof typeof form; label: string; type?: string; full?: boolean }[] = [
    { key: "name", label: "Full name" },
    { key: "email", label: "Work email", type: "email" },
    { key: "company", label: "Company", full: true },
    { key: "msg", label: "How can we help?", full: true },
  ];

  return (
    <footer id="company" style={{scrollMarginTop:"6rem"}} className="relative px-6 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Let's build the<br />
              <span style={{ background: `linear-gradient(135deg, ${CYAN}, ${CORAL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                next decade together.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Tell us about your stack. We'll show you what a unified AI platform looks like in production.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <Mail className="h-4 w-4" style={{ color: CYAN }} />
              <a href="mailto:musabkhan703@gmail.com" className="transition-colors hover:text-white">musabkhan703@gmail.com</a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2500);
            }}
            className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
          >
            {fields.map((f) => (
              <div key={f.key} className={`relative ${f.full ? "col-span-2" : "col-span-1"}`}>
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/40">
                  {f.label}
                </label>
                <div className="relative">
                  {f.key === "msg" ? (
                    <textarea
                      value={form.msg}
                      onChange={(e) => setForm({ ...form, msg: e.target.value })}
                      onFocus={() => setFocus(f.key)}
                      onBlur={() => setFocus(null)}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors"
                    />
                  ) : (
                    <input
                      type={f.type || "text"}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      onFocus={() => setFocus(f.key)}
                      onBlur={() => setFocus(null)}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors"
                    />
                  )}
                  <AnimatePresence>
                    {focus === f.key && (
                      <motion.div
                        layoutId="focus-ring"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="pointer-events-none absolute inset-0 rounded-lg ring-2"
                        style={{ boxShadow: `0 0 0 2px ${CYAN}, 0 0 20px ${CYAN}60` } as React.CSSProperties}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#030712]"
              style={{ backgroundColor: CYAN, boxShadow: `0 0 24px ${CYAN}50` }}
            >
              {sent ? "Message sent ✓" : (<>Request a demo <Send className="h-4 w-4" /></>)}
            </motion.button>
          </form>
        </div>

        {/* Footer columns */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: `radial-gradient(circle, ${CYAN}80, transparent 70%)`, filter: "blur(8px)" }}
                />
                <img src={quorbitLogo} alt="Quorbit Labs" className="relative h-9 w-9 rounded-md object-cover" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-white">
                QUORBIT<span style={{ color: CYAN }}>·</span>LABS
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Engineering the unified intelligence layer for industrial and enterprise software.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/feed/update/urn:li:activity:7365745698845220868" },
                { Icon: Instagram, href: "https://www.instagram.com/qubit.labs_/" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2, color: CYAN }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {[
            { h: "Platform", l: ["AI Suite", "AIMS", "Insights", "API"] },
            { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
            { h: "Resources", l: ["Docs", "Changelog", "Status", "Security"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">{col.h}</div>
              <ul className="space-y-2">
                {col.l.map((li) => (
                  <li key={li}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">{li}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row">
          <div>© 2026 Quorbit Labs, Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- ROOT -------------------- */
/* -------------------- SCROLL PROGRESS -------------------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(90deg, ${CYAN}, ${CORAL})`,
        boxShadow: `0 0 12px ${CYAN}`,
      }}
    />
  );
}

/* -------------------- CURSOR SPOTLIGHT -------------------- */
function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55]"
      animate={{
        background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(0,240,255,0.08), transparent 60%)`,
      }}
      transition={{ type: "tween", duration: 0.18, ease: "linear" }}
    />
  );
}

/* -------------------- GRAIN OVERLAY -------------------- */
function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[45] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

function QuorbitLanding() {
  return (
    <div
      className="quorbit-root relative min-h-screen overflow-x-hidden text-white antialiased"
      style={{
        background: `linear-gradient(180deg, #030712 0%, #0B132B 50%, #030712 100%)`,
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <ScrollProgress />
      <CursorSpotlight />
      <GrainOverlay />
      <Navbar />
      <Hero />
      <ProductSuite />
      <Projects />
      <WhyUs />
      <ContactFooter />
    </div>
  );
}
