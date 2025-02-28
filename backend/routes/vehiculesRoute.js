const express = require("express");
const router = express.Router();
const vehiculeController = require("../controllers/vehiculeController");


router.get('/',vehiculeController.getAllVehicules);

router.get("/:id", vehiculeController.getVehiculeById);

router.post("/",vehiculeController.createVehicule);

router.put("/:id",vehiculeController.updateVehicule);

router.delete("/:id",vehiculeController.deleteVehicule);


module.exports = router;

