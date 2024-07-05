import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import DashboardButton from './DashboardButton';
import Logo from './Logo';
import QuestionContainerShow from './QuestionContainerShow';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    background-color: #f0f4f8;
    position: relative;
`;

const QuizForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const ScoreText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #28a745;
    text-align: center;
`;


const TakeQuiz = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const result = await axios.get(`http://localhost:5000/api/show-quiz/${id}`);
                setQuiz(result.data);
            } catch (error) {
                console.error("Error fetching the quiz data:", error);
            }
        };
        fetchQuiz();
    }, [id]);

    const handleAnswerChange = (qIndex, value) => {
        const updatedAnswers = { ...answers };
        if (!updatedAnswers[qIndex]) {
            updatedAnswers[qIndex] = [];
        }
        if (updatedAnswers[qIndex].includes(value)) {
            updatedAnswers[qIndex] = updatedAnswers[qIndex].filter(v => v !== value);
        } else {
            updatedAnswers[qIndex].push(value);
        }
        setAnswers(updatedAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedScore = quiz.questions.reduce((totalScore, question, index) => {
            const correctAnswers = question.correct;
            const userAnswers = answers[index] || [];

            const isCorrect = correctAnswers.length === userAnswers.length && correctAnswers.every(answer => userAnswers.includes(answer));
            return totalScore + (isCorrect ? 1 : 0);
        }, 0);
        setScore(calculatedScore);
    };

    return (
        <Container>
            <Logo />
            <DashboardButton />
            {quiz ? (
                <QuizForm onSubmit={handleSubmit}>
                    <Title>{quiz.title ? quiz.title : "Quiz"}</Title>
                    {quiz.questions.map((question, qIndex) => (
                        <QuestionContainerShow
                            key={qIndex}
                            qIndex={qIndex}
                            question={question}
                            handleAnswerChange={handleAnswerChange}
                        />
                    ))}
                    <SubmitButton type="submit">Submit Quiz</SubmitButton>
                    {score !== null && <ScoreText>You scored {score} out of {quiz.questions.length}</ScoreText>}
                </QuizForm>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};

export default TakeQuiz;
