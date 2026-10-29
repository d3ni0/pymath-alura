export interface CodeVersion {
  id: 'iniciante' | 'funcoes' | 'avancado';
  title: string;
  badge: string;
  description: string;
  code: string;
  filename: string;
}

export interface CodeExplanation {
  concept: string;
  symbol: string;
  title: string;
  simpleExplanation: string;
  codeExample: string;
  whyItMatters: string;
  commonMistake: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
