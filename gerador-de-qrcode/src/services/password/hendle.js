async function hendle() {
  let caracters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH

  

  if (process.env.UPPERCASE_LETTERS == "true") {
    caracters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (process.env.LOWERCASE_LETTERS == "true") {
    caracters.push(..."aabcdefghijklmnopqrstuvwxyz");
  }

  if (process.env.NUMBERS == "true") {
    caracters.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS == "true") {
    caracters.push(..."?!()[]{}+-*/=%><&|@$#_-/");
  }

  for(let i =0; i < passwordLength; i++){
    const index = Math.floor(Math.random()* caracters.length)
    password += caracters[index]
  }
  
  return password;
}

export default hendle;

