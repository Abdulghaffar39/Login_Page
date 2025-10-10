const mongoose = require('mongoose');
const { Schema } = require('../Schema/dbschema')



mongoose.connect("mongodb+srv://Abdulghaffar:2C0qs1bxw0lbGDxC@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log('Connected to MongoDB');

}).catch((err) => {

    console.log('Error connecting to MongoDB:', err);

})


function auth(req, res, next) {

    res.send('Hello world!!')
}


// --------------------------------------------------------------------------------------
async function signup(req, res, next) {
    try {
        const { userName, userAge, userEmail, userPassword } = req.body;

        const user = await Schema.findOne({ userEmail })
        console.log(user, 'line number 41');

        if (user) {
            return res.send({
                status: 505,
                message: "user already exists",
            })
        }


        const newUser = new Schema({ userName, userAge, userEmail, userPassword });
        newUser.save();

        res.send({
            status: 200,
            newUser,
            message: "user has been created successfully"
        });



    } catch (err) {
        console.log(err);

        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}
// --------------------------------------------------------------------------------------

async function userDetails(req, res, next) {
    try {

        const users = await Schema.find()
        console.log(users, 'line number 41');
        res.send({
            message: "users recieved",
            users
        })


    } catch (err) {
        console.log(err);
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}




async function login(req, res, next) {

    try {

        const { loginEmail, loginPass } = req.body;
        const user = await Schema.find({ userEmail: loginEmail, userPassword: loginPass })
        // let isFound = false;
        console.log(user);

        res.json({ message: "Login successful", user: validUser });



        // const validUser = user.find(function (user) {
        //     return user.userEmail === loginEmail && user.userPassword === loginPass;
        //   });
    }
    catch (err) {
        return res.send({
            message: 'user not found',
            err,
            status: 404,
        })
    }
}


module.exports = { auth, signup, login, userDetails };