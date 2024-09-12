import chalk from "chalk";
import creatApp from "./app";

const app = creatApp();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(chalk.green("Server started successfully ✔"));
  console.log(chalk.yellow(`Server running at port:`));
  console.log("");
  console.log(chalk.yellow(`http://localhost:${port} `));
});
