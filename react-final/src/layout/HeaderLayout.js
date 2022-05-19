import React from "react";
import { Link } from "react-router-dom";

{/* <HeaderLayout title="dadsa"></HeaderLayout> */ }
export default class HeaderLayout extends React.Component {
    constructor() {
        super();

        this.state = {
            URL: "www.thbs.com",
            name: "test"
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home Page </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user">User Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list">List Page</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/hooks">Hoocks Page</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/reg">RegistrationPage</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/login">LoginPage</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
