const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String,
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema);