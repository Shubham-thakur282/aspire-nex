const express = require("express");
const addQuiz = require("../controller/quizPost");
const {showQuizes,getQuiz} = require("../controller/quizGet");
const removeQuiz = require("../controller/quizDelete");

const router = express.Router();

router.post("/add-quiz",addQuiz);
router.get("/show-quizes",showQuizes);
router.get("/show-quiz/:id",getQuiz);
router.delete("/remove-quiz/:title",removeQuiz);

module.exports = router;