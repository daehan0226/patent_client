import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Spacer = styled.div`
    height: 80px;
    ${({ theme }) => theme.media.desktop`
    height: 80px;
  `}
    ${({ theme }) => theme.media.tablet`
    height: 70px;
  `}
  ${({ theme }) => theme.media.phone`
    height: 60px;
  `}
`;

const Container = styled(Spacer)`
    width: 100%;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.text};
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    ${({ theme }) => theme.media.desktop`
    padding: 20px;
  `}
    ${({ theme }) => theme.media.tablet`
    padding: 15px;
  `}
  ${({ theme }) => theme.media.phone`
    padding: 10px;
  `}
`;

interface IHeader {
    switchTheme: () => void;
}

const Header: React.FC<IHeader> = ({ switchTheme }) => {
    return (
        <>
            <Container>
                <Button text="Switch Theme" handleClick={switchTheme} />
            </Container>

            <Spacer />
        </>
    );
};

export default Header;
