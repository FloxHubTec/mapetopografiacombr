import campoRtk from "@/assets/team/campo-rtk.jpg";
import campoTripe from "@/assets/team/campo-tripe.jpg";
import campoDrone from "@/assets/team/campo-drone.jpg";

const EquipeCampo = () => {
  const images = [
    {
      src: campoRtk,
      alt: "Profissional MAPE utilizando equipamento RTK GNSS Trimble",
      caption: "Levantamento com RTK GNSS",
    },
    {
      src: campoTripe,
      alt: "Profissional MAPE operando estação total em campo",
      caption: "Precisão em cada medição",
    },
    {
      src: campoDrone,
      alt: "Profissional MAPE operando drone para mapeamento aéreo",
      caption: "Tecnologia em aerofotogrametria",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Nossa Equipe
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Profissionais em{" "}
            <span className="text-primary">Campo</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Comprometimento e expertise em cada projeto, utilizando equipamentos de última geração 
            para garantir a máxima precisão nos levantamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-card card-hover"
            >
              <div className="aspect-[3/4]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-heading font-semibold">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeCampo;
