const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    quizId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Quiz",
    },
    qId:{
        type:String,
        required:true,
        unique:true,
    },
    question:{
        type:String,
        required:true,
    },
    options:[{
        type:String,
        required:true,
    }],
    correct:[{
        type:Number,
    }]
});

module.exports = mongoose.model("Question",questionSchema);