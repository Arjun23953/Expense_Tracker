const mongoose = require('mongoose');
const db = require('../db/db');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;


const userSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        required: true
    },
    dob: {
        type: String,
    },
   
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    profilePicUrl: {
        type: String,
        default: ''
    },
    
    address: {
        type: String,
        default: ''
    },

});

userSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function (userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return (isMatch);
    } catch (error) {
        throw error;
    }
}


const UserModel = db.model('user', userSchema);
module.exports = UserModel;