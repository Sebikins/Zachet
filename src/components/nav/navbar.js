import "./style.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {


    const activelink = "nav-list__link nav-list__link--active"
    const normallink = "nav-list__link"

    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                <strong>portfolio</strong>
                </NavLink>
                


                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) =>{
                            return isActive ? activelink : normallink;
                        }} >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/projects" className={({isActive}) =>{
                            return isActive ? activelink : normallink;
                        }}>
                            Projects
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive}) =>{
                            return isActive ? activelink : normallink;
                        }}>
                        Contacts
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/Weather" className={({isActive}) =>{
                            return isActive ? activelink : normallink;
                        }}>
                        Weather
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    );

}
export default Navbar ;