import React from "react";
import "./../AddCustomer/AddCustomer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SideMenuBar from "./../../components/sidebar/index";
import { event } from "jquery";

function AddTransactions() {

  const [accountnum, setAccountNum] = useState("");
  const [transactionNo, setTransactionNo] = useState("");
  const [amount, setAmount] = useState("");
  const [dateTime, setDateTime] = useState("2023-08-21T04:50:14.170Z");
  const [type, setType] = useState("D");
  const [recipient, setRecipient] = useState("0");
  const [currency, setCurrency] = useState("Dollar");
  const [transactions, setTransactionData] = useState([]);
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
      console.log(type)
      if(!type){
        console.log("D");

      }
      await axios.post("https://localhost:7254/api/transaction/Addtransaction", {
        accountnum: accountnum,
        amount: amount,
        dateTime: dateTime,
        currency: currency,
        type: type,
        recipient: recipient
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {

        console.log(response.data);
        setTransactionData(response.data);
      });
      alert("Transaction Done Successfully.");
      setAccountNum("");
      setTransactionNo("");
      setAmount("");
      setCurrency("");
      setType("");
      setDateTime("");
      setRecipient("");

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
          <h2>Add Transactions</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control1"
                id="transactionNo"
                hidden value={transactionNo}
                onChange={(event) => {
                  setTransactionNo(event.target.value);
                }}
              />
            </div>
            {/* <div className="form-group">
              <label for="dateTime">Date Time:</label>
              <input
                type="text"
                className="form-control1"
                id="dateTime"
  
                value={dateTime}
                onChange={(event) => {
                  setDateTime(event.target.value);
                }
              }
              />
            </div> */}

            <div className="form-group">
              <label id="type">Type:
                <select value={type}
                  onChange={(event) => {
                    setType(event.target.value)
                  }}>
                  <option value="D"> Deposit</option>
                  <option value="W"> Withdraw</option>
                  <option value="F"> Fund Transfer</option>
                  <option value="CED"> Currency Exchange Deposit</option>
                  <option value="CEW"> Currency Exchange Withdraw</option>

                </select>
              </label>
              {/* <input
                        type="text"
                        className="form-control1"
                        id="type"
                        value ={type}
                        onChange={(event) => {
                            setType(event.target.value);}}
                     /> */}


            </div>
            {(type==='CED' || type==='CEW') &&
            <div className="form-group">
              <label id="currency">Currency:
                <select value={currency}
                  onChange={(event) => {
                    setCurrency(event.target.value)
                  }}>
                  <option value="Dollar"> Dollar</option>
                  <option value="Pound"> Pound</option>
                  <option value="Euro"> Euro</option>
                  <option value="Yen"> Yen</option>
                </select>
              </label>

                {/* <label for="currency">Currency:</label>
              <input
                        type="text"
                        className="form-control1"
                        id="cuurency"
                        value ={currency}
                        onChange={(event) => {
                            setCurrency(event.target.value);}}
                     /> */}
            </div>
                          }
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
            </div>
            {type === "F" &&
            <div className="form-group">
              <label for="recipient">Recipient's Account Number</label>
              <input
                type="text"
                className="form-control1"
                id="recipient"
                value={recipient}
                onChange={(event) => {
                  setRecipient(event.target.value);
                }} />
            </div>}
            <button className="btn btn-primary" onClick={saveT}>Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddTransactions;