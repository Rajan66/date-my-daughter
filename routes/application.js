const express = require("express");
const router = express.Router();

const {
  createApplication,
  getAllApplication,
  getApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/application");

router.post("/application", createApplication);

router.get("/application/:id", getApplication);
router.get("/application", getAllApplication);

router.put("/application/:id", updateApplication);
router.delete("/application/:id", deleteApplication);

module.exports = router;
