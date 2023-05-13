const bcrypt = require('bcrypt')

module.exports.hassPass = async(password) => {
    try {
        const salt = 10
        const hash = await bcrypt.hash(password, salt)
        return hash
    } catch (error) {
        console.log(error);
    }
}

module.exports.comparePass = async(password, hashed) => {
    return await bcrypt.compare(password, hashed)
}