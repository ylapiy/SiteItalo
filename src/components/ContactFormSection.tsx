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
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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

    // Criar e-mail para envio
    const emailData = {
      to: 'silvaadvitalo@gmail.com',
      subject: 'Novo contato - SISBAJUD',
      body: `Nome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nMensagem: ${formData.message}`
    };

    // Simular envio - em produção, aqui seria feita a integração com backend
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve."
    });

    // Limpar formulário
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });

    // Também redirecionar para WhatsApp
    const whatsappMessage = encodeURIComponent(`Olá! Meu nome é ${formData.name}. Preciso de ajuda com desbloqueio SISBAJUD. Telefone: ${formData.phone}`);
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };
  return <section className="py-20 w-full min-h-screen bg-gradient-to-b from-gray-200 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            
            <h2 className="text-2xl font-bold text-foreground">
              Preencha o formulário abaixo e receba consultoria personalizada
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Formulário */}
            <div className="bg-card p-8 rounded-xl shadow-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Digite seu nome completo" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="(11) 99999-9999" required className="w-full"/>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" className="w-full" required/>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Descreva sua situação
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Conte brevemente sobre o bloqueio da sua conta..." rows={4} className="w-full" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                  📧 Enviar Mensagem
                </Button>
                
              </form>

      
            </div>
          </div>
        </div>
      </div>
    </section>;
}