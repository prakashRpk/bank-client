import { useContext, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { navdataContext } from './login';


export default function Nav_bar(){
    let user = useContext(navdataContext)
    let [nav,setNav]=useState(user)
   
    console.log(nav)
    return(<>
        <Navbar expand="lg" className="bg-body-tertiary" id='nav'>
            <h1>Royal Bank</h1>
            <Container>
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link href="#Login">Login</Nav.Link> */}
                  <Nav.Link href="#register">Register</Nav.Link>
                  <Nav.Link href="#deposit">Deposit</Nav.Link>
                  <Nav.Link href="#cashback">Cash Back</Nav.Link>
                  <Nav.Link href="#alldata">All Data</Nav.Link>

                  {/* {user.AllData}
                  {user.Deposit}
                  {user.CashBack} */}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}