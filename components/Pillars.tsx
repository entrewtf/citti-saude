
import React from 'react';

const PillarItem: React.FC<{ label: string; text: string; num: string }> = ({ label, text, num }) => (
  <div className="relative pt-12">
    <span className="absolute top-0 left-0 text-neutral-800 text-5xl font-serif">{num}</span>
    <div className="relative z-10">
      <h4 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-4">{label}</h4>
      <p className="text-neutral-400 text-sm leading-relaxed font-light">
        {text}
      </p>
    </div>
  </div>
);

export const Pillars: React.FC = () => {
  return (
    <section id="fundamentos" className="py-24 md:py-40 bg-neutral-950 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6 font-semibold">Nossos Fundamentos</h2>
            <h3 className="text-3xl font-serif text-white mb-8 leading-snug">
              O compromisso com a integridade rege cada recomendação.
            </h3>
            <div className="h-[1px] w-12 bg-white/20 mb-8" />
            <p className="text-neutral-500 text-sm leading-relaxed">
              Não somos vendedores de produtos. Somos consultores de riscos, focados na pertinência técnica e na transparência absoluta.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            <PillarItem 
              num="01"
              label="Pertinência"
              text="Análise criteriosa para garantir que cada solução seja perfeitamente adequada ao perfil, riscos e necessidades reais de cada cliente."
            />
            <PillarItem 
              num="02"
              label="Ética"
              text="Compromisso inabalável com a integridade. A nossa lealdade é exclusiva aos interesses de quem nos confia a sua proteção."
            />
            <PillarItem 
              num="03"
              label="Transparência"
              text="Clareza total em todas as etapas, processos e recomendações técnicas. Decisões informadas geram segurança duradoura."
            />
            <PillarItem 
              num="04"
              label="Confiança"
              text="Construção de relações sólidas baseadas na credibilidade e na entrega constante de valor ao longo de gerações."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
