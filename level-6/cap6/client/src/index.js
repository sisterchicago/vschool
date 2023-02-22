import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import PostContext from './context/PostContext'
import AuthContextProvider from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PostContext>
          <App />
        </PostContext>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)