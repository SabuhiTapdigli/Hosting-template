import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const Footer = () =>{
    return(
        <FooterSection>
            <Container>
                <Logo>
                    <img src = {logo} alt = 'Top 10 Web Hosting'/>
                    <span>All Right Reserved &#169; 2021</span>
                </Logo>
                <Footerwrapper>
                    <FooterLinks>
                        <li>Top 10 Web Hostings Services</li>
                        <li>Reviews</li>
                        <li>Articles</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </FooterLinks>
                    <Description>
                    There are different types of hosting services that cater to the varying types of businesses. Some web hosting companies will build your entire website, while others will just give you the plot of land and the shovel and leave you to it. Depending on your business model and size, you’ll choose a hosting company based on the factors explained below.
                    </Description>
                </Footerwrapper>
            </Container>
        </FooterSection>
    )
}
const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding: 0 20px;
    color: #FFFFFF;
    display:flex;
    justify-content:space-between;

`
const FooterSection = styled.div`
    background-color:black;
`
const Logo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top: 30px;
    flex:0.2;
    span{
        display:block;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        padding: 50px 0;
    }
`
const Footerwrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    flex: 0.7;
`
const FooterLinks = styled.ul`
    list-style:none;
    display:flex;
    padding-top: 30px;
    li{
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 20px;
        text-align: right;
        margin-right:25px;
    }
`
const Description = styled.p`
    color: #9D9D9D;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 19px;
    padding: 50px 0;
`

export default Footer