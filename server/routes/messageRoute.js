const { sendMessage } = require('../controllers/messageController')

const router = require('express').Router()

router.post('/sendmessage', sendMessage)

module.exports = router