const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    estado: { type: Boolean, required: true },
});

module.exports = mongoose.model('Usuarios', UserSchema);