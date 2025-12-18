import { useEffect, useRef } from "react";
import basf from "@/assets/clients/basf.png";
import saoJose from "@/assets/clients/sao-jose.jpeg";
import maxxima from "@/assets/clients/maxxima.png";
import lotear from "@/assets/clients/lotear.jpeg";
import client1 from "@/assets/clients/client-1.jpeg";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.jpeg";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";

const Clientes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clientes = [
    { name: "BASF", logo: basf },
    { name: "São José Agroindustrial", logo: saoJose },
    { name: "Maxxima Empreendimentos", logo: maxxima },
    { name: "Lotear", logo: lotear },
    { name: "Cliente 1", logo: client1 },
    { name: "Cliente 2", logo: client2 },
    { name: "Cliente 3", logo: client3 },
    { name: "Cliente 4", logo: client4 },
    { name: "Cliente 5", logo: client5 },
    { name: "Cliente 6", logo: client6 },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      
      // Reset when we've scrolled half (since content is duplicated)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider rounded-full mb-6">
            Clientes
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Conheça quem confia na{" "}
            <span className="text-primary">MAPE</span>
          </h2>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate items for infinite scroll effect */}
          {[...clientes, ...clientes].map((cliente, index) => (
            <div
              key={`${cliente.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-6 bg-muted rounded-xl min-w-[200px] h-28"
            >
              <img
                src={cliente.logo}
                alt={cliente.name}
                className="max-h-16 max-w-[160px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
