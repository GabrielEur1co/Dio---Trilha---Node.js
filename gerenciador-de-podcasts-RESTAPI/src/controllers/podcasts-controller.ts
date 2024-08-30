import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodies } from "../services/list-episodes-service";
import { serviceFilterEpsodies } from "../services/filter-epsodes-service";
import { HttpStatusCode } from "../utils/http-status-code";
import { HttpMethod } from "../utils/http-methods";
import { ContentType } from "../utils/content-type";

export const getListEpisodies = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodies();

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceFilterEpsodies(request.url);

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
};
