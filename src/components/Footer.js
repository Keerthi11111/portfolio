import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-b from-[#355f6d] to-[#0f1b2d] text-white pt-24 pb-8"
    >
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#67d5eb"
            fillOpacity="0.25"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
          />
          <path
            fill="#00bcd4"
            fillOpacity="0.35"
            d="M0,80L80,90C160,101,320,123,480,122.7C640,123,800,101,960,90.7C1120,80,1280,80,1360,80L1440,80L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <h2 className="text-xl font-semibold mb-3">
          Keerthi Rao
        </h2>
        <div className="text-sm text-white/80 space-y-1 mb-6">
          <p>Email: keerthirao2001@gmail.com</p>
          <p>Phone: +91 6361875024</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-6">
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</button>
          <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}>Experience</button>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        </nav>
        <div className="flex flex-col items-center mb-5 gap-3">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/keerthi-rao-3457511a5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 p-2 rounded-md hover:border-[#00bcd4] hover:text-[#00bcd4] transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com/Keerthi11111"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 p-2 rounded-md hover:border-[#00bcd4] hover:text-[#00bcd4] transition"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
        <p className="text-xs text-white/50">
          © 2026 Keerthi Rao. All rights reserved.
        </p>
      </div>
    </footer >
  );
}
