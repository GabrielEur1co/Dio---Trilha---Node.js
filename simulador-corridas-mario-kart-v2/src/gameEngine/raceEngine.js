import { player1, player2 } from "./players.js";
import { rollDice } from "./rollDice.js";
import { getRandomBlock } from "./getRandomBlock.js";
import { logRollResult } from "./logRollResult.js";
import { checkWinner } from "./checkWinner.js";

export async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`==============  🏁 Rodada: ${round}   ================`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block} \n`);

    //Rolar Dados

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //Teste de habilidade

    let totalTestSkillPlayer1 = 0;
    let totalTestSkillPlayer2 = 0;

    if (block === "RETA") {
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

      if (totalTestSkillPlayer1 > totalTestSkillPlayer2) {
        console.log(`${player1.name} ganhou 1 ponto!`);
        player1.score++;
      } else if (totalTestSkillPlayer2 > totalTestSkillPlayer1) {
        console.log(`${player2.name} ganhou 1 ponto!`);
        player2.score++;
      } else {
        console.log(`A rodada terminou em empate, nenhum jogador pontuou! \n`);
      }

      console.log(`-----------------------------------------------`);
    } else if (block === "CURVA") {
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

      if (totalTestSkillPlayer1 > totalTestSkillPlayer2) {
        console.log(`${player1.name} ganhou 1 ponto!`);
        player1.score++;
      } else if (totalTestSkillPlayer2 > totalTestSkillPlayer1) {
        console.log(`${player2.name} ganhou 1 ponto!`);
        player2.score++;
      } else {
        console.log(`A rodada terminou em empate, nenhum jogador pontuou! \n`);
      }

      console.log(`-----------------------------------------------`);
    } else {
      let powerResult1 = diceResult1 + player1.power;
      let powerResult2 = diceResult2 + player2.power;

      console.log(`O ${player1.name} confrontou o ${player2.name} 🥊`);

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

      if (powerResult1 > powerResult2 && player2.score > 0) {
        player2.score--;
        console.log(`O jogador ${player2.name} perdeu um 1 ponto.`);
      } else if (powerResult2 > powerResult1 && player1.score > 0) {
        player1.score--;
        console.log(`O jogador ${player1.name} perdeu um 1 ponto.`);
      } 
      if(powerResult1 === powerResult2) {
        console.log(
          `A rodadada de CONFRONTO entre o ${player1.name} e ${player2.name}, empatou!`
        );
      }

      console.log(`-----------------------------------------------`);
    }
  }

  checkWinner(player1,player2)

}


