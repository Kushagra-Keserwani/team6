import React from "react";
import './AddCustomer.css';
import SideMenuBar from "./../../components/sidebar/index"

function AddCustomer() {
  return (
    <div>
    <SideMenuBar></SideMenuBar>
      <body>
        <div className="container1">
          <h2>Add Customer Details</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" className="form-control1" id="name" ></input>
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control1" id="email" ></input>
            </div>
            <div className="form-group">
              <label for="mobile">Mobile:</label>
              <input type="text" className="form-control1" id="mobile" ></input>
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <textarea id="address" name="address" rows="4"></textarea>
            </div>
            <div className="form-group">
              <label for="accno">Account Number:</label>
              <input type="text" className="form-control1" id="accno" ></input>
            </div>
            <div className="form-group">
              <label for="acctype">Account Type:</label>
              <input type="text" className="form-control1" id="acctype" ></input>
            </div>
            <div className="form-group">
              <label for="bal">Balance:</label>
              <input type="text" className="form-control1" id="bal" ></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddCustomer;