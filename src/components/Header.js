import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link className="navbar-item" to="/">Logo</Link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/portfolio">Portfolio</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
