import { Request, Response, NextFunction } from "express";

import { getAllAddresses } from "./address.service";

export const getAllHandler= async (
  req: Request, 
  res: Response,
  next: NextFunction
) => {
  try {
    const { search } = req.query

    if(search === '') {
      return res.status(200).json([])
    }

    const addresses = await getAllAddresses(search as string)
    res.status(200).json(addresses)
  } catch(error) {
    return next(error)
  }
}