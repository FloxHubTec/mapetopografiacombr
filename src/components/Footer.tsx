import { Instagram, MessageCircle } from "lucide-react";
import logoMape from "@/assets/logo-mape.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logoMape}
              alt="Mape Topografia"
              className="h-16 w-auto rounded-md mb-6"
            />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Empresa especializada em serviços de topografia, oferecendo soluções 
              completas com precisão, qualidade e agilidade para seu projeto.
            </p>
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5581981829776"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mapetopografia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#servicos", label: "Serviços" },
                { href: "#equipamentos", label: "Equipamentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Levantamento Topográfico",
                "Georreferenciamento",
                "Divisão de Propriedades",
                "Topografia Industrial",
                "Projetos & Consultoria",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Mape Topografia Ltda. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              CREA: PE-47766 | CNPJ: 40.158.244/0001-11
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
