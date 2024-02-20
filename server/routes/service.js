// project-root/server/routes/login.js
const express = require("express");

const router = express.Router();

// Render login form
router.get("/", (req, res) => {
  res.render("services");
});

module.exports = router;
