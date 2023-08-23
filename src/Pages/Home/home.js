import React from "react";
import { Link } from "react-router-dom";
import SideMenuBar from "./../../components/sidebar/index"
import transactionImage from "./transaction.jpg"
import balanceImage from "./balance check.png";
import viewTransaction from "./viewTransaction.jpg";
import viewCustomer from "./viewCustomer.png";
import editCustomer from "./editCustomer.jpg";
import addCustomer from "./addCustomer.jpg"
import Header from "../../components/Header/Header";
import "./home.css"
import { Card, Row, Col } from 'react-bootstrap'; // Import Card component from react-bootstrap

  

function Home() {
    return (
        <div className="home">
            <SideMenuBar></SideMenuBar>
            <div className="leftSpace">
            <div className="container text-left mt-5">
                <h4 class="display-6">Welcome to DOTBank, where your financial dreams come to life!</h4>

                <div>
                <Row >
                   
    <Col  md = {4} sm = {6} xs = {12} className="col">
    <Card style = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {transactionImage} />
    <Card.Body className = "options">
    <Link      to        = "/addTransactions">
    <button    className = 'btn btn-danger btn-lg btn-block cardButton'>
              Add  Transactions
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col      md = {4} sm = {6} xs = {12} className="col">
    <Card     style   = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {balanceImage} />
      <Card.Body className="options">
        <Link   to        = "/balancecheck">
        <button className = 'btn btn-danger btn-lg btn-block cardButton'>
              Check Balance
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col      md = {4} sm = {6} xs = {12} className="col">
    <Card     style   = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {viewTransaction} />
      <Card.Body className="options">
        <Link   to        = "/transactions">
        <button className = 'btn btn-danger btn-lg btn-block cardButton'>
               Last Transactions
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    <Row className="row">
    <Col      md = {4} sm = {6} xs = {12} className="col">
    <Card     style   = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {addCustomer} />
      <Card.Body className="options">
        <Link   to        = "/addCustomer">
        <button className = 'btn btn-danger btn-lg btn-block cardButton'>
              Add  Customer
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col      md = {4} sm = {6} xs = {12} className="col">
    <Card     style   = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {viewCustomer} />
      <Card.Body className="options">
        <Link   to        = "/viewCustomer">
        <button className = 'btn btn-danger btn-lg btn-block cardButton'>
              Customer Details
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col      md = {4} sm = {6} xs = {12} className="col">
    <Card     style   = {{ width: '18rem' }} >
    <Card.Img variant = "top" className = "card-image" src               = {editCustomer} />
      <Card.Body className="options">
        <Link   to        = "/editCustomer">
        <button className = 'btn btn-danger btn-lg btn-block cardButton'>
              Edit Customer
            </button>
        </Link>
      </Card.Body>
    </Card>
    </Col>

    </Row>
    </div>

            </div>
           
    

            </div>

        </div>
    )
}
export default Home;