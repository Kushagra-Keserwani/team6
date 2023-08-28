import axios from "axios";
import {useEffect, useState} from "react";
import "../AddCustomer/AddCustomer.css";
import SideMenuBar from "../../components/sidebar";

function Transactions(props)
{
    const [accountNum, setAccountNum] = useState(localStorage['accNo']?localStorage['accNo']:0);
    const [transactionNo, setTransactionNo] = useState("");
    const [amount, setAmount] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [recipient, setRecipient] = useState("");
    const [startDate,setStartDate] = useState("2023-08-15");
    
    const [endDate,setendDate] = useState("2024-01-01");
    
    const [cuurency, setCurrency] = useState("");
    const [transactions, setTransactionData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTransactionData = async () => {
        setIsLoading(true);
    
        try {
          const result = await axios.get(`https://localhost:7254/api/transaction/GetStatement/${accountNum}/${startDate}/${endDate}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
          setTransactionData(result.data);
          console.log(result.data);
        } catch (error) {
          console.error('Error fetching customer data:', error);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        if (accountNum && accountNum!=0) {
          fetchTransactionData();
        }
        else{
            setTransactionData([]);
        }
      }, [accountNum,startDate,endDate]);
    
      return (
        <div>
            <SideMenuBar sidebar={props.sidebar} showSidebar={props.showSidebar}></SideMenuBar>
            <div style={props.sidebar?props.leftStyle:null}>
            <div className="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <form>
            {localStorage['role']=="Admin" &&
            <div className="mb-3">
          <label class="form-label">Enter account number -</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            value={accountNum}
            onChange={(e) => setAccountNum(e.target.value)}
          /> </div>}
          <div className="mb-3">
          <label class="form-label">Enter Start Date -</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          /> </div>
          <div className="mb-3">
          <label class="form-label">Enter End Date -</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
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
              <h4 class="mb-3">Transaction Details</h4>
            <table class="table table-bordered table-striped" align="center">
            <thead>
                <tr>
                    <th scope="col">Transaction Number</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Account Number</th>                  
                    <th scope="col">Date Time</th>
                    <th scope="col">Recipient Acc Num</th>
                </tr>
            </thead>
            {transactions.map(function fn(transaction){
              let custyle = {color:'green'}
              if(transaction.type=="Withdraw" || transaction.type=="Currency Withdraw" || (transaction.type=="Fund Transfer" && transaction.accountnum==accountNum)){
                custyle={color:'red'}
              }
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{transaction.transactionNo}</th>
                            <td style={custyle}>{transaction.amount}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.currency}</td>
                            <td>{transaction.accountnum}</td>
                            <td>{transaction.dateTime}</td>
                            <td>{transaction.recipient}</td>

                        </tr>
                    </tbody>
                );
            }
            )}
            </table>
            </div>
          )}
          </div>
        </div>
      );
    };
    
    export default Transactions;
    