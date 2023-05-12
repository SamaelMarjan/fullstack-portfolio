const { createProject, getAllProjects, getSingle, deleteProject, updateProject } = require('../controllers/projectController')

const router = require('express').Router()

//create project
router.post('/create', createProject)

//get all project
router.get('/get', getAllProjects)

//get single
router.get('/get/:id', getSingle)

//delete
router.delete('/delete/:id', deleteProject)

//update
router.put('/update/:id', updateProject)

module.exports = router