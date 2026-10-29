import React, { useState } from 'react';
import { Copy, Check, Download, FileText, Sparkles, ExternalLink, Award } from 'lucide-react';

interface ReadmeViewerProps {
  content: string;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ content }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold mb-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Projeto Educacional • Imersão Alura
          </div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            README.md do Repositório GitHub
          </h3>
          <p className="text-xs text-slate-400">
            Pronto para colocar no seu portfólio, no GitHub ou apresentar como entrega do projeto da Imersão Alura.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copiar README</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-900/40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar README.md</span>
          </button>
        </div>
      </div>

      {/* Visual Render of the README */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Mock GitHub Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <FileText className="w-4 h-4 text-slate-400" />
            <span>seu-usuario / calculadora-python-alura / </span>
            <span className="text-white font-bold">README.md</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
              Preview GitHub
            </span>
          </div>
        </div>

        {/* Formatted Content */}
        <div className="p-6 md:p-8 space-y-6 text-slate-200">
          {/* Header Banner */}
          <div className="text-center pb-6 border-b border-slate-800/80 space-y-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <span>🧮</span> Calculadora Python — Imersão Alura
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-[#3776AB] text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-3.5 h-3.5 invert brightness-0" />
                Python 3.10+
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0070F3] text-white text-[11px] font-bold shadow-sm">
                Imersão Alura
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-600 text-white text-[11px] font-bold shadow-sm">
                Status: Concluído
              </span>
              <span className="px-2.5 py-1 rounded bg-amber-600 text-white text-[11px] font-bold shadow-sm">
                Licença: MIT
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-xl mx-auto italic">
              Uma calculadora modular e didática desenvolvida em Python para as quatro operações matemáticas fundamentais, acompanhada de um simulador interativo para iniciantes.
            </p>
          </div>

          {/* Section: Visao Geral */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-1.5">
              <span>📌</span> Visão Geral
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Este projeto foi desenvolvido durante a <strong className="text-blue-400">Imersão da Alura</strong>, com foco em consolidar os primeiros passos na jornada de programação com <strong className="text-amber-400">Python</strong>. O objetivo principal é transformar conceitos teóricos em uma ferramenta prática, limpa e funcional que executa as operações básicas da matemática: <strong>Adição</strong>, <strong>Subtração</strong>, <strong>Multiplicação</strong> e <strong>Divisão</strong>.
            </p>
          </div>

          {/* Section: Funcionalidades */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-1.5">
              <span>✨</span> Funcionalidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <span className="text-base">➕</span> <span><strong>Adição</strong> (<code className="text-cyan-300 font-mono">a + b</code>)</span>
              </div>
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <span className="text-base">➖</span> <span><strong>Subtração</strong> (<code className="text-cyan-300 font-mono">a - b</code>)</span>
              </div>
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <span className="text-base">✖️</span> <span><strong>Multiplicação</strong> (<code className="text-cyan-300 font-mono">a * b</code>)</span>
              </div>
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <span className="text-base">➗</span> <span><strong>Divisão Segura</strong> (<code className="text-cyan-300 font-mono">ZeroDivisionError</code> prevenido)</span>
              </div>
            </div>
          </div>

          {/* Section: Tecnologias */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-1.5">
              <span>🛠️</span> Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-950/90 border border-blue-800 flex items-center justify-center shrink-0">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Python 3</div>
                  <div className="text-[11px] text-slate-400">Lógica de cálculo & modularização</div>
                </div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-800 flex items-center justify-center shrink-0">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">React + TypeScript</div>
                  <div className="text-[11px] text-slate-400">Simulador web & interface</div>
                </div>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-teal-800 flex items-center justify-center shrink-0">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Tailwind CSS</div>
                  <div className="text-[11px] text-slate-400">Design moderno & responsivo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Conceitos Estudados */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-1.5">
              <span>💡</span> Conceitos Praticados na Imersão
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              <li><strong className="text-white">Modularização com Funções (<code>def</code>)</strong>: Organização de código limpo com <code>return</code>.</li>
              <li><strong className="text-white">Tipagem e Entrada (<code>input()</code> & <code>float()</code>)</strong>: Conversão de strings para números reais.</li>
              <li><strong className="text-white">Estruturas Condicionais (<code>if / elif / else</code>)</strong>: Lógica de controle do fluxo de execução.</li>
              <li><strong className="text-white">Tratamento de Exceções</strong>: Prevenção contra <code>ZeroDivisionError</code> ao dividir por zero.</li>
              <li><strong className="text-white">Interpolação com f-strings</strong>: Formatação elegante de texto em Python moderno.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
