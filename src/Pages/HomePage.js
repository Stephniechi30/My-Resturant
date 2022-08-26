import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Packages from './Packages'
// import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Location from './Location'

const HomePage = () => {
  return (
    <>
    <Container>
    {/* <Navbar/> */}
        <Hero/>
        <Packages/>
        <Location/>
        
    </Container>
    </>
  )
}

export default HomePage
const Container = styled.div`
  width: 100%;
  height: 100%;
`