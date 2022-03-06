import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
`;

const Footer: FC = () => {
    return (
        <Container>
            <div>Footer</div>;
        </Container>
    );
};

export default Footer;
