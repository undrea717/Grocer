const router = require("express").Router();
const GroceryController = require("../../controllers/grocery-controller");

// Matches with "/api/ingredient"
router.route("/add")
.get(grocery-controller.findAll)

router.route("ingredents/add")
	.post(grocery-controllers.create);	


  module.exports = router;
  