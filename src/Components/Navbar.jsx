import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    {/* As a heading */}
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <span className="navbar-brand mb-0 h1">Custom Web Player</span>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;