import React from 'react';
import styled from 'styled-components';
import plusImg from '../assets/plus.svg';

const Button = styled.button`
    
    border-radius: 30px; 

    &:hover{
        background-color: white;
        color: black;
    }
`;

const Img = styled.img`
    
    border-radius: 30px; 

    &:hover{
        background-color: white;
        color: black;
    }
`;

const CreateEventButton = () => {
    return (
        <Button>
            <Img src={plusImg} alt="create_event"/>
            <span>Create</span>
        </Button>
    );
};

export default CreateEventButton;