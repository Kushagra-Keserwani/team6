import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <ul>
                <Link to="/addCustomer">
                    <li>
                        Add Customer
                    </li>
                </Link>
                <Link to="/viewCustomer">
                    <li>
                        View Customer
                    </li>
                </Link>
                <Link to="/editCustomer">
                    <li>
                        Edit Customer
                    </li>
                </Link>
                <Link to="/transactions">
                    <li>
                    Transactions
                    </li>
                </Link>
            </ul>
        </div>
    )
}
export default Home;