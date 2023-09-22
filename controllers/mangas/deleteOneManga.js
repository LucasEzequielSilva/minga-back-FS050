import Manga from "../../models/Manga.js";

async function deleteOneManga(req, res, next) {
  try {
    const destroyer = await Manga.findByIdAndDelete(req.params.id);
    return res.status(200).json({ response: destroyer });
  } catch (error) {
    return res.status(404).json({ message: "No se pudo eliminar" });
  }
}

export default deleteOneManga;
