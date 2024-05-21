import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './MyRouter.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>,
)
