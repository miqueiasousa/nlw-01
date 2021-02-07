import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'

app.use(cors({ origin }))
app.use(morgan('dev'))
app.use(express.json())

app.use('/', routes)

app.use(errorHandler())

export default app
