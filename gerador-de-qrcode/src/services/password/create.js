import hendle from "./hendle.js";
import chalk from "chalk";



async function createPassword() {
    console.log(chalk.green("password"))
    const password = await hendle()
    console.log(password)
}


export default createPassword;