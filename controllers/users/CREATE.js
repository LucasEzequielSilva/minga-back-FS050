import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';

async function registerUser(req, res, next) {
    let {
        email,
        password,
        photo,
        role
    } = req.body

    password = bcrypt.hashSync(password, 10)

    try {
        const newUser = await User.create({
            email,
            password,
            photo,
            role
        })
        res.json({
            response: newUser
        });
    } catch (error) {
        console.log(error)
    }
}
async function signInUser(req, res, next) {
    let {
        email,
        password
    } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (user) {

            const passwordIsOk = bcrypt.compareSync(password, user.password)

            if (passwordIsOk) {
                user.online = true

                await user.save()
                const token = jwt.sign({ ...user._doc }, process.env.SECRET, {
                    expiresIn: 60 * 60 * 24 * 365
                })

                res.json({
                    success: true,
                    response: user,
                    token: token
                });
            } else {
                res.status(400).json({
                    success: false,
                    response: null,
                    message: "Invalid credentials"
                    // token: token
                });
            }
        } else {
            res.status(400).json({
                success: false,
                response: null,
                message: "Invalid credentials"
                // token: token
            });
        }
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            response: null,
            message: "Internal server error"
            // token: token
        });
    }
}

async function signOutUser(req, res, next) {
    try {
        const id = req.user._id

        const user = await User.findById(id)
        user.online = false;
        await user.save()
        res.json({
            success: true,
            message: "Sign out successful"
        })
    } catch (error) {
        console.log(error);
    }
}



export { registerUser, signInUser, signOutUser }