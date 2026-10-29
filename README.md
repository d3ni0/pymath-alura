# 🧮 Calculadora Python — Imersão Alura

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Alura](https://img.shields.io/badge/Imersão-Alura-0070F3?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

<p align="center">
  <b>Uma calculadora modular e didática desenvolvida em Python para as quatro operações matemáticas fundamentais, acompanhada de um simulador interativo para iniciantes.</b>
</p>

[Visão Geral](#-visão-geral) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias-utilizadas) •
[Como Executar](#-como-executar) •
[Conceitos Aprendidos](#-conceitos-estudados)

</div>

---

## 📌 Visão Geral

Este projeto foi desenvolvido durante a **Imersão da Alura**, com foco em consolidar os primeiros passos na jornada de programação com **Python**. 

O objetivo principal é transformar conceitos teóricos (como funções, tratamento de erros e estruturas de decisão) em uma ferramenta prática, limpa e funcional que executa as operações básicas da matemática: **Adição**, **Subtração**, **Multiplicação** e **Divisão**.

---

## ✨ Funcionalidades

- ➕ **Adição** (`a + b`)
- ➖ **Subtração** (`a - b`)
- ✖️ **Multiplicação** (`a * b`)
- ➗ **Divisão Segura** (`a / b`), com tratamento preventivo contra divisão por zero (`ZeroDivisionError`)
- 🔢 Suporte para números decimais via `float()`
- 💬 Mensagens claras e amigáveis ao usuário via *f-strings*

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="22" height="22" align="center" /> **Python 3** | Linguagem principal para a lógica de cálculo e manipulação dos dados |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="22" height="22" align="center" /> **React + TypeScript** | Simulador interativo web com terminal e visualizador em tempo real |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="22" height="22" align="center" /> **Tailwind CSS** | Interface moderna com tema escuro inspirada em IDEs profissionais |

---

## 🚀 Como Executar

### Pré-requisitos
Ter o [Python 3](https://www.python.org/downloads/) instalado na sua máquina.

### Passo a passo
1. Clone este repositório ou baixe o arquivo `calculadora.py`:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-python-alura.git
   cd calculadora-python-alura
   ```

2. Execute o programa no terminal:
   ```bash
   python calculadora.py
   ```
   *(No macOS/Linux, utilize `python3 calculadora.py`)*

3. Escolha uma operação (1 a 4), digite os números e veja o resultado instantâneo!

---

## 💡 Conceitos Estudados

Durante o desenvolvimento deste projeto na **Imersão Alura**, foram colocados em prática:

1. **Modularização com Funções (`def`)**: Organização de cada operação em blocos reutilizáveis com `return`.
2. **Entrada e Tipagem de Dados (`input` & `float`)**: Conversão dinâmica de strings do teclado em números decimais.
3. **Controle de Fluxo (`if / elif / else`)**: Direcionamento lógico da operação escolhida.
4. **Tratamento de Exceções**: Prevenção ativa de erros matemáticos que poderiam quebrar o programa.
5. **Interpolação de Strings**: Uso elegante de *f-strings* (`f"Resultado: {num1} + {num2} = {resultado}"`).

---

## 🎓 Sobre a Imersão Alura

Projeto desenvolvido como parte dos estudos de programação da **Alura**, focado em acelerar o aprendizado prático e a criação de projetos de portfólio para a comunidade dev.

Feito com 💙 por um(a) estudante entusiasta de tecnologia!
