const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newUser", userController.newUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.middle, userController.getUserData)

router.put("/users/:userId", auth.middle, userController.updateUser)

router.delete("/users/:userId", auth.middle, userController.isdelete)

module.exports = router;  