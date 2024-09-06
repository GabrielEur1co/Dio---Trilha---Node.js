
import { repositoryPodcast } from "../repositories/podcast-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceFilterEpsodies = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

// O código a seguir e uma estutura logica if else reduzida, onde o ponto de interrogação (?) reporesenta o if, e os dois pontos (:) representa o else !
  responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT 

/*   if (data.length !== 0) {
    responseFormat.statusCode = HttpStatusCode.OK;
  } else {
    responseFormat.statusCode = HttpStatusCode.NO_CONTENT;
  } */

  responseFormat.body = data

  return responseFormat;
};
