import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodies,
} from "./controllers/podcasts-controller";
import chalk from "chalk";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

//Criando o servidor e definindo os padrões de entrada, nesse caso usando o padra http(request and response).
const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodies(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
);

const port = process.env.PORT;
//Criando a porta do servidor. Aqui difinindo a porta 3333.
server.listen(port, () => {
  console.log(chalk.green(`✔ Servidor iniciado na porta :${port}`));
});
