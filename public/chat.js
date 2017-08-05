const socket = io.connect('http://localhost:3000')

let chatArea = $('#chat-area')
let send = $('#send')

//you emit on the client side
    //server listens for the event
        //server will send back another event that client has to listen for

send.click(() => {
    let $message = $('#message').val()

    //this is client emitting a message event
    socket.emit('message', {
        message: $message
    })
})

socket.on('new message', (data) => {
    chatArea.append(`<div class="messages">${data.message}</div>`)
})