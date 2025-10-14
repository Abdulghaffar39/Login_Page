const mongoose = require('mongoose')

let signupSchema = new mongoose.Schema({

    userName: {

        type: String,
        required: true,
    },

    userAge: {

        type: String,
        required: true,
    },

    userEmail: {

        type: String,
        required: true,
    },

    userPassword: {

        type: String,
        required: true,
    }
})


let userSchema = mongoose.model('Users', signupSchema);


module.exports = {

    userSchema
}