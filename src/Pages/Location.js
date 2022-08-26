import React from 'react'
import styled from 'styled-components'
import img from '../images/Amaka.jpg'
import img2 from '../images/Ruth.jpg'
import img3 from '../images/Kunle.jpg'
import img4 from '../images/Obi.jpg'

const Location = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <Heading>Reviews</Heading>
       <Cards>
       <Card>
            
            <Detail>
            Do yourself a favor and visit this lovely restaurant. The service is unmatched. 
            The staff truly cares about your experience. 
            The food is 
            amazing – everything we tasted melted in other mouths.
            The best meal.
            </Detail>
           <De> <Image>
              <img src={img} />
            </Image>
            <Person>Amaka from Ikoyi</Person></De>
          </Card>
          <Card>
            
            <Detail>
            This cozy restaurant has left the best impressions! Hospitable hosts,
             delicious dishes, beautiful presentation,
             wide wine list and wonderful dessert. I recommend to everyone!
              I would like to come back here again and again.
            </Detail>
            <De><Image>
              <img src={img2} />
            </Image>
            <Person>Ruth from Gbagada</Person></De>
          </Card>
          <Card>
            
            <Detail>
            Excellent food. Menu is extensive and seasonal to a particularly high standard. 
            Definitely fine dining. It can be expensive but worth it 
            and they do different deals on different nights so it’s 
            worth checking them out before you book.
            </Detail>
            <De><Image>
              <img src={img3} />
            </Image>
            <Person>Obi from Ikorodu</Person></De>
            
          </Card>
          <Card>
            
            <Detail>
            We are so fortunate to have this place just a few minutes drive away from home.
             Food is stunning, 
            both the tapas and downstairs restaurant. 
            Cocktails wow, wine great and lovely selection of beers. 
            Love this place and will visit again.
            </Detail>
            <De><Image>
              <img src={img4} />
            </Image>
            <Person>Kunle from Oshodi</Person></De>
            
            
          </Card>
       </Cards>
      </Wrapper>
    </Container>
    </>
  )
}

export default Location
const Container = styled.div`
  width: 100%;
  height: 60vh;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

`
const Heading = styled.div`
  color: green;
    margin-top:30px;
    font-size:36px;
    text-align:center;
    position:relative;
   ::after{
    content:'';
    position:absolute;
    height:3px;
    width:12%;
    background-color:grey;
    left: 597px;
    bottom:0px;
   }
`
const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px;
`
const Card = styled.div`
  width: 250px;
  height:100px;
  display: flex;
  flex-direction:column;
`

const Detail= styled.div``
const De= styled.div`
  display: flex;
  margin-top: 10px;
`
const Image= styled.div`
  width: 50px;
  height:50px;
  img{
  width: 50px;
  height:50px;
  border-radius: 50%;
  border: 3px solid green;
  }
`
const Person = styled.div`
  margin-left: 9px;
  align-items:center;
  justify-content: center;
  margin-top:10px;
`
