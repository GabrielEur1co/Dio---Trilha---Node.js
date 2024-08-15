import { playRaceEngine } from "./gameEngine/raceEngine.js";
import { player1, player2 } from "./gameEngine/players.js";

(async function main() {
  console.log(
    `🏁🚨 A corrida entre ${player1.name} e ${player2.name} começou... \n`
  );

  playRaceEngine(player1, player2);
})();
