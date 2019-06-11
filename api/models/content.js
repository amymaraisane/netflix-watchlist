var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Add content title here'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Content = mongoose.model("Content", contentSchema);
module.exports = Content;

