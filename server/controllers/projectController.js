const projectModel = require('../models/projectModel')

//create project
module.exports.createProject = async(req, res) => {
    try {
        const {filename} = req.file
        const {name, description, github, live} = req.body
        //validations
        if(!name || !description || !github || !live || !filename) {
            return res.json({
                message: "Fill all the data"
            })
        }
        //create
        const project = await projectModel({name, image: filename, description, github, live}).save()
        res.status(200).json({
            success: true, message: "Project created successfully", project
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when creating project"
        })
    }
}

//get all projects
module.exports.getAllProjects = async(req, res) => {
    try {
        const projects = await projectModel.find()
        res.status(200).json({
            success: true, message: "All projects", projects
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong in getting all projects"
        })
    }
}

//get single
module.exports.getSingle = async(req, res) => {
    try {
        const {id} = req.params
        const project = await projectModel.findById(id)
        res.status(200).json({
            success: true, message: "Single project", project
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong in getting single projects"
        })
    }
}

//update
module.exports.updateProject = async(req, res) => {
    try {
        const {id} = req.params
        const {filename} = req.file
        const {name, description, github, live} = req.body
        //validations
        // if(!name || !description || !github || !live || !filename) {
        //     return res.json({
        //         message: "Fill all the data"
        //     })
        // }

        await projectModel.findByIdAndUpdate(id, {name, description, github, live, image: filename })
        res.status(200).json({
            success: true, message: 'Updated successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when updating projects"
        })
    }
}

//delete
module.exports.deleteProject = async(req, res) => {
    try {
        const {id} = req.params
        await projectModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true, message: 'Successfully deleted'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when trying to delete projects"
        })
    }
}