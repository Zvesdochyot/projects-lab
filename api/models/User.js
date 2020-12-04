const { Schema, model } = require('mongoose');

module.exports = model(
    'User',
    new Schema({
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
            required: false,
            default: null
        },
        createdAt: {
            type: Date,
            required: false,
            default: null
        },
        updatedAt: {
            type: Date,
            required: false,
            default: null
        }
    })
);