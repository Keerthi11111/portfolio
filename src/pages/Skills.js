import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Next.js API Routes", "REST APIs", "CRUD Operations"],
  },
  {
    title: "Database & ORM",
    skills: ["PostgreSQL", "SQL", "Prisma ORM", "Neon PostgreSQL"],
  },
  {
    title: "Auth & State",
    skills: ["JWT", "Protected Routes", "Cookie-Based Auth", "React Hooks", "Context API"],
  },
  {
    title: "AI Integration",
    skills: ["Google GenAI SDK (Gemini)", "AI Chat Assistants", "Prompt Engineering", "Context-Aware Prompting"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Claude", "ChatGPT", "GitHub Copilot"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-24
                 bg-gradient-to-b
        from-[#1c3642]
        via-[#274754]
        to-[#2f4f5f]"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Skills
      </h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white
              p-6 rounded-2xl
              hover:bg-white/15
              transition
            "
          >
            <h3 className="text-lg font-semibold text-[#67d5eb] mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-[#00bcd4]/15 text-[#a5ecf7] border border-[#00bcd4]/30 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
