import express from 'express'
import bcrypt from 'bcrypt'

import UserRepo from '../../database/repository/UserRepo'
import schema from './schema'
import validator from '../../middlewares/validator'

const router = express.Router()
const SALT_ROUNDS = 10

router.post(
  '/signup',
  validator(schema),
  async (req, res) => {
    const { name, email, password } = req.body
    const user = await UserRepo.findOne({ email })

    if (user) {
      throw new Error('User email is already declared')
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    const createdUser = await UserRepo.create({
      name,
      email,
      password: hashedPassword
    })

    return res.status(201).json(createdUser)
  }
)

export default router
