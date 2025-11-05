const { blogSchema } = require('../Schema/blogSchema');

async function postBlog(req, res, next) {

    try {

        const { title, author, description } = req.body;

        console.log('POST:', title, author, description);

        const newBlog = new blogSchema({ title, author, description });
        await newBlog.save();

        console.log(newBlog);

        res.send({

            status: 200,
            message: 'Blog created successfully',
            blog: newBlog

        });


    }
    catch (err) {

        res.status(500).send({
            message: 'Error creating blog',
            error: err.message
        });

    }
}

async function getBlog(req, res, next) {

    try {

        const { title, author, description } = req.query;

        console.log('GET:', title, author, description);

        return res.json({
            method: req.method,
            title,
            author,
            description,
        });

    }
    catch (err) {

        res.status(500).send({
            message: 'Error creating blog',
            error: err.message
        });

    }
}



module.exports = { postBlog, getBlog }