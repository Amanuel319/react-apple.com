import { useState } from 'react'
import Section from './Components/Section/Section'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4' 
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Section5 from './Components/Section5/Section5'
import Section6 from './Components/Section6/Section6' 

// import 'https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,600,600i,700,700i,800,800i,900,900i&display=swap'
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css'

import 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'
import  './js/bootstrap.js'
import './Css/bootstrap.css'
import './Css/Styles.css'
function App() {
 

  return (
    <>
      <Header />
      <Section6/>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      
      <Footer />
    </>
  )
}

export default App
