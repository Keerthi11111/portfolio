import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Footer", id: "footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = "home";

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          current = links[i].id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = "footer";
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#2f4f5f] border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-semibold text-white">
          Keerthi Rao
        </h1>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative ${active === l.id
                ? "text-[#00bcd4]"
                : "text-white hover:text-[#00bcd4]"
                }`}
            >
              {l.name}
              {active === l.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00bcd4]" />
              )}
            </button>
          ))}
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={18} />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-[#2f4f5f] border-t border-white/10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`block w-full text-left text-sm ${active === l.id
                ? "text-[#00bcd4]"
                : "text-white hover:text-[#00bcd4]"
                }`}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
