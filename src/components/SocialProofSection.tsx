import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo - SP",
    text: "Minha conta foi desbloqueada em apenas 3 dias! Atendimento excepcional e muito profissional.",
    rating: 5,
    case: "Conta liberada em 3 dias"
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro - RJ", 
    text: "Estava desesperado com a conta bloqueada. O Dr. resolveu tudo rapidamente e com muito profissionalismo.",
    rating: 5,
    case: "Processo resolvido com êxito"
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte - MG",
    text: "Recomendo a todos! Conseguiram desbloquear minha conta quando outros advogados disseram que seria impossível.",
    rating: 5,
    case: "Caso complexo solucionado"
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos reais de quem recuperou o acesso às suas contas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-card border border-border relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm bg-success/10 text-success px-2 py-1 rounded mt-2 inline-block">
                    ✅ {testimonial.case}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Case de Sucesso */}
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">📋 Caso de Sucesso em Destaque</h3>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg mb-4">
                <strong>Cliente empresário de SP</strong> teve sua conta com R$ 150.000 bloqueada pelo SISBAJUD
              </p>
              <p className="text-xl font-semibold text-yellow-300">
                ⚡ Resultado: Conta liberada em apenas 5 dias úteis
              </p>
              <p className="text-blue-200 mt-2">
                "Pensava que tinha perdido tudo. Hoje meu negócio está funcionando normalmente novamente!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}