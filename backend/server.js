import express from 'express'
import { PORT } from './config'

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT} and is ready to go`)
})

app.get('/', (req, res) => {
    res.status(200).send('Please read the manual for instructions on how to use this API.')
})

app.post('/new/contact', (req, res) => {
    addNew(contact)
    res.sendStatus(200)
})

app.get('/list', (req, res) => {
    getAllContacts()
    res.sendStatus(200)
})

app.get('/view/by_id', (req, res) => {
    getContact('_id')
    res.sendStatus(200)
})

app.delete('/remove/by_id', (req, res)=>{
    removeContact('_id')
    res.sendStatus(200)
})

app.put('/update', (req, res)=>{
    updateContact('_id')
    res.sendStatus(200)
})