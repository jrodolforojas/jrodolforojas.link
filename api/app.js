import express, { json } from 'express'
import { urlRouter } from './routes/url.js'
import { corsMiddleware } from './middlewares/cors.js'
import 'dotenv/config'

const app = express()
app.use(json())
app.disable('x-powered-by')

const acceptedOrigins = process.env.ACCEPTED_ORIGINS.split(',')
const PORT = process.env.PORT || 1234

app.use(corsMiddleware({ acceptedOrigins }))

app.use('/url', urlRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
