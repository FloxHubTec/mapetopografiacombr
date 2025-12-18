import { Shield, CheckCircle } from "lucide-react";

const Credibilidade = () => {
  return (
    <section id="credibilidade" className="section-padding bg-hero-gradient text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Confiança e Credibilidade
          </h2>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-primary-foreground/60 text-sm font-heading uppercase tracking-wider mb-2">
              CREA da Empresa
            </p>
            <p className="text-4xl md:text-5xl font-heading font-bold mb-4">
              0000782513-PE
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <CheckCircle className="w-5 h-5" />
              <span>Registro válido e ativo</span>
            </div>
          </div>

          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Empresa devidamente registrada e habilitada junto ao CREA, atuando conforme 
            as normas técnicas e legais vigentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credibilidade;
