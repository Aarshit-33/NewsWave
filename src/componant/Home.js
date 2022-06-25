import React from "react";
import { Outlet } from "react-router-dom";

export default function Home(props) {
    return (
        <div className="pt-16">
            {/* <h1>Home</h1> */}
            <h1 className="text-5xl p-4">Top Headlines : </h1>

            <Outlet />
        </div>
    );
}
