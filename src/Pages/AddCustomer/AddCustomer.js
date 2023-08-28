import React from "react";
import './AddCustomer.css';
import axios from "axios";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index";

function AddCustomer(props) {

  const [accountnum, setAccountNum] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cardnumber, setCardNumber] = useState("0");
  const [pinnum, setPinNum] = useState("0000");
  const [city, setCity] = useState("");
  const [accounttype, setAccountType] = useState("0");
  const [balance, setBalance] = useState("0");
  const [customers, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);

  function errorFunc(error){
    if (error.response) { // status code out of the range of 2xx

      console.log("Data :" , error.response.data);
      console.log("Status :" + error.response.status);
      if(error.response.status === 400 && error.response.data){
          setErrors(error.response.data.errors);
          
      }
    } else if (error.request) { // The request was made but no response was received
      console.log(error.request);
    } else {// Error on setting up the request
      console.log('Error', error.message);
    }
  }
  

  useEffect(() => {
});

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
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((response)=>{
            
            console.log(response.data);
            setUsers(response.data);
        });;
        alert("Customer Added Successfully.");
        setAccountNum("");
        setName("");
        setAddress("");
        setEmail("");
        setContact("");
        setCardNumber("0");
        setPinNum("0000");
        setCity("");
        setAccountType("0");
        setBalance("0");

        
    } catch(err){
        alert(err);
        errorFunc(err);
    }
}

// async function editCustomer(customers){
//     setName(customers.name);
//     setAddress(customers.address);
//     setEmail(customers.email);
//     setContact(customers.contact);
//     setCardNumber(customers.cardnumber);
//     setPinNum(customers.pinnum);
//     setCity(customers.city);
//     setAccountType(customers.accounttype);
//     setBalance(customers.balance);
//     setAccountNum(customers.accountnum);
// }

// async function deleteCustomer(accountnum)
// {
//     await axios.delete("https://localhost:7254/api/customer/Deletecustomer/" + accountnum);
//     alert("Customer deleted successfully.");
//     setAccountNum("");
//     setName("");
//     setAddress("");
//     setEmail("");
//     setContact("");
//     setCardNumber("");
//     setPinNum("");
//     setCity("");
//     setAccountType("");
//     setBalance("");
//     Load();
// }

// async function update(event){
//     event.preventDefault();
//     try{
//         await axios.patch("https://localhost:7254/api/customer/Updatecustomer/" +customers.find((u) => u.accountnum=== accountnum).accountnum || accountnum,
//         {
//             accountnum: accountnum,
//             name: name,
//             address: address,
//             email: email,
//             contact: contact,
//             cardnumber: cardnumber,
//             pinnum : pinnum,
//             city: city,
//             accounttype : accounttype,
//             balance: balance,
//         }
//         );
//         alert("Customer Updated.");
//         setAccountNum("");
//         setName("");
//         setAddress("");
//         setEmail("");
//         setContact("");
//         setCardNumber("");
//         setPinNum("");
//         setCity("");
//         setAccountType("");
//         setBalance("");

//         Load();

//     } catch(err){
//         alert(err);
//     }
//   }
  return (
    <div>
    <SideMenuBar sidebar={props.sidebar} showSidebar={props.showSidebar}></SideMenuBar>
            <div style={props.sidebar?props.leftStyle:null}>
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
            <p className="error">{errors?.email}</p>
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
            <p className="error">{errors?.contact}</p>
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
            <p className="error">{errors?.address}</p>
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
            <p className="error">{errors?.cardnumber}</p>
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
                    <p className="error">{errors?.pinnum}</p>

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
                    <p className="error">{errors?.city}</p>         
                    <div className="form-group">
                        {/* <label for="accounttype">Account Type:</label> */}
                        <label for="Account Type">Type:</label>
                <select value={accounttype}
                className="form-control1"
                id="Account Type"
                  onChange={(event) => {
                    setAccountType(event.target.value)
                  }}>
                  <option value="0"> Savings</option>
                  <option value="1"> Checking</option>
                </select>
              
                        {/* <input 
                        type="text"
                        className="form-control1"
                        id="accounttype"
                        value={accounttype}
                        onChange={(event) => {
                            setAccountType(event.target.value);
                        }}
                        /> */}
                    </div>
                    <p className="error">{errors?.accounttype}</p>
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
                    <p className="error">{errors?.balance}</p>
            <button className="btn btn-primary" onClick={save}>Add</button>
          </form>
        
        </div>
      </body>
      </div>
    </div>
  );
}

export default AddCustomer;