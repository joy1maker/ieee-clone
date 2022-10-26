import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import "./navgation.styles.css"
const NavBar = () => {
    const [classname, setClassName] = useState("nav-top");




    const listenScrollEvent = (event) => {
        if (window.scrollY < 450) {
            return setClassName("nav-top")
        } else if (window.scrollY > 450) {
            return setClassName("nav-scroll")
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    // eslint-disable-next-line     
    const taps = ["home", "about", "events", "more", "join us", "contact us"]
    return (
        <nav className={classname}>
            <img src={logo} alt={"IEEE-logo"} className={"logo"} />
        </nav>
    )
}

export default NavBar