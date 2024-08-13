import { player1, player2 } from "./players.js";

export async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export async function getRandomBlock() {
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

export async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    } `
  );
}

export async function playRaceEngine(character1, character2) {
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
      totalTestSkillPlayer1 = diceResult1 + player1.speed;
      totalTestSkillPlayer2 = diceResult2 + player2.speed;

      await logRollResult(
        player1.name,
        "Velocidade",
        diceResult1,
        player1.speed
      );
      await logRollResult(
        player2.name,
        "Velocidade",
        diceResult2,
        player2.speed
      );
    } else if (block === "Curva") {
      totalTestSkillPlayer1 = diceResult1 + player1.abilityToManeuver;
      totalTestSkillPlayer2 = diceResult2 + player2.abilityToManeuver;
      await logRollResult(
        player1.name,
        "Curva",
        diceResult1,
        player1.abilityToManeuver
      );
      await logRollResult(
        player2.name,
        "Curva",
        diceResult2,
        player2.abilityToManeuver
      );
    } else {
      totalTestSkillPlayer1 = diceResult1 + player1.power;
      totalTestSkillPlayer2 = diceResult2 + player2.power;
      await logRollResult(
        player1.name,
        "Confronto",
        diceResult1,
        player1.power
      );
      await logRollResult(
        player2.name,
        "Confronto",
        diceResult2,
        player2.power
      );
    }
  }
}


