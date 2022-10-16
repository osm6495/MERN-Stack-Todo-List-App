const Task = require('../models/taskModel')
const mongoose = require('mongoose')

//Get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({priority: -1})
    res.status(200).json(tasks)
}

//Get a single tasks
const getTask = async (req, res) => {
    const { id } = req.params

    //Invalid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such task"})
    }

    const task = await Task.findById(id)

    //Task not found
    if (!task) {
        return res.status(404).json({error: "No such task"})
    }

    res.status(200).json(task)
}

//Create a task
const createTask = async (req, res) => {
    const {task, startTime = null, endTime = null, allDay = false, priority = 0} = req.body

    //Add task to db
    try {
        const newtask = await Task.create({task, startTime, endTime, allDay, priority})
        res.status(200).json(newtask)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params

    //Invalid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such task"})
    }

    const task = await Task.findByIdAndDelete(id)

    //Task not found
    if (!task) {
        return res.status(404).json({error: "No such task"})
    }

    res.status(200).json(task)
}

//Update a task
const updateTask = async (req, res) => {
    const { id } = req.params

    //Invalid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such task"})
    }

    const task = await Task.findByIdAndUpdate(id, {...req.body})
    //Task not found
    if (!task) {
        return res.status(404).json({error: "No such task"})
    }
    
    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}