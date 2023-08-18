import React from "react";
import axios from "axios";
import "../AddCustomer/AddCustomer.css";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "../../components/searchbar/searchbar";   

const EditCustomer = () => {
    const [accountNum, setAccountNum] = useState('');
    const [customers, setCustomerData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchCustomerData = async () => {
      setIsLoading(true);
  
      try {
        const response = await fetch(`https://localhost:7254/api/customer/Getcustomer/${accountNum}`);
        const data = await response.json();
        setCustomerData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      if (accountNum) {
        fetchCustomerData();
      }
    }, [accountNum]);
  
    return (
      <div>
        <SideMenuBar/>
        <div className="leftSpace">
        <h1>Customer Details</h1>
        <form>
            <div className="form-group">
          <label>Account Number: </label>
          <input
            type="text"
            className="form-control1"
            value={accountNum}
            onChange={(e) => setAccountNum(e.target.value)}
          /> </div>
          <button type="button" className="btn btn-primary" onClick={fetchCustomerData}>
            Fetch Customer
          </button>
        </form>
  
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <table class="table table-dark" align="center">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
            </thead>
                    <tbody>
                        {Object.keys(customers).map((field)=> (
                            <tr key={field}>
                                <td>{field}</td>
                                <td>{customers[field]}</td>
                            </tr>
                        ))}
                    </tbody>
    
                                </table>
        )}
        </div>
      </div>
    );
  };
  
  export default EditCustomer;
  
  