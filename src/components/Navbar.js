import { Link } from 'react-router-dom'
import './Navbar.css'
import React from 'react'

export default function Navbar({user}) {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            {user === null && 
              <Link to="/login">Login</Link>
            }
            {user && 
              <Link to="/logout">Logout</Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}
