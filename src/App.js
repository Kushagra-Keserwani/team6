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
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/addCustomer" element={<AddCustomer />}></Route>
          <Route exact path="/viewCustomer" element={<ViewCustomer />}></Route>
          <Route exact path="/editCustomer" element={<EditCustomer />}></Route>
          <Route exact path='/transactions' element={<Transactions />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
