import express from "express";
import read_all from "../controllers/categories/read.js";
import findOneAndUpdateOne from "../controllers/categories/findOndeAndUpdate.js";

let router = express.Router();
router.get("/", read_all);
router.put("/:id", findOneAndUpdateOne);

export default router;
