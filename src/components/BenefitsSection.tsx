import { Clock, MapPin, CreditCard, Shield, CheckCircle, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Assessoria Jurídica Especializada",
    description: "Atuação focada em direito bancário e do consumidor",
    highlight: "Expertise específica"
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Atendo clientes em todo o Brasil",
    highlight: "Sem limitações geográficas"
  },
  {
    icon: Clock,
    title: "Consultoria Profissional",
    description: "Análise personalizada de cada caso",
    highlight: "Atenção dedicada"
  },
  {
    icon: Users,
    title: "Acompanhamento Processual",
    description: "Acompanhamento durante todo o processo",
    highlight: "Transparência total"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-5 mb-10">
      <div className="container mx-auto px-3">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-primary mb-4">
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-black-100">
            consultoria jurídica especializada em desbloqueio de contas e outras questões bancárias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border"
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