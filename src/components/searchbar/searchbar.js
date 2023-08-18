import React, { useState } from 'react';
import axios from 'axios';
import './searchbar.css';



function SearchBar() {
  const [accountNumber, setAccountNumber] = useState("");
  const [responseData, setResponseData] = useState([]);


  function handleAccountNumberChange(event) {
    setAccountNumber(event.target.value);
  }

  async function searchAccount() {
    try {
      const response = await axios.get(`https://localhost:7254/api/customer/Getcustomer/${accountNumber}`);
      setResponseData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="jumbotron">
      <div >
        <p>Enter Account Number of the customer</p>
        <input
          type="text"
          placeholder="Account number"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />

        <button onClick={searchAccount} type='submit'>Get Account Details</button>
        <hr className='my-4' />
        
      </div>
        
    </div>
  );


}

export default SearchBar;