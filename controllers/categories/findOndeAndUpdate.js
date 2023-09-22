import Category from "../../models/Category.js";

async function findOneAndUpdateOne(req, res, next) {
  try {
    const udp = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ response: udp });
  } catch (error) {
    return res.status(404).json({ message: "Not found" });
  }
}
export default findOneAndUpdateOne;
