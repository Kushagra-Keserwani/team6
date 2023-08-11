import React from "react";
import { Link } from "react-router-dom";
import SideMenuBar from "./../../components/sidebar/index"
import "./home.css"
function Home() {
    return (
        <div className="home">
            <SideMenuBar></SideMenuBar>
        </div>
    )
}
export default Home;