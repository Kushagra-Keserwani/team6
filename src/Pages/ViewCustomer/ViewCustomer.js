import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "./../../components/searchbar/searchbar"

function ViewCustomer() {    const [accountnum, setAccountNum] = useState("");
const [customers, setCustomers] = useState([]);

const [isLoading, setIsLoading] = useState(false);

  
const fetchCustomerData = async () => {
    try {
      const result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountnum}`);
      setCustomers([result.data]);
      
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }};

  useEffect(() => {
    if (accountnum) {
      fetchCustomerData();
    }else{
      setCustomers([]);
      Load();
    }
  }, [accountnum]);

async function Load(){
    const result = await axios.get("https://localhost:7254/api/customer/GetAll");
    setCustomers(result.data);
    console.log(result.data);
}

async function deleteCustomer(accountnum)
{
    await axios.delete("https://localhost:7254/api/customer/Deletecustomer/" + accountnum);
    alert("Customer deleted successfully.");
    Load();
}

return (
    <div>
        <SideMenuBar/>
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
            value={accountnum}
            onChange={(e) => setAccountNum(e.target.value)}
          /> </div>

        </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container mt-5">
            <h4 class="mb-3">Customer Details</h4>
<table class="table table-bordered table-striped" align="center">
<thead>
    <tr>
        <th scope="col">Account Number</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Email</th>                  
        <th scope="col">Contact</th>
        <th scope="col">Card Number</th>
        <th scope="col">Pin Number</th>
        <th scope="col">City</th>
        <th scope="col">Account Type</th> 
        <th scope="col">Balance</th>                                       
        <th scope="col">Option</th>
    </tr>
</thead>
{customers.map(function fn(customer){
    return (
        <tbody>
            <tr>
                <th scope="row">{customer.accountnum}</th>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
                <td>{customer.cardnumber}</td>
                <td>{customer.pinnum}</td>
                <td>{customer.city}</td>
                <td>{customer.accounttype}</td>
                <td>{customer.balance}</td>

                <td>
                    <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteCustomer(customer.accountnum)}
                    >Delete</button>
                </td>
            </tr>
        </tbody>
    );
}
)}
</table>
</div>
</div>
);
}

export default ViewCustomer;