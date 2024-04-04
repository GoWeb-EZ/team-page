import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderWrapper>
            <div>@ GoWebEZ</div>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/posts">Team members (Quiz)</Link>
                <Link to="/about">Guest Book</Link>
            </Navigation>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    width: calc(100vw - 4rem);
    padding: 1rem 2rem;

    display: flex;
    justify-content: space-between;
`;

const Navigation = styled.nav`
    display: flex;
    gap: 2rem;
`;
