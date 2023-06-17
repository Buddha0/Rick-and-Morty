import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <nav>
             <img src = "/logo.png" className="logo"></img>
                <ul>

                    <li><NavLink to = "/" className = "link">Home</NavLink></li>
                    <li><NavLink to = "/location" className = "link">Location</NavLink></li>
                    <li><NavLink to = "/episodes" className = "link">Episode</NavLink></li>
               
                </ul>
            </nav>
        </>
    )
}