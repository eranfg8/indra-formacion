const express = require('express')
const cors = require('cors')
const http = require('http')
const appRoutes = require('./routes')

const app = express()
app.use(cors({
    origin: ['http://localhost:4200']
}))

app.use(express.json())


app.use(appRoutes)
const server = http.createServer(app)

server.listen(3200, () => {
    console.log("Listening en http://localhost:3200")
})