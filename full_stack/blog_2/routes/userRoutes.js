const express = require("express")
const {
    getAllUsers,
    registerController,
    loginController,
} = require("../controllers/userController")

//route object
const router = express.Router();

//get all users
router.get("/all-users", getAllUsers);
router.post("/register", registerController);
router.post("/login", loginController);


module.exports = router;