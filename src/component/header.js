import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Ramesht's site</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/about'>about me</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header