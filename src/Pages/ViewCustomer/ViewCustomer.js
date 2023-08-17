import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "./../../components/searchbar/searchbar"

function ViewCustomer() {    const [accountnum, setAccountNum] = useState("");
const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [contact, setContact] = useState("");
const [cardnumber, setCardNumber] = useState("");
const [pinnum, setPinNum] = useState("");
const [city, setCity] = useState("");
const [accounttype, setAccountType] = useState("");
const [balance, setBalance] = useState("");
const [customers, setUsers] = useState([]);

useEffect(() => {
    (async () => await Load())();
}, []);

async function Load(){
    const result = await axios.get("https://localhost:7254/api/customer/GetAll");
    setUsers(result.data);
    console.log(result.data);
}

async function deleteCustomer(accountnum)
{
    await axios.delete("https://localhost:7254/api/customer/Deletecustomer/" + accountnum);
    alert("Customer deleted successfully.");
    setAccountNum("");
    setName("");
    setAddress("");
    setEmail("");
    setContact("");
    setCardNumber("");
    setPinNum("");
    setCity("");
    setAccountType("");
    setBalance("");
    Load();
}

return (
    <div>
        <SideMenuBar/>
        <h1>Customer Details</h1>
<table class="table table-dark" align="center">
<thead>
    <tr>
        <th scope="col">Account Number</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Email</th>                  
        <th scope="col">Contact</th>
        <th scope="col">Card Number</th>
        <th scope="col">Pin Number</th>
        <th scope="col">City</th>
        <th scope="col">Account Type</th> 
        <th scope="col">Balance</th>                                       
        <th scope="col">Option</th>
    </tr>
</thead>
{customers.map(function fn(customer){
    return (
        <tbody>
            <tr>
                <th scope="row">{customer.accountnum}</th>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
                <td>{customer.cardnumber}</td>
                <td>{customer.pinnum}</td>
                <td>{customer.city}</td>
                <td>{customer.accounttype}</td>
                <td>{customer.balance}</td>

                <td>
                    <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => deleteCustomer(customer.accountnum)}
                    >Delete</button>
                </td>
            </tr>
        </tbody>
    );
}
)}
</table>
</div>
);
}

export default ViewCustomer;