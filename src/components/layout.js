import React from "react"
import 'bulma'

import Navigation from "./navigation"
import Footer from "./footer"



const Layout = ({ isHome, children }) => (
  <div class="layout">
    {isHome
      ? <header data-aos="fade-down" data-aos-anchor="#home" data-aos-anchor-placement="bottom-center">
          <Navigation />
        </header>
      : <header><Navigation /></header>
    }
    <div class="layout-content">
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout