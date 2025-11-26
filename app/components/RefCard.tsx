import { RefCard as RefCardType } from '../data/types';

interface RefCardProps {
  card: RefCardType;
}

export function RefCard({ card }: RefCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden mb-6">
      {/* Card Header */}
      <div className="bg-slate-750 border-b border-slate-700 px-4 py-3">
        <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
        {card.description && (
          <p className="text-sm text-slate-400 mt-1">{card.description}</p>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        {card.type === 'list' && (
          <div className="space-y-3">
            {card.items.map((item, idx) => (
              <div key={idx} className="group hover:bg-slate-750 rounded p-3 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-medium text-slate-100 font-japanese">
                        {item.japanese}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                        Ch. {item.chapter}
                      </span>
                    </div>
                    {item.reading && (
                      <div className="text-sm text-slate-400">{item.reading}</div>
                    )}
                    <div className="text-base text-slate-300">{item.meaning}</div>
                    {item.example && (
                      <div className="mt-2 pl-4 border-l-2 border-slate-600 space-y-1">
                        <div className="text-sm text-slate-300 font-japanese">
                          {item.example.japanese}
                        </div>
                        {item.example.reading && (
                          <div className="text-xs text-slate-400">
                            {item.example.reading}
                          </div>
                        )}
                        <div className="text-xs text-slate-400">
                          "{item.example.translation}"
                        </div>
                      </div>
                    )}
                    {item.notes && (
                      <div className="text-xs text-amber-400 italic mt-1">
                        💡 {item.notes}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {card.type === 'conjugation' && (
          <div className="space-y-2">
            {card.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-slate-750 rounded px-4 py-3 hover:bg-slate-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-medium text-slate-100 font-mono font-japanese">
                      {item.japanese}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                      Ch. {item.chapter}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{item.reading}</div>
                  <div className="text-sm text-slate-300 mt-1">{item.meaning}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {card.type === 'table' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-700">
                {card.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-750 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-100 font-japanese">
                      {item.japanese}
                    </td>
                    <td className="px-4 py-3 text-slate-400">{item.reading}</td>
                    <td className="px-4 py-3 text-slate-300">{item.meaning}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                        Ch. {item.chapter}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

