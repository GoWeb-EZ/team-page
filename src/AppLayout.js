import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import About from "./About";
import Posts from "./Posts";
import PostLists from "./PostLists";
import Post from "./Post";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function AppLayout() {
    return (
        <>
            <Header />
            <RoutesWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/posts" element={<Posts />}>
                        <Route index element={<PostLists />} />
                        <Route path=":slug" element={<Post />} />
                    </Route>

                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </RoutesWrapper>

            <Footer />
        </>
    );
}

const RoutesWrapper = styled.section`
    width: calc(100vw - 4rem);
    min-height: 600px;
`;
