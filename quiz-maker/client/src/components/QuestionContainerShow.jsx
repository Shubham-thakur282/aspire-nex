import React from 'react';
import styled from 'styled-components';
import OptionLabel from './OptionLabel';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

const QuestionText = styled.p`
    margin: 0 0 10px 0;
    font-weight: bold;
`;

const QuestionContainerShow = (props) => {
    const {qIndex,question,handleAnswerChange} = props;
    return (
        <QuestionContainer key={qIndex}>
            <QuestionText>{question.question}</QuestionText>
            {question.options.map((option, oIndex) => (
                <OptionLabel
                    key={oIndex}
                    oIndex={oIndex}
                    qIndex={qIndex}
                    handleAnswerChange={handleAnswerChange}
                    option={option}
                />
            ))}
        </QuestionContainer>
    )
}

export default QuestionContainerShow
