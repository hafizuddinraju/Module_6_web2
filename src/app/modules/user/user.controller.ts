import { NextFunction, Request, Response } from "express";
import { createUserToDB, getuserFromDB } from "./user.service";

export const createUser =  async(req:Request, res:Response, next:NextFunction) => {
    // 1. Create an interface representing a document in MongoDB.
    const data = req.body
  const user = await createUserToDB(data);
  res.status(200).json({
    status:"Success",
    data:user
  })
  }
export const getUsers =  async(req:Request, res:Response, next:NextFunction) => {
    // 1. Create an interface representing a document in MongoDB.

  const user = await getuserFromDB();
  res.status(200).json({
    status:"Success",
    data:user
  })
  }