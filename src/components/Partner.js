import React from 'react'
import top from '../img/top.svg';
import check from '../img/check.svg';
import {NavLink } from "react-router-dom";
import styled from 'styled-components';
import Star from './Star';
import useGaEventTracker from '../hooks/useGaEventTracker';


const Partner = ({item,isReview}) =>{
    const imgUrl = '../img/logos/';
    const gclid = sessionStorage.getItem('gclid')
    const itemurl = item.url+gclid
    const GaEventTracker = useGaEventTracker('Partner links')
    return(
        <Partnerwrapper key = {item.id}>
                <Partnercol>
                    <PartnerImg className =  {isReview ? 'review' : null}>
                    <a href = {itemurl} target='_blank' rel="noreferrer" onClick={(e) =>GaEventTracker('Partner clicked',itemurl)}> <img src = {`${imgUrl}${item.imgUrl}`} alt = {item.partnerName} height='60' width ='210'/></a>    
                    </PartnerImg>
                    {isReview ? null : <Star rating = {parseFloat(item.description)}/>}
                </Partnercol>
            <PartnerContent >
                <h1>{item.partnerName}</h1>
                <p>{item.bonus}</p>
                {isReview ? null : 
                <PartnerWhatwelike>
                    {item.whatwelike.map((i)=>{
                        return(<li key={i.id}><img src ={check} alt ={'check'} width="12" height="12"/>{i.name}</li>)
                    })}
                </PartnerWhatwelike>
                
                }
                
                
            </PartnerContent>
            <PartnerRating className =  {isReview ? 'review' : null}>
                {isReview ? null : 
                <ScoreText><span><img src ={top} alt = {'top'} width="13" height="13"/></span><span>{item.short_review}</span></ScoreText>
                }
                {isReview ? null : 
                <ScoreValue><span>{item.description}/5</span></ScoreValue>
                }
                
                <a href = {itemurl} target='_blank' rel="noreferrer" onClick={(e) =>GaEventTracker('Partner clicked',itemurl)}><VisitButton> Visit Website</VisitButton></a>
                <ReadReview><NavLink to={`/review/${item.partnerName}`}>Read Review</NavLink></ReadReview>
            </PartnerRating>
        </Partnerwrapper>
    )
}
const Partnercol = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin:10px;
    @media(max-width:992px){
        justify-content:center;
        align-items:center;
        margin:0;
    }

`

const Partnerwrapper = styled.div`
    display:flex;
    justify-content:space-between;
    // align-items:center;
    flex:0.8
    height: 220px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 40px 0 rgba(0,0,0,0.12);
    padding: 15px 0;
    margin-bottom:15px;
    @media(max-width:992px){
        flex-direction:column;
    }
    
`
const PartnerImg = styled.div `
    height: 60px;
    width: 210px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    span{
        margin-top: 55px;
        display: block;
    }
    @media(max-width:992px){
        margin-bottom:10px;
    }

`
const PartnerContent = styled.div`
    width : 40%;
    color: #2B292D;
    h1{
        padding:10px 0;
        font-size: 19px;
        font-weight: 900;
    }
    p{
        padding: 10px 0;
        font-size: 15px;
        font-weight: 900;
        color: #2B292D;

    }
    @media(max-width:992px){
        h1{
            display:none;
        }
        width : 100%;
        text-align:center;
    }
`

const PartnerWhatwelike = styled.ul`
    color: #2B292D;
    list-style:none;
    li{
        padding: 2px 0;
        font-size: 14px;
        font-weight: 300;
    }
    img{
        margin-right:10px;
    }
    @media(max-width:992px){
        display:none;
    }
    
`
const PartnerRating = styled.div`
    width : 30%;
    text-align:center;
    padding:10px;
    
    @media(max-width:992px){
        width:100%
    }

    
`
const ScoreText = styled.div`
    border-radius: 4px;
    background-color: #F4F4F4;
    width: 146px;
    text-align:center;
    margin:auto;
    display:flex;
    justify-content:center;
    span{
        display:flex;
        margin-right:7px;
        ustify-content: center;
        align-items: center;
        height:25px;
        }
    @media(max-width:992px){
        span{
            display:none;
            }
        }
    }
`
const ScoreValue = styled.div`
    span{
        font-weight:bold;
    }
    padding:10px 0;
`
const VisitButton = styled.button`
    height: 46px;
    width: 207px;
    border-radius: 3px;
    background-color: #046EF1;
    box-shadow: 0 3px 10px 0 rgba(182,182,182,0.5);
    border:none;
    outline:none;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    color:white;
    margin:10px 0;
    cursor:pointer;
    text-transform:uppercase;
}
`
const ReadReview = styled.div`
    padding:5px 0;
    a{
        color: #000000;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 10px;
        text-align: center;
    }
`
export default Partner