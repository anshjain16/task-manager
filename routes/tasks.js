const express = require('express');
const router = express.Router();
const {getAllTasks, editTask, getTask, deleteTask, createTask} = require('../controller/tasks')

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', editTask);
router.delete('/:id', deleteTask);


module.exports = router;