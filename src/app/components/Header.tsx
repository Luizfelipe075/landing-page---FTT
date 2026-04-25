import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/a32bd38f14dc9e70a50d93932734a44dbcfd181d.png";

const navItems = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Participantes", path: "/participantes" },
  { name: "Projetos", path: "/projetos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-[#8B1A2B]/10"
          : "bg-gray-900/60 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="FTT Logo"
              className="h-12 w-12 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="hidden md:block text-white">
              <div className="font-bold text-lg group-hover:text-[#8B1A2B] transition-colors">
                Fábrica de Tecnologias
              </div>
              <div className="text-sm opacity-90">Turing</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors group ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B1A2B] transform origin-left transition-transform duration-200 ${
                    location.pathname === item.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/participantes"
              className="bg-[#8B1A2B] hover:bg-[#6d1423] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Participe
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-white hover:text-[#8B1A2B] transition-colors py-2 ${
                    location.pathname === item.path
                      ? "text-[#8B1A2B] font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/participantes"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#8B1A2B] hover:bg-[#6d1423] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              >
                Participe
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}