import { ErrorType } from '../types/apiError'

export default class ApiError {
  public type: ErrorType
  public message: string

  constructor (type: ErrorType, message: string) {
    this.type = type
    this.message = message
  }
}

export class BadRequestError extends ApiError {
  constructor (message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message)
  }
}
