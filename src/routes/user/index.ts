import express from 'express'

import UserRepo from '../../database/repository/UserRepo'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const user = await UserRepo.findOne({ id: Number(req.params.id) })

  if (!user) {
    throw new Error('User not found')
  }

  return res.status(200).json(user)
})

export default router
