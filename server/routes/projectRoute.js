const { createProject, getAllProjects, getSingle, deleteProject, updateProject } = require('../controllers/projectController')

const router = require('express').Router()
const multer = require('multer')

//img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, `image-${file.originalname}`)
    }
})

//img filter
const isImage = (req, res, callback) => {
    if(file.mimetype.startsWith('image')) {
        callback(null, true)
    }else{
        callback(new Error("Only images is allowed"))
    }
}

const upload = multer({
    storage: imgconfig,
    filefilter: isImage
})

//create project
router.post('/create', upload.single('image'), createProject)

//get all project
router.get('/get', getAllProjects)

//get single
router.get('/get/:id', getSingle)

//delete
router.delete('/delete/:id', deleteProject)

//update
router.put('/update/:id', updateProject)

module.exports = router