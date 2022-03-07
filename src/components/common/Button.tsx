import React, { FC } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 40px;
    margin: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};

    ::hover {
        background-color: ${({ theme }) => theme.colors.hover};
    }

    ${({ theme }) => theme.media.tablet`
        width: 70px;
        height: 30px;
        margin: 100px;
        padding: 5px;
    `}
`;

interface IButton {
    handleClick: () => void;
    text: string;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
    return (
        <Btn type="button" onClick={() => handleClick()}>
            {text}
        </Btn>
    );
};

export default Button;
