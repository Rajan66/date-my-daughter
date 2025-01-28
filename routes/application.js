const express = require("express");
const router = express.Router();

const {
  createApplication,
  getAllApplication,
  getApplication,
  updateApplication,
  deleteApplication,
  validateEmail,
} = require("../controllers/application");

router.post("/application", validateEmail, createApplication);

router.get("/application/:id", getApplication);
router.get("/application", getAllApplication);

router.put("/application/:id", validateEmail, updateApplication);
router.delete("/application/:id", validateEmail, deleteApplication);

module.exports = router;
