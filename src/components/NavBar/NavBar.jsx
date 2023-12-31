import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css"
import Logo from "../../assets/images/logo.png"

const NavBar = () => {
    return (
        <header>
            <nav>
                <section className="brand">
                    <NavLink to="/" className="brand">
                        <img className="brand-logo" src={Logo} alt="logo" />
                        <span className="brand-name">RoboCloth</span>
                    </NavLink>
                    
                </section>
                <section className="pages">
                    <NavLink to="/category/remera">Remeras</NavLink>
                    <NavLink to="/category/campera">Camperas</NavLink>
                    <NavLink to="/category/jogger">Joggers</NavLink>
                    <NavLink to="/category/zapatillas">Zapatillas</NavLink>
                </section>
                <section className="cart">
                    <CartWidget/>
                </section>
            </nav>
        </header>
    );
}

export default NavBar;