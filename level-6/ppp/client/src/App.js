import React, { useContext } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Auth from './components/Auth'
import Profile from './pages/Profile'
import SingleIssue from './pages/SingleIssue'
import ProtectedRoute from './components/ProtectedRoute'
import IssueForm from './pages/IssueForm'
import { UserContext } from './context/UserProvider'

export default function App() {
  const { token, logout } = useContext(UserContext)

  return(
    <div className='app'>
      {token && <Nav logout={logout} />}
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
            path="/new-issue"
            element={
              <ProtectedRoute token={token} redirectTo={"/"}>
                <IssueForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/single-issue/:singleIssueId"
            element={
              <ProtectedRoute
                token={token}
                redirectTo={"/"}
                path={"/single-issue"}
              >
                <SingleIssue />
              </ProtectedRoute>
            }
          />
        </Routes>
    </div>
  )
}