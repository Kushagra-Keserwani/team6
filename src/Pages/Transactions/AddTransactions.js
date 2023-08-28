import React from "react";
import "./../AddCustomer/AddCustomer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SideMenuBar from "./../../components/sidebar/index";
import { event } from "jquery";
import { toast } from "react-toastify";

function AddTransactions(props) {

  const [accountnum, setAccountNum] = useState(localStorage['accNo'] ? localStorage['accNo'] : 0);
  const [transactionNo, setTransactionNo] = useState("");
  const [amount, setAmount] = useState("");
  const [dateTime, setDateTime] = useState("2023-08-21T04:50:14.170Z");
  const [type, setType] = useState("D");
  const [recipient, setRecipient] = useState("0");
  const [currency, setCurrency] = useState("Dollar");
  const [transactions, setTransactionData] = useState([]);
  const [errors, setErrors] = useState(null);


  function errorFunc(error) {
    if (error.response) { // status code out of the range of 2xx

      console.log("Data :", error.response.data);
      console.log("Status :" + error.response.status);
      if (error.response.status === 400 && error.response.data) {
        setErrors(error.response.data.errors);
      }
      toast.error(error.response.data)
    } else if (error.request) { // The request was made but no response was received
      console.log(error.request);
      toast.error("Transaction Failed.");
    } else {// Error on setting up the request
      console.log('Error', error.message);
      toast.error("Transaction Failed.");
    }
  }

  async function saveT(event) {
    if(!accountnum || !amount || !dateTime || !type || !recipient || !currency){
      toast.warn("Please fill all the fields.");
      return;
    }
    event.preventDefault();
    try {
      //setDateTime("2023-08-21T04:50:14.170Z");
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
        toast.success("Transaction Completed Successfully.");
      });
      setAccountNum(localStorage['accNo'] ? localStorage['accNo'] : 0);
      setTransactionNo("");
      setAmount("");
      setCurrency("Dollar");
      setType("D");
      setDateTime("2023-08-21T04:50:14.170Z");
      setRecipient("0");

    } catch (err) {
      console.log(err);
      errorFunc(err);
    }
  }

  return (
    <div>
      <SideMenuBar sidebar={props.sidebar} showSidebar={props.showSidebar}></SideMenuBar>
            <div style={props.sidebar?props.leftStyle:null}>
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
              <div class="dropdown">
                <div className="form-group">
                  <label for="type">Type:</label>
                  <select value={type}
                    id="type"
                    className="form-control1"
                    onChange={(event) => {
                      setType(event.target.value)
                    }}>
                    <option value="D"> Deposit</option>
                    <option value="W"> Withdraw</option>
                    <option value="F"> Fund Transfer</option>
                    <option value="CED"> Currency Exchange Deposit</option>
                    <option value="CEW"> Currency Exchange Withdraw</option>

                  </select>
                </div>
              </div>
              {(type === 'CED' || type === 'CEW') &&
                <div className="form-group">
                  <label for="currency">Currency: </label>
                  <select value={currency}
                    id="currency"
                    className="form-control1"
                    onChange={(event) => {
                      setCurrency(event.target.value)
                    }}>
                    <option value="Dollar"> Dollar</option>
                    <option value="Pound"> Pound</option>
                    <option value="Euro"> Euro</option>
                    <option value="Yen"> Yen</option>
                  </select>


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
              {localStorage['role'] == "Admin" &&
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
    </div>
  );
}

export default AddTransactions;