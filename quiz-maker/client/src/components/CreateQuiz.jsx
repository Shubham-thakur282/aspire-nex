import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DashboardButton from './DashboardButton';
import Logo from './Logo';
import QuestionContainer from './QuestionContainer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  min-height: 100vh;
  background-color: #f0f4f8;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 600px;
  width: 100%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;


const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

const Button = styled.button`
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


const Popup = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correct: [] }]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/add-quiz", { title, questions });
    setTitle('');
    setQuestions([{ question: '', options: ['', '', '', ''], correct: [] }]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);  // Hide popup after 3 seconds
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((q, i) => (
      i === index ? { ...q, [field]: value } : q
    ));
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = questions.map((q, i) => (
      i === qIndex ? {
        ...q,
        options: q.options.map((opt, j) => j === oIndex ? value : opt)
      } : q
    ));
    setQuestions(updatedQuestions);
  };

  const handleCorrectChange = (qIndex, oIndex) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === qIndex) {
        const correct = q.correct.includes(oIndex)
          ? q.correct.filter(c => c !== oIndex)
          : [...q.correct, oIndex];
        return { ...q, correct };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correct: [] }]);
  };

  const deleteQuestion = (qIndex) => {
    setQuestions(questions.filter((q, i) => i !== qIndex));
  };

  return (
    <Container>
      <Logo />
      <DashboardButton />

      {showPopup && <Popup>Quiz saved successfully!</Popup>}

      <Form onSubmit={handleSubmit}>
        <Title>Create a New Quiz</Title>

        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Quiz Title" required />

        {questions.map((q, qIndex) => (
          <QuestionContainer
            key={qIndex}
            qIndex={qIndex}
            q={q}
            handleQuestionChange={handleQuestionChange}
            handleOptionChange={handleOptionChange}
            handleCorrectChange={handleCorrectChange}
            deleteQuestion={deleteQuestion}
          />
        ))}

        <Button type="button" onClick={addQuestion}>Add Question</Button>
        <Button type="submit">Save Quiz</Button>
      </Form>

    </Container>
  );
};

export default CreateQuiz;
