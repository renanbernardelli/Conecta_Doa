import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`)
})
