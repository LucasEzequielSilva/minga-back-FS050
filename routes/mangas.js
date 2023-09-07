import express from "express";
import read from "../controllers/mangas/read.js";
import read_one from '../controllers/mangas/read_one.js';
import create_one from '../controllers/mangas/create_one.js';
import findCategory from "../middlewares/findCategory.js";
import estructuraMangaValidador from "../schemas/mangaValidator.js";
import validator from './../middlewares/validator.js';

const router = express.Router();

router.get("/", read)
router.get("/:id", read_one)
router.post("/", findCategory, validator(estructuraMangaValidador), create_one)

export default router;
//req.params.id