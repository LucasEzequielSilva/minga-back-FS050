import express from "express";
import read from "../controllers/mangas/read.js";
import read_one from "../controllers/mangas/read_one.js";
import create_one from "../controllers/mangas/create_one.js";
import findCategory from "../middlewares/findCategory.js";
import schemaManga from "../schemas/mangaValidator.js";
import validator from "./../middlewares/validator.js";
import updateOne from "../controllers/mangas/updateOne.js";
import estructuraMangaUpdate from "../schemas/mangaSchemaUpdate.js";
import deleteOneManga from "../controllers/mangas/deleteOneManga.js";

const router = express.Router();

router.get("/", read);
router.get("/:id", read_one);
router.delete("/:id", deleteOneManga);
router.put("/:id", validator(estructuraMangaUpdate), updateOne);
router.post("/", findCategory, validator(schemaManga), create_one);

export default router;
