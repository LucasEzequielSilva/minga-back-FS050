import joi from 'joi';

const estructuraUser = joi.object({
    email: joi.string().email().required().messages({

    }),
    password: joi.string().required().messages({

    }),
    photo: joi.string().uri().required().messages({

    }),
})

export default estructuraUser