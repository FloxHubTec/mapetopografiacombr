import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay-gradient" />

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="animate-fade-up opacity-0 text-gold font-heading font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            Precisão • Qualidade • Agilidade
          </p>

          <h1 className="animate-fade-up opacity-0 delay-100 text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Soluções em
            <span className="block text-gradient mt-2">Topografia</span>
          </h1>

          <p className="animate-fade-up opacity-0 delay-200 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Serviços topográficos com tecnologia de ponta e equipe altamente qualificada. 
            Da fase inicial até a conclusão do seu projeto.
          </p>

          <div className="animate-fade-up opacity-0 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5581981829776"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-gradient text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300 btn-glow animate-pulse-glow"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
