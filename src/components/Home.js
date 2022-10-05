import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <div>
                <Link to="/about">Click here to view our about page</Link>
            </div>
            <div>
                <Link to="/contact">Click here to view our contact page</Link>
            </div>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </div>
    )
}

export default Home