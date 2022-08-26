import React from 'react'
import styled from 'styled-components'
import img from '../images/nkwoobi.png'


const Hero = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Home>
            
                <Heading>
                People Who Love To Eat Are Always The Best People.
                     <Order>Order Now</Order>
                     </Heading>                 
                 <Image src={img} />
            </Home>
        </Wrapper>
    </Container>
    </>
  )
}

export default Hero
const Container = styled.div`
  width: 100%;
  height: 70vh;

`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

`
const Home = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
    margin-top:-50px;
`
const Heading = styled.div`
    font-size:46px;
    margin-left: 120px;
    margin-top: 160px;
    width: 450px;
    font-weight:600;
    /* display:flex;
    flex-direction: column; */
    color:black;
    padding:10px;
    

`
const Order = styled.div`
    background-color:green;
    color: white;
    border-radius:4px;
    width:110px;
    padding:5px 10px;
    font-size: 20px;
    cursor: pointer;
    margin-top:10px;
`
const Image = styled.img`
        height:60vh;
        width: 70vh;
        margin-right:10px;
        margin-top:100px;
        
`