const {Router} = require("express");
const router = Router();
const {
  getmice,
  getKeyboards,
  getmonitors,
} = require("../controllers/categories");
router.get("/mice", getmice);
router.get("/keyboards", getKeyboards);
router.get("/monitors", getmonitors);
module.exports = router;
