import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Partner from './Partner';
import Sidebar from './Sidebar';
import Footercontent from './Footercontent'


const Review  = ({datas}) =>{
    const isReview = true;
    const revtitle = 'Top 10 Web Hosting Reviews';
    const revparag = 'Keep your website up and running with a hosting company that promise high uptime, quick load times,and simple setup'
    return(
        <Container>
            <Title title = {revtitle} parag = {revparag}/>
            <MainSection>
                <Mainbody>
                    {datas.items.map((item)=>{
                        return(<Partner key = {item.id} item = {item} isReview = {isReview} className='partner'/>)
                    })}
                </Mainbody>
                <Sidebar articles = {datas.articles}/>
            </MainSection>
            <Footercontent/>
        </Container>
    )
}

const Container = styled.div`
    
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
    margin-top:-40px;
    border-bottom:1px solid rgba(2,23,34,0.08);
    padding-bottom:100px;
`
export default Review
