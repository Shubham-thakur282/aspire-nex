const Quiz = require("../models/quiz");
const Question = require("../models/question");

const showQuizes = async (req,res) => {
    try {
        const quizzes = await Quiz.find().lean();
        const questions = await Question.find().lean();

        if (!quizzes) {
            return res.status(404).send("No quizzes found");
        }
        if (!questions) {
            return res.status(404).send("No questions found");
        }

        const quizWithQuestion = quizzes.map(quiz => ({
            ...quiz,
            questions: questions.filter(q => q.quizId.equals(quiz._id))
        }));

        res.status(200).send(quizWithQuestion);

    } catch (error) {

        console.log(error);
        res.status(500).send("Error occured. Please try again!");

    }
};

const getQuiz = async (req,res)=>{
    try {
        
        const id = req.params.id;
        console.log(id);
        const quiz = await Quiz.findOne({title:id});
        if(!quiz){
            return res.status(404).send("Quiz Not found");
        }
        
        const questions = await Question.find({quizId:quiz._id}).lean();

        if(!questions){
            return res.status(404).send("No questions found");
        }

        const quizWithQuestion = {
            _id:quiz._id,
            title:quiz.title,
            questions
        }

        res.status(200).send(quizWithQuestion);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured. Please try again!");
    }
}

module.exports = {showQuizes,getQuiz}