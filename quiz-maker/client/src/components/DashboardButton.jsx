import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardBtn = styled(Link)`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #218838;
    }
`;

const DashboardButton = () => {
    return (<DashboardBtn to="/">Dashboard</DashboardBtn>)
}

export default DashboardButton;
