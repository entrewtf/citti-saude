
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
             <div className="flex flex-col mb-6">
                <span className="text-2xl font-serif text-white tracking-tight">Citti</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium">Consultoria</span>
              </div>
              <p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                Especialistas em gestão de riscos de Saúde, Vida e Previdência. Foco em proteção de legados e patrimônio familiar.
              </p>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest text-white mb-6 font-bold">Menu</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">Início</a></li>
              <li><a href="#atuacao" className="text-xs text-neutral-500 hover:text-white transition-colors">Atuação</a></li>
              <li><a href="#fundamentos" className="text-xs text-neutral-500 hover:text-white transition-colors">Fundamentos</a></li>
              <li><a href="#conselho" className="text-xs text-neutral-500 hover:text-white transition-colors">Conselho Médico</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-6 md:text-right">
            <h5 className="text-[10px] uppercase tracking-widest text-white mb-6 font-bold">Escritório Central</h5>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Rua Joaquim Antunes, 490 – Cj 91<br />
              São Paulo – SP – CEP 05415-001
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-neutral-600">
            &copy; {new Date().getFullYear()} Citti Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
