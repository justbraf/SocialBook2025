import express from 'express'
import { PORT } from './config.js'

const app = express()

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT} and is ready to go`)
})

app.get('/', (req, res) => {
    res.status(200).send('Find another route')
})