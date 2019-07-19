const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chatlog= new Schema({
    user: {
        type: String
    },
    message: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

let Chatroom = new Schema({
    room_name: {
        type: String
    },
    room_type: {
        type: String
    },
    owner: {
        type: String
    },
    chat_log: [Chatlog]
});


module.exports = mongoose.model('Chatroom', Chatroom);