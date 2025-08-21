import { MessageCircle, FileSearch, Scale, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você explica sua situação",
    description: "Entre em contato via WhatsApp e nos conte detalhes sobre o bloqueio da sua conta",
    highlight: "Atendimento imediato"
  },
  {
    number: "02", 
    icon: FileSearch,
    title: "Analisamos os documentos",
    description: "Nossa equipe faz análise jurídica completa dos documentos e do processo que originou o bloqueio",
    highlight: "Análise especializada"
  },
  {
    number: "03",
    icon: Scale,
    title: "Entramos com a petição",
    description: "Elaboramos e protocolamos petição fundamentada no processo solicitando o desbloqueio",
    highlight: "Ação imediata"
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Você volta a ter acesso",
    description: "Acompanhamos até a liberação da conta e você volta a ter acesso aos seus recursos",
    highlight: "Problema resolvido"
  }
];

export default function ProcessStepsSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o processo de desbloqueio da minha conta pelo SISBAJUD.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como funciona nosso atendimento
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Processo simples e transparente para desbloquear sua conta bancária
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Conectores */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-white/30 transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    {/* Número */}
                    <div className="text-6xl font-bold text-yellow-400 opacity-20 absolute top-2 right-4">
                      {step.number}
                    </div>
                    
                    {/* Ícone */}
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para recuperar sua conta?
            </h3>
            <p className="text-blue-100 mb-6">
              Não perca mais tempo com sua conta bloqueada. Fale agora com nossos especialistas.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-cta transition-all duration-300 transform hover:scale-105"
            >
              🚀 Iniciar Atendimento Agora
            </button>
            <p className="text-sm text-yellow-300 mt-3">
              ⏱️ Primeira consulta: 100% gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}