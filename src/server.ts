import express, { response } from 'express'

const app = express()

const PORTA = 3000

app.get('/', (req, res) => {
  return res.send('Olá NLW')
})

app.post('/test-post', (req, res) => {
  return res.send('Olá NLW método POST')
})
app.listen(PORTA, () => console.log('server is running'))
