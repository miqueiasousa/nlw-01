import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from 'joi'

export default function validator (schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body)

    if (!error) {
      return next()
    }

    return res.status(400).json({ message: 'Bad Request' })
  }
}
