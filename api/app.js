import express, { json } from 'express'
import { urlRouter } from './routes/url.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/url', urlRouter)

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
