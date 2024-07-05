const Quiz = require("../models/quiz");
const Question = require("../models/question");

const removeQuiz = async (req, res) => {
    try {
        // const { title } = req.body
        const title = req.params.title;
        const quiz = await Quiz.findOne({ title });
        console.log(title);
        if (!quiz) {
            return res.status(404).send("Quiz not found");
        }

        const questions = await Question.find({ quizId: quiz._id });

        if (questions)
            await Question.deleteMany({ quizId: quiz._id });

        await Quiz.deleteOne({ title });

        res.status(200).send(`${title} deleted Successfully`);

    } catch (error) {

        console.log(error);
        res.status(500).send("Error Occured. Please try again!");

    }
};

module.exports = removeQuiz;