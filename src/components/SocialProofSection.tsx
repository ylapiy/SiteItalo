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
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Conheça-nos</h2>
          
        </div>

        <div className="text-center mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Sobre o Advogado</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Advogado inscrito na OAB/PI sob nº 25.603, com formação jurídica e atuação especializada em 
              direito bancário e do consumidor. Experiência em sistemas processuais eletrônicos e elaboração 
              de peças técnicas fundamentadas. Atendimento focado na análise detalhada de cada caso e na 
              busca pela melhor estratégia jurídica para cada situação.
            </p>
            <a href="https://www.instagram.com/adv.italo.bezerra/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              📱 Conteúdo educativo sobre seus direitos
            </a>
          </div>
        </div>

      </div>
    </section>;
}