import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import petShopLogo from '../imagens/petShopLogo.png'
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='logo'><Link to="/">
            <img src= { petShopLogo } alt='logo pet shop' /></Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#" className='menu'><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#" className='menu'><Link to="/banho-e-tosa">Banho e Tosa</Link></Nav.Link>
            <Nav.Link href="#" className='menu'><Link to="/hotel-resort">Hotel Resort</Link></Nav.Link>
            <Nav.Link href="#" className='menu'><Link to="/adestramento">Adestramento</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarMenu
