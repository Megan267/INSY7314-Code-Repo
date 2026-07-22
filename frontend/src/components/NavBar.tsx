import React from "react"
import { NavLink} from "react-router-dom"

export const NavBar : React.FC = ()  => {
    return (
        /* the <nav> container holds all the navigation objects for our navbar */
        <nav className = "navbar">
            {/* a <div> ia just a container that holds multiple objects */}
            <div className="nav-brand">
                 <span>
                    Public Library App Thing
                 </span>
            </div>

            <div className="nav-links">
                {/* the styling for the navLinks is conditional, the style will change basd on which links is active*/}
                <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link-active" : "nav-link")}>
                    Book Management Page
                </NavLink>
                <NavLink to="/health" className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link-active" : "nav-link")}>
                    Backend Status
                </NavLink>
            </div>
        </nav>
    )
};