
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-40 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8 font-semibold">Pronto para proteger seu futuro?</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Inicie uma consultoria especializada para o seu patrimônio.
          </h3>
          <p className="text-neutral-400 text-base md:text-lg mb-12 font-light">
            Entre em contato para descobrir as estruturas de seguros que melhor atendem aos seus objetivos e de sua família.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="p-8 border border-white/5 bg-black">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Telefones para Contato</span>
              <a href="tel:+5511970983427" className="text-lg text-white block hover:text-neutral-300 transition-colors">(11) 97098-3427</a>
              <a href="tel:+5511915533427" className="text-lg text-white block hover:text-neutral-300 transition-colors">(11) 91553-3427</a>
            </div>
            <div className="p-8 border border-white/5 bg-black">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Canais Digitais</span>
              <a href="mailto:comercial@citticonsultoria.com" className="text-lg text-white block hover:text-neutral-300 transition-colors">comercial@citticonsultoria.com</a>
              <a href="mailto:suporte@citticonsultoria.com" className="text-lg text-white block hover:text-neutral-300 transition-colors">suporte@citticonsultoria.com</a>
            </div>
          </div>

          <a 
            href="https://wa.me/5511970983427" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-all"
          >
            Falar com Consultor via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
