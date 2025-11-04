const mongoose = require('mongoose')

let blogsSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true,
    },

    author: {

        type: String,
        required: true,
    },

    description: {

        type: String,
        required: true,
    }
})


let blogSchema = mongoose.model('blogs', blogsSchema);


module.exports = {

    blogSchema  
}