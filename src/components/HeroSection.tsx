import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock } from "lucide-react";
export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };
  return <section className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/bc4f4b76-f45c-4750-ba91-5d1a4fb60d86.png" 
          alt="Banco lotado - Pessoas enfrentando problemas bancários" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Conta bloqueada pelo 
                <span className="text-yellow-400 block">SISBAJUD?</span>
                <span className="text-2xl sm:text-3xl md:text-4xl block mt-2">Saiba o motivo e como recuperar!</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl">
                Atendimento em todo o Brasil com <strong>respostas rápidas</strong>
              </p>
            </div>

            {/* Subtítulo com autoridade */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <p className="text-base md:text-lg font-medium text-blue-100">
                ⚖️ Atendimento rápido em todo o Brasil
              </p>
              <p className="text-blue-200 mt-2 text-sm md:text-base">
                Com um advogado competente, você pode <strong>recuperar o seu dinheiro!</strong>
              </p>
            </div>

            {/* Benefícios principais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs md:text-sm">Resposta em</p>
                  <p className="text-yellow-400 font-bold text-sm md:text-base">30 minutos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs md:text-sm">Todo o</p>
                  <p className="text-green-400 font-bold text-sm md:text-base">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm">
                <Phone className="h-6 w-6 md:h-8 md:w-8 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs md:text-sm">Atendimento</p>
                  <p className="text-blue-300 font-bold text-sm md:text-base">Facilitado</p>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-3 md:space-y-4">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 md:py-6 px-8 md:px-12 text-lg md:text-xl shadow-cta transition-all duration-300 transform hover:scale-105"
              >
                🔓 Quero falar com um advogado
              </Button>
              <p className="text-xs md:text-sm text-blue-200">
                💬 Respondemos rapidamente
              </p>
            </div>
          </div>

          {/* Right Column - Visual representation */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-md">
              <div className="text-center space-y-4">
                <div className="bg-yellow-400/20 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <Shield className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Proteção Legal</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Sua conta foi bloqueada? Entenda seus direitos e saiba como podemos ajudar na liberação dos recursos.
                </p>
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
    </section>;
}