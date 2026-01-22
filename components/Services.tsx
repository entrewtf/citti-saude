
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; items: string[] }> = ({ title, description, items }) => (
  <div className="group p-8 md:p-12 border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-700">
    <h3 className="text-2xl font-serif text-white mb-6">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed mb-8 min-h-[60px]">
      {description}
    </p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-[11px] uppercase tracking-widest text-neutral-500 flex items-center gap-3">
          <span className="w-1.5 h-[1px] bg-neutral-600" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6 font-semibold">Áreas de Atuação</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Soluções sob medida para a preservação do seu padrão de vida e legado.
            </h3>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
            Operamos com as principais seguradoras globais para garantir acesso ao que há de mais refinado em proteção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <ServiceCard 
            title="Saúde"
            description="Liberdade de escolha mundial em hospitais, médicos e laboratórios de excelência. Proteção sem fronteiras geográficas ou técnicas."
            items={["Livre Escolha", "Rede Global", "Segunda Opinião"]}
          />
          <ServiceCard 
            title="Vida"
            description="Estruturação de proteção familiar e sucessória. Blindagem financeira para garantir a continuidade do patrimônio e segurança dos dependentes."
            items={["Planejamento Sucessório", "Proteção Patrimonial", "Capital Segurado Superior"]}
          />
          <ServiceCard 
            title="Previdência"
            description="Desenvolvimento de reservas financeiras estratégicas. Eficiência fiscal e segurança de longo prazo para a manutenção da autonomia."
            items={["Gestão de Ativos", "Previsibilidade", "Eficiência Tributária"]}
          />
        </div>
      </div>
    </section>
  );
};
