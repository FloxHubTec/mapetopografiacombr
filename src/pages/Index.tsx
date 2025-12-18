import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credibilidade from "@/components/Credibilidade";
import MissaoVisaoValores from "@/components/MissaoVisaoValores";
import EquipeCampo from "@/components/EquipeCampo";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Clientes from "@/components/Clientes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Credibilidade />
      <MissaoVisaoValores />
      <EquipeCampo />
      <Services />
      <Equipment />
      <Clientes />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
