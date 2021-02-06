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

export class UnauthorizedError extends ApiError {
  constructor (message = 'Invalid Credentials') {
    super(ErrorType.UNAUTHORIZED, message)
  }
}

export class ForbiddenError extends ApiError {
  constructor (message = 'Permission Denied') {
    super(ErrorType.FORBIDDEN, message)
  }
}

export class NotFoundError extends ApiError {
  constructor (message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message)
  }
}

export class InternalError extends ApiError {
  constructor (message = 'Internal Error') {
    super(ErrorType.INTERNAL, message)
  }
}
