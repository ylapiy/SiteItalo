import { Clock, MapPin, CreditCard, Shield, CheckCircle, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta em até 30 minutos, 24h por dia",
    highlight: "Urgência garantida"
  },
  {
    icon: MapPin,
    title: "Atuação Nacional",
    description: "Atendemos clientes em todo o Brasil",
    highlight: "Sem limitações geográficas"
  },
  {
    icon: CreditCard,
    title: "Honorários Acessíveis",
    description: "Parcelamento facilitado e sem juros",
    highlight: "Condições especiais"
  },
  {
    icon: Shield,
    title: "Experiência Comprovada",
    description: "Especialistas em Direito Bancário",
    highlight: "Anos de expertise"
  },
  {
    icon: CheckCircle,
    title: "Alta Taxa de Sucesso",
    description: "95% de êxito nos casos atendidos",
    highlight: "Resultados garantidos"
  },
  {
    icon: Users,
    title: "Suporte Personalizado",
    description: "Acompanhamento durante todo o processo",
    highlight: "Atenção individual"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos o melhor atendimento jurídico especializado em desbloqueio de contas bancárias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {benefit.description}
                    </p>
                    <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}