import express from 'express'
import {connection} from './db.js'
import router from './router.js'

const port = 3000
const app = express()

app.use(express.json())
app.use('/', router)

app.listen(port, 'localhost', () => {
    console.log('Start server to port: ' + port)
})