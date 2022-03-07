import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkBox = styled.div``;

const LinkList = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 5px;
`;

const LinkText = styled.p`
    color: ${({ theme }) => theme.colors.text};
    margin: 5px;
    cursor: pointer;
`;

const auth = false;
const isAdmin = false;

const HeaderLink = () => {
    return (
        <LinkBox>
            <LinkList>
                {isAdmin && (
                    <Link to="/admin">
                        <LinkText>Admin</LinkText>
                    </Link>
                )}
                {auth ? (
                    <>
                        <Link to="/account">
                            <LinkText>My page</LinkText>
                        </Link>
                        <LinkText>Log out</LinkText>
                    </>
                ) : (
                    <Link to="/member/signin">
                        <LinkText>Sign In</LinkText>
                    </Link>
                )}
            </LinkList>
        </LinkBox>
    );
};

export default HeaderLink;
