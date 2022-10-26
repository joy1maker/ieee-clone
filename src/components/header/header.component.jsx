import React from "react";
import "./header.styles.css"
import logo from "../../assets/logo.png"
const Header = () => {

    return (
        <React.Fragment >
            <header className="header-container">
                <div className="header-content">
                    <div>
                        <h1>Hi friend!</h1>
                        <span>Come see how our journey is going, and maybe be a part of it?</span>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt={logo} />
                    </div>
                </div>
            </header>
        </React.Fragment>


    )
}
export default Header;