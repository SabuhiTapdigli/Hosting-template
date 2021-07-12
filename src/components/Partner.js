import React from 'react';
import partnerimg from '../img/bluehost.png'
import styled from 'styled-components';

const Partner = ({item}) =>{
    console.log(item)
    return(
        <Partnerwrapper>
            <PartnerImg>
                <img src = {partnerimg}/>
                <span> * * * * *</span>
            </PartnerImg>
            <PartnerContent>
                <h1>{item.partnerName}</h1>
                <p>{item.bonus}</p>
                <PartnerWhatwelike>
                    {item.whatwelike.map((i)=>{
                        return(<li>{i.name}</li>)
                    })}
                    
                    
                </PartnerWhatwelike>
            </PartnerContent>
            <PartnerRating>
                <ScoreText><span>%</span>Exceptional</ScoreText>
                <ScoreValue><span>4.7/5</span> user rating</ScoreValue>
                <VisitButton>Visit Website</VisitButton>
                <ReadReview><a hred='#'>Read Review</a></ReadReview>
            </PartnerRating>
        </Partnerwrapper>
    )
}

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
    
`
const PartnerImg = styled.div `
    height: 38px;
    width: 211px;
    margin: 10px;
    img{
        width:100%;
        object-fit:cover;
    }
    span{
        margin-top: 55px;
        display: block;
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
        padding: 5px 0;
        font-size: 15px;
        font-weight: 900;

    }
`

const PartnerWhatwelike = styled.ul`
    color: #2B292D;
    li{
        padding: 2px 0;
        font-size: 14px;
        font-weight: 300;
    }
`
const PartnerRating = styled.div`
    width : 30%;
    text-align:center;
`
const ScoreText = styled.div`
    border-radius: 4px;
    background-color: #F4F4F4;
    width: 146px;
    text-align:center;
    margin:auto
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
}
`
const ReadReview = styled.div`
    padding:5px 0;
`
export default Partner