import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductCreate from './pages/ProductCreate'
import { ToastContainer } from 'react-toastify'
import ProductUpdate from './pages/ProductUpdate'

const App = () => {
  return (
    <BrowserRouter>
      <div className='max-w-4xl mx-auto p-6'>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/create/' element={<ProductCreate />} />
          <Route path='/product/update/:id' element={<ProductUpdate />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App