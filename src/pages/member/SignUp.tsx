import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/common';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [err, setErr] = useState<string>('');
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            <h1>Sign in</h1>
            <Button text="Login" handleClick={handleClick} />
        </>
    );
};

export default SignUp;
