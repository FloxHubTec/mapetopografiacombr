import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMape from "@/assets/logo-mape.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#equipamentos", label: "Equipamentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-nav">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 px-4 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoMape}
              alt="Mape Topografia"
              className="h-12 w-auto rounded-md"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading font-medium text-foreground/80 hover:text-primary transition-colors duration-300 text-sm tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/+5581981829776"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-button"
          >
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 font-heading font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors duration-300 text-sm tracking-wide uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <a
                  href="https://wa.me/+5581981829776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-full"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
