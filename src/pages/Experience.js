import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Engineer Grade-II (SE-II)",
    company: "Synterra IT Solution Pvt. Ltd.",
    period: "Feb 2025 – Present",
    details: [
      "Develop and maintain web application features using React.js and Angular",
      "Build reusable UI components, responsive layouts, dashboards, and data-driven interfaces",
      "Integrate REST APIs and handle application state, data rendering, loading states, and error scenarios",
      "Contribute to the Valura application, including REST API implementation and feature development",
      "Work on the SprintVC Admin and Investor Dashboard, supporting reporting workflows and administrative functionality",
      "Troubleshoot defects and improve application usability, reliability, and performance",
      "Use AI coding assistants to investigate bugs, understand existing codebases, and explore implementation approaches",
    ],
  },
  {
    role: "Software Developer",
    company: "Bermer Software, Brahmavara",
    period: "Jun 2023 – Jan 2025",
    details: [
      "Developed web and mobile application features using React.js and React Native",
      "Built matrimonial, logistics, and booking applications with reusable UI components and responsive screens",
      "Integrated REST APIs to support data-driven interfaces and user workflows",
      "Worked on feature development, debugging, UI improvements, and testing",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20
                  bg-gradient-to-b
        from-[#2f4f5f]
        via-[#274754]
        to-[#1c3642]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-14 text-white">
          Work <span className="text-[#00bcd4]">Experience</span>
        </h2>

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                bg-white/10 backdrop-blur-lg
                border border-white/20
                p-8 rounded-3xl
                hover:bg-white/15 hover:shadow-2xl
                transition
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-[#00bcd4] font-medium">
                {item.company}
              </p>

              <p className="text-sm text-white/60 mb-4">
                {item.period}
              </p>

              <ul className="list-disc pl-5 text-white/80 space-y-2">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
