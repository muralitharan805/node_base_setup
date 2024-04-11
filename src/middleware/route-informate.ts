import { NextFunction, Request, Response } from "express";

const routeInformateionLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(`${request.method} ${request.url}`);
  next();
};

export default routeInformateionLogger;
