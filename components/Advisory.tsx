
import React from 'react';

export const Advisory: React.FC = () => {
  return (
    <section id="conselho" className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6 font-semibold">Institucional</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Conselho Médico Consultivo</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Diferenciamo-nos pela capacidade de oferecer suporte técnico de alto nível. Mantemos uma relação sólida com médicos de excelência, referências em suas especialidades.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-10 italic">
              "Este colegiado contribui para orientar nossos clientes com segurança e embasamento técnico em eventuais necessidades críticas, assegurando que as decisões de saúde sejam amparadas pela melhor medicina disponível."
            </p>
            <div className="inline-flex items-center gap-4 text-xs tracking-widest uppercase border-b border-white/20 pb-2 text-white">
              Governança e Critério Técnico
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 relative">
             <div className="aspect-[4/5] bg-neutral-900 border border-white/5 relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/medical/800/1000" 
                 alt="Advisory Representation" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
