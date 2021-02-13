import { Request, Response, NextFunction } from 'express'

import { WrongTypeOfJSON } from '../core/ApiError'

export default function onlyJSON () {
  return (req: Request, res: Response, next: NextFunction) =>
    req.headers['content-type'] !== 'application/json' ? next(new WrongTypeOfJSON()) : next()
}
