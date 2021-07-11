import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Header = () =>{
    return(
        <Navbar>
            
            <Logo><img src = {logo} alt = 'logo'/></Logo>
            <NavLinks>
            <Link to="/"><li>Top 10 Web Hostings Services</li></Link>
            <Link to="/review"><li>Reviews</li></Link>
                <Link to = '/article'><li>Articles</li></Link>
                <li>Contact Us</li>
                <li>About Us</li>
            </NavLinks>
        </Navbar>
    )
}

const Navbar = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
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
        cursor:pointer;
    }
`
export default Header