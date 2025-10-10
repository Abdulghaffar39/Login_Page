const mongoose = require('mongoose')

let schemaClass = new mongoose.Schema({

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


let Schema = mongoose.model('Users', schemaClass);


module.exports = {

    Schema
}