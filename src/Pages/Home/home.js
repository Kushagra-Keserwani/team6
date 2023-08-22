import React from "react";
import { Link } from "react-router-dom";
import SideMenuBar from "./../../components/sidebar/index"
import Header from "../../components/Header/Header";
import "./home.css"
function Home() {
    return (
        <div className="home">
            <SideMenuBar></SideMenuBar>
            <h1>Welcome!</h1>
            <div className="container">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                    tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                    enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                    imperdiet.
                </p>
            </div>

        </div>
    )
}
export default Home;