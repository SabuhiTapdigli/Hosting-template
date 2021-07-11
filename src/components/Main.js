import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Partner from './Partner';
import Sidebar from './Sidebar';
const Main = () =>{
    return(
        <Container>
            <Title/>
            <Mainbody>
                <Partner/>
                <Sidebar/>
            </Mainbody>
            
        </Container>
    )
}
const Container = styled.div`
    height: calc( 100vh - 60px);
    padding : 0 calc(10vw + 5px);
`
const Mainbody = styled.div`
    display:flex;
`
export default Main