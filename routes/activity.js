var express = require("express");
var router = express.Router();
const {
  getActivities,
  addActivity,
} = require("../controller/activity.contoller");

/* GET home page. */
// router.get("/", getActivities);
router.get("/:user_id", getActivities);
router.post("/", addActivity);

module.exports = router;
