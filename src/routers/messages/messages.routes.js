const { Router } = require("express");
const router = Router();
const messagesControllers = require("../../controllers/messages.controllers");


router.get("/", messagesControllers.getMessages);
router.get("/:username", messagesControllers.getMessagesByUsername);
router.post("/", messagesControllers.saveMessage);
router.delete("/:_id", messagesControllers.deleteMessage);

module.exports = router;
