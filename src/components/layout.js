import React from "react"
import 'bulma'

import Navigation from "./navigation"
import Footer from "./footer"



const Layout = ({ isHome, children }) => (
  <div className="layout">
    {isHome
      ? <header id="main-nav" data-aos="fade-down" data-aos-anchor="#home" data-aos-anchor-placement="bottom-center">
          <Navigation />
        </header>
      : <header id="main-nav"><Navigation /></header>
    }
    <div className="layout-content">
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout