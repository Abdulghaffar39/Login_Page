const mongoose = require('mongoose')

let blogsSchema = new mongoose.Schema({

    blogTitle: {

        type: String,
        required: true,
    },

    blogAuthor: {

        type: String,
        required: true,
    },

    blogDescription: {

        type: String,
        required: true,
    }
})


let blogSchema = mongoose.model('blogs', blogsSchema);


module.exports = {

    blogSchema
}