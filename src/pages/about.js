import React from "react"
import { Link } from 'gatsby'
import Footer from  '../component/footer'
import Header from  '../component/header'

const aboutpage = () => {
  return (
    <div>
      <Header />
      <h1>hi, testing</h1>
      <h2>need a developer?<Link to="/contact">Contact me</Link></h2>
      <Footer />

    </div>
  )
}

export default aboutpage