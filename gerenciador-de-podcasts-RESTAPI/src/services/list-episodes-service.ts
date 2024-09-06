
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceListEpisodies = async () => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast();

  responseFormat.statusCode =
    data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

    responseFormat.body = data

  return data;
};
