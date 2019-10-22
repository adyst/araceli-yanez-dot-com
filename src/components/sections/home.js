import React from 'react'

import Galaxy from '../galaxy'

const Home = () => (
  <section id="home" className="hero is-fullheight" 
    data-aos="custom-fade-out"
    data-aos-anchor="#about"
    data-aos-anchor-placement="top-center">
    <Galaxy />
    <div className="hero-body">
      <div className="container">
        <h1>
          Araceli Yanez
        </h1>
        <h3>
          Technical Generalist <span className="slash">/</span> Web Developer
        </h3>
      </div>
    </div>
  </section>
)

export default Home