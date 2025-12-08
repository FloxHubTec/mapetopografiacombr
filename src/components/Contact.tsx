import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Padre Euclides Jardim - Afogados",
      subtitle: "Recife/PE",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(81) 98182-9776",
      subtitle: "WhatsApp disponível",
    },
    {
      icon: Mail,
      title: "CNPJ",
      content: "40.158.244/0001-11",
      subtitle: "Mape Topografia Ltda.",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Contato
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Vamos conversar sobre
            <span className="text-primary"> seu projeto?</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas. 
            Estamos prontos para atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=5581981829776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/mapetopografia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[hsl(330,80%,55%)] to-[hsl(25,90%,55%)] text-primary-foreground rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative p-8 md:p-12 bg-hero-gradient rounded-2xl text-primary-foreground overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Solicite seu orçamento
              </h3>

              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Entre em contato pelo WhatsApp para receber um orçamento personalizado 
                para o seu projeto. Resposta rápida e atendimento especializado.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Atendimento personalizado",
                  "Orçamento sem compromisso",
                  "Resposta em até 24h",
                  "Cobertura em todo Pernambuco",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://api.whatsapp.com/send?phone=5581981829776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
