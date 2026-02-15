import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = {
  Web: [
    { title: "Karavali Karimani", description: "A full-featured matrimonial web platform built using React JS, focusing on performance, scalability, and user-friendly design.", tech: ["React JS", "JavaScript", "CSS", "REST APIs"], highlights: ["User profile creation & management", "Advanced search & filter functionality", "Secure messaging between users",], },
    { title: "Niyantha Dashboard", description: "A transportation management dashboard for tracking product and goods movement across multiple locations.", tech: ["React JS", "Charts", "API Integration"], highlights: ["Real-time tracking and reporting", "Responsive admin dashboard UI", "Optimized performance for large datasets",], },
    { title: "SprintVC – Admin Dashboards", description: "Enterprise-level web dashboards developed using React.js for managing admin operations with a strong focus on performance and usability.", tech: ["React.js", "State Management", "REST APIs", "UI/UX Optimization"], highlights: ["Developed and optimized React.js components for SprintVC admin platforms", "Implemented state management and API integrations for seamless navigation and functionality"], },
  ],
  Mobile: [{ title: "Niyantha Driver App", description: "A cross-platform mobile application enabling seamless communication between drivers and logistics teams.", tech: ["React Native", "GPS", "Push Notifications"], highlights: ["Real-time GPS tracking", "Instant push notifications", "Android & iOS compatibility",], }, { title: "Book My Salon", description: "A mobile booking application that allows users to schedule salon appointments with integrated payments.", tech: ["React Native", "Payments", "Mobile UI"], highlights: ["Appointment scheduling system", "Secure payment integration", "User profile & booking history",], },], Angular: [{ title: "Valura Application", description: "An enterprise-level Angular application focused on clean architecture, scalable UI, and maintainable code.", tech: ["Angular", "TypeScript", "RxJS"], highlights: ["Modular component architecture", "Form validations & API handling", "Enterprise UI standards",], },],
};

export default function Projects() {
  const [tab, setTab] = useState("Web");

  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-24 bg-gradient-to-b
        from-[#2f4f5f]
        via-[#274754]
        to-[#1c3642]">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(projects).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-full text-sm transition
              ${tab === t
                ? "bg-indigo-500 text-white"
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
                    className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full"
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
