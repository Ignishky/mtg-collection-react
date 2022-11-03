import React, { Component } from 'react'
import Menu from '../component/menu'
import { Title } from '../component/title'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Sets } from "./Sets"
import { Collection } from "./Collection"

class App extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <div className="body">
          <Title />
          <Routes>
            <Route path="/" element={<Sets />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App
