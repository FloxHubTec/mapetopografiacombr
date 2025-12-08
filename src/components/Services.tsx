import { 
  Map, 
  Landmark, 
  Globe, 
  FileText, 
  Factory, 
  Ruler 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Map,
      title: "Levantamento Topográfico",
      items: ["Planimétrico", "Planialtimétrico", "Altimétrico", "Nivelamentos"],
    },
    {
      icon: Landmark,
      title: "Divisão de Propriedades",
      items: ["Retificação de áreas", "Demarcação de divisas", "Desmembramento", "Remembramento"],
    },
    {
      icon: Globe,
      title: "Georreferenciamento",
      items: ["Imóveis rurais", "Certificação INCRA", "Memorial descritivo", "ART"],
    },
    {
      icon: FileText,
      title: "Projetos",
      items: ["Loteamento urbano", "Terraplenagem", "Cubagem (corte e aterro)", "Drenagem"],
    },
    {
      icon: Factory,
      title: "Topografia Industrial",
      items: ["Locação industrial", "Nivelamento de máquinas", "As-built", "Cálculo volumétrico"],
    },
    {
      icon: Ruler,
      title: "Auditoria e Fiscalização",
      items: ["Acompanhamento de obras", "Usucapião", "Laudos técnicos", "Consultoria"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Nossos Serviços
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Soluções completas em
            <span className="text-primary"> topografia</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Oferecemos serviços topográficos com precisão, qualidade e agilidade, 
            possibilitando gestão completa do seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-muted rounded-2xl overflow-hidden card-hover"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
