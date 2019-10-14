import React from "react"
import 'bulma'

import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => (
  <div class="layout">
    <Header />
    <div class="layout-content">
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout