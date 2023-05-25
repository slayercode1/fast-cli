import { NextFunction, Request, Response } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  switch (err.statusCode) {
    case 409:
      return res.status(409).json({ message: 'Conflict' });
    case 400:
      return res.status(400).json({ message: 'Bad Request' });
    case 403:
      return res.status(403).json({ message: 'Forbidden' });
    case 500:
      return res.status(500).json({ message: 'Internal Server Error' });
    case 404:
      return res.status(404).json({ message: 'Not Found' });
    default:
      next(err);
  }
}

export default errorHandler;
