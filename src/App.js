import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/containers/Home'
import { About } from './components/containers/About'
import { Portfolio } from './components/containers/Portfolio'
import { Contact } from './components/containers/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
