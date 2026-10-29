import React, { useState } from 'react';
import {
  Calculator,
  Code2,
  Terminal,
  BookOpen,
  Sparkles,
  HelpCircle,
  Laptop,
  Layers,
  ArrowRight,
  CheckCircle2,
  Github,
  Play
} from 'lucide-react';
import { TerminalSimulator } from './components/TerminalSimulator';
import { VisualCalculator } from './components/VisualCalculator';
import { CodeViewer } from './components/CodeViewer';
import { ComponentExplainer } from './components/ComponentExplainer';
import { StepFlowDiagram } from './components/StepFlowDiagram';
import { QuizSection } from './components/QuizSection';
import { HowToRunGuide } from './components/HowToRunGuide';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulador' | 'teclado' | 'codigo' | 'explicacao' | 'quiz' | 'executar'>('teclado');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-amber-400 p-0.5 shadow-lg shadow-blue-900/30">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base sm:text-lg text-white tracking-tight">
                  Calculadora Python
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Python 3
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  Iniciante
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Aprenda programação criando sua primeira calculadora matemática
              </p>
            </div>
          </div>

          {/* Navigation Pill Buttons */}
          <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
            <button
              onClick={() => setActiveTab('teclado')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'teclado'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculadora Visual</span>
            </button>

            <button
              onClick={() => setActiveTab('simulador')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'simulador'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal Python</span>
            </button>

            <button
              onClick={() => setActiveTab('codigo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'codigo'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código</span>
            </button>

            <button
              onClick={() => setActiveTab('explicacao')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'explicacao'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Componentes</span>
              <span className="sm:hidden">Guia</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Quiz</span>
            </button>

            <button
              onClick={() => setActiveTab('executar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'executar'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Como Rodar</span>
              <span className="md:hidden">Ajuda</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="border-b border-slate-900 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800/80 text-blue-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Guia Definitivo: As 4 Operações Matemáticas em Python
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Criando sua Primeira Calculadora em Python Passo a Passo
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Bem-vindo ao mundo da programação! Criar uma calculadora é o projeto clássico perfeito para dominar
                <strong className="text-amber-400 font-semibold"> entrada de dados</strong>,
                <strong className="text-cyan-400 font-semibold"> condicionais (if/else)</strong>,
                <strong className="text-emerald-400 font-semibold"> funções (def)</strong> e
                <strong className="text-purple-400 font-semibold"> tratamento de erros matemáticos</strong>.
              </p>
            </div>

            {/* Quick feature checklist */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2 text-xs shrink-0 lg:w-72 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                O que você aprenderá neste projeto:
              </span>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Adição, Subtração, Multiplicação e Divisão</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Conversão de tipos (<code className="text-cyan-300 font-mono">float(input())</code>)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Evitar erro fatal de divisão por zero</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Organização profissional com <code className="text-amber-300 font-mono">def</code></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections based on activeTab */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeTab === 'teclado' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-400" />
                  Calculadora Visual com Rastreamento Python
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Clique nos números e botões de operação (+, -, *, /) para calcular e veja o código Python correspondente rodando ao lado.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('simulador')}
                className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                Alternar para Terminal CLI
              </button>
            </div>

            <VisualCalculator />

            <StepFlowDiagram />
          </div>
        )}

        {activeTab === 'simulador' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  Simulador de Terminal Python em Tempo Real
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Experimente interagir com a calculadora como se estivesse no prompt de comando ou terminal do computador.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('teclado')}
                className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                Alternar para Calculadora Visual
              </button>
            </div>

            <TerminalSimulator />

            {/* Visual execution pipeline */}
            <StepFlowDiagram />
          </div>
        )}

        {activeTab === 'codigo' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Códigos-Fonte em Python (Prontos para Usar e Baixar)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Escolha a versão que melhor se adapta ao seu nível de aprendizado, copie ou baixe o arquivo <code className="text-amber-300 font-mono">.py</code>.
              </p>
            </div>

            <CodeViewer />

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Dica de ouro para iniciantes
                </h4>
                <p className="text-xs text-slate-300">
                  Em vez de apenas copiar e colar, tente digitar o código manualmente no seu editor. Digitar ajuda seu cérebro a memorizar a sintaxe do Python!
                </p>
              </div>
              <button
                onClick={() => setActiveTab('explicacao')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                Ver Explicação dos Componentes <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'explicacao' && (
          <div className="space-y-8">
            <ComponentExplainer />
            <StepFlowDiagram />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <QuizSection />
          </div>
        )}

        {activeTab === 'executar' && (
          <div className="space-y-6">
            <HowToRunGuide />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Calculadora Python para Iniciantes</span>
            <span>•</span>
            <span>Desenvolvido para aprendizado de programação</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('simulador')}
              className="hover:text-slate-300 transition-colors"
            >
              Simulador
            </button>
            <button
              onClick={() => setActiveTab('codigo')}
              className="hover:text-slate-300 transition-colors"
            >
              Código-Fonte
            </button>
            <button
              onClick={() => setActiveTab('explicacao')}
              className="hover:text-slate-300 transition-colors"
            >
              Componentes
            </button>
            <button
              onClick={() => setActiveTab('executar')}
              className="hover:text-slate-300 transition-colors"
            >
              Como Rodar
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
