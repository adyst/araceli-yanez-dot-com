/* eslint-disable */
import React from 'react'
import { Link } from "gatsby"

import { links } from "./data"

const Navigation = () => (
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Link className="navbar-item logo" to="/">Araceli Yanez</Link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        {links.map((link, index) => (
          <Link key={index} className="navbar-item" to={link.href}>{link.name}</Link>
        ))}
      </div>
    </div>
  </nav>
)

export default Navigation