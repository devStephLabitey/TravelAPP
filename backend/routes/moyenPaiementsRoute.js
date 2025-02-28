const express = require("express");
const router = express.Router();
const moyenPaiementController = require("../controllers/moyenPaiementController");


router.get('/',moyenPaiementController.getAllMoyensPaiement);

router.get("/:id",moyenPaiementController.getMoyenPaiementById);

router.post("/",moyenPaiementController.createMoyenPaiement);

router.put("/:id",moyenPaiementController.updateMoyenPaiement);

router.delete("/:id",moyenPaiementController.deleteMoyenPaiement );


module.exports = router;

