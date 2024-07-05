const Quiz = require("../models/quiz")
const Question = require("../models/question");
const uuid = require("uuid");

const addQuiz = async (req,res)=>{
    try {
        const {title,questions} = req.body;
        const quizExists = await Quiz.exists({title});
        console.log(title);
        if(quizExists){
            return res.status(403).send(`${title}  already exists`);
        }
        const newQuiz = new Quiz({title});
        await newQuiz.save();

        const questionDocs = questions.map((q)=>({
            quizId : newQuiz._id,
            qId:uuid.v4(),
            question : q.question,
            options : q.options,
            correct : q.correct
        }))


        await Question.insertMany(questionDocs);
        res.status(201).send(`${title} created successfully`);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error Occured. Please try again");
    }
}

module.exports = addQuiz;

