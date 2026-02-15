import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-10 px-6 md:px-20
        bg-gradient-to-b
        from-[#2f4f5f]
        via-[#274754]
        to-[#1c3642]
        text-white
        overflow-hidden
      "
    >
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#67d5eb]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00bcd4]/15 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative max-w-4xl mx-auto
          bg-white/10 backdrop-blur-lg
          p-8 md:p-10
          rounded-3xl
          border border-white/20
          shadow-xl
        "
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          About <span className="text-[#00bcd4]">Me</span>
        </h2>

        <p className="text-white/80 leading-7 text-sm md:text-base">
          I’m a Software Engineer with 2+ years of experience building
          production-ready web and mobile applications. I focus on clean UI,
          performance, and scalable architecture.
          <br /><br />
          I have hands-on experience working with modern JavaScript frameworks,
          building reusable components, and integrating REST APIs to deliver
          seamless user experiences.
          <br /><br />
          I’m passionate about continuous learning, improving system design,
          and collaborating with cross-functional teams to build reliable,
          user-focused products.
        </p>
      </motion.div>
    </section>
  );
}
