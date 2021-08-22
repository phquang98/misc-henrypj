import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";

import { User } from "../models/User";
import { TUser } from "../types";

// --- TS checking ---
type ReqParams = {
  entityId: string;
};

type ReqBody = TUser;

type ReqQuery = {
  userId: number;
};

type ResBody = {
  data: User | User[] | undefined;
  quantity?: number;
};

// TODO: dont know what in here
type ResLocals = Record<string, unknown>;

// --- Controllers ---
// TODO: DRY code when create Repo -> call it in every controllers, is there any way to KISS it ?

const getAll = async (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery, ResLocals>,
  res: Response<ResBody, ResLocals>
) => {
  const foundAll = await getRepository(User).find();

  return res.status(200).json({ data: foundAll, quantity: foundAll.length });
};

const getOne = async (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery, ResLocals>,
  res: Response<ResBody, ResLocals>
) => {
  const foundInstnc = await getRepository(User).findOne(req.params.entityId);

  if (foundInstnc) {
    return res.status(200).json({ data: foundInstnc });
  } else {
    return res.status(200).json({ data: foundInstnc });
  }
};

const postOne = async (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery, ResLocals>,
  res: Response<ResBody, ResLocals>
) => {
  const initializedInstnc = getRepository(User).create({
    ...req.body
  });
  await initializedInstnc.save();

  return res.status(201).json({ data: initializedInstnc });
};

const putOne = async (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery, ResLocals>,
  res: Response<ResBody, ResLocals>
) => {
  const updatedInstnc = await getRepository(User).save({
    id: Number(req.params.entityId),
    ...req.body
  });

  return res.status(200).json({ data: updatedInstnc });
};

const deleteOne = async (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery, ResLocals>,
  res: Response<ResBody, ResLocals>
) => {
  console.log("running");

  const deletedInstnc = await getRepository(User).findOne(req.params.entityId);
  await getRepository(User).delete(req.params.entityId);

  return res.status(200).json({ data: deletedInstnc });
};

export { getAll, getOne, postOne, putOne, deleteOne };
