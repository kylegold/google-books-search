import React from "react"
import "./style.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <header>
    <h1>Google Books</h1>
      <ul class="nav">
        <li>
        <Link to="/search">Search</Link>

        </li>
        <li>
        <Link to="/saved">Saved</Link>
        </li>
      </ul>
  </header>
  )
}

export default Nav