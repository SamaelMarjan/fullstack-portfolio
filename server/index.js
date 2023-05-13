require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./config/db')
const projectRoute = require('./routes/projectRoute')
const authRoute = require('./routes/userRoute')
const messageRoute = require('./routes/messageRoute')

const app = express()
connection()

app.use(cors())
app.use(express.json())

app.use('/project', express.static('./uploads'), projectRoute)
app.use('/auth', authRoute)
app.use('/message', messageRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server connected to port ${PORT}`))