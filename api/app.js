import express, { json } from 'express'
import { taskRouter } from './routes/task.js'
import { corsMiddleware } from './middleware/cors.js'
import { authRouter } from './routes/auth.js'

const app = express()
app.use(json())
app.use(corsMiddleware())

app.disable('x-powered-by')

app.use('/tasks', taskRouter)
app.use('/auth', authRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listener on port http://localhost:${PORT}`)
})
