const jwt = require("jsonwebtoken")
const { userSchema } = require('../Schema/dbschema')
const hashy = require('hashy');

function auth(req, res, next) {

    res.send('Hello world!!')
}

// --------------------------------------------------------------------------------------
async function signup(req, res) {
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
                newUser,
                status: 200,
                message: "user has been created successfully",
            });


        });

    } catch (err) {

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


            if (success) {

                // console.log(process.env.JWTSECRETKEY, "process.env.JWTSECRETKEY");


                let token = jwt.sign({

                    userName: user.userName,
                    userAge: user.userAge,
                    userEmail: user.userEmail,
                    userPassword: user.userPassword,

                },
                    process.env.JWTSECRETKEY,
                    { expiresIn: "1d" }
                );

                res.cookie("jwtToken", token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000, // 1 day
                    sameSite: "Lax"
                });

                return res.send({
                    status: 200,
                    message: "user login successfully",
                    token,
                });
            }

        });
    }
    catch (err) {
        return res.send({
            message: 'user not found',
            err,
            status: 404,
        })
    }
};


async function data(req, res, next) {

    try {

        const userData = await userSchema.find().sort({ createdAt: -1 });

        // console.log(userData, 'line number 133');

        res.json({

            status: 200,
            userData,
            message: 'working successfuly'

        })


    }
    catch (err) {

        res.send({

            err,
            status: 404,
            message: 'userData not found',
        })
    }
};


module.exports = { signup, login, data };