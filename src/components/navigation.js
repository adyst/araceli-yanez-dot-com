/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navigation = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item logo" to="/">Araceli Yanez</Link>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <a href="mailto:araceli.x.yanez@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/></a>
        </div>
        <div className="navbar-item">
          <a href="https://github.com/adyst/"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
        </div>
        <div className="navbar-item">
          <a href="https://www.linkedin.com/in/araceliyanez/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation