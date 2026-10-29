import React, { useState } from 'react';
import { BookOpen, AlertCircle, Lightbulb, ChevronDown, ChevronUp, Code2, CheckCircle2 } from 'lucide-react';
import { CODE_EXPLANATIONS } from '../data/pythonCode';
import { CodeExplanation } from '../types';

export const ComponentExplainer: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Guia dos Principais Componentes do Código
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Entenda como cada parte funciona e por que foi escrita dessa forma.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {CODE_EXPLANATIONS.map((item: CodeExplanation, idx: number) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-slate-900/90 border-blue-500/70 shadow-lg shadow-blue-950/20'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              {/* Header / Clickable Card summary */}
              <button
                type="button"
                onClick={() => toggleExpand(idx)}
                className="w-full text-left p-4 flex items-start justify-between gap-3 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-blue-400">
                      {item.symbol}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5 line-clamp-1">
                      {item.simpleExplanation}
                    </span>
                  </div>
                </div>

                <div className="text-slate-500 hover:text-slate-300 transition-colors pt-1">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Expanded details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-800/80 text-xs">
                  {/* Detailed explanation */}
                  <div className="text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                    <strong className="text-white block mb-1 text-xs">O que é e como funciona:</strong>
                    {item.simpleExplanation}
                  </div>

                  {/* Code snippet */}
                  <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-xs overflow-x-auto text-emerald-400">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-sans flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-slate-400" />
                      Exemplo em Python:
                    </div>
                    <pre className="whitespace-pre">{item.codeExample}</pre>
                  </div>

                  {/* Why it matters */}
                  <div className="bg-blue-950/30 border border-blue-900/40 rounded-lg p-2.5 flex items-start gap-2 text-blue-200">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-blue-100">Por que é importante: </strong>
                      {item.whyItMatters}
                    </div>
                  </div>

                  {/* Common pitfall */}
                  <div className="bg-rose-950/25 border border-rose-900/30 rounded-lg p-2.5 flex items-start gap-2 text-rose-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-rose-100">Cuidado (Erro Comum de Iniciante): </strong>
                      {item.commonMistake}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
