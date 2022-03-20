const {Router} = require("express");
const {
  postComments,
  getComments,
  putCalificacion,
  getCommentsImg,
} = require("../controllers/comments");
const router = Router();
router.post("/:idImg", postComments);
router.get("/", getComments);
router.get("/:idImg", getCommentsImg);
router.put("/:category/:idImg", putCalificacion);
module.exports = router;
