<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authenticateAdmin = require('../middleWares/authMiddleware');

router.post("/",authenticateAdmin, clientController.createClient);
router.get("/",authenticateAdmin, clientController.getClients);
router.get("/:id",authenticateAdmin, clientController.getClientById);
router.put("/:id",authenticateAdmin, clientController.updateClient);
router.delete("/:id",authenticateAdmin, clientController.deleteClient);

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authenticateAdmin = require('../middleWares/authMiddleware');

router.post("/",authenticateAdmin, clientController.createClient);
router.get("/",authenticateAdmin, clientController.getClients);
router.get("/:id",authenticateAdmin, clientController.getClientById);
router.put("/:id",authenticateAdmin, clientController.updateClient);
router.delete("/:id",authenticateAdmin, clientController.deleteClient);

module.exports = router;
>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
