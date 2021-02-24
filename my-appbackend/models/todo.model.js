const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = new schema({
    description:{
        type:String,
        required:true,
        unique:true,
        minlength:10
    }
});

module.exports = mongoose.model("todo",todoSchema);