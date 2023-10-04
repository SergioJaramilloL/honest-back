import express from 'express'
import { createServer } from 'http'

import expressConfig from './config/express'
import routes from './routes'
import errorHandler from './middleware/errorHandler'
import connectDB from './config/database'

// setup server
const app = express()
export const server = createServer(app)
connectDB()

//Setup Express
expressConfig(app)
//Setup Routes
routes(app)
// Error habdler
app.use(errorHandler)

export default app