import knex from '../../utils/knex'
import { IUser, IUserDTO } from '../../types/user'

class UserRepo {
  static async create (userData: IUserDTO) {
    const user = await knex<IUser>('users')
      .insert(userData)
      .returning('*')

    return user
  }

  static async findOne (entrie: Partial<IUser>) {
    const user = await knex<IUser>('users')
      .where(entrie)
      .first()

    return user
  }
}

export default UserRepo
