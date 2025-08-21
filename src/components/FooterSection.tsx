import { Scale, MapPin, Phone, Mail, Shield } from "lucide-react";

export default function FooterSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre desbloqueio SISBAJUD.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-3 rounded-full">
                <Scale className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SISBAJUD Advogados</h3>
                <p className="text-blue-200 text-sm">Especialistas em Direito Bancário</p>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Escritório especializado em desbloqueio de contas bancárias pelo sistema SISBAJUD. 
              Atuamos em todo território nacional com foco em resultados rápidos e eficientes 
              para nossos clientes.
            </p>

            {/* Selo OAB */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">OAB/SP 123.456</p>
                  <p className="text-sm text-blue-200">Registro ativo na Ordem dos Advogados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-xl font-bold mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3 text-blue-100">
              <li>• Desbloqueio SISBAJUD</li>
              <li>• Direito Bancário</li>
              <li>• Execuções Judiciais</li>
              <li>• Impenhorabilidade</li>
              <li>• Defesa do Consumidor</li>
              <li>• Revisional de Contratos</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">(11) 99999-9999</p>
                  <p className="text-sm text-blue-200">WhatsApp 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">contato@sisbajudadvogados.com</p>
                  <p className="text-sm text-blue-200">E-mail principal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Atendimento Online</p>
                  <p className="text-sm text-blue-200">Todo o Brasil</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              💬 Falar no WhatsApp
            </button>
          </div>
        </div>

        <hr className="border-white/20 my-12" />

        {/* Rodapé Inferior */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="text-blue-100">
            <p className="font-semibold mb-2">
              Atendimento online em todo o Brasil | Especialista em Direito Bancário
            </p>
            <p className="text-sm">
              Seguimos rigorosamente o Código de Ética da OAB - Advocacia responsável e transparente
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-blue-200 text-sm">
              © 2024 SISBAJUD Advogados. Todos os direitos reservados.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Desenvolvido para resultados • Especialistas desde 2015
            </p>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="bg-white/5 rounded-lg p-4 mt-8 border border-white/10">
          <p className="text-xs text-blue-200 text-center">
            <strong>Aviso Legal:</strong> Este site tem caráter meramente informativo. 
            O resultado dos serviços prestados dependerá sempre das circunstâncias específicas de cada caso. 
            Não garantimos resultado específico. Valores mencionados são meramente ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}