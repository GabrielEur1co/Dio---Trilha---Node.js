import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodies,
} from "./controllers/podcasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //queryString
  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodies(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};
