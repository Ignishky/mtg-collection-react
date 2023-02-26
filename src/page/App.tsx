import React from 'react'
import { Menu } from '../component/Menu'
import { Title } from '../component/Title'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Catalogue } from '../catalogue/page/Catalogue'
import { Collection } from '../collection/page/Collection'
import { CssVarsProvider, Sheet } from '@mui/joy'
import { SetDetail } from '../setDetail/page/SetDetail'

export const App = () => {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined" className="home">
        <Menu />
        <div className="body">
          <Title />
          <Routes>
            <Route path="/" element={<Catalogue />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/set/:setCode" element={<SetDetail />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </Sheet>
    </CssVarsProvider>
  )
}
