// Import Student Controller
const AlumniController =
require("../controllers/AlumniController.js");

const express = require("express" );
const router = express.Router( );

router.get("/", (req, res) => {
res.send("Hello Express");
});

// Routing student
router.get("/alumni", AlumniController.index);
router.post("/alumni", AlumniController.store);
router.put("/alumni/:id", AlumniController.update);
router.delete("/alumni/:id", AlumniController.destroy);
router.get("/alumni/:id", AlumniController.show);
router.get("/alumni/search/:name", AlumniController.search);
router.get("/alumni/status/fresh-graduate", AlumniController.getFreshGraduate);
router.get("/alumni/status/employed", AlumniController.getEmployed);
router.get("/alumni/status/unemployed", AlumniController.getUnemployed);
// Export router
module.exports = router;