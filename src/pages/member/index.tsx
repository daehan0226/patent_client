import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Main = styled.main`
    width: 320px;
    margin: 30px auto;
    min-height: 800px;
`;

const Member: FC = () => {
    return (
        <Main>
            <Routes>
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </Main>
    );
};

export default Member;
