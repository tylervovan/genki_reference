import { CheatSheetSection } from '../data/types';
import { RefCard } from './RefCard';

interface TopicSectionProps {
  section: CheatSheetSection;
}

export function TopicSection({ section }: TopicSectionProps) {
  return (
    <section id={section.id} className="mb-12 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{section.icon}</span>
        <h2 className="text-3xl font-bold text-slate-100">{section.title}</h2>
      </div>

      {/* Section Cards */}
      <div className="space-y-6">
        {section.cards.map((card, idx) => (
          <RefCard key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}

