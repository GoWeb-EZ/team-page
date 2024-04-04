import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <div>1342, Seongnam-daero, Sujeong-gu, Seongnam-si,</div>
            <div>Gyeonggi-do, Republic of Korea</div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    width: calc(100vw);
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #efefef;

    font-size: 14px;
    color: gray;
`;
