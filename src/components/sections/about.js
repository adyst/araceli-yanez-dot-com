import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
const About = () => (
  <section id="about" className="hero is-fullheight">
    <div className="hero-body">
      <div className="container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
        <h2>
          Hi, I'm Araceli Yanez, a technical generalist transitioning into web development.
          I use any language and any tool to get the job done.
        </h2>
        <div className="level is-mobile">
          <div className="level-item has-text-centered">
            <a className="icon" href="mailto:araceli.x.yanez@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} size="3x"/></a>
          </div>
          <div className="level-item has-text-centered">
            <a className="icon" href="https://github.com/adyst/"><FontAwesomeIcon icon={faGithubSquare} size="3x"/></a>
          </div>
          <div className="level-item has-text-centered">
            <a className="icon" href="https://www.linkedin.com/in/araceliyanez/"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About