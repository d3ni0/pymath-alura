import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/pythonCode';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (showResults) return; // locked once submitted
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const score = calculateScore();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            Mini-Quiz de Fixação para Iniciantes
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Teste seu entendimento sobre os conceitos fundamentais do Python que aprendemos nesta calculadora.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {showResults && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-950 border border-blue-800 rounded-lg text-xs font-semibold text-blue-300">
              <Award className="w-4 h-4 text-amber-400" />
              Pontuação: {score} de {QUIZ_QUESTIONS.length}
            </div>
          )}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 bg-slate-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar Quiz
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, qIndex) => {
          const userChoice = selectedAnswers[q.id];
          const hasAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                showResults
                  ? isCorrect
                    ? 'bg-emerald-950/20 border-emerald-800/60'
                    : 'bg-rose-950/20 border-rose-800/60'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-sm font-semibold text-slate-100">
                  <span className="text-blue-400 mr-2 font-mono">#{qIndex + 1}</span>
                  {q.question}
                </span>
                {showResults && (
                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold shrink-0">
                        <CheckCircle className="w-4 h-4" /> Correto
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold shrink-0">
                        <XCircle className="w-4 h-4" /> Incorreto
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userChoice === optIdx;
                  const isTheRightOne = optIdx === q.correctIndex;

                  let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700';
                  if (isSelected && !showResults) {
                    btnStyle = 'bg-blue-600/30 border-blue-500 text-white font-medium';
                  } else if (showResults) {
                    if (isTheRightOne) {
                      btnStyle = 'bg-emerald-900/40 border-emerald-500 text-emerald-200 font-medium';
                    } else if (isSelected && !isTheRightOne) {
                      btnStyle = 'bg-rose-900/40 border-rose-500 text-rose-200 line-through';
                    } else {
                      btnStyle = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={showResults}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-start gap-2 ${btnStyle}`}
                    >
                      <span className="font-mono text-[11px] text-slate-500 shrink-0">
                        {String.fromCharCode(65 + optIdx)})
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">💡 Explicação:</span>
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults && (
        <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800">
          <span className="text-xs text-slate-400">
            Respondeu {totalAnswered} de {QUIZ_QUESTIONS.length} perguntas
          </span>
          <button
            onClick={() => setShowResults(true)}
            disabled={totalAnswered === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              totalAnswered > 0
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            Verificar Respostas
          </button>
        </div>
      )}
    </div>
  );
};
