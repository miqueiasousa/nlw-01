import express from 'express'
import bcrypt from 'bcrypt'

import UserRepo from '../../database/repository/UserRepo'

const router = express.Router()
const SALT_ROUNDS = 10

router.post('/signup', async (req, res) => {
  const user = await UserRepo.findOne({ email: req.body.email })

  if (user) {
    throw new Error('User email is already declared')
  }

  const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
  const createdUser = await UserRepo.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })

  return res.status(201).json(createdUser)
})

export default router
