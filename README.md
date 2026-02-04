# DIO - Calculadora de Partidas Rankeadas

Projeto desenvolvido para o desafio **"Calculadora de partidas Rankeadas"** da **DIO (Digital Innovation One)**, aplicando fundamentos de **lógica de programação** com **JavaScript**:

- Variáveis e operadores
- Laços de repetição
- Estruturas condicionais
- Funções

---

## 🎯 Objetivo do Desafio

Criar uma função que receba a quantidade de **vitórias** e **derrotas** de um jogador, calcule o **saldo**:

> **saldo = vitórias - derrotas**

E então classifique o jogador em um nível de ranqueamento:

| Faixa de vitórias/saldo (regra do desafio) | Nível |
|---|---|
| menor do que 10 | Ferro |
| entre 11 e 20 | Bronze |
| entre 21 e 50 | Prata |
| entre 51 e 80 | Ouro |
| entre 81 e 90 | Diamante |
| entre 91 e 100 | Lendário |
| maior ou igual a 101 | Imortal |

✅ Ao final, exibir a mensagem:

> **"O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}"**

---

## 🧠 Como o Projeto Funciona

O programa simula um pequeno sistema de rank:

1. Pergunta **quantos jogadores** participaram.
2. Para cada jogador, solicita:
   - Nome
   - Número de vitórias
   - Número de derrotas
3. Calcula o **saldo** (vitórias - derrotas).
4. Chama a função `classificacao(nome, saldo)` para determinar o nível.
5. Exibe o resultado no console.
6. Ao final, mostra uma mensagem de encerramento.

---

## 🧩 Explicando o Código (por partes)

### 1) Entrada de dados e loop de jogadores
- O código usa `prompt()` para coletar os dados (nome, vitórias e derrotas).
- Usa um `for` para repetir o processo para cada jogador.

```js
for (let i = 1; i <= totaljogadores; i++) {
  const nameJogador = prompt(`Informe o nome do jogador ${i}: `);
  const vitorias = prompt(`Informe a quantidade de vitorias do jogador ${i}: `);
  const derrotas = prompt(`Informe a quantidade de derrotas do jogador ${i}: `);

  numVitorias = parseInt(vitorias, 10);
  numDerrotas = parseInt(derrotas, 10);

  saldoRank = numVitorias - numDerrotas;

  classificacao(nameJogador, saldoRank);
}
```

### 2) Função de classificação por nível

A função recebe o nome do jogador e o saldo já calculado, e define o nível com base nas regras:
```js
function classificacao(nameJogador, saldoRank) {
  let nivel = "";

  if (saldoRank <= 10) nivel = "Ferro";
  else if (saldoRank <= 20) nivel = "Bronze";
  else if (saldoRank <= 50) nivel = "Prata";
  else if (saldoRank <= 80) nivel = "Ouro";
  else if (saldoRank <= 90) nivel = "Diamante";
  else if (saldoRank <= 100) nivel = "Lendário";
  else if (saldoRank >= 101) nivel = "Imortal";

  console.log(`O Herói tem de saldo de ${saldoRank} está no nível de ${nivel}`);
}

```

### 📌 Saída final:

Cada jogador gera uma linha no console com seu saldo e nível.

No final o programa encerra exibindo:

```js
console.log(`Fim do rank! Total de jogadores: ${totaljogadores}`);
console.log("Obrigado por usar o sistema de rankeamento de jogadores!");

```

---

## ▶️ Como Rodar o Projeto

###  Opção 1: Rodar no navegador (mais simples)

- Como o código usa prompt(), a forma mais direta é rodar no Console do navegador:

- Abra o navegador (Chrome/Edge)

- Pressione F12 → aba Console

- Cole o código completo e pressione Enter

- Responda as perguntas nos prompt()

- Veja os resultados no console

### Opção 2: Rodar no Node.js (com ajustes)

- O Node.js não suporta prompt() nativamente. Para rodar via terminal:

- usar readline (nativo), ou

- instalar uma lib como prompt-sync

Obs: essa melhoria está listada abaixo em “Futuras melhorias”.

---

## 🧪 Exemplo de Execução (saída)

Após preencher os dados, você verá algo assim no console:

```js
O Herói tem de saldo de 18 está no nível de Bronze
O Herói tem de saldo de 55 está no nível de Ouro
Fim do rank! Total de jogadores: 2
Obrigado por usar o sistema de rankeamento de jogadores!

```

---

## 🚀 Futuras Melhorias (ideias para evoluir)

Aqui estão algumas melhorias que deixariam o projeto mais robusto e “cara de produto”:

- Validar entradas

  - Impedir valores vazios

  - Garantir que vitórias/derrotas sejam números válidos

  - Bloquear números negativos

- Corrigir e padronizar as faixas do desafio

  - Ajustar exatamente para: < 10, 11–20, 21–50 etc. (sem ambiguidades)

  - Definir claramente o que acontece com saldo = 10 ou 11 (ex.: regra inclusiva)

- Rodar no terminal (Node.js)

  - Trocar prompt() por readline ou prompt-sync

  - Criar um npm start

- Salvar ranking em estrutura de dados
  - Guardar os jogadores em um array de objetos:
  ```json
    { nome, vitorias, derrotas, saldo, nivel }
  ```
  - Exibir um ranking final ordenado por saldo

- Adicionar interface HTML simples

  - Um formulário com inputs e botão “Calcular”

  - Exibir o resultado na tela (sem depender do console)

- Testes automatizados

  - Criar testes para a função de classificação com vitórias/saldo específicos

---

## 🧾 Tecnologias Utilizadas

- JavaScript (lógica e fundamentos)

- Execução via Console do navegador usando prompt() e console.log()

---

## 👤 Autor

Desenvolvido por Gabriel Alves Varella da Costa
Desafio: DIO - Calculadora de Partidas Rankeadas

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). </br>
Criado por **Gabriel Alves Varella da Costa**.

