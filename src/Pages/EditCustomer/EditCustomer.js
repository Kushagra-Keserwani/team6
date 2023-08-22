import React from "react";
import axios from "axios";
import "../AddCustomer/AddCustomer.css";
import { useEffect, useState } from "react";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "../../components/searchbar/searchbar";

const EditCustomer = () => {
  const [accountNum, setAccountNum] = useState("");
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
      const result = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountNum}`);
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
  async function update(event) {
    event.preventDefault();
    try {
      console.log(name, city, email, address, contact, accountNum);
      await axios.patch("https://localhost:7254/api/customer/Updatecustomer/",
        {
            name: name,
            address: address,
            email: email,
            contact: contact,
            cardnumber: cardnumber,
            pinnum : pinnum,
            city:city,
            accounttype:accounttype,
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
      <SideMenuBar />
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
                  <td>Name </td>
                  <td>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control1"
                          id="name"
                          defaultValue={name}
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
                        defaultValue={address}
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
                          defaultValue={email}
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
                          defaultValue={contact}
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
                          defaultValue={city}
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



