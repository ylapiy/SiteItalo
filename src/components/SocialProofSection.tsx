import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Maria Silva",
  location: "São Paulo - SP",
  text: "Minha conta foi desbloqueada em apenas 3 dias! Atendimento excepcional e muito profissional.",
  rating: 5,
  case: "Conta liberada em 3 dias"
}, {
  name: "João Santos",
  location: "Rio de Janeiro - RJ",
  text: "Estava desesperado com a conta bloqueada. O Dr. resolveu tudo rapidamente e com muito profissionalismo.",
  rating: 5,
  case: "Processo resolvido com êxito"
}, {
  name: "Ana Costa",
  location: "Belo Horizonte - MG",
  text: "Recomendo a todos! Conseguiram desbloquear minha conta quando outros advogados disseram que seria impossível.",
  rating: 5,
  case: "Caso complexo solucionado"
}];
export default function SocialProofSection() {
  return <section className="py-20 w-full h-screen bg-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-primary mb-6">Sobre o Advogado</h2>
                <h3 className="text-2xl font-semibold text-primary mb-4">Italo Bezerra</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Advogado inscrito na OAB/PI sob nº 25.603, com formação jurídica sólida e atuação especializada em 
                  direito bancário e do consumidor. Possuo ampla experiência em sistemas processuais eletrônicos e elaboração 
                  de peças técnicas fundamentadas.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Minha consultoria é focada na análise detalhada de cada caso e na 
                  busca pela melhor estratégia jurídica para cada situação específica. Trabalho com transparência 
                  e dedicação para oferecer o melhor suporte aos meus clientes.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  Especializo-me em questões envolvendo bloqueios bancários, SISBAJUD, direitos do consumidor 
                  e demais questões relacionadas ao sistema financeiro nacional.
                </p>
                <div>
            <h4 className="text-xl font-bold mb-6">Áreas de Atuação</h4>
              <ul className="space-y-3 text-black-100">
              <li>• Desbloqueio SISBAJUD</li>
              <li>• Indenização por negativação indevida</li>
              <li>• Revisão de financiamento de veículo</li>
              <li>• Renegociação de dívidas bancárias empresariais</li>
              <li>• Revisão de cartão de crédito e cheque especial</li>
              <li>• Revisional de Contratos</li>
              <li>• Dentre outros.</li>
              <li></li>
              </ul>
            </div>
                
                <a href="https://www.instagram.com/adv.italo.bezerra/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Aprenda mais sobre seus direitos
                </a>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/26d6ebd5-af38-4550-91ed-4cf6be5c46be.png" 
                    alt="Italo Bezerra - Advogado especialista em direito bancário" 
                    className="w-80 h-110 object-cover rounded-lg shadow-elegant"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                    OAB/PI 25.603
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
}