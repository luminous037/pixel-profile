import 'dotenv/config'
import { app } from './app'
import { serve } from '@hono/node-server'

const PORT = Number(process.env.PORT) || 10277

console.log(`The server is start, Port is ${PORT}`)

serve({
  fetch: app.fetch,
  port: PORT,
  hostname: '0.0.0.0'
})
