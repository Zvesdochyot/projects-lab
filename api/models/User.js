const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = model('User', schema);