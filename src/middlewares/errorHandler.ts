import { Request, Response, NextFunction } from 'express'

import ApiError, { handleError, InternalError } from '../core/ApiError'

export default function errorHandler () {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
      const { statusCode, message } = handleError(err)

      return res.status(statusCode).json({ message: message })
    }

    const internalError = handleError(new InternalError())

    return res.status(internalError.statusCode).json({ message: internalError.message })
  }
}
