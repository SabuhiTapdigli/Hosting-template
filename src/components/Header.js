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
                <Link to ='/'><Logo><img src = {logo} alt = 'logo' height='64' width ='195'/></Logo></Link>
                <Navbar Nav = {Nav} setNav={setNav}/>
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
    height:64px;
    width:195px;
    img{
        
    }
`

export default Header