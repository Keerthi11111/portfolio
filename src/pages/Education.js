import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering – Information Science and Engineering",
    institute: "Yenepoya Institute of Technology, Moodbidri",
    year: "2019 – 2023",
    score: "CGPA: 8.26 / 10",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
         relative py-16 px-6 md:px-20
        bg-gradient-to-b
        from-[#2f4f5f]
        via-[#274754]
        to-[#1c3642]
        text-white
        overflow-hidden
      "
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#67d5eb]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-96 h-96 bg-[#00bcd4]/15 rounded-full blur-3xl" />

      <div className="relative text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Education
        </h2>
      </div>
      <div className="relative max-w-3xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl text-center"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#67d5eb]">
              {edu.degree}
            </h3>
            <p className="text-white/80 mt-2 text-sm md:text-base">
              {edu.institute}
            </p>
            <p className="text-white/60 text-xs md:text-sm mt-1">
              {edu.year}
            </p>
            <p className="mt-4 text-sm font-medium text-[#00bcd4]">
              {edu.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
