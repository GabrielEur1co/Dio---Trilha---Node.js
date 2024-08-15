const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};
const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
      break;
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    } `
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada: ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block} \n`);

    //Rolar Dados

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //Teste de habilidade

    let totalTestSkillPlayer1 = 0;
    let totalTestSkillPlayer2 = 0;
    
    //Bloco de código da Reta

    if (block === "Reta") {
      totalTestSkillPlayer1 = diceResult1 + player1.VELOCIDADE;
      totalTestSkillPlayer2 = diceResult2 + player2.VELOCIDADE;

      await logRollResult(
        player1.NOME,
        "Velocidade",
        diceResult1,
        player1.VELOCIDADE
      );
      await logRollResult(
        player2.NOME,
        "Velocidade",
        diceResult2,
        player2.VELOCIDADE
      );

      if (totalTestSkillPlayer1 > totalTestSkillPlayer2) {
        console.log(`${player1.NOME} Marcou ponto! `);
        player1.PONTOS++;
        console.log(`-----------------------------------------------`);
      } else if (totalTestSkillPlayer1 < totalTestSkillPlayer2) {
        console.log(`${player2.NOME} Marcou ponto!`);
        player2.PONTOS++;
        console.log(`-----------------------------------------------`);
      } else {
        console.log(`A rodada de ${block} empatou!`);
        console.log(`-----------------------------------------------`);
      }
    } 
    
    //Bloco de código da curva

    else if (block === "Curva") {
      totalTestSkillPlayer1 = diceResult1 + player1.MANOBRABILIDADE;
      totalTestSkillPlayer2 = diceResult2 + player2.MANOBRABILIDADE;
      await logRollResult(
        player1.NOME,
        "Curva",
        diceResult1,
        player1.MANOBRABILIDADE
      );
      await logRollResult(
        player2.NOME,
        "Curva",
        diceResult2,
        player2.MANOBRABILIDADE
      );
      if (totalTestSkillPlayer1 > totalTestSkillPlayer2) {
        console.log(`${player1.NOME} Marcou ponto! `);
        player1.PONTOS++;
        console.log(`-----------------------------------------------`);
      } else if (totalTestSkillPlayer1 < totalTestSkillPlayer2) {
        console.log(`${player2.NOME} Marcou ponto!`);
        player2.PONTOS++;
        console.log(`-----------------------------------------------`);
      } else {
        console.log(`A rodada de ${block} empatou!`);
        console.log(`-----------------------------------------------`);
      }
    } 
    
    //Bloco de código confronto

    else {
      let powerResult1 = diceResult1 + player1.PODER;
      let powerResult2 = diceResult2 + player2.PODER;

      console.log(`O ${player1.NOME} confrontou o ${player2.NOME} 🥊`);
      await logRollResult(
        player1.NOME,
        "Confronto",
        diceResult1,
        player1.PODER
      );
      await logRollResult(
        player2.NOME,
        "Confronto",
        diceResult2,
        player2.PODER
      );

      if (powerResult1 > powerResult2) {
        console.log(`${player1.NOME} ganhou o confronto!`);
        if (player2.PONTOS > 0) {
          player2.PONTOS--;
          console.log(`${player2.NOME} perdeu 1 ponto!`);
          console.log(`-----------------------------------------------`);
        } else if (player2.PONTOS === 0) {
          console.log(
            `A pontuação de ${player2.NOME} é igual a zero, logo não perdeu pontos! `
          );
          console.log(`-----------------------------------------------`);
        }
      } else if (powerResult2 > powerResult1) {
        console.log(`${player2.NOME} ganhou o confronto!`);
        if (player1.PONTOS > 0) {
          player1.PONTOS--;
          console.log(`${player1.NOME} perdeu 1 ponto!`);
          console.log(`-----------------------------------------------`);
        } else if (player1.PONTOS === 0) {
          console.log(
            `A pontuação de ${player1.NOME} é igual a zero, logo não perdeu pontos! `
          );
          console.log(`-----------------------------------------------`);
        }
      } else {
        console.log(`O confronto empatou!`);
        console.log(`-----------------------------------------------`);
      }
    }
  }


  const pontuacaoFinalPlayer1 = player1.PONTOS;
  const pontuacaoFinalPlayer2 = player2.PONTOS;
  console.log(`***** PONTUAÇÃO FINAL 🎌 *****`)
  console.log(`${player1.NOME} ficou com: ${pontuacaoFinalPlayer1}`);
  console.log(`${player2.NOME} ficou com: ${pontuacaoFinalPlayer2} \n`);

  if (pontuacaoFinalPlayer1 > pontuacaoFinalPlayer2) 
    console.log(`${player1.NOME} WIM !!!🏆`);
  else if (pontuacaoFinalPlayer2 > pontuacaoFinalPlayer1) 
    console.log(`${player2.NOME} WIM !!!🏆`);
  else 
    console.log(`A corrida empatou!!`);
  
}




(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );

  await playRaceEngine(player1, player2);
})();
