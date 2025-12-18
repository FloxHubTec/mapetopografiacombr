import equipeImg from "@/assets/team/equipe.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Team Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={equipeImg}
                alt="Pedro Lira e Marina Lira - Engenheiros Agrônomos da MAPE Topografia"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <p className="font-heading font-bold text-lg">Pedro Lira & Marina Lira</p>
                <p className="text-primary-foreground/80 text-sm">Engenheiros Agrônomos - UFRPE</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>

          {/* Right Content - Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
              Sobre Nós
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Excelência em
              <span className="text-primary block">Topografia</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A MAPE é uma empresa com experiência consolidada em serviços de topografia, 
              formada por um corpo técnico altamente qualificado, que investe continuamente 
              em conhecimento, tecnologia e equipamentos de ponta.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A empresa é representada pelos engenheiros agrônomos <strong className="text-foreground">Pedro Lira</strong> e{" "}
              <strong className="text-foreground">Marina Lira</strong>, ambos formados pela UFRPE.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Pedro Lira é pós-graduado em Georreferenciamento de Imóveis Rurais. A equipe atua com os 
              softwares AutoCAD, AutoCAD Civil 3D, Topograph e QGIS, garantindo precisão técnica e 
              confiabilidade em todas as etapas dos projetos.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 bg-background rounded-lg shadow-card">
                <p className="text-2xl font-heading font-bold text-primary">CNPJ</p>
                <p className="text-sm text-muted-foreground">40.158.244/0001-11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
