import React, {useState} from 'react'
import styled from 'styled-components'
import data from '../Components/Menu.json'
import {Link} from 'react-router-dom'

const Menu = () => {
  const [search,setSearch] = useState ("");
  return (
    <>
    <Container>
      <Title>Menu</Title>
      <Input placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <div>
          {
                data
                .filter((el) => el.name.toLowerCase().includes(search))
                .map((props)=>(
                <Card key={props.id} to ={`/details/${props.id}`}>
                  <CardImg>
                    <img src={props.image} alt=''/>
                  </CardImg>
                  <CardText>
                    <span>
                    NAME: {props.name}
                    </span>
                    <div>
                    PRICE: {props.price}
                    </div>
                  </CardText>
                  <Add>Add to Cart</Add>
              </Card>
                ))
              }
        </div>
       
    </Container>
  </>

  )
}

export default Menu
const Container = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  margin-top:20px;
  div{
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: auto;
    justify-content: center;
  }
`
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 50px auto;
  color:green;
  position:relative;
   ::after{
    content:'';
    position:absolute;
    height:3px;
    width:7%;
    background-color:grey;
    left: 595px;
    bottom:0;

   }
`
const Input =styled.input `
height: 30px;
width: 230px;
margin-top:5px;
border-radius: 5px;
border: 1px solid red;
`;
const Card = styled.div`
 width: 250px !important;
  margin: 15px !important;
  border-radius: 5px;
  :hover{
    cursor: pointer;
    
  }
`
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const CardText = styled.div`
  height: 100px;
  background-color: white;
  color: black;
  border-radius: 10px;
   span{
    font-size:20px;
    font-weight: 500;
  }
  div{
    font-size: 18px;
    font-weight: 500;
    margin-top:-18px;
    margin-right:-45px;
  }
  
`
const Add = styled.div`
 background-color:red;
 color:white;
 width:100px;
 padding: 10px;
 border-radius: 4px;

`
