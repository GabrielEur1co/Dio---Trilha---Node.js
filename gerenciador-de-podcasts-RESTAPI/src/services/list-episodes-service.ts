import { repositoryPodcast } from "../repositories/podcast-repository";

export const serviceListEpisodies = async () => {
  const data = await repositoryPodcast();

  return data;
};
