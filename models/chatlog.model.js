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


module.exports = mongoose.model('Chatlog', Chatlog);