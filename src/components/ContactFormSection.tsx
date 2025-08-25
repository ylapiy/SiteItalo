import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio - em produção, aqui seria feita a integração com backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });

    // Também redirecionar para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}. Preciso de ajuda com desbloqueio SISBAJUD. Telefone: ${formData.phone}`
    );
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
              Entre em contato conosco
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Preencha o formulário abaixo e receba atendimento personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Formulário */}
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Descreva sua situação
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte brevemente sobre o bloqueio da sua conta..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                >
                  📧 Enviar Mensagem
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  * Campos obrigatórios
                </p>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-primary text-primary-foreground p-6 md:p-8 rounded-xl shadow-elegant">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                  Atendimento Imediato
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white/20 p-2 md:p-3 rounded-full">
                      <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">WhatsApp</h4>
                      <p className="text-blue-100 text-sm md:text-base">(86) 99976-5214</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white/20 p-2 md:p-3 rounded-full">
                      <Mail className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">E-mail</h4>
                      <p className="text-blue-100 text-sm md:text-base">silvaadvitalo@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white/20 p-2 md:p-3 rounded-full">
                      <Clock className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">Horário de Atendimento</h4>
                      <p className="text-blue-100 text-sm md:text-base">Segunda à sexta, 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-lg p-3 md:p-4 mt-4 md:mt-6">
                  <p className="text-center font-semibold text-yellow-300 text-sm md:text-base">
                    ⚡ Análise inicial do seu caso
                  </p>
                </div>
              </div>

              {/* Garantias */}
              <div className="bg-card p-4 md:p-6 rounded-xl shadow-card border border-border">
                <h4 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 text-center">
                  Nossas Garantias
                </h4>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span>Acompanhamento durante todo o processo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span>Serviço especializado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span>Acompanhamento até a liberação</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}