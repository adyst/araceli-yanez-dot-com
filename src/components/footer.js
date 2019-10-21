import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="footer">
    <div className="columns">
      <div className="column is-narrow">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <a href="mailto:araceli.x.yanez@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/></a>
          </div>
          <div className="level-item has-text-centered">
            <a href="https://github.com/adyst/"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
          </div>
          <div className="level-item has-text-centered">
            <a href="https://www.linkedin.com/in/araceliyanez/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          </div>
        </nav>
      </div>
      <div className="column copyright">
        © 2019 Araceli Yanez
      </div>
    </div>
  </footer>
)

export default Footer