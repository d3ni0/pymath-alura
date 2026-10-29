import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { CODE_VERSIONS } from '../data/pythonCode';
import { CodeVersion } from '../types';

export const CodeViewer: React.FC = () => {
  const [activeVersionId, setActiveVersionId] = useState<string>('funcoes');
  const [copied, setCopied] = useState<boolean>(false);

  const activeVersion: CodeVersion =
    CODE_VERSIONS.find((v) => v.id === activeVersionId) || CODE_VERSIONS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeVersion.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([activeVersion.code], { type: 'text/x-python;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeVersion.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Basic syntax highlight tokenizer for Python
  const renderFormattedLine = (line: string) => {
    // Comments
    if (line.trim().startsWith('#')) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    // Split keeping keywords and tokens
    const parts = line.split(/(\b(?:def|return|if|elif|else|while|True|False|None|print|input|float|int|in|try|except|break|continue|and|or|not)\b|"[^"]*"|'[^']*'|#.*$)/g);

    return parts.map((part, index) => {
      if (!part) return null;
      if (part.startsWith('#')) {
        return (
          <span key={index} className="text-slate-500 italic">
            {part}
          </span>
        );
      }
      if (
        part.startsWith('"') ||
        part.startsWith("'")
      ) {
        return (
          <span key={index} className="text-emerald-400">
            {part}
          </span>
        );
      }
      if (
        ['def', 'return', 'if', 'elif', 'else', 'while', 'in', 'try', 'except', 'break', 'continue', 'and', 'or', 'not'].includes(
          part
        )
      ) {
        return (
          <span key={index} className="text-pink-400 font-semibold">
            {part}
          </span>
        );
      }
      if (['True', 'False', 'None'].includes(part)) {
        return (
          <span key={index} className="text-purple-400 font-semibold">
            {part}
          </span>
        );
      }
      if (['print', 'input', 'float', 'int'].includes(part)) {
        return (
          <span key={index} className="text-yellow-300 font-semibold">
            {part}
          </span>
        );
      }
      // Numbers
      if (/^\b\d+(\.\d+)?\b$/.test(part)) {
        return (
          <span key={index} className="text-amber-400">
            {part}
          </span>
        );
      }
      return <span key={index} className="text-slate-200">{part}</span>;
    });
  };

  const lines = activeVersion.code.split('\n');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Version Selector Tabs */}
      <div className="bg-slate-950 px-4 pt-3 border-b border-slate-800 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {CODE_VERSIONS.map((ver) => {
            const isActive = ver.id === activeVersionId;
            return (
              <button
                key={ver.id}
                onClick={() => setActiveVersionId(ver.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-t-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-blue-400 border-t-2 border-blue-500 font-semibold shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                <span>{ver.title}</span>
                <span
                  className={`hidden sm:inline text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-blue-950 text-blue-300 border border-blue-800/60'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {ver.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons: Copy & Download */}
        <div className="flex items-center gap-2 pb-2 sm:pb-0">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors shadow-sm"
            title="Copiar código para a área de transferência"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copiar Código</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
            title="Baixar arquivo .py para o seu computador"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Baixar</span> .py
          </button>
        </div>
      </div>

      {/* Description Bar */}
      <div className="px-5 py-2.5 bg-slate-900/60 border-b border-slate-800/60 text-xs text-slate-400 flex items-center justify-between">
        <span>{activeVersion.description}</span>
        <span className="font-mono text-slate-500 text-[11px] hidden md:inline">
          Arquivo: <span className="text-amber-400">{activeVersion.filename}</span>
        </span>
      </div>

      {/* Code Display */}
      <div className="p-4 bg-slate-950 font-mono text-xs sm:text-sm overflow-x-auto max-h-[560px] overflow-y-auto selection:bg-blue-600 selection:text-white">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-900/70 transition-colors group">
                <td className="w-10 pr-4 text-right text-slate-600 select-none group-hover:text-slate-400 font-mono text-xs align-top pt-0.5">
                  {idx + 1}
                </td>
                <td className="whitespace-pre pl-2 leading-relaxed font-mono">
                  {renderFormattedLine(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
