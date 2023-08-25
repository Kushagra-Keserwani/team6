import React from "react";
import "./../AddCustomer/AddCustomer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SideMenuBar from "./../../components/sidebar/index";
import { event } from "jquery";

function Cheque() {

  const [accountnum, setAccountNum] = useState(localStorage['accNo']?localStorage['accNo']:0);
  const [ChequeNo, setChequeNo] = useState("");
  const [amount, setAmount] = useState("");
  const [status,setStatus] = useState("InProgress");
  const [Cheques, setChequeData] = useState([]);
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
 
  async function saveT(event) {
    event.preventDefault();
    try {
      //setDateTime("2023-08-21T04:50:14.170Z");
    //   console.log(type)
    //   if(!type){
    //     console.log("D");

    //   }
      await axios.post("https://localhost:7254/api/transaction/AddCheque", {
        accno: accountnum,
        amount: amount,
        status: status
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {

        console.log(response.data);
        setChequeData(response.data);
      });
      alert("Cheque Added Successfully.");
      setAccountNum(localStorage['accNo']?localStorage['accNo']:0);
      setChequeNo("");
      setAmount("");
      setStatus("InProgress");

    } catch (err) {
      alert(err);
      errorFunc(err);
    }
  }

  return (
    <div>
      <SideMenuBar></SideMenuBar>
      <body>
        <div className="container1">
          <h2>Add Cheques</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control1"
                id="ChequeNo"
                hidden value={ChequeNo}
                onChange={(event) => {
                  setChequeNo(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control1"
                id="status"
                hidden value={status}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
              />
            </div>
             
            <div className="form-group">
              <label for="amount">Amount:</label>
              <input
                type="amount"
                className="form-control1"
                id="amount"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </div>
            {localStorage['role']=="Admin" &&
            <div className="form-group">
              <label for="accountnum">Sender's Account Number:</label>
              <input
                type="text"
                className="form-control1"
                id="accountnum"
                value={accountnum}
                onChange={(event) => {
                  setAccountNum(event.target.value);
                }}
              />
            </div>}
            
            <button className="btn btn-primary" onClick={saveT}>Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Cheque;