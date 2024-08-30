import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository";

export const serviceFilterEpsodies = async (podcastName: string | undefined) => {

  const queryString = podcastName?.split("?p=")[1] ?? "";

  const data = await repositoryPodcast(queryString);

  return data;
};

