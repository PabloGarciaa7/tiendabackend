const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");

const router = express.Router();

// --------------- API REST CRUD
router.get    ("/videoconsolas",     cors(), controller.readVideoconsolas);  // Read All
router.get    ("/videoconsolas/:id", cors(), controller.readVideoconsola);   // Read
router.delete ("/videoconsolas/:id", cors(), controller.deleteVideoconsola); // Delete
router.put    ("/videoconsolas/:id", cors(), controller.updateVideoconsola); // Update
router.post   ("/videoconsolas",     cors(), controller.createVideoconsola); // Create

router.get    ("/videojuegos",     cors(), controller.readVideojuegos);  // Read All
router.get    ("/videojuegos/:id", cors(), controller.readVideojuego);   // Read
router.delete ("/videojuegos/:id", cors(), controller.deleteVideojuego); // Delete
router.put    ("/videojuegos/:id", cors(), controller.updateVideojuego); // Update
router.post   ("/videojuegos",     cors(), controller.createVideojuego); // Create

module.exports = router;