
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 w-full z-50 border-b transition-colors duration-300 " +
        (isScrolled
          ? "backdrop-blur-sm bg-slate-900/95 border-slate-800"
          : "backdrop-blur-sm bg-slate-900/60 border-slate-800/60")
      }
    >
      <div className="container mx-auto px-4">
        <div
          className={
            "flex justify-between items-center transition-all duration-300 " +
            (isScrolled ? "py-2.5 md:py-3" : "py-4 md:py-5")
          }
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Flaschnerei Olaf Just Logo"
              className={(isScrolled ? "h-10" : "h-12 md:h-14") + " w-auto rounded-sm shadow-sm group-hover:shadow transition-all duration-300"}
            />
            <div className="flex flex-col">
              <span
                className={
                  (isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl") +
                  " heading-secondary text-orange-600 font-semibold tracking-tight transition-all duration-300"
                }
              >
                Flaschnerei Olaf Just
              </span>
              <span className="text-xs text-white/90">Meisterbetrieb seit 1998</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+4917182751441"
              className="flex items-center gap-2 text-white/90 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span className="text-sm">+49 171 8275144</span>
            </a>
            <a
              href="mailto:info@flaschnerei-just.de"
              className="flex items-center gap-2 text-white/90 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-orange-600" />
              <span className="text-sm">info@flaschnerei-just.de</span>
            </a>
          </div>
          <div className="md:hidden">
            {isScrolled && (
              <button
                onClick={scrollToContact}
                aria-label="Zum Kontaktbereich springen"
                className="flex items-center gap-2 rounded-full bg-orange-600 text-white px-3 py-2 text-sm shadow hover:bg-orange-700 active:bg-orange-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Kontakt</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
