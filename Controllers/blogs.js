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



async function createBlog(req, res, next) {



    try {
        const { title, author, description, } = req.body;
        const newBlog = new blogSchema({ title, author, description });
        await newBlog.save();

        console.log(newBlog);

        res.status(201).send({
            status: 201,
            message: 'Blog created successfully',
            blog: newBlog
        });


    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: 'Error creating blog',
            error: err.message
        });
    }
}


// ✅ READ (Get All Blogs)
async function getAllBlogs(req, res) {
    try {
        const blogs = await blogSchema.find();
        res.status(200).send(blogs);
    } catch (err) {
        res.status(500).send({
            message: 'Error fetching blogs',
            error: err.message
        });
    }
}

// ✅ UPDATE Blog
async function updateBlog(req, res) {
    try {
        const { id } = req.params;
        const { title, author, description } = req.body;

        const updatedBlog = await blogSchema.findByIdAndUpdate(
            id,
            { title, author, description },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).send({ message: 'Blog not found' });
        }

        res.status(200).send({
            message: 'Blog updated successfully',
            blog: updatedBlog
        });
    } catch (err) {
        res.status(500).send({
            message: 'Error updating blog',
            error: err.message
        });
    }
}

// ✅ DELETE Blog
async function deleteBlog(req, res) {
    try {
        const { id } = req.params;

        const deleted = await blogSchema.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).send({ message: 'Blog not found' });
        }

        res.status(200).send({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).send({
            message: 'Error deleting blog',
            error: err.message
        });
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
};

