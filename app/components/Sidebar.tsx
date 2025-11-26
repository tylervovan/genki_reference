'use client';

import { CheatSheetSection } from '../data/types';

interface SidebarProps {
  sections: CheatSheetSection[];
}

export function Sidebar({ sections }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto p-4 hidden lg:block">
      <div className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors flex items-center gap-2"
          >
            <span className="text-lg">{section.icon}</span>
            <span>{section.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

