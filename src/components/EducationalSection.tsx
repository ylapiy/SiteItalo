import { Book, Scale, FileText, AlertTriangle } from "lucide-react";
export default function EducationalSection() {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Entenda o bloqueio SISBAJUD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Saiba como um advogado especialista pode ajudar você a recuperar o acesso às suas contas</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda - O que é */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    O que é o bloqueio SISBAJUD?
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    O SISBAJUD é um sistema que permite o bloqueio de contas bancárias para garantir 
                    execuções judiciais. Porém, <strong>nem todos os valores podem ser bloqueados</strong>, 
                    e muitas vezes o sistema bloqueia contas de forma incorreta ou excessiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Artigo 833 do CPC - Seus Direitos
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    O Código de Processo Civil garante a <strong>impenhorabilidade</strong> de diversos valores:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Até 40 salários mínimos em conta salário
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Valores de aposentadoria e pensão
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Auxílios governamentais (Bolsa Família, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Valores necessários à subsistência familiar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Como atuamos */}
          <div className="space-y-8">
            <div className="bg-gradient-card p-8 rounded-lg shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Book className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Como o advogado pode atuar
                  </h3>
                  <div className="space-y-4 text-foreground">
                    <p className="leading-relaxed">
                      Nosso trabalho consiste em <strong>analisar juridicamente</strong> o bloqueio 
                      e identificar irregularidades ou valores que não deveriam estar bloqueados.
                    </p>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Principais estratégias:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Petição de desbloqueio fundamentada</li>
                        <li>• Alegação de impenhorabilidade (Art. 833 CPC)</li>
                        <li>• Comprovação de origem lícita dos valores</li>
                        <li>• Pedido de liberação parcial ou total</li>
                        <li>• Acompanhamento processual completo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="h-8 w-8 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Documentos necessários
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Para iniciar o processo, precisamos apenas de:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Extrato bancário com o bloqueio
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Documentos pessoais (RG/CPF)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Comprovante de renda (se aplicável)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}