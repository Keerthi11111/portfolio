import { motion } from "framer-motion";
import Profile from "../asset/image/keerthi.jpg";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-20 bg-[#2f4f5f]"
    >
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#67d5eb]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00bcd4]/15 rounded-full blur-3xl" />
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m <span className="text-[#67d5eb]">Keerthi Rao</span>
          </h1>

          <p className="mt-6 text-white/80 max-w-xl">
            Software Engineer crafting modern, scalable web and mobile
            applications using React, React Native, and Angular with a
            strong focus on clean UI and performance.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="bg-[#00bcd4] text-[#2f4f5f] px-6 py-3 rounded-xl font-medium hover:bg-[#67d5eb]"
            >
              View Projects
            </button>

            <a
              href="https://drive.google.com/file/d/1iHOREMrkSrTiqTHeGL3T39-P_g9dDqY2/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#67d5eb] text-[#67d5eb] px-6 py-3 rounded-xl hover:bg-[#67d5eb] hover:text-[#2f4f5f]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div className="absolute w-72 h-72 bg-[#00bcd4]/20 rounded-full blur-2xl" />

          <img
            src={Profile}
            alt="Keerthi Rao"
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
