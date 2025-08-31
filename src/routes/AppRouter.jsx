import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from '../pages/Home'
import Layout from '../Layout'
import NotFound from '../pages/NotFound'
import Portfolio from '../pages/Portfolio'

const AppRouter = () => {
  const location = useLocation()
  return (
    <>
      <Layout>
        <Routes location={location}>  
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default AppRouter
