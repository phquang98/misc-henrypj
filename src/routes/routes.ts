import { Router } from "express";

import { deleteOne, getAll, getOne, postOne, putOne } from "../controllers/User";

const mainRouter = Router();

// GET ALL
mainRouter.get("/api/user", getAll);

// CRUD ONE
mainRouter.get("/api/user/:entityId", getOne);
mainRouter.post("/api/user", postOne);
mainRouter.put("/api/user/:entityId", putOne);
mainRouter.delete("/api/user/:entityId", deleteOne);

export default mainRouter;
