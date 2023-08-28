import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {BiEdit} from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "./../../components/searchbar/searchbar"

function ViewCustomer(props) {    
const [accountnum, setAccountNum] = useState(localStorage['accNo']?localStorage['accNo']:0);
const [customers, setCustomers] = useState([]);

const [isLoading, setIsLoading] = useState(false);

  
const fetchCustomerData = async () => {
    try {
      const result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountnum}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
      setCustomers([result.data]);
      
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }};

  useEffect(() => {
    if (accountnum && accountnum!=0) {
      fetchCustomerData();
    }else{
      setCustomers([]);
      if(localStorage['role']=="Admin"){
      Load();}
    }
  }, [accountnum]);
// useEffect(() => {
//     axios.get("https://localhost:7254/api/customer/GetAll",{
//         headers:{
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     })
//     .then((response)=>{
        
//         console.log(response.data);
//         setUsers(response.data);
//     });});

async function Load(){
    const result = await axios.get("https://localhost:7254/api/customer/GetAll",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    setCustomers(result.data);
    console.log(result.data);
}

async function deleteCustomer(accountnum)
{
    await axios.delete("https://localhost:7254/api/customer/Deletecustomer/" + accountnum,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    .then((response)=>{
        
        console.log(response.data);
    });
    alert("Customer deleted successfully.");
    if(localStorage['role']=="Admin"){
        Load();}
}

return (
    <div>
      <SideMenuBar sidebar={props.sidebar} showSidebar={props.showSidebar}></SideMenuBar>
            <div style={props.sidebar?props.leftStyle:null}>
        {localStorage['role']=="Admin" &&
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
        </div>}
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
        {/* <th scope="col">Card Number</th>
        <th scope="col">Pin Number</th> */}
        <th scope="col">City</th>
        <th scope="col">Account Type</th> 
        {/* <th scope="col">Balance</th>                                        */}
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
                {/* <td>{customer.cardnumber}</td> */}
                {/* <td>{customer.pinnum}</td> */}
                <td>{customer.city}</td>
                {customer.accounttype===0 && <td>{"Savings"}</td>}
                {customer.accounttype===1 && <td>{"Checking"}</td>}
                {/* <td>{customer.accounttype}</td> */}
                {/* <td>{customer.balance}</td> */}
                <td>
                    <BiEdit></BiEdit>
                </td>
                <td>
                    <AiFillDelete

                    onClick={() => deleteCustomer(customer.accountnum)}
                    />
                </td>
            </tr>
        </tbody>
    );
}
)}
</table>
</div>
</div>
</div>
);
}

export default ViewCustomer;