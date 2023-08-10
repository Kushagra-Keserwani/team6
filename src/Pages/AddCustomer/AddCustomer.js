import React from "react";

function AddCustomer(){
    return(
        <div>
            <h3>Add Customer details</h3>
            <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" ></input>
  </div>
  <div class="mb-3">
    <label for="accountNo" class="form-label">Account Number</label>
    <input type="text" class="form-control" id="accountNo" ></input>
  </div>
  <div class="mb-3">
    <label for="balance" class="form-label">Balance</label>
    <input type="number" class="form-control" id="balance"></input>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
</form>
        </div>
    );
}

export default AddCustomer;