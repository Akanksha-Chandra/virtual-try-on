import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <div className="logo">UrbanChic</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/UploadPage">Upload</Link>
                    </li>
                </ul>
            </nav>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
