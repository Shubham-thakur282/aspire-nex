const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    }
});

module.exports = mongoose.model("Quiz",quizSchema);