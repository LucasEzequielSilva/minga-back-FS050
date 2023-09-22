import Manga from "../../models/Manga.js";

async function updateOne(req, res, next) {
  let { id } = req.params;
  try {
    await Manga.updateOne({ _id: id }, req.body);
    return res.status(200).json({ response: "success" });
  } catch (error) {
    return res.status(404).json({ message: "Not found" });
  }
}

export default updateOne;
