import {
  faBars,
  faGlobeEurope,
  faSearch,
  faTimes,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const hideOverlay = () => setClick(false);

  useEffect(() => {
    window.addEventListener("scroll", hideOverlay);

    return () => {
      window.removeEventListener("scroll", hideOverlay);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={click ? styles.overlay : ""}
        onClick={() => hideOverlay()}
      ></div>
      <nav className={styles.navbar} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navContainer}>
          <NavLink to="/" className={styles.navLogo}>
            Logo
          </NavLink>
          <ul
            className={
              click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
            }
          >
            <li className={styles.navItem}>
              <NavLink
                to="/search"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                <FontAwesomeIcon className={styles.icon} icon={faSearch} />
              </NavLink>
            </li>
            <li className={styles.verticalLine}></li>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/trading"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                Trading
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/markets"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                Markets
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/faq"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                FAQ
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                About us
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/language"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                <FontAwesomeIcon className={styles.icon} icon={faGlobeEurope} />
              </NavLink>
            </li>
            <li className={styles.verticalLine}></li>
            <li className={styles.navItem}>
              <NavLink
                to="/login"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                Login
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/register"
                className={styles.navLinks}
                onClick={click ? handleClick : undefined}
              >
                <FontAwesomeIcon className={styles.icon} icon={faUserPlus} />
                Sign up
              </NavLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
