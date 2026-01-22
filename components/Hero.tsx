
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-950">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neutral-800 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neutral-900 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-neutral-500 mb-8 font-semibold">
            Saúde · Vida · Previdência
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-10">
            A curadoria estratégica <br />
            da sua segurança patrimonial.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Assessoria especializada na estruturação de proteções financeiras e familiares para clientes que exigem precisão e liberdade de escolha.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contato" 
              className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto"
            >
              Consultar Especialista
            </a>
            <a 
              href="#atuacao" 
              className="px-10 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:border-white/60 transition-colors w-full sm:w-auto"
            >
              Nossas Áreas
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[8px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
