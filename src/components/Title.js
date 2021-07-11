import React from 'react'
import styled from 'styled-components'

const Title = () => {
    return (
        <Container>
            <Currentime><span>&</span>Last Updated 7 Jul, 2021</Currentime>
            <TitleHeader>Top 10 Web Hosting Services</TitleHeader>
            <TtileContent>Keep your website up and running with a hosting company that promise high uptime,
                 quick load times,and simple setup</TtileContent>
            <CheckButton>Check</CheckButton>
        </Container>
    )
}
const Container = styled.div``
const Currentime = styled.div``
const TitleHeader = styled.h1``
const TtileContent = styled.p``
const CheckButton = styled.button``

export default Title
