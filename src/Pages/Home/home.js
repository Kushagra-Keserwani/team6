import React from "react";
import { Link } from "react-router-dom";
import SideMenuBar from "./../../components/sidebar/index"
import Header from "../../components/Header/Header";
import "./home.css"
function Home() {
    return (
        <div className="home">
            <SideMenuBar></SideMenuBar>
            <div className="leftSpace">
            <div className="container text-left mt-5">
                <h3 class="display-4">Welcome to DOTBank, where your financial dreams come to life!</h3>
                <p class="lead">
                    At DOTBank, we understand that each individual's financial journey is unique.
                    That's why we are here to support you every step of the way, providing a range
                    of services and solutions tailored to your needs.
                </p>
            </div>
            </div>

        </div>
    )
}
export default Home;