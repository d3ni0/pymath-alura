import { CodeVersion, CodeExplanation, QuizQuestion } from '../types';

export const CODE_VERSIONS: CodeVersion[] = [
  {
    id: 'funcoes',
    title: 'Versão Recomendada (Com Funções `def`)',
    badge: 'Mais Organizada & Pedagógica',
    description: 'Separa cada operação matemática em sua própria função e trata divisão por zero com elegância.',
    filename: 'calculadora_funcoes.py',
    code: `# ==========================================
# CALCULADORA SIMPLES EM PYTHON
# Operações: Adição, Subtração, Multiplicação e Divisão
# ==========================================

# 1. Definindo as funções matemáticas
def somar(a, b):
    """Retorna a soma de dois números."""
    return a + b

def subtrair(a, b):
    """Retorna a diferença entre dois números."""
    return a - b

def multiplicar(a, b):
    """Retorna o produto de dois números."""
    return a * b

def dividir(a, b):
    """Retorna a divisão, prevenindo erro de divisão por zero."""
    if b == 0:
        return "Erro: Não é possível dividir por zero!"
    return a / b

# 2. Exibindo o menu para o usuário
print("=" * 30)
print("     CALCULADORA EM PYTHON")
print("=" * 30)
print("1 - Adição (+)")
print("2 - Subtração (-)")
print("3 - Multiplicação (*)")
print("4 - Divisão (/)")
print("=" * 30)

# 3. Lendo a opção do usuário
opcao = input("Escolha a operação desejada (1/2/3/4): ")

# 4. Validando se a opção é válida
if opcao in ['1', '2', '3', '4']:
    # Lendo os dois números com conversão para float (decimal)
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    # 5. Tomada de decisão com if/elif
    if opcao == '1':
        resultado = somar(num1, num2)
        print(f"\n>>> Resultado: {num1} + {num2} = {resultado}")
    elif opcao == '2':
        resultado = subtrair(num1, num2)
        print(f"\n>>> Resultado: {num1} - {num2} = {resultado}")
    elif opcao == '3':
        resultado = multiplicar(num1, num2)
        print(f"\n>>> Resultado: {num1} * {num2} = {resultado}")
    elif opcao == '4':
        resultado = dividir(num1, num2)
        print(f"\n>>> Resultado: {num1} / {num2} = {resultado}")
else:
    print("\nOpção inválida! Por favor, execute novamente e escolha entre 1 e 4.")
`
  },
  {
    id: 'iniciante',
    title: 'Versão Direta (Iniciante Absoluto)',
    badge: 'Super Rápida (Sem Funções)',
    description: 'Código direto sem criar funções def, ideal para entender a sequência pura de comandos.',
    filename: 'calculadora_simples.py',
    code: `# Calculadora Simples em Python (Sequência Direta)

print("--- CALCULADORA SIMPLES ---")

# Recebe os números digitados pelo usuário
num1 = float(input("Digite o primeiro número: "))
operador = input("Digite a operação (+, -, *, /): ")
num2 = float(input("Digite o segundo número: "))

# Verifica qual operador foi escolhido e calcula
if operador == '+':
    resultado = num1 + num2
    print(f"Resultado: {num1} + {num2} = {resultado}")
elif operador == '-':
    resultado = num1 - num2
    print(f"Resultado: {num1} - {num2} = {resultado}")
elif operador == '*':
    resultado = num1 * num2
    print(f"Resultado: {num1} * {num2} = {resultado}")
elif operador == '/':
    if num2 == 0:
        print("Erro: Não é possível dividir por zero!")
    else:
        resultado = num1 / num2
        print(f"Resultado: {num1} / {num2} = {resultado}")
else:
    print("Operação inválida!")
`
  },
  {
    id: 'avancado',
    title: 'Versão Contínua (Com Laço `while True`)',
    badge: 'Completa & Interativa',
    description: 'Mantém o programa em execução contínua com repetição até que o usuário decida sair.',
    filename: 'calculadora_loop.py',
    code: `# Calculadora Interativa Contínua em Python

def calcular(n1, op, n2):
    if op == '+': return n1 + n2
    if op == '-': return n1 - n2
    if op == '*': return n1 * n2
    if op == '/':
        return "Erro: Divisão por zero!" if n2 == 0 else n1 / n2
    return None

while True:
    print("\\n=== CALCULADORA ===")
    print("Operações: +, -, *, /  (ou digite 'sair' para encerrar)")
    
    escolha = input("Digite a operação: ").strip().lower()
    if escolha == 'sair':
        print("Encerrando a calculadora. Até mais!")
        break

    if escolha not in ['+', '-', '*', '/']:
        print("Operação não reconhecida. Tente novamente.")
        continue

    try:
        n1 = float(input("Primeiro número: "))
        n2 = float(input("Segundo número: "))
        res = calcular(n1, escolha, n2)
        print(f">>> Resposta: {n1} {escolha} {n2} = {res}")
    except ValueError:
        print("Erro: Por favor, digite apenas números válidos!")

    continuar = input("\\nDeseja fazer outro cálculo? (s/n): ").lower()
    if continuar != 's':
        print("Obrigado por usar a calculadora!")
        break
`
  }
];

export const CODE_EXPLANATIONS: CodeExplanation[] = [
  {
    concept: 'Funções (def)',
    symbol: 'def',
    title: 'Modularização com def',
    simpleExplanation: 'Uma função é como uma "receita de bolo" que você cria uma vez e pode chamar quantas vezes quiser. Evita ter que reescrever a mesma conta várias vezes.',
    codeExample: 'def somar(a, b):\n    return a + b\n\n# Chamada:\nresultado = somar(5, 3) # resultado vale 8',
    whyItMatters: 'Deixa o código legível, fácil de testar individualmente e fácil de consertar se houver um erro.',
    commonMistake: 'Esquecer o comando return. Sem ele, a função calcula mas devolve None (nada) para quem chamou!'
  },
  {
    concept: 'Entrada de Dados (input)',
    symbol: 'input()',
    title: 'Lendo o que o usuário digita',
    simpleExplanation: 'A função input() pausa o programa e espera que o usuário digite algo no teclado e aperte ENTER.',
    codeExample: 'nome = input("Qual o seu nome? ")',
    whyItMatters: 'Permite que seu programa seja dinâmico e interaja com pessoas reais em vez de usar números fixos.',
    commonMistake: 'O input() SEMPRE devolve um texto (String), mesmo que a pessoa digite "10". Somar "10" + "5" vira "105" (concatenação) em vez de 15!'
  },
  {
    concept: 'Conversão de Tipo (float)',
    symbol: 'float()',
    title: 'Transformando texto em número decimal',
    simpleExplanation: 'Como o input() devolve texto, usamos float(...) para convertê-lo em número decimal com ponto flutuante (ex: 10.5, 3.0, -2.5).',
    codeExample: 'num1 = float(input("Digite um número: "))\n# Se digitarem 4.5, num1 vira o número real 4.5',
    whyItMatters: 'Permite fazer contas matemáticas reais (+, -, *, /). Usamos float em vez de int para aceitar números quebrados.',
    commonMistake: 'Digitar vírgula em vez de ponto (ex: 5,2 em vez de 5.2 gera ValueError no Python).'
  },
  {
    concept: 'Condicionais (if / elif / else)',
    symbol: 'if / elif',
    title: 'Tomando decisões inteligentes',
    simpleExplanation: 'O if ("se") testa uma condição. Se for verdadeira, executa o bloco. O elif ("senão se") testa outra opção caso a anterior falhe. O else ("senão") cuida de qualquer outro caso.',
    codeExample: 'if opcao == "1":\n    # faz soma\nelif opcao == "2":\n    # faz subtracao\nelse:\n    print("Opcao invalida")',
    whyItMatters: 'É o cérebro da calculadora: decide qual operação matemática executar baseado no que o usuário escolheu.',
    commonMistake: 'Esquecer os dois pontos (:) no final da linha ou errar a indentação (espaços no início da linha).'
  },
  {
    concept: 'Divisão por Zero',
    symbol: 'b == 0',
    title: 'Prevenindo falhas matemáticas',
    simpleExplanation: 'Na matemática e na computação, dividir qualquer número por 0 é impossível. No Python, tentar fazer 10 / 0 causa um erro fatal (ZeroDivisionError) que trava o programa.',
    codeExample: 'if b == 0:\n    return "Erro: Não é possível dividir por zero!"\nreturn a / b',
    whyItMatters: 'Programas profissionais nunca devem travar se o usuário fizer uma ação inesperada.',
    commonMistake: 'Esquecer de checar antes de dividir e deixar o programa "quebrar" na frente do cliente.'
  },
  {
    concept: 'Formatação f-strings',
    symbol: 'f"..."',
    title: 'Exibindo resultados elegantes',
    simpleExplanation: 'Colocar um "f" antes das aspas permite encaixar variáveis diretamente dentro de chaves {variável}.',
    codeExample: 'a = 10\nb = 5\nprint(f"O resultado de {a} + {b} é igual a {a + b}")',
    whyItMatters: 'Muito mais limpo e legível do que fazer print("Resultado: " + str(a) + " + " + str(b)).',
    commonMistake: 'Esquecer a letra "f" minúscula no início da string: "O total é {x}" imprime literalmente "{x}".'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Por que precisamos usar float(input(...)) em vez de apenas input(...) para fazer contas?',
    options: [
      'Porque o input() retorna o texto digitado (string), e precisamos converter para número',
      'Porque o Python não aceita números sem a palavra float',
      'Porque float torna o programa mais rápido',
      'Não precisa, o Python soma automaticamente'
    ],
    correctIndex: 0,
    explanation: 'Exatamente! Todo dado retornado por input() é do tipo String (texto). Para calcular, precisamos transformar em número com float() ou int().'
  },
  {
    id: 2,
    question: 'O que acontece no Python se tentarmos executar a conta 15 / 0 sem nenhuma verificação prévia?',
    options: [
      'O resultado será 0',
      'O resultado será o valor infinito (Infinity)',
      'O Python gera um erro fatal chamado ZeroDivisionError e interrompe o programa',
      'O Python reinicia o computador'
    ],
    correctIndex: 2,
    explanation: 'Correto! Divisão por zero não é definida na matemática. Sem uma checagem (como if b == 0), o interpretador Python lança uma exceção ZeroDivisionError.'
  },
  {
    id: 3,
    question: 'Qual palavra-chave do Python usamos para criar uma nova função (como somar ou dividir)?',
    options: [
      'function',
      'def',
      'create',
      'func'
    ],
    correctIndex: 1,
    explanation: 'Muito bem! Em Python, a palavra reservada é "def" (abreviação de define).'
  },
  {
    id: 4,
    question: 'Como se chama o recurso moderno do Python f"O valor é {total}" para colocar variáveis dentro do texto?',
    options: [
      'Format String (f-string)',
      'Concatenação por chaves',
      'Print Dinâmico',
      'Expressão Regular'
    ],
    correctIndex: 0,
    explanation: 'Perfeito! As f-strings foram introduzidas no Python 3.6 e são a maneira mais rápida, elegante e recomendada de interpolar texto e variáveis.'
  }
];
