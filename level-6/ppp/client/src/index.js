import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import UserProvider from './context/UserProvider'
import IssueProvider from './context/IssueProvider'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <IssueProvider>
          <App />
        </IssueProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)