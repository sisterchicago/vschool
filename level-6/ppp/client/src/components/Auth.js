import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'

const initInputs = { username: "", password: "" }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const { signup, login, resetAuthErr, errMsg } = useContext(UserContext)

    function handleAuthDisplay(value) {
        setShowModal(prev => !prev)
        if(value === 'login') {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target 
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return(
        <div className='auth'>
            <div className='auth-intro'>
                <h1>Parent Plan Protector</h1>
                <h3>We value your parent time</h3>
                <button onClick={() => handleAuthDisplay('login')}>Login</button>
                <button onClick={() => handleAuthDisplay('signup')}>Sign Up</button>
            </div>
            { showModal &&
                <>
            { !toggle ?
                <div className='auth-popup'>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText='Sign Up'
                        errMsg={errMsg}
                        setShowModal={setShowModal}
                    />
                    <p onClick={toggleForm} className='auth-toggle'>Already a Member?</p>
                </div>
            :
                <div className='auth-popup'>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText='Login'
                        errMsg={errMsg}
                        setShowModal={setShowModal}
                    />
                    <p onClick={toggleForm} className='auth-toggle'>Not a Member?</p>
                </div>
            }    
            </>}
        </div>
    )
}