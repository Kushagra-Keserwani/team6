import './App.css';
import React from 'react';
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



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/viewCustomer" element={<ViewCustomer />}></Route>
            <Route exact path="/editCustomer/:data?" element={<EditCustomer />}></Route>
            <Route exact path='/balancecheck' element={<BalanceCheck />}></Route>
            <Route exact path='/addTransactions' element={<AddTransactions />}></Route>
            <Route exact path='/transactions' element={<Transactions />}></Route>
            <Route exact path='/pinchange' element={<PinChange />}></Route>
            <Route exact path="/cheque" element={<Cheque />}></Route>
          </Route>  
          <Route element={<PrivateRoutesAdmin />}>  
            <Route exact path="/addCustomer" element={<AddCustomer />}></Route>
            <Route exact path="/viewStatus" element={<ViewStatus />}></Route> 
          </Route>     
          <Route exact path="/*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
