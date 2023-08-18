import axios from "axios";
import {useEffect, useState} from "react";
import "../AddCustomer/AddCustomer.css";
import SideMenuBar from "../../components/sidebar";

function Transactions()
{
    const [accountNum, setAccountNum] = useState("");
    const [transactionNo, setTransactionNo] = useState("");
    const [amount, setAmount] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [recipient, setRecipient] = useState("");
    
    const [cuurency, setCurrency] = useState("");
    const [transactions, setTransactionData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTransactionData = async () => {
        setIsLoading(true);
    
        try {
          const result = await axios.get(`https://localhost:7254/api/transaction/Gettransaction/${accountNum}`);
          setTransactionData(result.data);
          console.log(result.data);
        } catch (error) {
          console.error('Error fetching customer data:', error);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        if (accountNum) {
          fetchTransactionData();
        }
      }, [accountNum]);
    
      return (
        <div>
            <SideMenuBar/>
            <h1>Transaction History</h1>
          <form>
            <div className="form-group">
            <label>Account Number: </label>
            <input
              type="text"
              className="form-control1"
              value={accountNum}
              onChange={(e) => setAccountNum(e.target.value)}
            /></div>
            <button type="button" className="btn btn-primary" onClick={fetchTransactionData}>
              Fetch Transaction
            </button>
          </form>
    
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table class="table table-dark" align="center">
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
                return (
                    <tbody>
                        <tr>
                            <th scope="row">{transaction.transactionNo}</th>
                            <td>{transaction.amount}</td>
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

          )}
        </div>
      );
    };
    
    export default Transactions;
    