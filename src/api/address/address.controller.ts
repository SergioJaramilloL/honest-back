import { Request, Response, NextFunction } from "express";
import { getAllAddresses } from "./address.service";
import { Address } from "./address.types";

export const getAllHandler= async (
  req: Request, 
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const { search } = req.query

    if(search === '') {
      return res.status(200).json([])
    }

    const addresses: Address[] = await getAllAddresses(search as string)
    res.status(200).json(addresses)
  } catch(error: any) {
    return next(error)
  }
}