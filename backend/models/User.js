const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);
