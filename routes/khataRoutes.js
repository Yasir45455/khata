<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const khataController = require("../controllers/khataController");
const authenticateAdmin = require('../middleWares/authMiddleware');
router.post("/",authenticateAdmin, khataController.addKhata);
router.get("/:clientId",authenticateAdmin, khataController.getKhataByUserId);
router.delete("/:id",authenticateAdmin, khataController.deleteKhata);

=======
const express = require("express");
const router = express.Router();
const khataController = require("../controllers/khataController");
const authenticateAdmin = require('../middleWares/authMiddleware');
router.post("/",authenticateAdmin, khataController.addKhata);
router.get("/:clientId",authenticateAdmin, khataController.getKhataByUserId);
router.delete("/:id",authenticateAdmin, khataController.deleteKhata);

>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
module.exports = router;