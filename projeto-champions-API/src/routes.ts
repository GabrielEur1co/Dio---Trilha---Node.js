import { Router } from "express";
import * as PlayerControle from "./controllers/players-crontoler";

const router = Router();

router.get("/players", PlayerControle.getPlayer);
router.post("/players", PlayerControle.postPlayer);

router.get("/players/:id", PlayerControle.getPlayerById);

export default router;
