const mongoose = require('mongoose');
const { userSchema } = require('../Schema/dbschema')


mongoose.connect("mongodb+srv://Abdulghaffar:KNnl2kd0lLtyh41S@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

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

        const Users = await userSchema.findOne({ userEmail })
        console.log(Users, 'line number 41');

        if (Users) {
            return res.send({
                status: 505,
                message: "user already exists",
            })
        }


        const newUser = new userSchema({ userName, userAge, userEmail, userPassword });
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


async function login(req, res, next) {

    try {
        const { userEmail, userPassword } = req.body;

        const user = await userSchema.findOne({ userEmail, userPassword });
        console.log(user, 'line number 74');

        if (user) {
            return res.send({
                status: 200,
                message: "Login Successfuly",
            })
        }

    }
    catch (err) {
        res.send({
            message: 'user not found',
            err,
            status: 404,
        })
    }
};


module.exports = { auth, signup, login };