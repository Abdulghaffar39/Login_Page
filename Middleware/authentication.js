const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();

console.log("secret key", process.env.JWTSECRETKEY);

const authrization = async (req, res, next) => {

    const header = req.header("Authorization");
    console.log(`here is an header ${header}`);


    if (!header) {

        return res.send({

            status: 401,
            message: "header are invalid",
        })
    }

    try {

        const token = header.split(" ")[1];     // Extract token after "Bearer"
        jwt.verify(token, process.env.JWTSECRETKEY, (err, user) => {

            if (err) {

                return res.sendStatus(403); // forbidden
            }

            req.user = user; // Attach decoded user to request
            console.log(req.user);
            next();

        })

    } catch (err) {

        res.send({

            status: 505,
            message: "User is not authorized"
        })

    }


}


module.exports = authrization;  
