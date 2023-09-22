import joi from "joi";
import joiOid from "joi-oid";

const estructuraMangaUpdate = joi
  .object({
    author_id: joiOid.objectId(),
    company_id: joiOid.objectId(),
    title: joi.string().min(2).max(25).messages({
      "string.min": "El título debe tener al menos 2 caracteres.",
      "string.max": "El título no debe exceder los 25 caracteres.",
    }),
    cover_photo: joi.string().uri().messages({
      "string.uri": "La URL de la portada debe ser una URL válida.",
    }),
    description: joi.string().min(30).max(500).messages({
      "string.min": "La descripción debe tener al menos 30 caracteres.",
      "string.max": "La descripción no debe exceder los 500 caracteres.",
    }),
    category_id: joiOid.objectId(),
  })
  .min(1); // Al menos un campo debe estar

export default estructuraMangaUpdate;
