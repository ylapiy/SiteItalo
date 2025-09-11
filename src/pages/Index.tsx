import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import EducationalSection from "@/components/EducationalSection";
import ProcessStepsSection from "@/components/ProcessStepsSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";
import StickyContactButtons from "@/components/StickyContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags would go in the head - handled by the HTML file */}
      
      <main>
        {/* Hero Section - Atenção (AIDA) */}
        <HeroSection />
        
        {/* Educational Content - Autoridade + SEO */}
          <ProcessStepsSection />

        <EducationalSection />

        <SocialProofSection />
        
        {/* Process Steps - Transparência */}
        
        {/* Contact Form - Ação (AIDA) */}
        <ContactFormSection />

        <StickyContactButtons />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;