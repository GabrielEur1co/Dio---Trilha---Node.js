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
    } else if (block === "Curva") {
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
    } else {
      totalTestSkillPlayer1 = diceResult1 + player1.PODER;
      totalTestSkillPlayer2 = diceResult2 + player2.PODER;
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
    }
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  );

  await playRaceEngine(player1, player2);
})();
