import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div>
        Edit <code>src/App.js</code> and save to reload.
      </div> */}
      <div className="container">
        <div className="row">
          <Services />
        </div>
      </div>
    </div>
  )
}

export default App
