import SiteInteractions from "@/components/SiteInteractions";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import WhoForSection from "@/components/WhoForSection";
import PullQuote from "@/components/PullQuote";
import HowItWorksSection from "@/components/HowItWorksSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import FaqSection from "@/components/FaqSection";
import ClosingSection from "@/components/ClosingSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      {/* TODO: remover essa faixa quando as fotos finais entrarem e o site for para produção */}
      <div className="draft-tag">RASCUNHO · fotos em alta resolução pendentes</div>

      <SiteInteractions />
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <main>
        <AboutSection />
        <WhoForSection />
        <PullQuote text="Um compromisso com o seu bem-estar." />
        <HowItWorksSection />
        <PullQuote text="Um caminho mais leve começa aqui." alt />
        <AvailabilitySection />
        <FaqSection />
        <ClosingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
