import { ErrorType } from '../types/apiError'

export default abstract class ApiError {
  constructor (public type: ErrorType, public message: string) {}
}

export class BadRequestError extends ApiError {
  constructor (message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message)
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
