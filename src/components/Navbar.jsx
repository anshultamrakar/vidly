import React from 'react';

const Navbar = ({totalLength}) => {
    return (
            <nav className ="navbar navbar-expand-lg navbar-light bg-light">
             <a className ="navbar-brand" href="#"> <h2> Navbar {totalLength}</h2>
            </a>
        </nav>
    );
}

export default Navbar;