const { createUser, loginUser } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/admin', (req, res) => {
    res.status(200).json({ok: true})
})

module.exports = router