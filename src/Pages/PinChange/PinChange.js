import React from "react";
import axios from "axios";
import "../AddCustomer/AddCustomer.css";
import { useEffect, useState } from "react";
import SideMenuBar from "./../../components/sidebar/index";

const PinChange = () => {
    const [accountNum, setAccountNum] = useState("");
    const [oldpin, setOldPin] = useState("");
    const [newpin, setNewPin] = useState("");
    const [renewpin, setReNewPin] = useState("");
    const [customer, setCustomerData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchCustomerData = async () => {
    
        setIsLoading(true);

        try {
            const result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountNum}`);
            setCustomerData(result.data);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const validateOldPinandSetNewPin = async () => {
        if(Object.keys(customer).length > 0)
        {
            console.log(customer);
            console.log(typeof oldpin);
            console.log(typeof newpin);
            console.log(typeof customer.pinnum);
            console.log(customer.pinnum == oldpin);
            if(customer.pinnum == oldpin)
            {
                if(newpin===renewpin)
                {
                    const setpinresult = await axios.patch(`https://localhost:7254/api/customer/SetPin/${accountNum}/${newpin}`);
                    if(setpinresult.data===true)
                    {
                        alert("Pin has been changed successfully!.");
                        setOldPin("");
                        setNewPin("");
                        setReNewPin("");
                        setAccountNum("");
                        setCustomerData({});
                    }
                }
                else{
                    alert("New PIN does not match.");
                    setNewPin("");
                    setReNewPin("");
                }
            }
            else{
                alert("Enter correct PIN number.");
                setNewPin("");
                setReNewPin("");
                setOldPin("");
            }
        }
        else
        {
            alert("Enter a valid account number.")
            setNewPin("");
            setReNewPin("");
            setOldPin("");            
            setAccountNum("");
            setCustomerData({});
        }
    };

    useEffect(() => {
        if (accountNum) {
            fetchCustomerData();
        } else {
            setCustomerData({});
            setNewPin("");
            setReNewPin("");
            setOldPin("");
        }
    }, [accountNum]);

    return (
        <div>
            <SideMenuBar />
            <div className="leftSpace">
                <div className="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label class="form-label">Enter account number -</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type here..."
                                                value={accountNum}
                                                onChange={(e) => setAccountNum(e.target.value)}
                                            /> </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div class="container mt-5">
                        <h4 class="mb-3">Customer Details</h4>
                        <table class="table table-bordered table-striped">

                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Account Number </td>
                                    <td>{customer.accountnum}</td>
                                </tr>
                                <tr>
                                    <td>Name </td>
                                    <td>{customer.name}</td>
                                </tr>
                                <tr>
                                    <td>Enter Your Old Pin</td>
                                    <td>
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control1"
                                                    pattern = "[0-9]{4}"
                                                    title = "Pin should be 4 digit numeric characters."
                                                    id="oldpin"
                                                    value={oldpin}
                                                onChange={(e) => setOldPin(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enter Your New Pin</td>
                                    <td>
                                    <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control1"
                                                    id="newpin"
                                                    pattern = "[0-9]{4}"
                                                    title = "Pin should be 4 digit numeric characters."
                                                    value={newpin}
                                                onChange={(e) => setNewPin(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Re-Enter Your New Pin</td>
                                    <td>
                                    <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control1"
                                                    id="renewpin"
                                                    pattern = "[0-9]{4}"
                                                    title = "Pin should be 4 digit numeric characters."
                                                    value={renewpin}
                                                onChange={(e) => setReNewPin(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={validateOldPinandSetNewPin}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PinChange;



