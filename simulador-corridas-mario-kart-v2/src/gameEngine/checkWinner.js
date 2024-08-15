export async function checkWinner(player1, player2) {

    console.log(`==============  FIM DA CORRIDA   ================\n`)

    if(player1.score > player2.score){
      console.log(`${player1.name} venceu a corrida com ${player1.score} pontos 🎌🏆`)
    }
    else if(player2.score > player1.score){
      console.log(`${player2.name} venceu a corrida com ${player2.score} pontos 🎌🏆`)
    }else{
        console.log(`A corrida entre o ${player1.name} e o ${player2.name} terminou empatada! 🎌`)
    }
  
  }