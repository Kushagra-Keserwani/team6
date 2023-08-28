import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import AddCustomer from './Pages/AddCustomer/AddCustomer';
import ViewCustomer from './Pages/ViewCustomer/ViewCustomer';
import EditCustomer from './Pages/EditCustomer/EditCustomer';
import Transactions from './Pages/Transactions/transactions';
import AddTransactions from './Pages/Transactions/AddTransactions';
import BalanceCheck from './Pages/BalanceCheck/BalanceCheck';
import PinChange from './Pages/PinChange/PinChange';
import PrivateRoutes from './Pages/Login/PrivateRoutes';
import ViewStatus from './Pages/ViewStatus/ViewStatus';
import Cheque from './Pages/Cheque/Cheque'
import PrivateRoutesAdmin from './Pages/Login/PrivateRoutesAdmin';

const leftStyle = {
  margin: "20px",
  marginLeft: "270px"
}

function App() {

  const [sidebar, setSidebar] = useState(true);



  const showSidebar = () => setSidebar(!sidebar);


  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    
  }, []);


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<Home sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle} />}></Route>
            <Route exact path="/viewCustomer" element={<ViewCustomer sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path="/editCustomer/:data?" element={<EditCustomer sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path='/balancecheck' element={<BalanceCheck sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path='/addTransactions' element={<AddTransactions sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path='/transactions' element={<Transactions sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path='/pinchange' element={<PinChange sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
          </Route>  
          <Route element={<PrivateRoutesAdmin />}>  
            <Route exact path="/addCustomer" element={<AddCustomer sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
            <Route exact path="/viewStatus" element={<ViewStatus sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route> 
            <Route exact path="/cheque" element={<Cheque sidebar={sidebar} showSidebar={showSidebar} leftStyle={leftStyle}/>}></Route>
          </Route>     
          <Route exact path="/*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
