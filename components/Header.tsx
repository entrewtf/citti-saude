
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 md:py-8 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-tight text-white">Citti</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-medium">Consultoria</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#atuacao" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Atuação</a>
          <a href="#fundamentos" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Fundamentos</a>
          <a href="#conselho" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Conselho</a>
          <a 
            href="#contato" 
            className="text-xs uppercase tracking-widest px-6 py-2 border border-white/10 hover:border-white/40 transition-all text-white"
          >
            Agendar Reunião
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
