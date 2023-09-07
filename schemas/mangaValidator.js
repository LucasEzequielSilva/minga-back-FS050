import joi from 'joi';
import joiOid from 'joi-oid';

const estructuraMangaValidador = joi.object({
    author_id: joiOid.objectId().required(),
    company_id: joiOid.objectId(),
    title: joi.string().min(2).max(25).required().messages({
        
    }),
    cover_photo: joi.string().uri().required().messages({
        
    }),
    description: joi.string().min(50).max(300).required().messages({
        
    }),
    category_id: joiOid.objectId().required(),
})

export default estructuraMangaValidador