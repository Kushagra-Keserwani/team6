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



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/*" element={<Login />}></Route>
          <Route exact path="/addCustomer" element={<AddCustomer />}></Route>
          <Route exact path="/viewCustomer" element={<ViewCustomer />}></Route>
          <Route exact path="/editCustomer" element={<EditCustomer />}></Route>
          <Route exact path='/balancecheck' element={<BalanceCheck />}></Route>
          <Route exact path='/addTransactions' element={<AddTransactions />}></Route>
          <Route exact path='/transactions' element={<Transactions />}></Route>
          <Route exact path='/pinchange' element={<PinChange />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
