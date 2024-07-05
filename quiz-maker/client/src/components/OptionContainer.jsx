import React from 'react';
import styled from 'styled-components';


const OptionContainerDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const OptionContainer = (props) => {
    const {handleOptionChange,handleCorrectChange,opt,oIndex,qIndex,q} = props;
    return (
        <OptionContainerDiv>
            <Input value={opt} onChange={e => handleOptionChange(qIndex, oIndex, e.target.value)} placeholder={`Option ${oIndex + 1}`} required />
            <label>
                <input
                    type="checkbox"
                    checked={q.correct.includes(oIndex)}
                    onChange={() => handleCorrectChange(qIndex, oIndex)}
                />
                Correct
            </label>
        </OptionContainerDiv>
    )
}

export default OptionContainer;
