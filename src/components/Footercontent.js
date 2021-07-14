import React from 'react';
import styled from 'styled-components';


const Footercontent = () =>{
    
    return(
        <Container>
            <Footertext>
               <h1>What are Website Hosting Services and Which is Right for You?</h1>
               <p>Website hosting services are basically the plot of internet land that your website storefront sits on. If you have a website, it needs to be on the web, and these hosting services are the landlords that put up your site and keep it running so your customers can access and see it when they type in your URL.</p>
               <p>There are different types of hosting services that cater to the varying types of businesses. Some web hosting companies will build your entire website, while others will just give you the plot of land and the shovel and leave you to it. Depending on your business model and size, you&rsquo;ll choose a hosting company based on the factors explained below. Once you understand the terminology, you can weigh features and select the service that works best for your company&rsquo;s needs.</p>
               <h2>How to Choose the Best Web Hosting Company?</h2>
               <p>- Without the best web hosting, your ability to run a successful website is going to be seriously hindered. There is a dizzying array of web hosting providers competing for your business. How can you pinpoint the best one? Start by keeping the following points in mind:</p>
               <p>- The first thing you need to do when shopping for a web host is to evaluate your disk space and bandwidth needs. If your site features lots of graphics, dozens of pages, and large amounts of traffic, you're going to need decent bandwidth and disk space. Unlimited plans are available, and they make life easier. If your site is going to be simple and not generate a huge amount of traffic, you should be able to get away with less disk space and bandwidth.</p>
               <p>- Keep compatibility in mind, too. In the excitement of looking for a website hosting provider, you might overlook one critical thing: the type of operating systems that are supported. You're not going to want to switch operating systems, so double-check this point before settling for a provider.</p>
               <p>- Reliability and availability are critical characteristics to consider when shopping around for web hosting. The best web hosting companies offer availability rates of 98 and 99 percent, frequently referred to as &ldquo;Uptime.&rdquo; It's easy to make such claims, though, so make sure to see if they make good on their promises.</p>
               <p>- Security is also an essential concern. Choosing a web hosting provider without learning about its available security features is a big mistake. Things like firewalls, daily backups, and user authentication should all be included. It's also nice to receive notifications whenever changes are made because they can alert you to suspicious activity.</p>
               <p>Take a look at how we choose the best web hosting sites in the industry in order to make a better decision about which is right for you.</p>
            </Footertext>
        </Container>
        
    )
}
const Container = styled.div `
    max-width:1200px;
    margin:auto;
    padding: 0 20px;
`
const Footertext = styled.div`
    color: #2B292D;
    padding-top:50px;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 2.5;
    margin-bottom:85px;

`
export default Footercontent