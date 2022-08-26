import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <div>CHINONU</div>
          </Logo>
          <Navigation>
            <NavWrap>
              <Home to="/">Home</Home>
              <Subscribe to="/about">About</Subscribe>
              <Reviews to="/menu">Menu</Reviews>
              <FAQ to="/">Reviews</FAQ>
            </NavWrap>
            <Contact to='/menu'>Order Now</Contact>
          </Navigation>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 5px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  margin-left: 100px;
  display: flex;
  width: 350px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 36px;
  
`;
const Navigation = styled.div`
  width: 670px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
`;
const NavWrap = styled.div`
  display: flex;
  width: 380px;
  justify-content: space-between;
  color: green;
`;
const Home = styled(NavLink)`
  font-size: 15px;
  cursor: pointer;
  position: relative;
  color: inherit;
  text-decoration: none;
  ::before {
    content: " ";
    position: absolute;
    bottom: -1px;
    left: 0px;
    height: 2px;
    width: 100%;
    background-color: grey;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform all 750ms;
    display: none;
  }
  :hover {
    text-decoration: none;
    ::before {
      display: block;
    }
  }
`;

const Subscribe = styled(Home)``;
const Reviews = styled(Home)``;
const FAQ = styled(Home)``;

const Contact = styled(NavLink)`
  width: 110px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  cursor: pointer;
  border:1px solid green;
  padding:5px 10px;
  text-decoration:none;
  font-size:20px;
  :hover{
    background-color: green;
    color: white;
  }
`;
