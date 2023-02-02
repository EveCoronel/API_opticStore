const { Router } = require("express");
const router = Router();

const { AuthControllers, upload } = require('../../controllers/auth.controllers');
const passport = require('../../middlewares/passport');

const authController = new AuthControllers()

router.post('/login', passport.authenticate('login', { failureRedirect: '/auth/loginError', successRedirect: '/home' }));
router.post('/register', upload.single('profilePicture'), authController.register);
router.post('/logout', authController.logout);


module.exports = router;
    
    