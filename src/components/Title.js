import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg-home.png'

const Title = ({title,parag,Contact}) => {
    return (
            <BgWrapper>
                <Container>
                    <Headerwrapper>
                        <Currentime><div><span>&</span>Last Updated 7 Jul, 2021</div></Currentime>
                        <TitleHeader>{title}</TitleHeader>
                        <TtileContent>{parag}</TtileContent>
                        {!Contact && <CheckButton>Check</CheckButton>}
                    </Headerwrapper>
                </Container>
            </BgWrapper>
        
    )
}
const BgWrapper = styled.div`
    background-image: url(${bg});
    height:450px;
    background-size:cover;
`


const Container = styled.div`
    max-width:1200px;
    margin:auto;
    padding: 0 20px;

    `
const Currentime = styled.div`
    color: #FFFFFF;
    font-family: 'Avenir';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;  
    div{
        text-align:center;
        width: 226px;
        border-radius: 5px;
        background-color: rgba(255,255,255,0.1);
        padding:5px 0;
    }
    padding:20px 0;
   
`
const TitleHeader = styled.h1`
    color: #FFFFFF;
    font-family: 'Avenir';
    font-size: 33px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 18px;
    padding:30px 0;
`
const TtileContent = styled.p`
    color: #FFFFFF;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    padding: 20px 0;
`
const CheckButton = styled.button`
    height: 46px;
    width: 207px;
    border-radius: 3px;
    background: linear-gradient(267.34deg, #48E2E2 0%, #0A6BFF 99.92%);
    box-shadow: 0 5px 50px 0 rgba(106,169,216,0.7);
    color: #FFFFFF;
    outline:none;
    border:none;
    cursor-pointer;

`
const Headerwrapper = styled.div`
    padding:20px 0;
    width:50%
`
export default Title
