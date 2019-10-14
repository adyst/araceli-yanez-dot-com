import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer class="footer">
    <div class="columns">
      <div class="column is-narrow">
        <nav class="level">
          <div class="level-item has-text-centered">
            <a href="mailto:araceli.x.yanez@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/></a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://github.com/adyst/"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://www.linkedin.com/in/araceliyanez/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          </div>
        </nav>
      </div>
      <div class="column">
        <div class="copyright">© 2019 Araceli Yanez</div>
      </div>
    </div>
  </footer>
)

export default Footer