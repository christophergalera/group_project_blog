require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.MY_PORT;
const cors = require('cors');
const socketio = require('socket.io');
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser());
 
require('./config/mongoose.config');

require('./routes/blog.routes')(app);
require('./routes/user.routes')(app);

const server = app.listen(port, () => console.log("Your server is running for blog data!"));
 
const io = socketio(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: [ 'GET', 'POST' ],
        allowedHeaders: [ '*' ],
        credentials: true,
    }
});

io.on("connection", (socket) => {
    socket.broadcast.emit('added_post', data);


socket.on('added_post', (postId) => {
        socket.broadcast.emit('added_post', postId)
    });

socket.on('deleted_post', (postId) => {
    socket.broadcast.emit('added_post', postId)
});

});