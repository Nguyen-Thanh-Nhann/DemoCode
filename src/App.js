import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'

 function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/order" element={<OrderPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App