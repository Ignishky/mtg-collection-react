import React from 'react'
import { Menu } from '../component/Menu'
import { Title } from '../component/Title'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Catalogue } from '../catalogue/page/Catalogue'
import { Collection } from '../collection/page/Collection'

export const App = () => {
  return (
    <div className="home">
      <Menu />
      <div className="body">
        <Title />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  )
}
