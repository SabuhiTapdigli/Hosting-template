import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Partner from './Partner';
import Sidebar from './Sidebar';
import useApi from '../hooks/useApi'
const Main = () =>{
    const datas = useApi('api');
    return(
        <Container>
            <Title/>
            <MainSection>
            <Mainbody>
                {datas.map((item)=>{
                    return(<Partner key = {item.id} item = {item} className='partner'/>)
                })}
            </Mainbody>
            <Sidebar/>
            </MainSection>
        </Container>
    )
}
const Container = styled.div`
    // height: calc( 100vh - 60px);
    // padding : 0 calc(10vw + 5px);
`
const Mainbody = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.78;
    
`
const MainSection = styled.div`
    display:flex;
    max-width:1200px;
    margin:auto;
    justify-content:space-between;
    padding: 0 20px;
`
export default Main