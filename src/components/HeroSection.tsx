import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Advogado especialista em SISBAJUD" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Conta bloqueada pelo 
              <span className="text-yellow-400 block">SISBAJUD?</span>
              <span className="text-3xl md:text-4xl block mt-2">Entenda o bloqueio e as possibilidades jurídicas</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Assessoria jurídica especializada em todo o Brasil
            </p>
            </div>

            {/* Subtítulo com autoridade */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg font-medium text-blue-100">
                ⚖️ Advocacia especializada em direito bancário
              </p>
              <p className="text-blue-200 mt-2">
                Assessoria jurídica para <strong>buscar a liberação dos seus recursos</strong>
              </p>
            </div>

            {/* Benefícios principais */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Clock className="h-8 w-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Pronto</p>
                  <p className="text-yellow-400 font-bold">Atendimento</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Todo o</p>
                  <p className="text-green-400 font-bold">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Phone className="h-8 w-8 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Parcelamento</p>
                  <p className="text-blue-300 font-bold">Facilitado</p>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 text-xl shadow-cta transition-all duration-300 transform hover:scale-105"
              >
                🔓 Quero falar com um advogado
              </Button>
              <p className="text-sm text-blue-200">
                💬 Análise inicial do seu caso
              </p>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossa Expertise</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">Direito Bancário</div>
                  <div className="text-blue-200">Especialização em conflitos bancários</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Todo Brasil</div>
                  <div className="text-blue-200">Atuação nacional</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">OAB/PI</div>
                  <div className="text-blue-200">Registro ativo 25.603</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}