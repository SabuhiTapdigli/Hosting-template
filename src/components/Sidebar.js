import React from 'react';
import partnerimg from '../img/bluehost.png'
import styled from 'styled-components';
import eye from '../img/eye.svg'
import banner from '../img/banner.png';
import Toparticles from './Toparticles';
import {Link} from 'react-router-dom'
const Sidebar = ({articles}) =>{

    
    return(
        <SidebarContainer>
            <Sidebartop>
                <span>350,060 + </span>
                <div>
                <p>Visited website today</p> <span><img src = {eye}/></span>
                </div>
            </Sidebartop>
            <Sidebarbottom>
                <PartnerImg><img src ={partnerimg} alt={'bluehost'}/></PartnerImg>
                <Sidebartext>The Best Web Hosting</Sidebartext>
                <Sidebarbutton>Visit Website</Sidebarbutton>
                <p>Special Intro Offer And 30-Day Money-Back Guarantee</p>
            </Sidebarbottom>
            <Allarticles>
                <h3>Must Reads</h3>
                {articles.map((item,index)=>{
                    if (index<4){
                        return(
                            <Toparticles key = {item.id} item = {item}/>
                            
                        )
                    }
                })}
                <span> <Link to={`/articles`}>See More</Link> </span> 
            </Allarticles>
            
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.2;
    // justify-content:center;
    align-items:center;
`
const Sidebartop = styled.div`
    border: 1px solid rgba(2,23,34,0.08);
    border-radius: 5px;
    background-color: #F3F3F3;
    padding:30px 20px;
    width:100%;
    margin-bottom:10px;
    span{
        color: #062739;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: 0.58px;
        display:block;
        text-align:left;
    
    }
    img{
        
    }
    p{
        color: #000000;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 21px;
        width:55%;
}
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    }
`

const Sidebarbottom = styled.div`
    border: 1px solid rgba(2,23,34,0.08);
    border-radius: 5px;
    background-color: #F3F3F3;
    padding:30px 20px;
    width:100%;
    background-image : url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom:10px;
    p{
        color: #000000;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 20px;
        margin-top:10px
    }
    
    
`
const Sidebartext = styled.div `
    color: #184276;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.13px;
    line-height: 29px;
    padding: 20px 0;
    font-family: 'Avenir';
}
`
const PartnerImg = styled.div`
    width : 150px;
        img{
            width:100%;
        }
`

const Sidebarbutton = styled.button`
    height: 46px;
    width: 207px;
    border-radius: 3px;
    background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
    box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
    border:none;
    outline:none;
    margin-top:200px;
    color:white;
    font-weight: 900;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    text-shadow: 0 2px 20px 0 rgba(94,94,94,0.5);
`
const Allarticles = styled.div`
    h3{
        padding: 25px 10px 10px 20px;
        background-color: #F3F3F3;
        color: #000000;
        font-size: 18px;
        font-weight: 900;
        letter-spacing: 0;
        line-height: 20px;
        
    }
    span{
        padding: 25px 10px 25px 20px;
        background-color: #F3F3F3;
        color: #000000;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 20px;
        display:block;
    }
    border: 1px solid rgba(2,23,34,0.08);
    border-radius: 5px;
`
export default Sidebar