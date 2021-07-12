import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Header = () =>{
    return(
        <Navbar>
            <Container>
                <Logo><img src = {logo} alt = 'logo'/></Logo>
                <NavLinks>
                <Link to="/"><li>Top 10 Web Hostings Services</li></Link>
                <Link to="/review"><li>Reviews</li></Link>
                    <Link to = '/article'><li>Articles</li></Link>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </NavLinks>
            </Container>
        </Navbar>
    )
}

const Navbar = styled.div `
    background-color:black;
    
`
const Container =styled.div`
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:black;
`
const Logo = styled.div `
    img{
        
    }
`
const NavLinks = styled.ul`
    list-style:none;
    display:flex;
    li{
        margin-right:20px;
        color:white;
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
`
export default Header