import { NavLink } from "react-router-dom";
import dxlogo from "../assets/dxlogo.png";
import togle from "../assets/togle.png";
import "../style/Nav.css";
export default function Nav() {
  return (
    <div>
      <div className="header">
        <div className="container cus_container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {/* <!-- logo img --> */}
                <a className="navbar-brand" to="#">
                  <img className="logo img-fluid" src={dxlogo} />
                </a>
                {/* <!-- toggle btn --> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#nav_cus"
                  aria-controls="nav_cus"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    src={togle}
                    alt="Toggle navigation"
                    className="img-fluid custom-toggler-icon"
                  />
                </button>
                {/* <!-- nav item --> */}
                <div className="collapse navbar-collapse navb" id="nav_cus">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Project">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/About">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="./about.html">
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="./about.html">
                        Careers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Blog">
                        Blogs
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
