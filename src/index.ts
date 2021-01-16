import express from 'express'
import cors from 'cors'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'
const PORT = process.env.PORT || 5000

app.use(cors({ origin }))

app.listen(PORT, () => console.log(`[App]: Listening on port ${PORT}`))
