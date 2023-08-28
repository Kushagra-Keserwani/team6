import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {BiEdit} from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import SideMenuBar from "./../../components/sidebar/index"
import SearchBar from "./../../components/searchbar/searchbar"
import { toast } from "react-toastify";

function ViewStatus(props) {    
const [accountnum, setAccountNum] = useState(localStorage['accNo']?localStorage['accNo']:0);
const [users, setUsers] = useState([]);
const [status, setStatus]=useState();
const [ isToggled,setIsToggled] = useState(true);
const [isLoading, setIsLoading] = useState(false);

  
const fetchCustomerData = async () => {
    try {
      const result = await axios.get(`https://localhost:7254/api/Auth/Getuser/${accountnum}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
      setUsers([result.data]);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }};

  useEffect(() => {
    if (accountnum && accountnum!=0) {
      fetchCustomerData();
    }else{
      setUsers([]);
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
    const result = await axios.get("https://localhost:7254/api/Auth/GetAll",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    setUsers(result.data);
    console.log(result.data);
}

async function changestatus(event,accountnum,status)
{
    // if(status=="Activate"){
    //     status="Deactivate";
    // }
    // else{
    //     status="Activate";
    // }
    await axios.post(`https://localhost:7254/api/Auth/Status/${accountnum}`,
//     ,{
//         accountnum : accountum,
//         status : status
// },
{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    .then((response)=>{
        toast.success("Customer status Updated.");
        console.log(response.data);
    });
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
            <h4 class="mb-3">User Details</h4>
<table class="table table-bordered table-striped" align="center">
<thead>
    <tr>
        <th scope="col">Account Number</th>
        <th scope="col">UserName</th>
        <th scope="col">Status</th>
    </tr>
</thead>
{users.map(function fn(user){
    return (
        <tbody>
            <tr>
                <th scope="row">{user.accNo}</th>
                <td>{user.username}</td>
                <td>
                    {user.status=="Activate" &&
                    <button className="btn btn-danger" onClick={event => changestatus(event,user.accNo,user.status)}>
                        {'De-Activate'}
                        {/* {user.status} */}
                    </button>}
                    {user.status=="Deactivate" &&
                    <button className="btn btn-success" onClick={event => changestatus(event,user.accNo,user.status)}>
                        {'Activate'}
                        {/* {user.status} */}
                    </button>}

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

export default ViewStatus;