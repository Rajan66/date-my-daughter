const express = require("express");
const router = express.Router();

const {
  addEmail,
  getAllEmail,
  getEmail,
  updateEmail,
  deleteEmail,
  checkAdmin,
} = require("../controllers/valid_email");

router.post("/add/email", checkAdmin, addEmail);

router.get("/email/:id", checkAdmin, getEmail);
router.get("/email", checkAdmin, getAllEmail);

router.put("/email/:id", checkAdmin, updateEmail);
router.delete("/email/:id", checkAdmin, deleteEmail);

module.exports = router;
