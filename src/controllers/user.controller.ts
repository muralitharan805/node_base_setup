import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();
const getUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.send(userService.getUsers());
};

export default getUsers;
