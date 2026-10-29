import React from 'react';
import { Layers, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';

export const StepFlowDiagram: React.FC = () => {
  const steps = [
    {
      step: '1. Entrada',
      fn: 'input()',
      desc: 'Usuário digita valores no teclado',
      detail: '"10" e "2" (strings de texto)',
      color: 'border-amber-500/50 text-amber-400 bg-amber-950/20',
    },
    {
      step: '2. Conversão',
      fn: 'float()',
      desc: 'Transforma texto em número decimal',
      detail: '10.0 e 2.0 (números na memória)',
      color: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/20',
    },
    {
      step: '3. Decisão',
      fn: 'if / elif',
      desc: 'Testa qual botão/operação foi escolhida',
      detail: 'Identifica se é +, -, * ou /',
      color: 'border-purple-500/50 text-purple-400 bg-purple-950/20',
    },
    {
      step: '4. Cálculo',
      fn: 'def func()',
      desc: 'Executa a função matemática correspondente',
      detail: 'Verifica se divisor == 0',
      color: 'border-blue-500/50 text-blue-400 bg-blue-950/20',
    },
    {
      step: '5. Saída',
      fn: 'print(f"...")',
      desc: 'Imprime na tela o resultado formatado',
      detail: '>>> Resultado: 10.0 / 2.0 = 5.0',
      color: 'border-emerald-500/50 text-emerald-400 bg-emerald-950/20',
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            Fluxo de Execução: Como o Computador Processa a Calculadora
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            O caminho que os dados percorrem desde o momento em que você digita até a resposta aparecer no monitor.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
        {steps.map((st, index) => (
          <div
            key={index}
            className={`p-3.5 rounded-xl border flex flex-col justify-between ${st.color} relative group hover:scale-[1.02] transition-transform`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  {st.step}
                </span>
                <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-700/60">
                  {st.fn}
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug">
                {st.desc}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              {st.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
