import { Target, Eye, Heart } from "lucide-react";

const MissaoVisaoValores = () => {
  const valores = [
    "Precisão e Qualidade",
    "Transparência e Ética",
    "Compromisso com Prazos",
    "Inovação",
    "Responsabilidade Socioambiental",
    "Valorização das Pessoas",
  ];

  return (
    <section id="missao" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Institucional
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Missão, Visão e Valores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Missão */}
          <div className="p-8 bg-background rounded-2xl shadow-card">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Entregar soluções em topografia com precisão, qualidade e agilidade, 
              garantindo aos clientes a base técnica necessária para decisões seguras 
              em projetos de engenharia, construção e planejamento territorial.
            </p>
          </div>

          {/* Visão */}
          <div className="p-8 bg-background rounded-2xl shadow-card">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em serviços de topografia, reconhecida pela excelência técnica, 
              inovação, uso de tecnologias avançadas e pela relação transparente com 
              clientes e parceiros.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="p-8 bg-background rounded-2xl shadow-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Valores
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {valores.map((valor) => (
              <div
                key={valor}
                className="flex items-center gap-3 p-4 bg-muted rounded-xl"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground font-medium">{valor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValores;
