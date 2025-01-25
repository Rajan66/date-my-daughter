const express = require("express");
const router = express.Router();

const {
  addEmail,
  // getAllEmail,
  // getEmail,
  // updateEmail,
  // deleteEmail,
} = require("../controllers/valid_email");

router.post("/add/email", addEmail);

// router.get("/email/:id", getEmail);
// router.get("/email", getAllEmail);

// router.put("/email/:id", updateEmail);
// router.delete("/email/:id", deleteEmail);

module.exports = router;
