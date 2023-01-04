import React, { useContext } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Public from './components/Public'
import Auth from './components/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider'


export default function App() {
  const { token, logout } = useContext(UserContext)

  return (
    <div className="App">
      {token && <Nav logout={logout}/>}
        <Routes>
          <Route
            path="/"
            element={ token ? <Navigate to="/profile" /> : <Auth /> }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute token={token} redirectTo={"/"}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/public"
            element={
              <ProtectedRoute token={token} redirectTo={"/"}>
                <Public />
              </ProtectedRoute>
            }
        />
      </Routes>
    </div>
  )
}