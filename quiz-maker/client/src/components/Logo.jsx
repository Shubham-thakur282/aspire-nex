import React from 'react';
import styled from 'styled-components';

const LogoHeading = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 20px;
`;

const Logo = () => {
    return (
        <LogoHeading>Quiz Maker</LogoHeading>
    )
}

export default Logo;
