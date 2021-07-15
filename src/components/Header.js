import React,{useState} from 'react';
import logo from '../img/webhostinglogo.svg';
import styled from 'styled-components';
import Navbar from '../components/burger-menu/Navbar'
import { Link } from "react-router-dom";
import Burger from './burger-menu/Burger';

const Header = () =>{
    const [Nav, setNav] = useState(false)
    
    return(
      
            <Container>
                <Link to ='/'><Logo><img src = {logo} alt = 'logo'/></Logo></Link>
                <Navbar Nav = {Nav}/>
                <Burger setNav = {setNav} Nav={Nav}/>
            </Container>
        
    )
}


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

export default Header