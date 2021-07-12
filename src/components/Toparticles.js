import React from 'react';
import styled from 'styled-components';

const Toparticles = ({item}) =>{
    return(
        
            <Article>
                <ArticleWrapper>
                    <ArticleImg>
                        <img src = {`./img/${item.imgurl}`} alt = {item.name}/>
                    </ArticleImg>
                    <AritcleContent>
                        <p>What Type of Hosting Do You Need?</p>
                        <a href='#'>Read More</a>
                    </AritcleContent>
                </ArticleWrapper>
            </Article>
       
        
    )
}
const ArticleWrapper = styled.div `
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid rgba(2,23,34,0.08);
    padding-bottom:15px;
    padding-top:15px;

`
const Article = styled.div`
    border:none;
    background-color: #F3F3F3;
    padding:0 20px;
    width:100%;
    
    
`
const ArticleImg = styled.div`
    flex:0.5;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const AritcleContent = styled.div`
    flex:0.45;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    p{
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 17px;
    }
    a{
        color: #999999;
        font-family: Avenir;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 19px;
        text-decoration:none;
    }

`
export default Toparticles;