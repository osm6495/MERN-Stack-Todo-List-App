const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    },
    allDay: {
        type: Boolean,
        default: false,
        required: false
    },
    priority: {
        type: Number,
        min: 0,
        max: 5,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)