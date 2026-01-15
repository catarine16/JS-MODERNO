# 🚀 Glossário JS Moderno: De volta aos Fundamentos

Fiz uma breve pausa nos meus estudos de **React** para consolidar a base de JavaScript Moderno (ES6+). Este repositório serve como um guia de referência rápida (glossário) onde recapituluei conceitos cruciais para o desenvolvimento frontend moderno.

## 📖 Conteúdos Revisados

Abaixo, os tópicos que documentei no código com exemplos práticos:

### 1. Escopo de Variáveis (`var`, `let`, `const`)
Revisão de escopo de bloco e global. 
* **Dica:** O uso de `let` dentro de loops e condicionais evita "vazamentos" de escopo que o `var` causava.

### 2. Arrow Functions & Contexto `this`
Diferença entre funções tradicionais e setas.
* **Ponto Chave:** Como as Arrow Functions mantêm o contexto do `this` (léxico), facilitando o uso em métodos como `setTimeout` dentro de objetos.

### 3. Métodos de Array (`filter` & `map`)
A base da manipulação de dados no React.
* **Filter:** Cria um novo array apenas com elementos que passam em um teste.
* **Map:** Transforma cada item de um array (muito usado para converter listas de objetos em elementos JSX).

### 4. Template Literals
Uso de backticks (`` ` ``) e `${}` para interpolação de strings, tornando o código muito mais legível que a concatenação antiga.

### 5. Destructuring (Desestruturação)
Técnica para extrair dados de arrays e objetos em variáveis distintas de forma rápida. Essencial para lidar com `props` no React.

### 6. Spread Operator (`...`)
Utilizado para copiar ou fundir arrays e objetos sem mutar os dados originais.

### 7. Classes e Herança
Conceitos de Programação Orientada a Objetos (POO) no JS:
* `constructor` para inicializar propriedades.
* `super()` para herdar atributos de classes pai.
* Métodos personalizados para lógica de negócio (ex: cálculo de desconto).

---

## 🛠️ Como o código está estruturado?
O arquivo principal está dividido por seções numeradas de 1 a 9, cada uma com exemplos práticos de saída no console.

> "Para construir componentes React complexos, é preciso dominar a lógica que os sustenta."
