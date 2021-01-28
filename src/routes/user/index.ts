import express from 'express'

import UserRepo from '../../database/repository/UserRepo'

const router = express.Router()

router.post('/', async (req, res) => {
  const user = await UserRepo.findOne({ email: req.body.email })

  if (user) {
    throw new Error('User email is already declared')
  }

  const createdUser = await UserRepo.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  return res.status(201).json(createdUser)
})

export default router
