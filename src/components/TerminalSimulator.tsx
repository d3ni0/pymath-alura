import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

interface TerminalLog {
  id: string;
  type: 'system' | 'input' | 'output' | 'error' | 'function-call';
  text: string;
}

export const TerminalSimulator: React.FC = () => {
  const [step, setStep] = useState<'menu' | 'num1' | 'num2' | 'result'>('menu');
  const [selectedOp, setSelectedOp] = useState<string>('1');
  const [num1Str, setNum1Str] = useState<string>('15');
  const [num2Str, setNum2Str] = useState<string>('3');
  const [logs, setLogs] = useState<TerminalLog[]>([
    { id: '1', type: 'system', text: '==============================' },
    { id: '2', type: 'system', text: '     CALCULADORA EM PYTHON' },
    { id: '3', type: 'system', text: '==============================' },
    { id: '4', type: 'system', text: '1 - Adição (+)' },
    { id: '5', type: 'system', text: '2 - Subtração (-)' },
    { id: '6', type: 'system', text: '3 - Multiplicação (*)' },
    { id: '7', type: 'system', text: '4 - Divisão (/)' },
    { id: '8', type: 'system', text: '==============================' },
  ]);

  const resetTerminal = () => {
    setStep('menu');
    setSelectedOp('1');
    setNum1Str('15');
    setNum2Str('3');
    setLogs([
      { id: Date.now().toString(), type: 'system', text: '==============================' },
      { id: (Date.now() + 1).toString(), type: 'system', text: '     CALCULADORA EM PYTHON' },
      { id: (Date.now() + 2).toString(), type: 'system', text: '==============================' },
      { id: (Date.now() + 3).toString(), type: 'system', text: '1 - Adição (+)' },
      { id: (Date.now() + 4).toString(), type: 'system', text: '2 - Subtração (-)' },
      { id: (Date.now() + 5).toString(), type: 'system', text: '3 - Multiplicação (*)' },
      { id: (Date.now() + 6).toString(), type: 'system', text: '4 - Divisão (/)' },
      { id: (Date.now() + 7).toString(), type: 'system', text: '==============================' },
    ]);
  };

  const handleChooseOp = (op: string) => {
    setSelectedOp(op);
    const opNames: Record<string, string> = {
      '1': 'Adição (+)',
      '2': 'Subtração (-)',
      '3': 'Multiplicação (*)',
      '4': 'Divisão (/)',
    };
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'input',
        text: `opcao = input("Escolha a operação desejada (1/2/3/4): ") -> "${op}" (${opNames[op] || 'Inválido'})`,
      },
    ]);
    setStep('num1');
  };

  const handleConfirmNum1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!num1Str.trim()) return;
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'input',
        text: `num1 = float(input("Digite o primeiro número: ")) -> float("${num1Str}") = ${parseFloat(num1Str) || 0}`,
      },
    ]);
    setStep('num2');
  };

  const handleConfirmNum2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!num2Str.trim()) return;

    const n1 = parseFloat(num1Str) || 0;
    const n2 = parseFloat(num2Str) || 0;

    let funcName = '';
    let symbol = '+';
    let result: number | string = 0;
    let isError = false;

    if (selectedOp === '1') {
      funcName = `somar(${n1}, ${n2})`;
      symbol = '+';
      result = n1 + n2;
    } else if (selectedOp === '2') {
      funcName = `subtrair(${n1}, ${n2})`;
      symbol = '-';
      result = n1 - n2;
    } else if (selectedOp === '3') {
      funcName = `multiplicar(${n1}, ${n2})`;
      symbol = '*';
      result = n1 * n2;
    } else if (selectedOp === '4') {
      funcName = `dividir(${n1}, ${n2})`;
      symbol = '/';
      if (n2 === 0) {
        result = 'Erro: Não é possível dividir por zero!';
        isError = true;
      } else {
        result = n1 / n2;
      }
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'input',
        text: `num2 = float(input("Digite o segundo número: ")) -> float("${num2Str}") = ${n2}`,
      },
      {
        id: Math.random().toString(),
        type: 'function-call',
        text: `Chamando função Python: def ${funcName}`,
      },
      {
        id: Math.random().toString(),
        type: isError ? 'error' : 'output',
        text: isError
          ? `>>> ${result}`
          : `>>> Resultado: ${n1} ${symbol} ${n2} = ${typeof result === 'number' && Number.isInteger(result) ? result : result}`,
      },
    ]);
    setStep('result');
  };

  const runPreset = (op: string, val1: string, val2: string) => {
    resetTerminal();
    setTimeout(() => {
      setSelectedOp(op);
      setNum1Str(val1);
      setNum2Str(val2);

      const opNames: Record<string, string> = {
        '1': 'Adição (+)',
        '2': 'Subtração (-)',
        '3': 'Multiplicação (*)',
        '4': 'Divisão (/)',
      };

      const n1 = parseFloat(val1);
      const n2 = parseFloat(val2);
      let funcName = '';
      let symbol = '+';
      let result: number | string = 0;
      let isError = false;

      if (op === '1') {
        funcName = `somar(${n1}, ${n2})`;
        symbol = '+';
        result = n1 + n2;
      } else if (op === '2') {
        funcName = `subtrair(${n1}, ${n2})`;
        symbol = '-';
        result = n1 - n2;
      } else if (op === '3') {
        funcName = `multiplicar(${n1}, ${n2})`;
        symbol = '*';
        result = n1 * n2;
      } else if (op === '4') {
        funcName = `dividir(${n1}, ${n2})`;
        symbol = '/';
        if (n2 === 0) {
          result = 'Erro: Não é possível dividir por zero!';
          isError = true;
        } else {
          result = n1 / n2;
        }
      }

      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          type: 'input',
          text: `opcao = input("Escolha a operação desejada (1/2/3/4): ") -> "${op}" (${opNames[op]})`,
        },
        {
          id: Math.random().toString(),
          type: 'input',
          text: `num1 = float(input("Digite o primeiro número: ")) -> float("${val1}") = ${n1}`,
        },
        {
          id: Math.random().toString(),
          type: 'input',
          text: `num2 = float(input("Digite o segundo número: ")) -> float("${val2}") = ${n2}`,
        },
        {
          id: Math.random().toString(),
          type: 'function-call',
          text: `Chamando função Python: def ${funcName}`,
        },
        {
          id: Math.random().toString(),
          type: isError ? 'error' : 'output',
          text: isError
            ? `>>> ${result}`
            : `>>> Resultado: ${n1} ${symbol} ${n2} = ${result}`,
        },
      ]);
      setStep('result');
    }, 100);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Bar simulating a Terminal / VS Code console */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            bash: python calculadora_funcoes.py
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetTerminal}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-md transition-colors"
            title="Reiniciar Simulação"
          >
            <RotateCcw className="w-3 h-3" />
            Reiniciar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Terminal Screen */}
        <div className="lg:col-span-7 p-4 bg-slate-950 font-mono text-sm overflow-y-auto max-h-[460px] flex flex-col justify-between">
          <div className="space-y-1.5">
            {logs.map((log) => {
              if (log.type === 'system') {
                return (
                  <div key={log.id} className="text-slate-400 select-none">
                    {log.text}
                  </div>
                );
              }
              if (log.type === 'input') {
                return (
                  <div key={log.id} className="text-amber-300 flex items-start gap-2">
                    <span className="text-slate-500 select-none">$</span>
                    <span>{log.text}</span>
                  </div>
                );
              }
              if (log.type === 'function-call') {
                return (
                  <div key={log.id} className="text-cyan-400 bg-cyan-950/40 border-l-2 border-cyan-500 px-2 py-0.5 my-1 text-xs">
                    ⚡ {log.text}
                  </div>
                );
              }
              if (log.type === 'error') {
                return (
                  <div key={log.id} className="text-rose-400 bg-rose-950/50 border border-rose-800/60 rounded px-2.5 py-1.5 my-1 font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{log.text}</span>
                  </div>
                );
              }
              return (
                <div key={log.id} className="text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-800/60 rounded px-2.5 py-1.5 my-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{log.text}</span>
                </div>
              );
            })}

            {/* Prompt indicator */}
            {step === 'menu' && (
              <div className="text-amber-400 animate-pulse text-xs flex items-center gap-1.5 pt-2">
                <span className="w-2 h-4 bg-amber-400 inline-block" />
                Aguardando escolha da operação (1, 2, 3 ou 4)...
              </div>
            )}
            {step === 'num1' && (
              <div className="text-amber-400 animate-pulse text-xs flex items-center gap-1.5 pt-2">
                <span className="w-2 h-4 bg-amber-400 inline-block" />
                Digite o primeiro número e aperte ENTER...
              </div>
            )}
            {step === 'num2' && (
              <div className="text-amber-400 animate-pulse text-xs flex items-center gap-1.5 pt-2">
                <span className="w-2 h-4 bg-amber-400 inline-block" />
                Digite o segundo número e aperte ENTER...
              </div>
            )}
          </div>

          {/* Quick interactive test scenarios */}
          <div className="mt-6 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
              Cenários de Teste Rápido (Clique para ver a reação do Python):
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => runPreset('1', '25', '7')}
                className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded transition-colors"
              >
                ➕ Soma: 25 + 7
              </button>
              <button
                onClick={() => runPreset('4', '10', '0')}
                className="text-xs bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/50 px-2.5 py-1 rounded transition-colors"
              >
                ⚠️ Divisão por Zero: 10 / 0
              </button>
              <button
                onClick={() => runPreset('3', '3.5', '4')}
                className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded transition-colors"
              >
                ✖️ Decimais: 3.5 * 4
              </button>
              <button
                onClick={() => runPreset('2', '100', '42')}
                className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded transition-colors"
              >
                ➖ Subtração: 100 - 42
              </button>
            </div>
          </div>
        </div>

        {/* Control Panel / Interactive Stepper */}
        <div className="lg:col-span-5 p-5 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Controle Interativo Passo a Passo
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                Passo {step === 'menu' ? '1/3' : step === 'num1' ? '2/3' : step === 'num2' ? '3/3' : 'Concluído'}
              </span>
            </div>

            {/* Step 1: Operation */}
            {step === 'menu' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-white">Etapa 1:</span> O programa pergunta ao usuário qual operação matemática realizar através de <code className="text-amber-300 bg-slate-800 px-1 py-0.5 rounded">input()</code>.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => handleChooseOp('1')}
                    className="p-3 text-left rounded-xl bg-slate-800 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="font-bold text-white text-sm group-hover:text-blue-300">1 - Adição</div>
                    <div className="text-xs text-slate-400 font-mono">def somar(a, b) [+]</div>
                  </button>

                  <button
                    onClick={() => handleChooseOp('2')}
                    className="p-3 text-left rounded-xl bg-slate-800 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="font-bold text-white text-sm group-hover:text-blue-300">2 - Subtração</div>
                    <div className="text-xs text-slate-400 font-mono">def subtrair(a, b) [-]</div>
                  </button>

                  <button
                    onClick={() => handleChooseOp('3')}
                    className="p-3 text-left rounded-xl bg-slate-800 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="font-bold text-white text-sm group-hover:text-blue-300">3 - Multiplicação</div>
                    <div className="text-xs text-slate-400 font-mono">def multiplicar(a, b) [*]</div>
                  </button>

                  <button
                    onClick={() => handleChooseOp('4')}
                    className="p-3 text-left rounded-xl bg-slate-800 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="font-bold text-white text-sm group-hover:text-blue-300">4 - Divisão</div>
                    <div className="text-xs text-slate-400 font-mono">def dividir(a, b) [/]</div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Num1 */}
            {step === 'num1' && (
              <form onSubmit={handleConfirmNum1} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Digite o 1º número (<code className="text-amber-300 font-mono">num1</code>):
                  </label>
                  <p className="text-[11px] text-slate-400 mb-2">
                    O Python lê como texto e o <code className="text-cyan-300 font-mono">float()</code> converte para número real.
                  </p>
                  <input
                    type="number"
                    step="any"
                    value={num1Str}
                    onChange={(e) => setNum1Str(e.target.value)}
                    autoFocus
                    placeholder="Ex: 15 ou 10.5"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    Confirmar num1 <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Num2 */}
            {step === 'num2' && (
              <form onSubmit={handleConfirmNum2} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Digite o 2º número (<code className="text-amber-300 font-mono">num2</code>):
                  </label>
                  <p className="text-[11px] text-slate-400 mb-2">
                    {selectedOp === '4' ? (
                      <span className="text-amber-400 font-medium">
                        Dica: Tente colocar 0 para testar a proteção contra divisão por zero!
                      </span>
                    ) : (
                      'Digite qualquer número inteiro ou decimal.'
                    )}
                  </p>
                  <input
                    type="number"
                    step="any"
                    value={num2Str}
                    onChange={(e) => setNum2Str(e.target.value)}
                    autoFocus
                    placeholder="Ex: 3 ou 0"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    Calcular Resultado <Play className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Result state */}
            {step === 'result' && (
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                    ✓ Execução Concluída com Sucesso
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    O Python executou a checagem com <code className="text-amber-300 font-mono">if/elif</code>, chamou a função correspondente e formatou a resposta final com uma <code className="text-cyan-300 font-mono">f-string</code>.
                  </p>
                </div>

                <button
                  onClick={resetTerminal}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/30"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Fazer Outro Cálculo
                </button>
              </div>
            )}
          </div>

          {/* Memory Inspector */}
          <div className="mt-4 pt-4 border-t border-slate-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Estado das Variáveis na Memória (RAM):
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-500 block text-[10px]">opcao (str)</span>
                <span className="text-amber-300 font-bold">{selectedOp ? `"${selectedOp}"` : '-'}</span>
              </div>
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-500 block text-[10px]">num1 (float)</span>
                <span className="text-cyan-300 font-bold">{step !== 'menu' ? num1Str : '-'}</span>
              </div>
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-500 block text-[10px]">num2 (float)</span>
                <span className="text-cyan-300 font-bold">{step === 'result' ? num2Str : '-'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
