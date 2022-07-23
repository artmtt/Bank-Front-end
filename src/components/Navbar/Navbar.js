import './Navbar.css';
import {Link} from 'react-router-dom';
import bank_logo from '../../assets/banorte_logo.png';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-light navbar-light nav-root">
            <div className="container-fluid">
                {/*<h1 className="navbar-brand user-select-none nav-logo"><Link to="/" className="nav-logo-a">Banorte</Link></h1>*/}
                <Link to="/" className="navbar-brand"><img src={bank_logo} alt="Banorte Logo" className="bank-logo-img" /></Link>
                <Link to="/" className="user-link text-dark" title="Mi Cuenta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" fill="#343a40" className="bi bi-person user-picture" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    <span className="user-welcome">Buen día, <span className="user-name">John Doe</span></span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;