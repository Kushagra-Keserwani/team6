import React from "react";
import axios from "axios";
import "../AddCustomer/AddCustomer.css";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "../../components/searchbar/searchbar";   

const EditCustomer = () => {
    const [accountNum, setAccountNum] = useState("");
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
  
    useEffect(() => {
      if (accountNum) {
        fetchCustomerData();
      }else{
        setCustomerData({});
      }
    }, [accountNum]);
  
    return (
        <div>
            <SideMenuBar/>
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
                <td>Address </td>
                <td>{customer.address}</td>
            </tr>
            <tr>
                <td>Email </td>
                <td>{customer.email}</td>
            </tr>
            <tr>
                <td>Contact </td>
                <td>{customer.contact}</td>
            </tr>
            <tr>
                <td>Card Number </td>
                <td>{customer.cardnumber}</td>
            </tr>
            <tr>
                <td>Pin Number </td>
                <td>{customer.pinnum}</td>
            </tr>
            <tr>
                <td>City </td>
                <td>{customer.city}</td>
            </tr>
            <tr>
                <td>Account Type </td>
                <td>{customer.accounttype}</td>
            </tr>
            <tr>
                <td>Balance </td>
                <td>{customer.balance}</td>
            </tr>
        </tbody>
            </table>
            </div>
          )}
          </div>
        </div>
      );
    };
    

    export default EditCustomer;

 
  
  