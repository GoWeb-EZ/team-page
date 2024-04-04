import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import About from "./About";
import Posts from "./Posts";
import PostLists from "./PostLists";
import Post from "./Post";

export default function AppLayout() {
    return (
        <>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                    Home
                </Link>
                <Link to="/posts" style={{ padding: 5 }}>
                    Posts
                </Link>
                <Link to="/about" style={{ padding: 5 }}>
                    About
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/posts" element={<Posts />}>
                    <Route index element={<PostLists />} />
                    <Route path=":slug" element={<Post />} />
                </Route>

                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
}
