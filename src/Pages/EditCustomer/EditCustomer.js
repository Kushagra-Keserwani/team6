import React from "react";
import axios from "axios";
import "../AddCustomer/AddCustomer.css";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "../../components/searchbar/searchbar";

const EditCustomer = (props) => {
  const {data} = useParams();
  //console.log(data);
  // const [data, setData] = useState(useParams());
  const [accountNum, setAccountNum] = useState(data?data:localStorage['accNo']);
  const [customer, setCustomerData] = useState({});
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [accounttype, setAccountType] = useState("");
  const [balance, setBalance] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [pinnum, setPinNum] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCustomerData = async () => {
    setIsLoading(true);

    try {
      let result
      // if(localStorage['role']=='User'){
      //   result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${localStorage['accNo']}`);
      // }
      // else{
        result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountNum}`);
      // }

      // setCustomerData(result.data);
      setName(result.data.name);
      setAddress(result.data.address);
      setEmail(result.data.email);
      setContact(result.data.contact);
      setCardNumber(result.data.cardnumber);
      setPinNum(result.data.pinnum);
      setCity(result.data.city);
      setAccountType(result.data.accounttype);
      setBalance(result.data.balance);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const update = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`https://localhost:7254/api/customer/Updatecustomer/${accountNum}`,
        {
          accountnum: accountNum,
          name: name,
          address: address,
          email: email,
          contact: contact,
          cardnumber: cardnumber,
          pinnum: pinnum,
          city: city,
          accounttype: accounttype,
          balance: balance,
        }
      );
      alert("Customer Updated.");
      setAccountNum("");
      setName("");
      setAddress("");
      setEmail("");
      setContact("");
      setCity("");
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    console.log(data);
    // if(data)
    // {
    //   setAccountNum(data);
    //   data = null;
    // }
    if (accountNum) {
      fetchCustomerData();
    } else {
      setCustomerData({});
      setAccountNum("");
      setName("");
      setAddress("");
      setEmail("");
      setContact("");
      setCardNumber("");
      setPinNum("");
      setCity("");
      setAccountType("");
      setBalance("");
    }
  }, [accountNum]);

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
                        value={accountNum}
                        onChange={(e) => setAccountNum(e.target.value)}
                      /> </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>}

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
                  <td>Name </td>
                  <td>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control1"
                          id="name"
                          value={name}
                          onChange={(e) => { setName(e.target.value) }}
                        />
                      </div>
                    </form></td>
                </tr>
                <tr>
                  <td>Address </td>
                  <td> <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control1"
                        id="address"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value) }}

                      />
                    </div>
                  </form></td>
                </tr>
                <tr>
                  <td>Email </td>
                  <td>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control1"
                          id="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value) }}

                        />
                      </div>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>Contact </td>
                  <td>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control1"
                          id="contact"
                          value={contact}
                          onChange={(e) => { setContact(e.target.value) }}
                        />
                      </div>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>City </td>
                  <td>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control1"
                          id="city"
                          value={city}
                          onChange={(e) => { setCity(e.target.value) }}
                        />
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={update}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default EditCustomer;



