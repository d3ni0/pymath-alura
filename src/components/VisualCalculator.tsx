import React, { useState } from 'react';
import { Calculator, Delete, RotateCcw, Play, CheckCircle2, AlertTriangle, Code2 } from 'lucide-react';

export const VisualCalculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [pythonTrace, setPythonTrace] = useState<string[]>([
    '# A calculadora visual está pronta!',
    '# Cada botão clicado executa a lógica equivalente em Python.',
  ]);

  const clearAll = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setPythonTrace((prev) => [
      ...prev.slice(-6),
      '# Limpando memória (Reset)',
      'num1 = None; num2 = None; operador = None',
    ]);
  };

  const handleDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
      setPythonTrace((prev) => [
        ...prev.slice(-6),
        `num2 = float("${digit}")  # Usuário digitou o segundo valor`,
      ]);
    } else {
      const nextDisplay = display === '0' ? digit : display + digit;
      setDisplay(nextDisplay);
      setPythonTrace((prev) => [
        ...prev.slice(-6),
        `valor_atual = float("${nextDisplay}")`,
      ]);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (nextOp: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
      setOperation(nextOp);
      setWaitingForOperand(true);
      setPythonTrace((prev) => [
        ...prev.slice(-6),
        `num1 = ${inputValue}`,
        `operador = "${nextOp}"`,
        `print("Operador selecionado:", "${nextOp}")`,
      ]);
    } else if (operation) {
      const current = prevValue || 0;
      let result = 0;
      let funcName = '';

      if (operation === '+') {
        result = current + inputValue;
        funcName = `somar(${current}, ${inputValue})`;
      } else if (operation === '-') {
        result = current - inputValue;
        funcName = `subtrair(${current}, ${inputValue})`;
      } else if (operation === '*') {
        result = current * inputValue;
        funcName = `multiplicar(${current}, ${inputValue})`;
      } else if (operation === '/') {
        if (inputValue === 0) {
          setDisplay('Erro: Div / 0');
          setPrevValue(null);
          setOperation(null);
          setWaitingForOperand(true);
          setPythonTrace((prev) => [
            ...prev.slice(-6),
            `def dividir(${current}, 0):`,
            `    if b == 0: return "Erro: Divisão por zero!"`,
            `⚠️ Erro tratado com sucesso em Python!`,
          ]);
          return;
        }
        result = current / inputValue;
        funcName = `dividir(${current}, ${inputValue})`;
      }

      setPrevValue(result);
      setDisplay(String(result));
      setOperation(nextOp);
      setWaitingForOperand(true);

      setPythonTrace((prev) => [
        ...prev.slice(-6),
        `resultado = ${funcName} -> ${result}`,
        `num1 = ${result}  # Guardado para próxima operação`,
        `operador = "${nextOp}"`,
      ]);
    }
  };

  const handleEqual = () => {
    if (!operation || prevValue === null) return;

    const current = prevValue;
    const inputValue = parseFloat(display);
    let result = 0;
    let funcName = '';

    if (operation === '+') {
      result = current + inputValue;
      funcName = `somar(${current}, ${inputValue})`;
    } else if (operation === '-') {
      result = current - inputValue;
      funcName = `subtrair(${current}, ${inputValue})`;
    } else if (operation === '*') {
      result = current * inputValue;
      funcName = `multiplicar(${current}, ${inputValue})`;
    } else if (operation === '/') {
      if (inputValue === 0) {
        setDisplay('Erro: Div / 0');
        setPrevValue(null);
        setOperation(null);
        setWaitingForOperand(true);
        setPythonTrace((prev) => [
          ...prev.slice(-6),
          `dividir(${current}, 0) -> ZeroDivisionError evitado!`,
          `print("Erro: Não é possível dividir por zero!")`,
        ]);
        return;
      }
      result = current / inputValue;
      funcName = `dividir(${current}, ${inputValue})`;
    }

    setDisplay(String(result));
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(true);

    setPythonTrace((prev) => [
      ...prev.slice(-6),
      `# --- EXECUÇÃO DO CÁLCULO ---`,
      `resultado = ${funcName}`,
      `print(f">>> Resultado: {num1} ${operation} {num2} = {resultado}")`,
      `>>> ${current} ${operation} ${inputValue} = ${result}`,
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-amber-400" />
          <h4 className="text-sm font-bold text-white">Calculadora Visual Integrada</h4>
          <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800/80 px-2 py-0.5 rounded-full">
            Com Rastreamento de Código Python
          </span>
        </div>
        <button
          onClick={clearAll}
          className="text-xs text-slate-400 hover:text-white px-2.5 py-1 bg-slate-800/80 hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          Limpar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Visual Keypad */}
        <div className="md:col-span-5 p-5 bg-slate-950 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div>
            {/* Display screen */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4 text-right">
              <div className="text-[11px] font-mono text-slate-400 h-4 overflow-hidden">
                {prevValue !== null && operation
                  ? `${prevValue} ${operation} ${waitingForOperand ? '' : display}`
                  : ''}
              </div>
              <div className="text-3xl font-mono font-bold text-white tracking-wider truncate mt-1">
                {display}
              </div>
            </div>

            {/* Buttons Grid */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={clearAll}
                className="col-span-2 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 font-semibold text-xs border border-slate-700 transition-colors"
              >
                Limpar (C)
              </button>
              <button
                onClick={() => handleOperator('/')}
                className={`p-3 rounded-xl font-mono text-sm font-bold border transition-colors ${
                  operation === '/'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 hover:bg-blue-600/30 text-amber-400 border-slate-700'
                }`}
              >
                ÷
              </button>
              <button
                onClick={() => handleOperator('*')}
                className={`p-3 rounded-xl font-mono text-sm font-bold border transition-colors ${
                  operation === '*'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 hover:bg-blue-600/30 text-amber-400 border-slate-700'
                }`}
              >
                ×
              </button>

              <button
                onClick={() => handleDigit('7')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                7
              </button>
              <button
                onClick={() => handleDigit('8')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                8
              </button>
              <button
                onClick={() => handleDigit('9')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                9
              </button>
              <button
                onClick={() => handleOperator('-')}
                className={`p-3 rounded-xl font-mono text-sm font-bold border transition-colors ${
                  operation === '-'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 hover:bg-blue-600/30 text-amber-400 border-slate-700'
                }`}
              >
                −
              </button>

              <button
                onClick={() => handleDigit('4')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                4
              </button>
              <button
                onClick={() => handleDigit('5')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                5
              </button>
              <button
                onClick={() => handleDigit('6')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                6
              </button>
              <button
                onClick={() => handleOperator('+')}
                className={`p-3 rounded-xl font-mono text-sm font-bold border transition-colors ${
                  operation === '+'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 hover:bg-blue-600/30 text-amber-400 border-slate-700'
                }`}
              >
                +
              </button>

              <button
                onClick={() => handleDigit('1')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                1
              </button>
              <button
                onClick={() => handleDigit('2')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                2
              </button>
              <button
                onClick={() => handleDigit('3')}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                3
              </button>
              <button
                onClick={handleEqual}
                className="row-span-2 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-base font-bold flex items-center justify-center transition-colors shadow-lg shadow-blue-900/40"
              >
                =
              </button>

              <button
                onClick={() => handleDigit('0')}
                className="col-span-2 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                0
              </button>
              <button
                onClick={handleDecimal}
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-sm font-semibold border border-slate-800 transition-colors"
              >
                .
              </button>
            </div>
          </div>
        </div>

        {/* Python Live Execution Log */}
        <div className="md:col-span-7 p-5 bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                O que o Python está executando nos bastidores:
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Conforme você clica nos botões, veja o código Python correspondente sendo executado em tempo real.
            </p>

            <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 min-h-[190px] overflow-y-auto max-h-[220px]">
              {pythonTrace.map((logLine, index) => {
                if (logLine.startsWith('#')) {
                  return (
                    <div key={index} className="text-slate-500 italic">
                      {logLine}
                    </div>
                  );
                }
                if (logLine.startsWith('>>>')) {
                  return (
                    <div key={index} className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      {logLine}
                    </div>
                  );
                }
                if (logLine.includes('Erro')) {
                  return (
                    <div key={index} className="text-rose-400 font-bold bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40">
                      {logLine}
                    </div>
                  );
                }
                return (
                  <div key={index} className="text-cyan-300">
                    <span className="text-slate-600 select-none mr-2">&gt;&gt;&gt;</span>
                    {logLine}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Prevenção de divisão por zero ativa
            </span>
            <span className="font-mono text-slate-500 text-[11px]">
              float(input()) em tempo real
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
