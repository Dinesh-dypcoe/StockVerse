// const { Signup, Login } = require('../controllers/AuthController.js')
// const router = require('express').Router()
// // const {userVerification} =require('../middlewares/AuthMiddleware.js')
// router.post('/signup', Signup)
// router.post('/login', Login)
// // router.post('/',userVerification)

// module.exports = router

const { Signup, Login } = require('../controllers/AuthController.js')
const { userVerification } = require('../middlewares/AuthMiddleware.js');
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/userVerification', userVerification)

// Add this logout route:
router.get('/logout', (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // set to true if using HTTPS
  });
  return res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router