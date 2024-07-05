import React from 'react';
import styled from 'styled-components';
import OptionContainer from './OptionContainer';

const InputBox = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

const QuestionContainerDiv = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 100%;
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

const QuestionContainer = (props) => {
    const {qIndex,q,handleQuestionChange,handleOptionChange,handleCorrectChange,deleteQuestion} = props
    return (
        <QuestionContainerDiv>
            <span>Q{qIndex + 1}</span>
            <br />
            <InputBox value={q.question} onChange={e => handleQuestionChange(qIndex, 'question', e.target.value)} placeholder="Question" required />
            <br />
            <br />
            {q.options.map((opt, oIndex) => (

              <OptionContainer
                key={oIndex}
                handleOptionChange={handleOptionChange}
                handleCorrectChange={handleCorrectChange}
                opt={opt}
                oIndex={oIndex}
                qIndex={qIndex}
                q={q}
              />
            ))}
            <Button type="button" onClick={() => deleteQuestion(qIndex)}>Delete Question</Button>
          </QuestionContainerDiv>
    )
}

export default QuestionContainer;
