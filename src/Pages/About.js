import React from 'react'
import styled from 'styled-components'
import Footer from '../Pages/Footer'
import img from '../images/locate.jpg'

const About = () => {
  return (
    <>
     <Container>
        <Wrapper>
            <Head>Our Story</Head>
           <Body>
           <Image src = {img}/>
            <Paragraph>

Organizers, Chinenye and Nonso, opened their first ‘’ Restaurant in Lagos,Nigeria on September 27,2022. 

CHINONU’s Restaurants are well known with a substantial gathering of people including families, kids, seniors, and business experts. 
Our benevolent condition is perfect for praising unique events, facilitating a business lunch, 
or assembling for a flavorful dinner with loved ones.
Open day by day for lunch and dinner,’ Company Name’ offers a choice of naturally arranged things utilizing just the best fixings accessible.
Top picks incorporate Certified Angus Beef®, crisp fish, rotisserie chicken, infant back pork ribs.


</Paragraph>
                 
                 
           </Body>
        </Wrapper>
        <Footer />
    </Container> 
    </>
  )
}

export default About
const Container = styled.div`
  width: 100%;
  height: 110vh;
  text-align: center;
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin:auto;
`
const Head = styled.div`
    text-align: center;
    font-size:36px;
    font-weight:600;
    margin-top:15px;
    padding-top:20px;
    color:green;
    position:relative;
   ::after{
    content:'';
    position:absolute;
    height:3px;
    width:15%;
    background-color:grey;
    left: 460px;
    bottom:0;

   }
`
const Body = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content:space-between;
`
const Image = styled.img`
  width: 50%;
  height:50vh;
  margin-top:20px;
`
const Paragraph = styled.div`
    font-size:16px;
    width: 100%;
    display: flex;
    line-height:30px;
    margin-top:30px;
    padding:10px;
    margin-left: 15px;
`
