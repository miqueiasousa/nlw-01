export interface IUser {
  id: number
  name: string
  email: string
  password: string
  'reset_password_token'?: string
  'created_at': number
  'updated_at': number
}

export interface IUserDTO extends Pick<IUser, 'name' | 'email' | 'password'> {}
