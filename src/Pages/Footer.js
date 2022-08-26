import React from 'react'
import styled from 'styled-components'
import img from '../images/insta.png'
import img2 from '../images/facebook.png'
import img3 from '../images/linked.png'
import img4 from '../images/twitter.png'
import img5 from '../images/whatsapp.jpg'


const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
        
                    <Come>
                      Contact
                    </Come>
                    <Footter>
                    <Address>
                      Address:<br/>
                        Sam Ethnan Airforce Base <br></br>
                        Ikeja Lagos,<br></br>
                        Nigeria
                    </Address>
                    <Days>
                      Days:<br/>
                        Monday - Friday 07AM - 10PM <br></br>
                        Saturday 09AM - 10PM <br></br>
                        Sunday 08AM - 11PM<br/>
                        Delivery: Mon-Sun 9AM-10PM
                    </Days>
                    <Tel>
                        Tel: +2348065789043<br/>
                        +2347890543235
                    </Tel>
                    <Email>
                        Email: info@mysite.com<br/>
                        chinonou@gmail.com
                    </Email>
                    <Social>
                       <Image>
                        Social Media:
                       <img src={img} alt=''/>
                        <img src={img2} alt=''/>
                        <img src={img3} alt=''/>
                        <img src={img4} alt=''/>
                        <img src={img5} alt=''/>
                       </Image>
                       <News>
                        Subscribe to our newsletter:
                        <input placeholder='email'/>
                       </News>
                    </Social>
                </Footter>
                <Copy>
                  Copyright @ CHINOONU 2022
                </Copy>
        </Wrapper>
      </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #2d303e;
    margin-top: 30px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Footter = styled.div`
    background-color:#2d303e;
    margin-top: 20px;
    color: white;
    display: flex;
`
const Come = styled.div`
    padding-top: 50px;
    font-size: 30px;
    font-weight: 400;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Address = styled.div`
    margin-top: 30px;
    margin-left: 70px;
    line-height: 20px;
`
const Days = styled.div`
    margin-top: 30px;
    margin-left: 70px;
    line-height:30px;
`
const Tel = styled.div`
    margin-top: 30px;
    margin-left: 70px;
    line-height: 30px;
`
const Email = styled.div`
    margin-top: 40px;
    margin-left:60px;
    line-height: 20px;
`
const Social = styled.div`
    margin-top: 30px;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
`
const Image= styled.div`
    img{
      height: 30px;
      width: 30px;
      margin-top: 15px;
    }
`
const News = styled.div`
  margin-top: 20px;
  input{
    height: 20px;
    margin-top: 10px;
    border-radius:5px;
  }
`
const Copy = styled.div`
  text-align: center;
  color: grey;
  margin-top:30px;
`