import express from 'express'

import diaryRoutes from './routes/diaries'


const app = express()

app.use(express.json());//middleware que transforma la req body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Someone Ping here')
    res.send('pong')
})

app.use('/api/diaries', diaryRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });