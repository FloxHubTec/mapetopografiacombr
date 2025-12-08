import { Satellite, Focus, Gauge, Navigation } from "lucide-react";

const Equipment = () => {
  const equipment = [
    {
      icon: Focus,
      name: "Estação Total",
      description: "Equipamento de alta precisão para medições angulares e de distância.",
      specs: ["Precisão angular de alta qualidade", "Medição eletrônica de distâncias", "Compensador automático"],
    },
    {
      icon: Satellite,
      name: "RTK GNSS",
      description: "Receptor GNSS de alta precisão para posicionamento em tempo real.",
      specs: [
        "Precisão: ±(2mm + 2ppm x D)",
        "GPS, GLONASS, Galileo, BeiDou",
        "RTK em tempo real < 8mm",
      ],
    },
    {
      icon: Navigation,
      name: "Drones",
      description: "Aeronaves remotamente pilotadas para mapeamento aéreo.",
      specs: ["Fotogrametria de alta resolução", "Modelos 3D de terreno", "Ortomosaicos georreferenciados"],
    },
    {
      icon: Gauge,
      name: "Softwares",
      description: "Processamento e desenho técnico com as melhores ferramentas.",
      specs: ["AutoCAD", "AutoCAD Civil 3D", "Topograph & QGIS"],
    },
  ];

  return (
    <section id="equipamentos" className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-gold font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Tecnologia
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Equipamentos de
            <span className="text-gold"> última geração</span>
          </h2>

          <p className="text-primary-foreground/70 text-lg">
            Investimos constantemente em tecnologia para garantir a máxima 
            precisão em todos os nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div
              key={item.name}
              className="group p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-heading font-bold text-xl mb-3">
                {item.name}
              </h3>

              <p className="text-primary-foreground/60 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2 text-primary-foreground/80 text-xs"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
