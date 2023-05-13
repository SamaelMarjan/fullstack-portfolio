const messageModel = require('../models/messageModel')

module.exports.sendMessage = async(req, res) => {
    try {
        const messages = await messageModel({...req.body}).save()
        res.status(200).json({
            success: true, message: 'Message send successfully', messages
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when sending message"
        })
    }
}