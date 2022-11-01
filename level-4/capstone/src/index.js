import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import { QuotesContextProvider } from './context/QuotesContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QuotesContextProvider>
      <App />
    </QuotesContextProvider>
  </React.StrictMode>
)