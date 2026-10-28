import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const featured = {
  title: "AI-Powered Expense Management Application",
  description:
    "A full-stack expense manager with secure authentication, budgets, financial reports, and an AI chat assistant that answers natural-language questions about your spending.",
  tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT", "Google GenAI (Gemini)"],
  highlights: [
    "Registration, login, logout, and protected dashboard access with token-based authentication",
    "Transaction management, expense search, budget management, and financial reporting",
    "API routes backed by PostgreSQL through Prisma ORM",
    "Gemini-powered chat assistant that uses the user's expense and budget data as context for personalized insights",
    "Secure server-side AI route that keeps API keys private and restricts chat to authenticated users",
    "Responsive chat interface with message history, loading states, and error handling",
  ],
};

const projects = {
  Web: [
    { title: "SprintVC – Admin & Investor Dashboard", description: "Dashboards for administrative and investor workflows, built with React.js at Synterra.", tech: ["React.js", "JavaScript", "REST APIs", "State Management"], highlights: ["Reusable dashboard components and interfaces", "API integrations for application data and reporting", "UI enhancements, defect fixes, and usability improvements"], },
    { title: "UExcess Marketplace", description: "A marketplace web application with data-driven screens and reusable UI components.", tech: ["React.js", "JavaScript", "REST APIs"], highlights: ["Marketplace interfaces and reusable components", "API integration for data-driven screens", "Responsive layouts and bug fixes"], },
    { title: "Karavali Karimani", description: "A full-featured matrimonial web platform built using React JS, focusing on performance, scalability, and user-friendly design.", tech: ["React JS", "JavaScript", "CSS", "REST APIs"], highlights: ["User profile creation & management", "Advanced search & filter functionality", "Secure messaging between users",], },
    { title: "Niyantha Dashboard", description: "A transportation management dashboard for tracking product and goods movement across multiple locations.", tech: ["React JS", "Charts", "API Integration"], highlights: ["Real-time tracking and reporting", "Responsive admin dashboard UI", "Optimized performance for large datasets",], },
  ],
  Mobile: [{ title: "Niyantha Driver App", description: "A cross-platform mobile application enabling seamless communication between drivers and logistics teams.", tech: ["React Native", "GPS", "Push Notifications"], highlights: ["Real-time GPS tracking", "Instant push notifications", "Android & iOS compatibility",], }, { title: "Book My Salon", description: "A mobile booking application that allows users to schedule salon appointments with integrated payments.", tech: ["React Native", "Payments", "Mobile UI"], highlights: ["Appointment scheduling system", "Secure payment integration", "User profile & booking history",], },], Angular: [{ title: "Valura Application", description: "A business application built with Angular, including feature development and REST API implementation.", tech: ["Angular", "TypeScript", "REST APIs"], highlights: ["Features and REST API functionality based on business requirements", "Data handling, UI workflows, and API-connected screens", "Maintenance, debugging, and feature improvements",], },],
  Backend: [{ title: "Expense Sharing Application", description: "Backend service for splitting expenses between users, built with Java and Spring Boot.", tech: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"], highlights: ["REST endpoints for managing shared expenses", "Business logic for calculating individual shares", "Database operations to store and retrieve expense data"], },],
};

export default function Projects() {
  const [tab, setTab] = useState("Web");

  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-24 bg-gradient-to-b
        from-[#1c3642]
        via-[#274754]
        to-[#2f4f5f]">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16 bg-white/10 backdrop-blur-xl border border-[#00bcd4]/40
                   rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,188,212,0.15)]"
      >
        <div className="flex items-center gap-2 text-[#00bcd4] text-xs font-semibold uppercase tracking-wider mb-3">
          <FaRobot aria-hidden="true" /> Featured Project
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {featured.title}
        </h3>
        <p className="text-white/80 mb-5">
          {featured.description}
        </p>
        <div className="flex gap-2 mb-6 flex-wrap">
          {featured.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-[#00bcd4]/15 text-[#a5ecf7] border border-[#00bcd4]/30 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-white/70 text-sm list-disc pl-5">
          {featured.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </motion.div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(projects).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`px-6 py-2 rounded-full text-sm transition
              ${tab === t
                ? "bg-[#00bcd4] text-[#1c3642] font-medium"
                : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          {projects[tab].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
                   text-center flex flex-col items-center w-full sm:w-[320px]"
            >
              <div className="flex gap-2 mb-3 flex-wrap justify-center">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#00bcd4]/15 text-[#a5ecf7] px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {p.title}
              </h3>

              <p className="text-white/70 text-sm mb-4">
                {p.description}
              </p>

              <ul className="text-white/60 text-sm space-y-1">
                {p.highlights.map((h, idx) => (
                  <li key={idx}>• {h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
