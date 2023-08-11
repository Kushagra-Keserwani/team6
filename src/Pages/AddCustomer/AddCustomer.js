import React from "react";
import './AddCustomer.css';

function AddCustomer() {
  return (
    <div>
      <body>
        <div class="container">
          <h2>Add Customer Details</h2>
          <form action="#" method="post">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" ></input>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" ></input>
            </div>
            <div class="form-group">
              <label for="mobile">Mobile:</label>
              <input type="text" class="form-control" id="mobile" ></input>
            </div>
            <div class="form-group">
              <label for="address">Address:</label>
              <textarea id="address" name="address" rows="4"></textarea>
            </div>
            <div class="form-group">
              <label for="accno">Account Number:</label>
              <input type="text" class="form-control" id="accno" ></input>
            </div>
            <div class="form-group">
              <label for="acctype">Account Type:</label>
              <input type="text" class="form-control" id="acctype" ></input>
            </div>
            <div class="form-group">
              <label for="bal">Balance:</label>
              <input type="text" class="form-control" id="bal" ></input>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddCustomer;