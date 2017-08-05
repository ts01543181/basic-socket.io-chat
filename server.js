const express = require("express")
const socket = require('socket.io')
const path = require('path')
const app = express()

//make sure you initialize a variable for app.listen
const server = app.listen(3000, (err) => {
    if (err) {
        throw err
    } 
    console.log(`Listening on port 3000`)
})


app.use(express.static(path.join(__dirname, './public')))


const io = socket(server)

io.on('connection', (socket) => {
    console.log('socket connected', socket.id)

    //this is listening for the event emitting from client
    //then the server is going to emit back the data back to client/clients so every client will receive this data
    socket.on('message', (data) => {
        io.sockets.emit('new message', data)
    })    
})