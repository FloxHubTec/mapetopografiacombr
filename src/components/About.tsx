import { Award, Target, Users, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precisão",
      description: "Equipamentos de última geração para máxima exatidão nos levantamentos.",
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Corpo técnico altamente qualificado e em constante atualização.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Comprometimento com excelência em cada projeto executado.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "CREA: PE-47766. Empresa devidamente registrada e habilitada.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
              Sobre Nós
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Excelência em
              <span className="text-primary block">Topografia desde sempre</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Mape é uma empresa com experiência consolidada em serviços de topografia, 
              formada por um corpo técnico altamente qualificado que investe constantemente 
              em conhecimento, tecnologia e equipamentos de ponta.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Representada pelo engenheiro agrônomo <strong className="text-foreground">Pedro Lira</strong>, 
              formado na UFRPE e pós-graduado em Georreferenciamento de Imóveis Rurais, 
              operando os softwares AutoCAD, AutoCAD Civil 3D, Topograph e QGIS.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 bg-background rounded-lg shadow-card">
                <p className="text-2xl font-heading font-bold text-primary">CREA</p>
                <p className="text-sm text-muted-foreground">PE-47766</p>
              </div>
              <div className="px-5 py-3 bg-background rounded-lg shadow-card">
                <p className="text-2xl font-heading font-bold text-primary">CNPJ</p>
                <p className="text-sm text-muted-foreground">40.158.244/0001-11</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-background rounded-xl shadow-card card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
