import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'
const PORT = process.env.PORT || 5000

app.use(cors({ origin }))
app.use(morgan('dev'))

app.listen(PORT, () => console.log(`[App]: Listening on port ${PORT}`))
