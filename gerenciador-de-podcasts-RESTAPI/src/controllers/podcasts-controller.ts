import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodies } from "../services/list-episodes-service";
import { serviceFilterEpsodies } from "../services/filter-epsodes-service";
import { HttpStatusCode } from "../utils/http-status-code";

import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON };

export const getListEpisodies = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodies();

  response.writeHead(HttpStatusCode.OK, DEFAULT_CONTENT);
  response.write(JSON.stringify(content));

  response.end();
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterEpsodies(request.url);

  response.writeHead(content.statusCode, DEFAULT_CONTENT);
  response.write(JSON.stringify(content.body));

  response.end();
};
