import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'

app.use(cors({ origin }))
app.use(morgan('dev'))
app.use(express.json())

app.use('/', routes)

export default app
