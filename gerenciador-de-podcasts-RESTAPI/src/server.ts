import * as http from "http";
import chalk from "chalk";
import { app } from "./app";

//Criando o servidor e definindo os padrões de entrada, nesse caso usando o padra http(request and response).
const server = http.createServer(app);

const port = process.env.PORT;
//Criando a porta do servidor. Aqui difinindo a porta 3333.
server.listen(port, () => {
  console.log(chalk.green(`✔ Servidor iniciado na porta :${port}`));
});
