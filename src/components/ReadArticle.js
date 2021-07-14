import React,{useState} from 'react';
import styled from 'styled-components';
import Title from './Title';
import Sidebar from './Sidebar';
import Footercontent from './Footercontent';
import { useParams } from 'react-router-dom';


const ReadArticle  = ({datas}) =>{
    const imgUrl = 'https://techsites.net/ho01/assets/images/'
    const {name} = useParams();
    return(
        <Container>
            <Title/>
            <MainSection>
                <Mainbody>

                {datas.articles.map((item)=>{
                        if(item.name === name){
                            return(
                                <div>
                                    <h1>{item.name}</h1>
                                    <span>07 July, 2021</span>
                                    <img src = {`${imgUrl}${item.imgUrl}`} alt = {item.name} />
                                    <div dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>
                                )
                        }
                    })}
                </Mainbody>
                <Sidebar articles = {datas.articles}/>
            </MainSection>
            <Footercontent/>
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
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    div{
        width: 736px;
        height:100%;
        margin:auto;
    }
    img{
        width:100%
    }
    h1{
        padding-top:30px;
    }
    span{
        display:block;
        padding:20px 0;
    }
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
export default ReadArticle
