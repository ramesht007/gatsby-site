import React from 'react'
import { Link } from 'gatsby'
import Footer from  '../component/footer'
import Header from  '../component/header'

const Indexpage = () => {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      <h2>Need me<Link to="/contact">Contact me</Link></h2>
      <Footer />

    </div>
  )
}

export default Indexpage