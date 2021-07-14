import React from 'react';
import logo from '../img/webhostinglogo.svg';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <Navbar>
            <Container>
                <Logo><img src = {logo} alt = 'logo'/></Logo>
                <NavLinks>
                <Link to="/"><li>Top 10 Web Hostings Services</li></Link>
                <Link to="/reviews"><li>Reviews</li></Link>
                <Link to = '/articles'><li>Articles</li></Link>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </NavLinks>
            </Container>
        </Navbar>
    )
}

const Navbar = styled.div `
    
`
const Container =styled.div`
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
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
        color:black;
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
`
export default Header