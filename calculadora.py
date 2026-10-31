# ==========================================
# CALCULADORA EM PYTHON
# Operações: Adição, Subtração, Multiplicação, Divisão e Porcentagem
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

def porcentagem(a, b):
    """Retorna b por cento de a: (a * b) / 100."""
    return (a * b) / 100

def main():
    # 2. Exibindo o menu para o usuário
    print("=" * 30)
    print("     CALCULADORA EM PYTHON")
    print("=" * 30)
    print("1 - Adição (+)")
    print("2 - Subtração (-)")
    print("3 - Multiplicação (*)")
    print("4 - Divisão (/)")
    print("5 - Porcentagem (%)")
    print("=" * 30)

    # 3. Lendo a opção do usuário
    opcao = input("Escolha a operação desejada (1/2/3/4/5): ")

    # 4. Validando se a opção é válida
    if opcao in ['1', '2', '3', '4', '5']:
        # Lendo os dois números com conversão para float (decimal)
        num1 = float(input("Digite o primeiro número (base): "))
        num2 = float(input("Digite o segundo número (ou taxa %): "))

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
        elif opcao == '5':
            resultado = porcentagem(num1, num2)
            print(f"\n>>> Resultado: {num2}% de {num1} = {resultado}")
    else:
        print("\nOpção inválida! Por favor, execute novamente e escolha entre 1 e 5.")

if __name__ == "__main__":
    main()
