import axios from "axios";
import { useEffect, useState } from "react";

import SideMenuBar from "./../../components/sidebar/index";
import { event } from "jquery";
import { toast } from "react-toastify";
import "../AddCustomer/AddCustomer.css";

function Cheques(props) {
  const [accountNum, setAccountNum] = useState(localStorage['accNo'] ? localStorage['accNo'] : 0);
  const [ChequeNo, setChequeNo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("InProgress");
  const [Cheques, setChequeData] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchChequeData = async () => {
    setIsLoading(true);

    try {
      const result = await axios.get(`https://localhost:7254/api/transaction/GetCheques/${accountNum}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setChequeData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    } finally {
      setIsLoading(false);
      //toast.success("Cheque Added Successfully.");
    }
  };

  useEffect(() => {
    if (accountNum && accountNum != 0) {
      fetchChequeData();
    }
    else {
      setChequeData([]);
    }
  }, [accountNum]);

  return (
    <div>
 <SideMenuBar sidebar={props.sidebar} showSidebar={props.showSidebar}></SideMenuBar>
            <div style={props.sidebar?props.leftStyle:null}>
      {localStorage['role'] == "Admin" &&
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
}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div class="container mt-5">
            <h4 class="mb-3">Cheque Details</h4>
            <table class="table table-bordered table-striped" align="center">
              <thead>
                <tr>
                  <th scope="col">Cheque Number</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Account Number</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {Cheques.map(function fn(Cheque) {
                let custyle = Cheque.status == "Rejected" ? { color: 'red' } : Cheque.status == "Approved" ? { color: 'green' } : { color: 'black' };
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{Cheque.cno}</th>
                      <td>{Cheque.amount}</td>

                      <td>{Cheque.accno}</td>
                      <td style={custyle}>{Cheque.status}</td>
                    </tr>
                  </tbody>
                );
              }
              )}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cheques;
