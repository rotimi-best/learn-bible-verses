const mongoose = require('mongoose')
const Schema = mongoose.Schema
const timestamp = require('mongoose-timestamp')

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    userEmail: String,
    chatId: Number,
    // Add more fields if needed
})

UserSchema.plugin(timestamp)
module.exports = mongoose.model('User', UserSchema)
