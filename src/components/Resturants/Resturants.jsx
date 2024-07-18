import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Body from './Body/Body'
import data from './data'
function Resturants() {
    // console.log("restauranet",data);
  return (
    <>
    <Nav/>
    <Body Alldata={data}/>
    <Footer/>
    </>
  )
}

export default Resturants