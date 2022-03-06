import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global-styles';
import { lightTheme, darkTheme, media } from './styles';

import { Header, Footer } from './components/common';
import { Home, Admin, Member, Account } from './pages';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    box-sizing: border-box;
    padding: 30px;
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

const App = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeProvider theme={{ colors: theme === 'light' ? lightTheme : darkTheme, media }}>
            <GlobalStyle />
            <Router>
                <Container>
                    <Header switchTheme={themeToggler} />
                    <Main>
                        <Routes>
                            <Route path="/member" element={<Member />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/*" element={<Navigate replace to="/" />} />
                        </Routes>
                    </Main>
                    <Footer />
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default App;
