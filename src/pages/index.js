import * as React from "react"
import Api from "../components/Api/Index"
import Header from "../components/Header/Index"
import Footer from "../components/Footer/Index"
import "./reset.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css"

const IndexPage = () => {



  return (
    <div>
    
      <Header />
      <Api />
      <Footer />



    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
