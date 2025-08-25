import { Scale, MapPin, Phone, Mail, Shield } from "lucide-react";
export default function FooterSection() {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-3 rounded-full">
                <Scale className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Italo Bezerra Advocacia</h3>
                <p className="text-blue-200 text-sm">Especialistas em Direito Bancário</p>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Escritório especializado em conflitos bancários e demandas com o consumidor. 
              Atuamos em todo território nacional com foco em resultados rápidos e eficientes 
              para nossos clientes.
            </p>

            {/* Selo OAB */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="font-semibold">OAB/PI 25.603</p>
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
              <li>• Indenização por negativação indevida</li>
              <li>• Revisão de financiamento de veículo</li>
              <li>• Renegociação de dívidas bancárias empresariais</li>
              <li>• Revisão de cartão de crédito e cheque especial</li>
              <li>• Revisional de Contratos</li>
              <li>• Dentre outros.</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">(86) 99976-5214</p>
                  <p className="text-sm text-blue-200">Atendimento em horário comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">silvaadvitalo@gmail.com</p>
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

            <button onClick={handleWhatsAppClick} className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
              🔓 Quero falar com um advogado
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
            <p className="text-blue-200 text-sm">© 2025 Italo Bezerra Advocacia. Todos os direitos reservados.</p>
            <p className="text-blue-300 text-xs mt-1">Desenvolvido para resultados •</p>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="bg-white/5 rounded-lg p-4 mt-8 border border-white/10">
          <p className="text-xs text-blue-200 text-center">
            <strong>Aviso Legal:</strong> Este site tem caráter informativo. 
            O resultado depende das circunstâncias do caso. Não garantimos resultado específico.
          </p>
        </div>
      </div>
    </footer>;
}