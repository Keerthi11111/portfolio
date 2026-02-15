import { motion } from "framer-motion";

const skills = [
  "React JS", "React Native", "Angular", "JavaScript",
  "HTML", "CSS", "MySQL", "C"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-24 
                 bg-gradient-to-b
        from-[#2f4f5f]
        via-[#274754]
        to-[#1c3642]"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white
              p-4 rounded-xl text-center
              hover:scale-105 hover:bg-white/20
              transition
            "
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
