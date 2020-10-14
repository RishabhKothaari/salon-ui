import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ChooseServiceSlot from './components/ChooseServiceSlot'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <div>
        Edit <code>src/App.js</code> and save to reload.
      </div> */}
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/bookservice/:id/:name/">
                <ChooseServiceSlot />
              </Route>
              <Route path="/">
                <Services />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
