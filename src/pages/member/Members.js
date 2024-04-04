import React from "react";
import { Outlet } from "react-router-dom";

export default function Members() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Members</h2>
            <Outlet />
        </div>
    );
}
