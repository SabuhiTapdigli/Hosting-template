import React from 'react';
import partnerimg from '../img/bluehost.png'
import styled from 'styled-components';

const Sidebar = () =>{
    return(
        <SidebarContainer>
            <Sidebartop>
                <span>350,060 + </span>
                <div>
                <p>Visited website today</p> <span>Logo</span>
                </div>
            </Sidebartop>
            <Sidebarbottom>
                <PartnerImg><img src ={partnerimg}/></PartnerImg>
                <Sidebarbutton>Visit Website</Sidebarbutton>
                <p>Special Offer</p>
            </Sidebarbottom>
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
const Sidebartop = styled.div``

const Sidebarbottom = styled.div`
    
`
const PartnerImg = styled.div`
    width : 150px;
        img{
            width:100%;
        }
`
const Sidebarbutton = styled.button`
`

export default Sidebar