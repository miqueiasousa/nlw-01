import { Request, Response, NextFunction } from 'express'

import { InvalidJSONError } from '../core/ApiError'

export default function bodyParserErrorHandler () {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      next(new InvalidJSONError())
    } else {
      next()
    }
  }
}
