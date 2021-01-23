import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'

app.use(cors({ origin }))
app.use(morgan('dev'))
app.use(express.json())

export default app
