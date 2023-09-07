
import User from './../models/User.js';

async function getUsers(req, res, next) {
    try {
        const allUsers = await User.find()
        res.json({
            response: allUsers
        });

        console.log('hice una peticion')
    } catch (error) {

    }
}



export { getUsers }