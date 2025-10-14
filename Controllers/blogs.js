const { blogSchema } = require('../Schema/dbschema');


async function blog(req, res, next) {

    try {
        const { blogTitle, blogAuthor, blogDescription } = req.body;

        const newBlog = new blogSchema({ blogTitle, blogAuthor, blogDescription });
        await newBlog.save();
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



