import { Request, Response } from "express";
import {
  createPlayerService,
  getPlayerByIdService,
  getPlayerService,
} from "../services/players-services";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body
  const httpResponse = await createPlayerService(bodyValue)
  
  if(httpResponse){
  res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
