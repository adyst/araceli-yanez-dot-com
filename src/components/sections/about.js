import React from 'react'
import { Link } from 'gatsby'
 
const About = () => (
  <section id="about" class="section is-medium">
    <div class="container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
      <h1>
        Hi, I'm Araceli Yanez, a technical generalist transitioning into web development.
        I use any language and any tool to get the job done.
      </h1>
      <h2><Link to="/about">About ></Link></h2>
    </div>
  </section>
)

export default About