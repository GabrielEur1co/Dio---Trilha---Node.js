import { PlayerModel } from "../models/player-models";

const database: PlayerModel[] = [
  { id: 1, name: "Lionel Messi", time: "Paris Saint-Germain Football Club" },
  { id: 2, name: "Cristiano Ronaldo", time: "Al-Nassr Football Club" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player:PlayerModel) =>{
  database.push(player)
}