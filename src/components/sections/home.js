import React from 'react'
import * as THREE from "three"

class Home extends React.Component {
  
  render() {
    return (
      <section id="home" className="hero is-success is-primary is-fullheight" 
        data-aos="custom-fade-out"
        data-aos-anchor="#about"
        data-aos-anchor-placement="top-center">
        <div className="hero-body">
          <div className="container">
            <h1>
              Araceli Yanez
            </h1>
            <h2>
              Technical Generalist <span class="slash">/</span> Web Developer
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Home