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

export function handleError (err: ApiError) {
  switch (err.type) {
    case ErrorType.BAD_REQUEST:
      return {
        statusCode: 400,
        message: err.message
      }
    case ErrorType.UNAUTHORIZED:
      return {
        statusCode: 401,
        message: err.message
      }
    case ErrorType.FORBIDDEN:
      return {
        statusCode: 403,
        message: err.message
      }
    case ErrorType.NOT_FOUND:
      return {
        statusCode: 404,
        message: err.message
      }
    case ErrorType.INTERNAL:
      return {
        statusCode: 500,
        message: err.message
      }
    default:
      return {
        statusCode: 500,
        message: 'Something wrong happened'
      }
  }
}
