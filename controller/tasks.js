const express = require('express');
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json({tasks})
    } catch (error) {
        res.status(500).json({msg:err})
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create({name : req.body.name, isComplete : req.body.isComplete});
        res.json({newTask})
    } catch (error) {
        res.status(500).send({msg : error})
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({_id : req.params.id});
        if(!task){
            return res.status(400).send('cant find the task you are looking for')
        }
        res.json({task});
    } catch (error) {
        res.status(500).send({msg : error})
    }
}

const editTask = async (req, res) => {  
    try {
        const task = await Task.findOneAndUpdate({_id:req.params.id}, req.body)
    
        if(!task){
            return res.status(400).send('cant find the task you are looking for')
        }
        res.json({task});
    } catch (error) {
        res.status(500).send({msg : error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id:req.params.id})
    
        if(!task){
            return res.status(400).send('cant find the task you are looking for')
        }
        res.send('working')
    } catch (error) {
        res.status(500).send({msg : error})
    }
    
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask
}