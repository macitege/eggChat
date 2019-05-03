const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


// console.log(`________THIS IS APP:`, http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
    console.log('an user connected')

    socket.on('chat message', msg => {
        console.log(`Message: ${msg}`)
    })
    socket.on('disconnect', () => {
        console.log('an user disconnected')
    })
})

http.listen(3000, () => console.log('listening on *:3000'));