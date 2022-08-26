import React from 'react'
import styled from 'styled-components'
import img from '../images/bitterleaf.jpg'
import img2 from '../images/jollof rice.jpg'
import img3 from '../images/Fried rice.jpg'
import img4 from '../images/okro-soup.jpg'
import img5 from '../images/Edikanikongsoup.jpg'
import img6 from '../images/white rice.jpg'
import img7 from '../images/her.jpg'
import img8 from '../images/egusi.jpg'

const Packages = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Service>Menu</Service> 
            <Cards>
            <Card>
                <CardImg>
                    <img src={img}/>
                </CardImg>
                <CardText>Bitterleaf <span>#2000</span>
                <Order>+ Order</Order>
                </CardText>
                
            </Card>
           <Card>
                <CardImg>
                    <img src={img2}/>
                </CardImg>
                <CardText>Jollof Rice <span>#2500</span>
                <Order>+ Order</Order>
                </CardText>
            </Card>
            <Card>
                <CardImg>
                    <img src={img3}/>
                </CardImg>
                <CardText>Fried Rice <span>#2500</span> 
                <Order>+ Order</Order>
                </CardText>
            </Card>
            <Card>
                <CardImg>
                    <img src={img4}/>
                </CardImg>
                <CardText>Okro Soup <span>#2000</span>
                <Order>+ Order</Order>
                </CardText>
            </Card>
            </Cards>
            <Cards>
            <Card>
                <CardImg>
                    <img src={img5}/>
                </CardImg>
                <CardText>Bitterleaf <span>#2000</span>
                <Order>+ Order</Order>
                </CardText>
                
            </Card>
           <Card>
                <CardImg>
                    <img src={img6}/>
                </CardImg>
                <CardText>Jollof Rice <span>#2500</span>
                <Order>+ Order</Order>
                </CardText>
            </Card>
            <Card>
                <CardImg>
                    <img src={img7}/>
                </CardImg>
                <CardText>Fried Rice <span>#2500</span> 
                <Order>+ Order</Order>
                </CardText>
            </Card>
            <Card>
                <CardImg>
                    <img src={img8}/>
                </CardImg>
                <CardText>Okro Soup <span>#2000</span>
                <Order>+ Order</Order>
                </CardText>
            </Card>
            </Cards>
            
        </Wrapper>
    </Container>
    </>
  )
}

export default Packages
const Container = styled.div`
    width: 100%;
    height: 120vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Service = styled.div`
    color: green;
    margin-top:30px;
    font-size:36px;
    text-align:center;
    position:relative;
   ::after{
    content:'';
    position:absolute;
    height:3px;
    width:10%;
    background-color:grey;
    left: 610px;
    bottom:-4px;

   }

`
const Cards= styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-top: 30px;
`
const Card = styled.div`

  width: 250px !important;
  margin: 10px !important;
  border-radius: 15px;
  :hover{
    cursor: pointer;
    
  }
`
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  object-fit: contain;
  img{
    width: 100%;
    height: 100%;
  }
`
const CardText = styled.div`
  height: 75px;
  /* background-color: #ffc529; */
  color: black;
  margin-top:5px;
  border-radius:5px;
  span{
    margin-left:110px;
    color:grey;
    font-size:15px;
  }
  
`
const Order = styled.div`
    border: 2px solid green;
    color: green;
    border-radius:7px;
    width:90px;
    padding:3px;
    font-size: 18px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-top:5px;
    :hover{
        background-color:green;
        color:white;
    }
`
// const Show = styled.div`
//     border: 2px solid green;
//     background-color:green;
//     color: black;
//     border-radius:7px;
//     width:110px;
//     padding:3px 10px;
//     font-size: 18px;
//     cursor: pointer;
//     justify-content: center;
//     align-items: center;
//     margin-top:5px;
//     :hover{
//         background-color:green;
//     }
// `
