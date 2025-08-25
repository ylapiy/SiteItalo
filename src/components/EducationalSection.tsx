import { Book, Scale, FileText, AlertTriangle } from "lucide-react";
export default function EducationalSection() {
  return <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
            Entenda o bloqueio SISBAJUD
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">Saiba como um advogado especialista pode ajudar você a recuperar o acesso às suas contas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Coluna Esquerda - O que é */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    O que é o bloqueio SISBAJUD?
                  </h3>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">
                    O SISBAJUD é um sistema que permite o bloqueio de contas bancárias para garantir 
                    execuções judiciais. Porém, <strong> bloqueio de conta bancária</strong>, 
                    e muitas vezes o sistema bloqueia contas de forma incorreta ou excessiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <Scale className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    Artigo 833 do CPC - Seus Direitos
                  </h3>
                  <p className="text-foreground leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    O Código de Processo Civil garante a <strong>impenhorabilidade</strong> de diversos valores:
                  </p>
                  <ul className="space-y-2 text-foreground text-sm md:text-base">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                      Até 40 salários mínimos em conta salário
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                      Valores de aposentadoria e pensão
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                      Auxílios governamentais (Bolsa Família, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                      Valores necessários à subsistência familiar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Como atuamos */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-card p-6 md:p-8 rounded-lg shadow-elegant border border-border">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <Book className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    Como o advogado pode atuar
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-foreground">
                    <p className="leading-relaxed text-sm md:text-base">
                      Nosso trabalho consiste em <strong>analisar juridicamente</strong> o bloqueio 
                      e identificar irregularidades ou valores que não deveriam estar bloqueados.
                    </p>
                    
                    <div className="bg-primary/10 p-3 md:p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Principais estratégias:</h4>
                      <ul className="space-y-1 text-xs md:text-sm">
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

            <div className="bg-card p-6 md:p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    Documentos necessários
                  </h3>
                  <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                    Para iniciar o processo, precisamos apenas de:
                  </p>
                  <ul className="space-y-2 text-foreground text-sm md:text-base">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Extrato bancário com o bloqueio
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Documentos pessoais (RG/CPF)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
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