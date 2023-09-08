import express from 'express';
import { getUsers } from '../controllers/users/READ.js';
import { registerUser, signInUser, signOutUser } from '../controllers/users/CREATE.js';
import { updateUser } from '../controllers/users/UPDATE.js';
import { deleteUser } from '../controllers/users/DELETE.js';
import validator from './../middlewares/validator.js';
import estructuraUser from '../schemas/userValidator.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

/* GET users listing. */
router.get('/', getUsers);
router.post('/register', validator(estructuraUser), registerUser);
router.post('/signin', signInUser);
router.get('/signout', passport.authenticate('jwt', { session: false }), signOutUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;
