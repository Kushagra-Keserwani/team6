import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import AddCustomer from './Pages/AddCustomer/AddCustomer';
import ViewCustomer from './Pages/ViewCustomer/ViewCustomer';
import EditCustomer from './Pages/EditCustomer/EditCustomer';
import Transactions from './Pages/Transactions/transactions'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="*" element ={<Login/>}></Route>
        <Route exact path ="/addCustomer" element={<AddCustomer/>}></Route>
        <Route exact path ="/viewCustomer" element={<ViewCustomer/>}></Route>
        <Route exact path ="/editCustomer" element={<EditCustomer/>}></Route>
        <Route exact path='/transactions' element={<Transactions/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
