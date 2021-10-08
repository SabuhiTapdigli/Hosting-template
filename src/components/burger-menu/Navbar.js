import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
import { NavLink,Link} from "react-router-dom";
const Navbar = ({Nav,BurgerHandlar}) =>{
    return(
        <NavLinks onClick ={BurgerHandlar} Nav={Nav}>
            <Link to ='/' ><Logo><img src = {logo} alt = 'logo'/></Logo></Link>
            <NavLink to="/" exact><li>Top 10 Web Hostings Services</li></NavLink>
            <NavLink to="/domain"><li>Domain</li></NavLink>
            <NavLink to="/reviews"><li>Reviews</li></NavLink>
            <NavLink to = '/articles'><li>Articles</li></NavLink>
            <NavLink to = '/contact-us'><li>Contact Us</li></NavLink>  
            <NavLink to = '/about-us'> <li>About Us</li></NavLink>  
        </NavLinks>
    )
}
const Logo = styled.div `
    margin:50px;
    display:none;
    text-align: center;
    @media(max-width:992px){
        display:block;
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
        display:block;
    }
    @media(max-width:992px){
        display : ${({Nav}) => Nav ? 'block' : 'none'};
        flex-flow:column nowrap;
        height:100%;
        position:fixed;
        top:0;
        right:0;
        background-color: #140E1C;
        width: 70%;
        z-index:9;
        li{
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 900;
            padding:25px;
            font-size: 15px;
            font-weight: 900;
            letter-spacing: 0;
            line-height: 19px;
            // background-color: #2E2241;
            margin-bottom:5px;
            margin-right:0;

        }
    }
`

export default Navbar