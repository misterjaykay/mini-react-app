const db = require("../models");
const jwt = require("jsonwebtoken");

const expireAge = 7 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'yummy recipe', {
        expiresIn: expireAge
    });
};

module.exports = {
    // POST on /signup
    signUpPost: async function(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await db.User.create({ name, email, password});
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: expireAge * 1000 });
            res.status(201).json({ user: user._id});
        }
        catch(err) {
            console.log("sign up error: ", err);
            res.json(err);
        }
    },

    // POST on /login
    logInPost: async function(req, res) {
        const { email, password } = req.body;

        try {
            const user = await db.User.login(email, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: expireAge * 1000 });
            res.status(201).json({ user: user._id});
        }
        catch(err) {
            console.log("log in error: ", err);
            res.json(err);
        }
    }
}