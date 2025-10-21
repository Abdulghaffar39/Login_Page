const mongoose = require('mongoose');
const hashy = require('hashy');
const { userSchema } = require('../Schema/dbschema')


mongoose.connect("mongodb+srv://Abdulghaffar:XgLdPoOjzhfYddDZ@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {

    console.log('Connected to MongoDB signup/login');

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
        console.log(Users, 'line number34');

        if (Users) {
            return res.send({
                status: 505,
                message: "user already exists",
            })
        }


        hashy.hash(userPassword, function (error, hash) {

            if (error) {
                return console.log(error);
            }

            const newUser = new userSchema({ userName, userAge, userEmail, userPassword: hash });
            newUser.save();
            res.send({
                status: 200,
                newUser,
                message: "user has been created successfully"
            });

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

        const user = await userSchema.findOne({ userEmail });
        console.log(user, 'line number 80');

        if (!user) {
            return res.send({
                status: 404,
                message: "User not found"
            });
        }

        hashy.verify(userPassword, user.userPassword, function (error, success) {
            if (error) {
                return console.error(error);
            }

            if (success) {

                return res.send({
                    status: 200,
                    message: "user successfully login!!!",

                    validUser: {
                        name: user.userName,
                        age: user.userAge,
                        email: user.userEmail,
                    },
                })

            } else {

                return res.send({
                    status: 401,
                    message: "Incorrect password!",
                });
            }
        });
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