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
                <h1>Bluehost</h1>
                <p>BlueHostExtremely fast & reliable hosting with plenty of advanced security add-ons</p>
                <PartnerWhatwelike>
                    <li>Powers 2M+ websites worldwide</li>
                    <li>Automatic WordPress installation</li>
                    <li>Free domain & website migration</li>
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
    align-items:center;
    flex:0.8
`
const PartnerImg = styled.div `
    width : 150px;
    img{
        width:100%;
    }

`
const PartnerContent = styled.div`
`

const PartnerWhatwelike = styled.ul`
`
const PartnerRating = styled.div``
const ScoreText = styled.div``
const ScoreValue = styled.div``
const VisitButton = styled.button``
const ReadReview = styled.div``
export default Partner