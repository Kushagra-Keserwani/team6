import React from "react";
import './AddCustomer.css';
import axios from "axios";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index";

function AddCustomer() {

  const [accountnum, setAccountNum] = useState("");
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

async function save(event){
    event.preventDefault();
    try{
        await axios.post("https://localhost:7254/api/customer/Addcustomer",{
            name: name,
            address: address,
            email: email,
            contact: contact,
            cardnumber: cardnumber,
            pinnum : pinnum,
            city:city,
            accounttype:accounttype,
            balance: balance,
        });
        alert("Customer Added Successfully.");
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
    } catch(err){
        alert(err);
    }
}

async function editCustomer(customers){
    setName(customers.name);
    setAddress(customers.address);
    setEmail(customers.email);
    setContact(customers.contact);
    setCardNumber(customers.cardnumber);
    setPinNum(customers.pinnum);
    setCity(customers.city);
    setAccountType(customers.accounttype);
    setBalance(customers.balance);
    setAccountNum(customers.accountnum);
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

async function update(event){
    event.preventDefault();
    try{
        await axios.patch("https://localhost:7254/api/customer/Updatecustomer/" +customers.find((u) => u.accountnum=== accountnum).accountnum || accountnum,
        {
            accountnum: accountnum,
            name: name,
            address: address,
            email: email,
            contact: contact,
            cardnumber: cardnumber,
            pinnum : pinnum,
            city: city,
            accounttype : accounttype,
            balance: balance,
        }
        );
        alert("Customer Updated.");
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

    } catch(err){
        alert(err);
    }
  }
  return (
    <div>
    <SideMenuBar></SideMenuBar>
      <body>
        <div className="container1">
          <h2>Add Customer Details</h2>
          <form>
          <div className="form-group">
          <input
                    type="text"
                    className="form-control1"
                    id="accountnum"
                    hidden value={accountnum}
                    onChange={(event) => {
                        setAccountNum(event.target.value);
                    }}
                    />
            </div>

            <div className="form-group">
              <label for="name">Name:</label>
              <input
                        type="text"
                        className="form-control1"
                        id="name"
                        value ={name}
                        onChange={(event) => {
                            setName(event.target.value);}}
                     />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input 
                        type="email"
                        className="form-control1"
                        id="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
            </div>
            <div className="form-group">
              <label for="mobile">Mobile:</label>
              <input 
                        type="text"
                        className="form-control1"
                        id="mobile"
                        value={contact}
                        onChange={(event) => {
                            setContact(event.target.value);
                        }}
                        />
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <textarea 
                        type="text"
                        className="form-control1"
                        id="address"
                        rows="4"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                        ></textarea>              
            </div>
            <div className="form-group">
              <label for="cardnumber">Card Number:</label>
              <input 
                        type="text"
                        className="form-control1"
                        id="cardnumber"
                        value={cardnumber}
                        onChange={(event) => {
                            setCardNumber(event.target.value);
                        }}
                        />
            </div>
            <div className="form-group">
                        <label for="pinnum">Pin Number:</label>
                        <input
                        type="text"
                        className="form-control1"
                        id="pinnum"
                        value={pinnum}
                        onChange={(event) => {
                            setPinNum(event.target.value);
                        }}
                         />
                    </div>

                    <div className="form-group">
                        <label for="city">City:</label>
                        <input 
                        type="text"
                        className="form-control1"
                        id="city"
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                        />
                    </div>            
                    <div className="form-group">
                        <label for="accounttype">Account Type:</label>
                        <input 
                        type="text"
                        className="form-control1"
                        id="accounttype"
                        value={accounttype}
                        onChange={(event) => {
                            setAccountType(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                            <label for="balance">Balance:</label>
                            <input
                            type="text"
                            className="form-control1"
                            id="balance"
                            value={balance}
                            onChange={(event) =>{
                                setBalance(event.target.value);
                            }}
                            />
                    </div>
            <button className="btn btn-primary" onClick={save}>Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddCustomer;