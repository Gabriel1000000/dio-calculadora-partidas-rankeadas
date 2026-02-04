let numVitorias, numDerrotas, saldoRank;
let totaljogadores=prompt("Informe quantos jogadores participaram do rank:")

totaljogadores=parseInt(totaljogadores,10);

for(let i=1; i<=totaljogadores; i++){

  const nameJogador=prompt(`Informe o nome do jogador ${i}: `);
  const vitorias=prompt(`Informe a quantidade de vitorias do jogador ${i}: `);
  const derrotas=prompt(`Informe a quantidade de derrotas do jogador ${i}: `);
  numVitorias= parseInt(vitorias , 10);
  numDerrotas= parseInt(derrotas , 10);
  saldoRank= numVitorias-numDerrotas;
  classificacao(nameJogador, saldoRank);

}

console.log(`Fim do rank! Total de jogadores: ${totaljogadores}`);
console.log("Obrigado por usar o sistema de rankeamento de jogadores!")

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
