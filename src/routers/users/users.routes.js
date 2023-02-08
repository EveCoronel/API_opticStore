const { Router } = require("express");
const usersControllers = require("../../controllers/users.controllers");
const router = Router();



router.get("/", usersControllers.getUsers);
router.get("/:_id", usersControllers.getUserById);
router.get("/byUsername/:username", usersControllers.getUserByUsername);
router.post("/", usersControllers.createUser);
router.delete("/:_id", usersControllers.deleteUser);

module.exports = router;
