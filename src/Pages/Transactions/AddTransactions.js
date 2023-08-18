import React from "react";
import "./../AddCustomer/AddCustomer.css";
import axios from "axios";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index";

function AddTransactions() {

    const [accountnum, setAccountNum] = useState("");
    const [transactionNo, setTransactionNo] = useState("");
    const [amount, setAmount] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [type, setType] = useState("");
    const [recipient, setRecipient] = useState("");
    const [currency, setCurrency] = useState("");
    const [transactions, setTransactionData] = useState([]);
  

async function saveT(event){
    event.preventDefault();
    try{
        await axios.post("https://localhost:7254/api/transaction/Addtransaction",{
            accountnum:accountnum,
            amount:amount,
            dateTime:dateTime,
            currency:currency,
            type:type,
            recipient:recipient
        });
        alert("Transaction Done Successfully.");
        setAccountNum("");
        setTransactionNo("");
        setAmount("");
        setCurrency("");
        setType("");
        setDateTime("");
        setRecipient("");

    } catch(err){
        alert(err);
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
            <div className="form-group">
            <label for="dateTime">Date Time:</label>
          <input
                    type="text"
                    className="form-control1"
                    id="dateTime"
                    value={dateTime}
                    onChange={(event) => {
                        setDateTime(event.target.value);
                    }}
                    />
            </div>            

            <div className="form-group">
              <label for="type">Type:</label>
              <input
                        type="text"
                        className="form-control1"
                        id="type"
                        value ={type}
                        onChange={(event) => {
                            setType(event.target.value);}}
                     />
            </div>
                        
            <div className="form-group">
              <label for="currency">Currency:</label>
              <input
                        type="text"
                        className="form-control1"
                        id="cuurency"
                        value ={currency}
                        onChange={(event) => {
                            setCurrency(event.target.value);}}
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
            <div className="form-group">
              <label for="recipient">Recipient's Account Number</label>
              <input 
                        type="text"
                        className="form-control1"
                        id="recipient"
                        value={recipient}
                        onChange={(event) => {
                            setRecipient(event.target.value);
                        }}/>              
            </div>
            <button className="btn btn-primary" onClick={saveT}>Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddTransactions;