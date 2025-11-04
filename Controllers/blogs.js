// const mongoose = require('mongoose');
const { blogSchema } = require('../Schema/dbschema');


// mongoose.connect("mongodb+srv://Abdulghaffar:XgLdPoOjzhfYddDZ@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// }).then(() => {

//     console.log('Connected to MongoDB blog');

// }).catch((err) => {

//     console.log('Error connecting to MongoDB:', err);

// })



async function blog(req, res, next) {

    
    
    try {
        const { title, author, description, } = req.body;
        
        const newBlog = new blogSchema({ title, author, description });
        await newBlog.save();

        console.log(newBlog);

        if (newBlog) {

            return res.send({
                status: 200,
                message: "Blog created successfuly",
            })
        }

    }
    catch (err) {
        res.send({
            err,
            status: 500,
            message: 'Server code feiled',
        })
    }
};


module.exports = { blog }



