import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering – Information Science",
    institute: "Yenepoya Institute of Technology, Moodbidre",
    year: "Jun 2019 – Jun 2023",
    score: "CGPA: 8.26",
  },
  {
    degree: "PUC – Science",
    institute: "Government PU College, Hiriadka, Udupi",
    year: "Jun 2017 – Mar 2019",
    score: "80%",
  },
  {
    degree: "SSLC",
    institute: "Government High School, Kukkujje, Karkala",
    year: "Jun 2016 – Apr 2017",
    score: "84%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
         relative py-10 px-6 md:px-20
        bg-gradient-to-b
        from-[#1c3642]
        via-[#274754]
        to-[#2f4f5f]
        text-white
        overflow-hidden
      "
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#67d5eb]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-96 h-96 bg-[#00bcd4]/15 rounded-full blur-3xl" />

      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Education
        </h2>
        <p className="text-white/70 mt-3 max-w-xl mx-auto text-sm md:text-base">
          My education has been a journey of learning, growth, and persistence.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/15 -translate-x-1/2" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-16 flex ${index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
          >
            <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#00bcd4] rounded-full -translate-x-1/2 shadow-[0_0_12px_#00bcd4]" />
            <div className="w-full md:w-[45%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-[#67d5eb]">
                {edu.degree}
              </h3>
              <p className="text-white/80 mt-2 text-sm">
                {edu.institute}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {edu.year}
              </p>
              <p className="mt-4 text-sm font-medium text-[#00bcd4]">
                {edu.score}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
