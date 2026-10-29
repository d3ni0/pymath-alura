import React from 'react';
import { Terminal, Download, Laptop, CheckCircle2, ExternalLink } from 'lucide-react';

export const HowToRunGuide: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="mb-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Laptop className="w-5 h-5 text-emerald-400" />
          Como Rodar esse Código no seu Computador (Passo a Passo)
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Guia prático para você executar a calculadora no seu próprio ambiente local ou direto no navegador.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Step 1 */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-bold font-mono flex items-center justify-center text-xs mb-3">
              1
            </div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Instale o Python
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Se ainda não tiver o Python instalado, baixe gratuitamente no site oficial{' '}
              <a
                href="https://www.python.org/downloads/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline hover:text-blue-300 inline-flex items-center gap-0.5"
              >
                python.org <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
          <div className="bg-amber-950/30 border border-amber-900/40 p-2 rounded text-[11px] text-amber-200">
            ⚠️ <strong>Importante no Windows:</strong> Marque a caixinha <em>"Add Python to PATH"</em> durante a instalação.
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-bold font-mono flex items-center justify-center text-xs mb-3">
              2
            </div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Crie o Arquivo .py
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Clique no botão <span className="text-white font-medium">"Baixar .py"</span> nesta página ou abra o VS Code / Bloco de Notas e salve o código com o nome:
            </p>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-slate-800 font-mono text-xs text-amber-300 flex items-center justify-between">
            <span>calculadora.py</span>
            <Download className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-bold font-mono flex items-center justify-center text-xs mb-3">
              3
            </div>
            <h4 className="text-sm font-semibold text-white mb-1.5">
              Execute no Terminal
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Abra o Prompt de Comando (CMD), PowerShell ou Terminal na pasta onde salvou o arquivo e digite:
            </p>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-slate-800 font-mono text-xs text-emerald-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>python calculadora.py</span>
          </div>
        </div>
      </div>
    </div>
  );
};
