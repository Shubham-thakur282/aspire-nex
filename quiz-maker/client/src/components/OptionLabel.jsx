import React from 'react';
import styled from 'styled-components';

const OptionLabelBox = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f1f1f1;
    }
`;

const OptionLabel = (props) => {
    const {qIndex,oIndex,handleAnswerChange,option} = props;
    return (
        <OptionLabelBox>
            <input
                type="checkbox"
                name={`q${qIndex}`}
                value={oIndex.toString()}
                onChange={() => handleAnswerChange(qIndex, oIndex)}
            />
            {option}
        </OptionLabelBox>
    )
}

export default OptionLabel
