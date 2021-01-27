import express from 'express'

import UserRepo from '../../database/repository/UserRepo'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, email, password } = req.body
  const isUserEmailAlreadyDeclared = !!await UserRepo.findByOne({ email })

  if (isUserEmailAlreadyDeclared) {
    throw new Error('Bad Request')
  }

  const [user] = await UserRepo.create({ name, email, password })

  return res.status(201).json(user)
})

export default router
