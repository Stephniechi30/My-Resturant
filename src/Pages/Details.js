import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import data from "../Components/Menu.json";

const Details = () => {
  const{id}=useParams();
  const menu = data[id-1];
  return (
    <>
    <Container>
        <Title>
            {menu.name}
        </Title>
        <Card>
          <CardImg><img src={menu.image} alt= ''/></CardImg>
          <CardText>
            <Price>{menu.price}</Price>
          </CardText>
          <Button>Add to Cart</Button>
          
        </Card>
    </Container>
    </>
  )
}

export default Details
const Container = styled.div`
  width: 100%;
  height: 60px;
`;
const Card = styled.div`

  width: 250px !important;
  margin: auto;
  /* margin: 10px !important; */
  
`;
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  margin-top:15px;
  img{
    width: 100%;
    height: 100%;
  }
`;
const CardText = styled.div`
   height: 96px;
  color: black;
`;
const Title = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: bolder;
  font-weight: bold;
`;
const Price = styled.div`
  text-align: center;
 margin-top: 5px;

`
const Button = styled.div`
  background-color: crimson;
  height: 35px;
  width: 150px;
  text-align: center;
  border-radius:10px;
  justify-content:center;
  margin-left: 50px;
  padding-top:5px;
  margin-top: -40px;
`