import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import EducationalSection from "@/components/EducationalSection";
import ProcessStepsSection from "@/components/ProcessStepsSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags would go in the head - handled by the HTML file */}
      
      <main>
        {/* Hero Section - Atenção (AIDA) */}
        <HeroSection />
        
        {/* Benefits Section - Interesse (AIDA) */}
        <BenefitsSection />
        
        {/* Social Proof - Desejo (AIDA) */}
        <SocialProofSection />
        
        {/* Educational Content - Autoridade + SEO */}
        <EducationalSection />
        
        {/* Process Steps - Transparência */}
        <ProcessStepsSection />
        
        {/* Contact Form - Ação (AIDA) */}
        <ContactFormSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;