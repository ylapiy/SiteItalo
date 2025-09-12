import { Book, Scale, FileText, AlertTriangle } from "lucide-react";
export default function EducationalSection() {
  return <section className="py-10 w-full min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-200">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Entenda o bloqueio judicial e seus direitos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Saiba como um advogado especialista pode ajudar você a recuperar o acesso às suas contas</p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Coluna Esquerda - O que é */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    O que é o bloqueio judicial de conta?
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    O <strong>bloqueio judicial</strong> através do SISBAJUD é um mecanismo que permite o 
                    <strong>bloqueio de conta bancária</strong> para garantir execuções judiciais. Quando sua 
                    <strong> conta é bloqueada judicialmente</strong>, nem todos os valores podem ser penhorados, 
                    e muitas vezes o sistema efetua o <strong>bloqueio de conta</strong> de forma incorreta ou excessiva.
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
                    Como o advogado especialista em bloqueio judicial atua
                  </h3>
                  <div className="space-y-4 text-foreground">
                    <p className="leading-relaxed">
                      Um <strong>advogado para bloqueio judicial</strong> analisa juridicamente o 
                      <strong> bloqueio judicial na conta</strong> e identifica irregularidades ou valores 
                      que não deveriam estar em uma <strong>conta penhorada</strong>. Nossa atuação visa 
                      <strong> desbloquear conta bancária</strong> através de estratégias jurídicas fundamentadas.
                    </p>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Estratégias para desbloqueio judicial:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Petição de <strong>desbloqueio judicial</strong> fundamentada</li>
                        <li>• Alegação de impenhorabilidade (Art. 833 CPC)</li>
                        <li>• Comprovação de origem lícita dos valores bloqueados</li>
                        <li>• Pedido de liberação de <strong>conta bancária bloqueada</strong></li>
                        <li>• Acompanhamento processual especializado</li>
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