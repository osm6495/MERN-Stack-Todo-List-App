//Require and initiate express (as a router)
const express = require('express')
const router = express.Router()
const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

//GET request at /api/todo -> shows all tasks on todo list
router.get('/', getTasks)

//GET request for a specific task on the todo list
router.get('/:id', getTask)

//POST a new task on the todo list
router.post('/', createTask)

//DELETE a specific task on the todo list
router.delete('/:id', deleteTask)

//UPDATE a specific task on the todo list
router.patch('/:id', updateTask)

module.exports = router