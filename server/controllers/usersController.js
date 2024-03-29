const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/user");

const fetchUser = async (req, res) => {
    try {
        // Find the user
        const user = await User.findById(req.user._id);

        // Respond with them
        res.json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

async function signup(req, res) {
    try {
        //get email and password from request body
        const { fname, lname, dob, email, password } = req.body;

        // hash password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // create a new user
        await User.create({ fname, lname, dob, email, password: hashedPassword });

        // send back a response
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

async function login(req, res) {
    try {
    //get email and password from request body
    const { email, password } = req.body;

    //find user in database
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(400);

    //compare passwords
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);

    //create jwt token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days
    const secret = process.env.SECRET
    const token = jwt.sign({ sub: user._id, exp }, secret);

    //set cookie
    res.cookie("Authorization", token, secret, { 
        expires: new Date(exp),
        
        sameSite: "lax",
        secure: true,  
        signed: true,

        //secure: process.env.NODE_ENV === "production",  
    });
    console.log("token in usersController: ", token);

    // send back a response
    res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}
 
function logout(req, res) { 
    try {
        res.clearCookie("Authorization");
        res.cookie("Authorization", {
            name: "Authorization",
            path: "/",
            value: null,
            expires: new Date(0),
            
            sameSite: "lax",
            secure: true,
            signed: true,
        });
        console.log('Cookies in logout: ', req.cookies);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
}

module.exports = {
    fetchUser,
    signup,
    login,
    logout,
    checkAuth,
};