import basf from "@/assets/clients/basf.png";
import saoJose from "@/assets/clients/sao-jose.png";
import maxxima from "@/assets/clients/maxxima.png";
import moreiraLima from "@/assets/clients/moreira-lima.png";

const Clientes = () => {
  const clientes = [
    { name: "BASF", logo: basf },
    { name: "São José Agroindustrial", logo: saoJose },
    { name: "Maxxima Empreendimentos", logo: maxxima },
    { name: "Moreira Lima", logo: moreiraLima },
  ];

  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Parceiros
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Conheça quem confia na{" "}
            <span className="text-primary">MAPE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientes.map((cliente) => (
            <div
              key={cliente.name}
              className="flex items-center justify-center p-6 bg-muted rounded-xl hover:shadow-card transition-all duration-300"
            >
              <img
                src={cliente.logo}
                alt={cliente.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
