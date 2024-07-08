import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Logo from './Logo';

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    background-color: #f0f4f8;
`;

const Button = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #0056b3;
    }
`;

const QuizListContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;

const QuizItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 10px;
`;

const QuizTitle = styled(Link)`
    text-decoration: none;
    color: #007bff;
    font-size: 1.2rem;
    font-weight: bold;
    flex: 1; /* To make sure the title takes up the available space */
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const TakeQuizButton = styled(Link)`
    padding: 8px 15px;
    text-decoration: none;
    color: white;
    background-color: #28a745;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #218838;
    }
`;

const DeleteButton = styled.button`
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #c82333;
    }
`;

const TotalQuizzes = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;

const Dashboard = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const result = await axios.get("https://aspire-nex.onrender.com/api/show-quizes");
                setQuizzes(result.data);
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            }
        };
        fetchQuizzes();
    }, []);

    const handleDelete = async (title) => {
        try {
            await axios.delete(`https://aspire-nex.onrender.com/api/remove-quiz/${title}`);
            setQuizzes(quizzes.filter(quiz => quiz.title !== title));
        } catch (error) {
            console.error("Error deleting quiz:", error);
        }
    };

    return (
        <DashboardContainer>
            <Logo />
            <Button to="/create-quiz">Add Quiz</Button>
            <TotalQuizzes>Total Quizzes: {quizzes.length}</TotalQuizzes>
            {!quizzes ? (<div><p>Loading...</p></div>) : (
                <QuizListContainer>
                    {quizzes.map(quiz => (
                        <QuizItem key={quiz._id}>
                            <QuizTitle to={`/take-quiz/${quiz.title}`}>{quiz.title}</QuizTitle>
                            <ActionButtons>
                                <TakeQuizButton to={`/take-quiz/${quiz.title}`}>Take Quiz</TakeQuizButton>
                                <DeleteButton onClick={() => handleDelete(quiz.title)}>Delete</DeleteButton>
                            </ActionButtons>
                        </QuizItem>
                    ))}
                </QuizListContainer>
            )
            }
        </DashboardContainer>
    );
};

export default Dashboard;
