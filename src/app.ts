import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import routes from './routes'
import errorHandler from './middlewares/errorHandler'
import bodyParserErrorHandler from './middlewares/bodyParserErrorHandler'

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'

app.use(helmet())
app.use(cors({ origin }))
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParserErrorHandler())

app.use('/', routes)

app.use(errorHandler())

export default app
